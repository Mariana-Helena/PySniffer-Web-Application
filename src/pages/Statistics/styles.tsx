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
      height: "480px",
      width: "800px",
      paddingLeft: "50px"
    },
    pieChart: {
      height: "400px",
      padding: "50px"
    },
    textDiv: {
      paddingLeft: "30px",
    },
    title: {
      color: "#fff",
      fontFamily: "Montserrat !important",
      fontSize: "40px !important",
    },
    subtitle: {
      color: "#E2B75F",
      fontFamily: "Montserrat !important",
      paddingLeft: 5,
    },
  })
);

export default useStyles;
