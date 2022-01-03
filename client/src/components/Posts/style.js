import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    alignItems: "center",
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: "center",
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    maxWidth: "100%",
    alignItems: "center",
  },
}));
