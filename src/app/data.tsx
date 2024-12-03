import { CustomerReviewProps } from "./сomponents/CustomerReview";

export type worksType = {
  review: CustomerReviewProps | null;
  desc: string;
  title: string;
  srcImage: string;
};

export const data: Array<worksType> = [
  {
    review: {
      rating: 4.5,
      comment: "Great experience! The project was delivered on time and exceeded expectations.",
      author: "Alice Johnson",
    },
    desc: "A detailed review about a completed web development project.",
    title: "Web Development Project",
    srcImage: "/avatar.png",
  },
  {
    review: {
      rating: 4,
      comment: "The service was decent, but there were some delays in communication.",
      author: "Michael Smith",
    },
    desc: "Feedback on a design collaboration.",
    title: "Design Collaboration",
    srcImage: "/avatar.png",
  },
  {
    review: {
      rating: 5,
      comment: "Absolutely fantastic! Would highly recommend their services.",
      author: "Emily Davis",
    },
    desc: "Testimonial for an app development project.",
    title: "App Development Testimonial",
    srcImage: "/avatar.png",
  },
];
