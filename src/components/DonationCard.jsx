import React from "react";
import { useState } from "react";
import { Flip, Zoom } from "react-reveal";

const DonationCard = ({ category }) => {
  const [cardHover, setCardHover] = useState(false);
  const { img, name } = category;

  return (
    <Zoom left>
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
            <Flip left>
              <h4 className="text-xl font-bold fontNothingYouCouldDo">
                {name}
              </h4>
            </Flip>
          </span>
        </div>
        <div
          style={cardHover ? { display: "none" } : { display: "block" }}
          className="mt-2 text-center text-xl font-bold fontNothingYouCouldDo"
        >
          {name}
        </div>
      </div>
    </Zoom>
  );
};

export default DonationCard;
