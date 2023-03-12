import React from "react";

const Card = ({ className, children }) => {
  return (
    <article
      className={`bg-white p-4 rounded-md shadow-[7px_7px_9px_0px_#60996667] ${className}`}
    >
      {children}
    </article>
  );
};

export default Card;
