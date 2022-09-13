import styled from "styled-components";
import iconPlus from "../assets/icon-plus.svg";
import iconMinus from "../assets/icon-minus.svg";
import { mixinRatingIcon } from "../GlobalStyle";

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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: var(--Very-light-gray);
  width: fit-content;
  height: fit-content;
  border-radius: 0.75rem;
  padding: 1.25rem 1rem;
  margin: auto 0;
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
