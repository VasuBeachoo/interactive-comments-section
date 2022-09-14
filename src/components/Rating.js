import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeRating } from "../commentsSlice";
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

const Rating = ({ className, ratingId, rating }) => {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState("none");

  const handlePlusSignClick = () => {
    if (selected === "plus") {
      setSelected("none");
      dispatch(changeRating({ id: ratingId, rating: rating - 1 }));
    } else {
      setSelected("plus");
      if (selected === "minus")
        dispatch(changeRating({ id: ratingId, rating: rating + 2 }));
      else dispatch(changeRating({ id: ratingId, rating: rating + 1 }));
    }
  };

  const handleMinusSignClick = () => {
    if (selected === "minus") {
      setSelected("none");
      dispatch(changeRating({ id: ratingId, rating: rating + 1 }));
    } else {
      setSelected("minus");
      if (selected === "plus")
        dispatch(changeRating({ id: ratingId, rating: rating - 2 }));
      else dispatch(changeRating({ id: ratingId, rating: rating - 1 }));
    }
  };

  return (
    <RatingBox className={className}>
      <PlusSign selected={selected === "plus"} onClick={handlePlusSignClick} />
      <RatingValue>{rating}</RatingValue>
      <MinusSign
        selected={selected === "minus"}
        onClick={handleMinusSignClick}
      />
    </RatingBox>
  );
};

export default Rating;
