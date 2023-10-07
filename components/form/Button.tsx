import { tmx } from "@lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const ButtonVariants = cva(
  "w-full flex items-center gap-3 px-4 py-3 rounded-md bg-card text-title font-medium active:ring-2 active:ring-offset-2 active:ring-offset-background disabled:opacity-90",
  {
    variants: {
      align: {
        left: "justify-start",
        center: "justify-center",
        right: "justify-end",
      },
      accent: {
        blue: "active:ring-status-blue",
        yellow: "active:ring-status-yellow",
        red: "active:ring-status-red",
        green: "active:ring-status-green",
      },
      outline: {
        true: "border active:ring-offset-[.5px]",
        false: "border-none",
      },
    },
    compoundVariants: [
      {
        outline: true,
        accent: "blue",
        className: "border-status-blue",
      },
      {
        outline: true,
        accent: "yellow",
        className: "border-status-yellow",
      },
      {
        outline: true,
        accent: "red",
        className: "border-status-red",
      },
      {
        outline: true,
        accent: "green",
        className: "border-status-green",
      },
    ],
    defaultVariants: {
      align: "center",
      accent: "blue",
      outline: false,
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {}

const Button: React.FC<ButtonProps> = ({
  align,
  outline,
  accent,
  className,
  color,
  ...props
}) => {
  return (
    <button
      className={tmx(ButtonVariants({ className, align, accent, outline }))}
      {...props}
    />
  );
};

export default Button;
