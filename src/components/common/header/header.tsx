import "./header.css";
import { THeaderProps } from "./typeDef";

/**
 * This is a reusable Header Component for this app
 * @param {string} title - title of header
 */

const Header = ({ title }: THeaderProps) => {
  return <header className="header">{title}</header>;
};

export default Header;
