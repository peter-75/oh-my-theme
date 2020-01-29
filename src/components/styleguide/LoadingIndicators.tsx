import React, { useEffect, useRef, useState } from "react";
import { Progress, Spinner } from "@theme-ui/components";
import { Styled } from "theme-ui";
/** @jsx jsx */
import { jsx } from "theme-ui";
interface Props {}

const doNothingFunc = () => {};

function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef(doNothingFunc);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      if (savedCallback && savedCallback.current) {
        savedCallback.current();
      }
    }

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

const LoadingIndicators: React.FC<Props> = () => {
  const [count, setCount] = useState(0);
  if (count === 100) setCount(0);
  useInterval(() => {
    setCount(count + 1);
  }, 50);

  return (
    <div sx={{ textAlign: "center" }}>
      <Progress
        sx={{ height: "10px", width: "80%", m: "0 auto", borderRadius: "50px" }}
        max={100}
        value={count}
      >
        50%
      </Progress>
      <Styled.h5>LOADING...</Styled.h5>

      <Spinner />
      <Styled.h5>PLEASE WAIT...</Styled.h5>
    </div>
  );
};

export default LoadingIndicators;
