import "./button.styles.scss";

const BUTTON_TYPES_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => (
  <button
    className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;
