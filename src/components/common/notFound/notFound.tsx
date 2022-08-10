import { NOT_FOUND_CODE, NOT_FOUND_MESSAGE } from "../../../constants/constants";
import "./notFound.css";

/**
 *  This is a reusable Page not Found Component for this app
 *  It represents a fallback UI, in case the requested page doesn't exists
 */

const PageNotFound = () => {
  return (
    <div className="page_not_found">
      <div className="not_found_errorCode">{NOT_FOUND_CODE}</div>
      <div className="not_found_errorMessage">{NOT_FOUND_MESSAGE}</div>
    </div>
  );
};

export default PageNotFound;
