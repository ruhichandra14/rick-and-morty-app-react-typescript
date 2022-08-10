import { LOCATION, NAME, ORIGIN, SPECIES } from "../../constants/constants";
import { TCardProps } from "../../typedefs/typedef";
import CardItem from "../cardItem/cardItem";
import "./card.css";

/**
 *  This is a Card Component for each character
 *  images has been lazy loaded within this component,
 *  @param {cardData} - it consists of character properties
 */

const Card = ({ cardData }: TCardProps) => {
  const { name, image, status, species, origin, location } = cardData || {};

  return (
    <article className="character_card">
      <img loading="lazy" alt={name} src={image} className="character_photo" />
      <div className="character_contents">
        <div className="character_title">
          <strong>{name}</strong>
          <span className={`character_status status_${status}`}>{status}</span>
        </div>
        <CardItem name={NAME} value={name} />
        <CardItem name={SPECIES} value={species} />
        <CardItem name={ORIGIN} value={origin?.name} type={origin?.type} />
        <CardItem
          name={LOCATION}
          value={location?.name}
          type={location?.type}
        />
      </div>
    </article>
  );
};

export default Card;
