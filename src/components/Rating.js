import { useState } from "react";
import styled from "styled-components";
import StarIcon from "./StarIcon";

export default function Rating({ name, maxRating = 5 }) {
  const [rate, setRate] = useState(0);
  const stars = Array.from({ length: maxRating });

  function handleChange(event) {
    const { value } = event.target;
    setRate(+value);
  }

  return (
    <Wrapper>
      <RatingStars>
        {stars.map((star, index) => {
          return (
            <StarIcon
              key={index}
              filled={index < rate}
              name={name}
              onChange={handleChange}
              id={name + index}
              value={index + 1}
            />
          );
        })}
      </RatingStars>
      <PopOver show={rate > 0}>
        <div>
          {rate > maxRating - 2 ? (
            <p>Wow {rate} stars!</p>
          ) : rate === 1 ? (
            <p>You gave {rate} star</p>
          ) : (
            <p>You gave {rate} stars</p>
          )}
          <p>Thanks for your rating!</p>
        </div>
      </PopOver>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const RatingStars = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 40px;
  border-radius: 30px;
  background-color: #fff;
  border: 1px solid #c9d0ea;
  box-shadow: 0 1px #c9d0ea, 0 6px #ddd, 0 10px 6px -1px #585b66;
`;

const PopOver = styled.div`
  position: absolute;
  top: 0px;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  border-radius: 30px;
  width: 80%;
  text-align: center;
  font-weight: 700;
  color: #adc18f;
  background-color: #394266;
  transition: transform 0.5s;
  transform: translateX(-50%)
    ${(props) => (props.show ? "translateY(100px)" : "translateY(0px)")};
  z-index: -1;
`;
