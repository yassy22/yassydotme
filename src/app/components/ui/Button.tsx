import Link from "next/link";

export default function Button({
  children,
  href,
  onClick,
  className,
  type = "button",
  disabled,
  ...props
}: Readonly<{
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}>) {
  const baseClasses = `button border-solid border-[0.5px] border-white max-w-fit py-4  px-[85px] mt-8   ${className}`;

  if (href) {
    return (
      <Link href={href} passHref>
        <p className={baseClasses} {...props}>
          {children}
        </p>
      </Link>
    );
  }

  return (
    <button
      className={baseClasses}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
