import React from "react";
import PropTypes from "prop-types";

// Definere gjenbrukbare typer for styling
type ButtonVariant = "primary" | "secondary" | "danger";

// Utility funksjon for conditional classes
const getButtonClasses = (variant: ButtonVariant): string => {
  const baseClasses = "px-4 py-2 rounded-md";
  const variantClasses = {
    primary: "bg-[#458588] text-[#ebdbb2] hover:bg-[#83a598]", // Gruvbox blue
    secondary: "bg-[#b16286] text-[#ebdbb2] hover:bg-[#d3869b]", // Gruvbox purple
    danger: "bg-[#cc241d] text-[#ebdbb2] hover:bg-[#fb4934]", // Gruvbox red
  };

  return `${baseClasses} ${variantClasses[variant]}`;
};

// Bruk i komponenter
const Button: React.FC<{
  variant: ButtonVariant;
  children: React.ReactNode;
}> = ({ variant, children }) => (
  <button className={getButtonClasses(variant)}>{children}</button>
);

// Add propTypes for validation
Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "danger"])
    .isRequired as PropTypes.Validator<ButtonVariant>,
  children: PropTypes.node.isRequired,
};

export default Button;
