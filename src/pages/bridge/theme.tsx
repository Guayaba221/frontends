import { useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import createBreakpoints from "@mui/system/createTheme/createBreakpoints";

import { typographyOptions, paletteOptions } from "./addition";

const breakpoints = createBreakpoints({});

const defaultTransition = "all 0.15s ease-out";

const lightTheme = {
  palette: paletteOptions,
  // padding,
  typography: typographyOptions,
  breakpoints,
  // shadows: ["0px 4px 4px rgba(0, 0, 0, 0.1)", "none"],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: "0.6rem",
          color: paletteOptions.primary.contrastText,
          backgroundColor: paletteOptions.primary.main,
          transition: defaultTransition,
          "&:disabled": {
            backgroundColor: "rgba(51, 51, 51, 0.1)",
            color: "rgba(51, 51, 51, 0.3)",
          },
          "&:hover": {
            boxShadow: "#FEE7E0 0.4rem 0.4rem",
            // mobile
            "&.Mui-disabled": {
              backgroundColor: "rgba(51, 51, 51, 0.1)",
              boxShadow: "unset",
            },
          },
        },
        textPrimary: {
          color: paletteOptions.primary.contrastText,
          "&:hover": {
            backgroundColor: paletteOptions.primary.light,
            // mobile
            "@media (hover: none)": {
              backgroundColor: paletteOptions.primary.light,
            },
          },
        },
        outlined: {
          border: `1px solid ${paletteOptions.text.primary}`,
          backgroundColor: paletteOptions.background.default,
          color: paletteOptions.text.primary,
          "&:hover": {
            color: paletteOptions.primary.main,
            border: `1px solid ${paletteOptions.primary.light}`,
            backgroundColor: paletteOptions.background.default,
            "@media (hover: none)": {
              backgroundColor: paletteOptions.background.default,
            },
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#333",
          backgroundColor: paletteOptions.background.default,
          "&:hover": {
            backgroundColor: paletteOptions.background.default,
            // mobile
            "@media (hover: none)": {
              backgroundColor: paletteOptions.background.default,
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: "2.8rem",
          borderRadius: "1rem",
          // boxShadow: boxShadows.card,
          transition: defaultTransition,
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
        },
        padding: {
          paddingTop: 0,
          paddingBottom: 0,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          transition: defaultTransition,
          "&$selected": {
            backgroundColor: "rgba(201, 203, 206, 0.2)",
            color: paletteOptions.text.primary,
            "&:hover": {
              backgroundColor: "rgba(201, 203, 206, 0.2)",
            },
          },
        },

        button: {
          "&:hover": {
            backgroundColor: "rgba(201, 203, 206, 0.2)",
          },
          transition: defaultTransition,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          fontSize: "1.8rem",
          transition: defaultTransition,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          transition: defaultTransition,
          fontFamily: "Pulp Display",
          letterSpacing: "0.25px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          transition: defaultTransition,
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          transition: defaultTransition,
          borderRadius: "2rem",
          boxShadow: "0px 4px 4px rgba(51, 51, 51, 0.15)",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          transition: defaultTransition,
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        indicator: {
          display: "none",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          transition: defaultTransition,
          "&.MuiTab-root": {
            color: paletteOptions.text.secondary,
            minWidth: 0,
            borderRadius: "3rem",
          },
          "&$selected": {
            color: paletteOptions.primary.main,
          },
          "&:hover:not($selected)": {
            color: paletteOptions.text.primary,
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "1.6rem",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          cursor: "default",
          transition: defaultTransition,
          color: "#333",
        },
        colorPrimary: {
          color: "#333",
        },
        gutterBottom: {
          marginBottom: "0.7rem",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: "1rem",
          fontSize: "1.6rem",
          lineHeight: "2.6rem",
          padding: "2rem",
          width: "100%",
          boxSizing: "border-box",
          [breakpoints.down("xs")]: {
            flexDirection: "column",
            textAlign: "center",
            padding: " 1.6rem 3rem",
          },
        },
        standardWarning: {
          color: paletteOptions.warning.main,
          backgroundColor: paletteOptions.warning.light,
        },
        standardError: {
          color: paletteOptions.error.main,
          backgroundColor: paletteOptions.error.light,
        },
        icon: {
          display: "flex",
          alignItems: "center",
          fontSize: "3rem",
          marginRight: "1.6rem",
          padding: 0,
          [breakpoints.down("xs")]: {
            justifyContent: "center",
            marginRight: 0,
          },
        },
        message: {
          padding: 0,
        },
      },
    },
    MuiDiveder: {
      styleOverrides: {
        root: {
          backgroundColor: "#C9CBCE",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          cursor: "pointer",
          fontSize: "2.4rem",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#00A6F2",
          fontSize: "1.6rem",
          fontWeight: 600,
          cursor: "pointer",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:nth-last-child(1) .MuiTableCell-root": {
            borderBottom: "unset",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          [breakpoints.down("xs")]: {
            padding: "1.6rem 2.4rem",
          },
        },
        head: {
          color: "#595959",
          fontSize: "1.4rem",
          fontWeight: 500,
          letterSpacing: "-0.03rem",
          borderBottom: "unset",
        },
        body: {
          color: "#333",
          fontSize: "1.6rem",
          fontWeight: 400,
          letterSpacing: "-0.03rem",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid #C9CBCE",
          "&:before": {
            backgroundColor: "unset",
          },
          "&.MuiPaper-root": {
            boxShadow: "unset",
          },
          "&.Mui-expanded": {
            margin: 0,
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: 0,
        },
        content: {
          margin: "3.6rem 0",
          "&.Mui-expanded": {
            margin: "3.6rem 0",
          },
          [breakpoints.down("xs")]: {
            margin: "3.2rem 0",
            "&.Mui-expanded": {
              margin: "3.2rem 0 1.6rem",
            },
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          display: "block",
          padding: "0 0 3.2rem",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          [breakpoints.down("xs")]: {
            margin: "0 1.6rem",
          },
        },
      },
    },
  },
};

const darkTheme = {};
const prefersDarkMode = true;
const Theme = ({ children }) => {
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  // console.log(prefersDarkMode, "prefersDarkMode");

  const theme = useMemo(
    () => createTheme(prefersDarkMode ? lightTheme : darkTheme),
    []
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
