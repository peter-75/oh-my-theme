import PropTypes from "prop-types";
import React from "react";
import { Flex } from "@theme-ui/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Styled } from "theme-ui";
import { SettingsContext } from "../context/SettingsProvider";
import { faCog } from "@fortawesome/free-solid-svg-icons";
/** @jsx jsx */
import { jsx } from "theme-ui";
import ToggleColorMode from "../ToggleColorMode";

const Header = ({ siteTitle = "" }) => {
  const {
    editorMode: { toggle, setToggle },
  } = React.useContext(SettingsContext);
  return (
    <header>
      <Flex sx={{ padding: "20px" }}>
        <FontAwesomeIcon
          onClick={() => setToggle(!toggle)}
          size="2x"
          color="primary"
          sx={{ cursor: "pointer" }}
          icon={faCog}
        />
        <Styled.h1 sx={{ margin: "0 auto", justifyItems: "center" }}>
          {siteTitle}
        </Styled.h1>
      </Flex>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default Header;
