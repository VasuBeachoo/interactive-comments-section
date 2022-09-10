import styled from "styled-components";
import iconPlus from "../assets/icon-plus.svg";
import iconMinus from "../assets/icon-minus.svg";

export const MinusSign = styled.img.attrs({
  src: iconMinus,
  alt: "minus-sign",
})``;

export const RatingValue = styled.p``;

export const PlusSign = styled.img.attrs({ src: iconPlus, alt: "plus-sign" })``;

export const CommentRatingBox = styled.div``;

const CommentRating = ({ className, rating }) => {
  return (
    <CommentRatingBox className={className}>
      <PlusSign />
      <RatingValue>{rating}</RatingValue>
      <MinusSign />
    </CommentRatingBox>
  );
};

export default CommentRating;
