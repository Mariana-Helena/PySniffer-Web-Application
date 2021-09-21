import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    background: {
      width: "100%",
      height: "auto",
      backgroundSize: "cover",
    },
    body: {
      width: "100%",
      height: "1500px"
    },
  })
);

export default useStyles;
