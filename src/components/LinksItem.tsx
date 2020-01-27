import React from "react";
import { Link, Box } from "@theme-ui/components";

interface Props {
  variants: string[];
}

const LinksItem: React.FC<Props> = ({ variants }) => {
  return (
    <div>
      {variants.map(variant => (
        <Box mb="10px" key={variant}>
          <Link variant={variant}>{variant}</Link>
          <br />
        </Box>
      ))}
    </div>
  );
};

export default LinksItem;
