import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export type CustomerReviewProps = {
  rating?: number;
  comment?: string;
  author?: string;
};

const CustomerReview = ({
  rating = 5,
  comment = "",
  author = "",
}: CustomerReviewProps) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} color="#FFD700" />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} color="#FFD700" />);
      } else {
        stars.push(<FaRegStar key={i} color="#FFD700" />);
      }
    }
    return stars;
  };

  return (
    <div className="h-[240px] w-[277px] bg-[#FFF9F94D] rounded-[20px] p-4 flex flex-col items-center justify-between">
      <div className="flex items-center gap-1 mb-4 mt-4">
        {renderStars(rating)}
      </div>
      <div className="text-[11px] leading-[13.41px] font-light text-center line-clamp-4">
        {comment}
      </div>
      <div className="text-[11px] leading-[13.41px] font-medium text-center mt-auto">
        {author}
      </div>
    </div>
  );
};

export default CustomerReview;
