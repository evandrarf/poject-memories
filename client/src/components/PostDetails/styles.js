import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    borderRadius: "20px",
    objectFit: "cover",
    width: "100%",
    maxHeight: "600px",
  },
  card: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      flexDirection: "column",
    },
  },
  section: {
    borderRadius: "20px",
    margin: "10px",
    marginTop: "20px",
    flex: 1,
  },
  imageSection: {
    marginLeft: "30px",
    maxWidth: "600px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },

  recommendedPosts: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  recommendedItems: {
    width: "20%",
    boxSIzing: "border-box",
    [theme.breakpoints.down("sm")]: {
      borderBottom: "1px solid #ccc",
      paddingBottom: "25px",
      width: "100%",
    },
  },
  loadingPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "15px",
    height: "39vh",
  },
}));
