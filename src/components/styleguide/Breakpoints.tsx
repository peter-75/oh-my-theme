import React from "react";
import { Styled, Flex } from "theme-ui";
import {
  faMobileAlt,
  faTabletAlt,
  faDesktop,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/** @jsx jsx */
import { jsx } from "theme-ui";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
interface Props {
  breakpoints: [];
}

const devicesIcon: IconProp[] = [faMobileAlt, faTabletAlt, faLaptop, faDesktop];
const Breakpoints: React.FC<Props> = ({ breakpoints }) => {
  return (
    <div>
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {breakpoints.map((breakpoint, index) => {
          return (
            <Flex
              key={breakpoint}
              sx={{
                alignItems: "center",
                flexDirection: "column",
                padding: "0px 10px",
              }}
            >
              <FontAwesomeIcon
                size="3x"
                color="primary"
                icon={devicesIcon[index]}
              />
              <Styled.h6 sx={{ marginBottom: 0 }}>{breakpoint}</Styled.h6>
            </Flex>
          );
        })}
      </Flex>
    </div>
  );
};

export default Breakpoints;
