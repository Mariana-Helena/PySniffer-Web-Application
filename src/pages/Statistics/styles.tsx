import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    background: {
      width: "100%",
      minWidth:"1500px",
      height: "auto",
      backgroundSize: "cover",
      backgroundColor: "#D9D9D9"
    },
    body: {
      width: "100%",
      height: "1400px",
    },
    chart: {
      width: "900px"
    }
  })
);

export default useStyles;
