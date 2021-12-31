import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  paper: {
    width: "300px",
    padding: "20px",
    boxSizing: "border-box",
  },
  profile: {
    display: "flex",
    justifyContent: "space-beetwen",
  },
  menu: {
    fontSize: "3rem",
    display: "flex",
  },
  userName: {
    fontSize: "1rem",
  },
  logout: {
    marginTop: "10px",
  },
  [theme.breakpoints.up("md")]: {
    menuButton: {
      display: "none",
    },
  },
}));
