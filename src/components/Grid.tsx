/** @jsx jsx */
import { jsx } from "theme-ui";
import { Theme } from "theme-ui";
const Grid: React.FC = ({ children }) => (
  <div
    sx={{
      display: "grid",
      gridGap: 0, // theme.space[4]
      margin: "20px auto",
      maxWidth: "1050px",
      width: "90%",
      grid: ["auto", "repeat(5, fit-content(100px))/repeat(4, 1fr)"],
      borderTop: (theme: Theme) => `1px solid ${theme.colors?.primary}`,
      borderLeft: (theme: Theme) => `1px solid ${theme.colors?.primary}`,
    }}
  >
    {children}
  </div>
);

export default Grid;
