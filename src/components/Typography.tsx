import React from "react";
/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui";
import { useThemeUI } from "theme-ui";

const Typography: React.FC = () => {
  const context = useThemeUI();
  const {
    theme: { fonts },
  } = context;

  return (
    <div>
      {fonts && (
        <Flex sx={{ flex: "1 1 30%", justifyContent: "space-between" }}>
          <div sx={{ padding: "30px" }}>
            <Styled.h1 sx={{ fontWeight: "bold" }}>aA</Styled.h1>
            <Styled.h3 sx={{ fontWeight: "bold" }}>
              {fonts["body"].split(",")[0]}
            </Styled.h3>
          </div>
          <div sx={{ padding: "30px" }}>
            <Styled.h1 sx={{ fontWeight: "body" }}>aA</Styled.h1>
            <Styled.h3 sx={{ fontWeight: "body" }}>
              {fonts["body"].split(",")[0]}
            </Styled.h3>
          </div>
          <div sx={{ padding: "30px" }}>
            <Styled.h1 sx={{ fontWeight: "light" }}>aA</Styled.h1>
            <Styled.h3 sx={{ fontWeight: "light" }}>
              {fonts["body"].split(",")[0]}
            </Styled.h3>
          </div>
        </Flex>
      )}
      <Flex>
        <div sx={{ flex: "1 1 45%", p: 4 }}>
          <Styled.h6>Healines</Styled.h6>
          <Styled.h1>h1 headline</Styled.h1>
          <Styled.h2>h2 headline</Styled.h2>
          <Styled.h3>h3 headline</Styled.h3>
          <Styled.h4>h4 headline</Styled.h4>
          <Styled.h5>h5 headline</Styled.h5>
          <Styled.h6>h6 headline</Styled.h6>
        </div>
        <div sx={{ flex: "1 1 45%", p: 4 }}>
          <Styled.h6>Body Text</Styled.h6>
          <Styled.p>
            I think we need to start from scratch. Jazz it up a little bit- use
            a funky color like purple.
          </Styled.p>
          <Styled.p>
            <Styled.strong>
              Can you add a bit of pastel pink and baby blue because the purple
              alone looks too fancy.
            </Styled.strong>
          </Styled.p>
          <Styled.em>
            Make the purple more well, purple-er. Try a more powerful colour, it
            needs to be the same, but totally different.
          </Styled.em>
        </div>
      </Flex>
    </div>
  );
};

export default Typography;
