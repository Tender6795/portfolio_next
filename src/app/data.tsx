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
      rating: 5,
      comment:
        "He did an excellent job and will definitely reach out to him again for future projects.",
      author: "",
    },
    desc: "Website for communication 18+",
    title: "Call Jane Doe",
    srcImage: "/projects/calljanedoe.png",
  },
  {
    review: {
      rating: 4.85,
      comment: "Quality of work was great, in terms of coding approach.",
      author: "",
    },
    desc: "Educational platform",
    title: "Weshare",
    srcImage: "/projects/weshare.png",
  },
  {
    review: {
      rating: 5,
      comment: "",
      author: "",
    },
    desc: "Educational platform",
    title: "EduTech",
    srcImage: "/projects/edutech.png",
  },
  {
    review: {
      rating: 5,
      comment: "Illia's an excellent FS Developer, highly recommended",
      author: "",
    },
    desc: "Generator of pictures and postcards according to the client's description",
    title: "Deflamel",
    srcImage: "/projects/deflamel.png",
  },

  {
    review: {
      rating: 5,
      comment: "I can describe Ilya as a good and responsible employee. For all the questions and comments we had, he contacted us and corrected everything. Thanks",
      author: "",
    },
    desc: "Made a wrapper for the API on Java script for working with cryptocurrency",
    title: "API Cryptopay",
    srcImage: "/projects/noImage.jpg",
  },
];
