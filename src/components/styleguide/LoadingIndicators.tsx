import React, { useEffect, useRef, useState } from "react";
import { Progress, Spinner, Flex } from "@theme-ui/components";
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
    <Flex
      sx={{ textAlign: "center", flexWrap: "wrap", alignItems: "flex-end" }}
    >
      <div sx={{ p: "10px" }}>
        <Progress
          sx={{
            height: "10px",
            width: "100%",
            m: "0 auto",
            borderRadius: "50px",
          }}
          max={100}
          value={count}
        />
        <Styled.h5>LOADING...</Styled.h5>
      </div>
      <div sx={{ p: "10px" }}>
        <Spinner />
        <Styled.h5>PLEASE WAIT...</Styled.h5>
      </div>
    </Flex>
  );
};

export default LoadingIndicators;
