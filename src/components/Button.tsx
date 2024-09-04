type ButtonProps = {
  label: string;
  variant:
    | "loginPrimary"
    | "loginSecondary"
    | "buttonLarge"
    | "buttonSmall"
    | "buttonLargeWithBold"
    | "buttonWithArrow";
  onClick: () => void;
  icon?: JSX.Element;
};

export default function Button({ variant, label, icon }: ButtonProps) {
  const baseStyles = "w-full text-center";
  const variantStyles = {
    loginPrimary: "bg-primary text-sm text-white py-2",
    loginSecondary: "bg-grayLightTwo text-sm text-black py-2",
    buttonLarge: "bg-primary px-6 py-3 text-lg",
    buttonSmall: "bg-primary px-3 py-1 text-sm",
    buttonLargeWithBold: "bg-primary px-6 py-3 font-bold text-lg",
    buttonWithArrow: "bg-primary px-3 py-1 text-sm",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`}>
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
}
