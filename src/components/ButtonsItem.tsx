import React from "react";
import { Button } from "@theme-ui/components";

interface Props {
  variants: string[];
}

const ButtonsItem: React.FC<Props> = ({ variants }) => {
  return (
    <div>
      {variants.map(variant => (
        <Button key={variant} sx={{ margin: "5px 10px" }} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  );
};

export default ButtonsItem;
