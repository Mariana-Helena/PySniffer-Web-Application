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
      height: "2000px",
    },
    button: {
      backgroundColor: "#B48C3E !important",
      marginLeft: "30px !important",
      marginTop: "30px !important",
      width: "150px",
    },
    buttonText: {
      fontFamily: "Montserrat",
      textTransform: "capitalize",
      color: "#fff",
    },
    subtitle: {
      color: "#E2B75F",
      fontFamily: "Montserrat !important",
      paddingLeft: 5,
    },
    textDiv: {
      paddingTop: "100px",
      paddingLeft: "30px",
      width: "450px",
    },
    title: {
      color: "#fff",
      fontFamily: "Montserrat !important",
      fontSize: "60px !important",
    },
    text: {
      color: "#fff",
      fontFamily: "Montserrat !important",
      wordBreak: "break-all",
    },
    rankingDiv: {
      paddingTop: "230px",
      paddingLeft: "30px",
      width: "450px",
      display: "inline-block",
    },
    rankingSubtitle: {
      color: "#B48C3E",
      fontFamily: "Montserrat",
      paddingLeft: 5,
      fontWeight: "bolder",
    },
    rankingTitle: {
      color: "#000",
      fontFamily: "Montserrat !important",
      fontSize: "40px !important",
    },
    number: {
      color: "#B48C3E",
      fontSize: "60px !important",
      marginRight: "20px",
    },
    modName: {
      color: "#000",
      fontFamily: "Montserrat !important",
      fontSize: "20px !important",
      fontWeight: "bold",
    },
    modDesc: {
      color: "#000",
      fontFamily: "Montserrat !important",
    },
    chartDiv: {
      display: "inline-block",
    },
    chart: {
      width: "600px",
      marginLeft: "300px",
      position: "relative",
      top: "150px"
    },
    list: {
      marginTop: "20px",
      maxHeight: "350px",
      height: "350px",
      overflowY: "scroll",
      '&::-webkit-scrollbar': {
        width: '5px',
      },
      '&::-webkit-scrollbar-track': {
        background: '#f1f1f1',
      },
      '&::-webkit-scrollbar-thumb': {
        background: '#888',
      },
    },

    downloadButton: {
      backgroundColor: "#B48C3E !important",
      marginTop: "50px !important",
      width: "150px",
    }
  })
);

export default useStyles;
