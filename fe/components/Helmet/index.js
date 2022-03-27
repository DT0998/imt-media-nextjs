import React from "react";

const Helmet = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "IMT Media - " + props.title;
  }, []);

  return <>{props.children}</>;
};

export default Helmet;
