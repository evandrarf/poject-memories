import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
  },

  menu: {
    display: "none",
  },

  heading: {
    color: "rgba(0,183,255, 1)",
    textDecoration: "none",
  },
  image: {
    marginLeft: "15px",
    height: "40px",
    width: "40px",
    position: "relative",
    top: "3px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  [theme.breakpoints.down("sm")]: {
    appBar: {
      padding: "10px 10px 10px 30px",
    },
    heading: {
      fontSize: "1.8rem",
    },
    profile: {
      width: "200px",
      alignItems: "center",
    },
    toolbar: {
      width: "200px",
    },
    logout: {
      height: "25px",
    },
    profile: {
      display: "none",
    },
    signin: {
      display: "none",
    },
    menu: {
      display: "block",
    },
    memoriesText: {
      height: "30px",
    },
  },
}));
