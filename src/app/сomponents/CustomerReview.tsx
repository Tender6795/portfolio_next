import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

type CustomerReviewProps = {
  rating?: number;
  comment?: string;
  author?: string;
};

const CustomerReview = ({
  rating = 5,
  comment = "Это пример комментария. Он может быть длинным, но будет обрезан.",
  author = "Иван Иванов",
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

  const shortComment =
    comment.length > 80 ? `${comment.substring(0, 80)}...` : comment;

  return (
    <div className="h-[200px] w-[277px] bg-[#FFF9F94D] rounded-[20px] p-4">
      <div className="flex items-center gap-1">{renderStars(rating)}</div>
      <div
        className="text-sm mt-2"
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {shortComment}
      </div>
      <div className="text-xs mt-2 font-medium">{author}</div>
    </div>
  );
};

export default CustomerReview;
