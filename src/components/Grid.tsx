/** @jsx jsx */
import { jsx } from "theme-ui";
import { Theme } from "theme-ui";
const Grid: React.FC = ({ children }) => (
  <div
    sx={{
      display: "grid",
      gridGap: 0,
      margin: ["5px auto", "20px auto"],
      maxWidth: "1050px",
      width: ["90%", "90%"],
      grid: [
        "repeat(9, fit-content(300px))/100%",
        "repeat(5, fit-content(300px))/repeat(4, 1fr)",
      ],
      gridTemplateAreas: [
        `
        "colors"
        "typography"
        "buttons"
        "links"
        "breakpoints"
      `,
        `
        "colors typography typography typography"
        "colors buttons buttons links"
        "breakpoints breakpoints breakpoints breakpoints"
      `,
      ],
      borderTop: (theme: Theme) => `1px solid ${theme.colors?.primary}`,
      borderLeft: (theme: Theme) => `1px solid ${theme.colors?.primary}`,
    }}
  >
    {children}
  </div>
);

export default Grid;
