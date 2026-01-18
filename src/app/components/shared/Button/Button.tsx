import Link from "next/link";

export const PrimaryLink = ({
  href,
  children,
  icon,
  size = "small",
  className,
  textClassName,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  size?: "small" | "large";
  className?: string;
  textClassName?: string;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className={`bg-primary text-white font-medium flex items-center p-[5px] rounded-30 w-fit ${
      size === "large" ? "p-[10px]" : "p-[5px]"
    } ${className}`}
  >
    <span
      className={`px-6 font-semibold uppercase no-underline text-sm sm:text-base ${textClassName}`}
    >
      {children}
    </span>
    {icon && (
      <span className="ml-2 flex justify-center items-center bg-white p-[10px] rounded-full">
        {icon}
      </span>
    )}
  </Link>
);

export const SecondaryLink = ({
  href,
  children,
  icon,
  size = "small",
  className,
  textClassName,
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  size?: "small" | "large";
  className?: string;
  textClassName?: string;
}) => (
  <Link
    href={href}
    className={`bg-black text-white font-medium flex items-center p-[5px] rounded-30 w-fit ${
      size === "large" ? "p-[10px]" : "p-[5px]"
    } ${className}`}
  >
    <span
      className={`px-4 font-semibold uppercase no-underline ${textClassName}`}
    >
      {children}
    </span>
    {icon && (
      <span className="ml-2 flex justify-center items-center bg-white p-[10px] rounded-full">
        {icon}
      </span>
    )}
  </Link>
);

export const PrimaryButton = ({
  onClick,
  children,
  icon,
  size = "small",
  className,
  textClassName,
  ...rest
}: {
  onClick?: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
  size?: "small" | "large";
  className?: string;
  textClassName?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    onClick={onClick}
    className={`bg-primary text-white font-medium flex items-center p-[5px] rounded-30 w-fit ${
      size === "large" ? "p-[10px]" : "p-[5px]"
    } ${className}`}
    {...rest}
  >
    <span
      className={`px-6 font-semibold uppercase no-underline ${textClassName}`}
    >
      {children}
    </span>
    {icon && (
      <span className="ml-2 flex justify-center items-center bg-white p-[10px] rounded-full">
        {icon}
      </span>
    )}
  </button>
);
