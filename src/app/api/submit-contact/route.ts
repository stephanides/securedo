import { NextResponse } from "next/server";
import { render } from "@react-email/render";
import ContactEmail from "../../components/shared/email/ContactEmail";
import { transporter } from "@/app/api/config";

export type ContactFormValuesRequest = {
  name: string;
  email: string;
  message: string;
  recaptcha: string | null;
};

export async function POST(req: Request) {
  try {
    const contactData: ContactFormValuesRequest = await req.json();

    const recaptchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${contactData.recaptcha}`,
      }
    );

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return NextResponse.json(
        { message: "Invalid reCAPTCHA" },
        { status: 400 }
      );
    }

    const emailHTML = await render(
      ContactEmail({
        name: contactData.name,
        email: contactData.email,
        message: contactData.message,
      })
    );

    await sendEmailConfirmation(emailHTML);

    return NextResponse.json(
      { message: "Contact submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact:", error);

    return NextResponse.json(
      { message: "Failed to submit contact" },
      { status: 500 }
    );
  }
}

async function sendEmailConfirmation(emailHtml: string) {
  await transporter.sendMail({
    from: `"Securedo" <${process.env.EMAIL_LOGIN}>`,
    to: process.env.EMAIL_RECIPIENT,
    subject: "Máte nový kontakt",
    html: emailHtml,
  });
}
