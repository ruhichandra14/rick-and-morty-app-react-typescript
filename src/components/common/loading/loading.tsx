import { LOADING } from "../../../constants/constants";
import "./loading.css";

/**
 *  This is a reusable Loading Component for this app
 *  It shows the Loading screen, until the test data loads
 */

const Loading  = () => {
    return (
      <div className="loading-screen">
        <span className="info">{LOADING}</span>
        <div className="loader"></div>
      </div>
    ) 
}

export default Loading;