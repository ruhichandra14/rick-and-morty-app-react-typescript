import "./cardItem.css";
import { TCardItemProps } from "./typedef";

/**
 *  This is a Card Item Component to render attributes for a character
 *  @param {name} - character property name, e.g: species
 *  @param {value} - character property value, e.g: human
 *  @param {type} - character property type, e.g: human
 */

const CardItem = ({ name, value, type }: TCardItemProps) => {
  return (
    <div className="character_attributes">
      <span>{name} : </span>
      <span>{value}</span>
      {type && <span>{type}</span>}
    </div>
  );
};

export default CardItem;
