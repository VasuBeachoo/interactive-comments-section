import styled from "styled-components";
import iconPlus from "../assets/icon-plus.svg";
import iconMinus from "../assets/icon-minus.svg";
import {
  mixinHorizontalRating,
  mixinRatingIcon,
  mixinVerticalRating,
} from "../GlobalStyle";

export const MinusSign = styled.img.attrs({
  src: iconMinus,
  alt: "minus-sign",
})`
  ${mixinRatingIcon}
`;

export const RatingValue = styled.p`
  color: var(--Moderate-blue);
  font-weight: 500;
`;

export const PlusSign = styled.img.attrs({ src: iconPlus, alt: "plus-sign" })`
  ${mixinRatingIcon}
`;

export const RatingBox = styled.div`
  ${mixinVerticalRating}
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--Very-light-gray);
  border-radius: 0.75rem;

  @media (max-width: 800px) {
    ${mixinHorizontalRating}
  }
`;

const Rating = ({ className, rating }) => {
  return (
    <RatingBox className={className}>
      <PlusSign />
      <RatingValue>{rating}</RatingValue>
      <MinusSign />
    </RatingBox>
  );
};

export default Rating;
