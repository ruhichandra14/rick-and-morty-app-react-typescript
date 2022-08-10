import "./error.css";

/**
 *  This is a reusable Error Component
 *  It represents a fallback error UI, in case of errors
 *  It consumes error sprites to display different error screen
 */

const Error = () => {
  const randomImgIndex = Math.floor(Math.random() * 3 + 1);
  return (
    <div className="error" data-testid="error">
      <div className={`error_sprite error_screen${randomImgIndex}`}></div>
    </div>
  );
};

export default Error;
