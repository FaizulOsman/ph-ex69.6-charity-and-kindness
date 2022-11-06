import React from "react";
import { useState } from "react";

const DonationCard = ({ event }) => {
  const [cardHover, setCardHover] = useState(false);
  const { img, title } = event;

  return (
    <div>
      <div
        onMouseOver={() => setCardHover(true)}
        onMouseOut={() => setCardHover(false)}
        className="relative hover:-mt-8 duration-300 border border-secondary w-8/12 mx-auto rounded-3xl"
      >
        <div className="border-b-2 border-secondary">
          <div className="ml-4">
            <span className="mr-1">o</span>
            <span className="mr-1">o</span>
            <span className="mr-1">o</span>
          </div>
        </div>
        <img className="h-60 p-4 w-full" src={img} alt="" />
        <span
          style={cardHover ? { display: "block" } : { display: "none" }}
          className="absolute bottom-0 text-center left-0 w-full rounded-b-3xl py-4 bg-primary"
        >
          <h4 className="text-xl font-bold fontNothingYouCouldDo">{title}</h4>
        </span>
      </div>
      <div
        style={cardHover ? { display: "none" } : { display: "block" }}
        className="mt-2 text-center text-xl font-bold fontNothingYouCouldDo"
      >
        {title}
      </div>
    </div>
  );
};

export default DonationCard;
