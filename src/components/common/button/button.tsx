import "./button.css";
import { TButtonProps } from "./typeDef";

/**
 *  This is a reusable Button Component for this app
 * @param {string} name - name of button
 * @param {function} onClickHandler - onclick handler for button
 * @param {boolean} isDisabled - disable property for button
 */

const Button = ({
  name,
  onClickHandler,
  isDisabled,
}: TButtonProps) => {
  return (
    <button onClick={onClickHandler} className="button" disabled={isDisabled} aria-label={name}>
      {name}
    </button>
  );
};

export default Button;
