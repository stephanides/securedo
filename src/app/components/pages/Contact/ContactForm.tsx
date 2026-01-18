"use client";

import { FormikProps, useFormik } from "formik";
import * as Yup from "yup";
import { PrimaryButton } from "../../shared/Button";
import { ArrowLink } from "../../shared";

const validationSchema = Yup.object({
  name: Yup.string().required("Vaše meno je povinné"),
  email: Yup.string().email("Neplatný email").required("Email je povinný"),
  message: Yup.string()
    .required("Správa je povinná")
    .min(5, "Správa musí mať aspoň 5 znakov"),
});

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="mt-18">
      <h3 className="text-4xl sm:text-5xl md:text-60 font-bold text-primary text-center">
        Nechajte nám správu
      </h3>
      <form
        onSubmit={formik.handleSubmit}
        className="max-w-4xl mx-auto space-y-8 mt-10"
        noValidate
      >
        {/* Inputs row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input name="name" placeholder="Vaše meno *" formik={formik} />

          <Input
            name="email"
            type="email"
            placeholder="Email *"
            formik={formik}
          />
        </div>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Správa"
          rows={6}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          className={`
          w-full
          rounded-3xl
          border
          px-6
          py-5
          mb-0
          text-lg
          outline-none
          resize-none
          transition
          ${
            formik.touched.message && formik.errors.message
              ? "border-red-400"
              : "border-slate-300 focus:border-cyan-400"
          }
        `}
        />
        <FieldError
          show={!!formik.touched.message && !!formik.errors.message}
          message={formik.errors.message}
        />

        {/* Submit */}
        <div className="flex justify-center">
          <PrimaryButton
            type="submit"
            className="mb-25 mt-8 uppercase cursor-pointer group"
            textClassName="mr-20"
            icon={
              <div className="w-[22px] group-hover:transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform">
                <ArrowLink />
              </div>
            }
          >
            Odoslať
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};

type FieldName = keyof FormValues;

function Input({
  name,
  type = "text",
  placeholder,
  formik,
}: {
  name: FieldName;
  type?: string;
  placeholder: string;
  formik: FormikProps<FormValues>;
}) {
  const hasError = formik.touched[name] && formik.errors[name];

  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        className={`
          w-full
          rounded-full
          border
          px-6
          py-4
          text-lg
          outline-none
          transition
          ${
            hasError
              ? "border-red-400"
              : "border-slate-300 focus:border-cyan-400"
          }
        `}
      />

      <FieldError
        show={!!formik.touched[name] && !!formik.errors[name]}
        message={formik.errors[name]}
      />
    </div>
  );
}

function FieldError({ show, message }: { show: boolean; message?: string }) {
  if (!show || !message) return null;

  return <p className="mt-2 text-sm text-red-500">{message}</p>;
}
