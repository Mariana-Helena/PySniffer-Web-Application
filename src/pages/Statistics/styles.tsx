import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    background: {
      width: "100%",
      minWidth:"1500px",
      height: "auto",     
      backgroundSize: "cover",
      backgroundColor: "#000E22",
    },
    body: {
      width: "100%",
      height: "800px",
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
      paddingTop: "30px",
      paddingLeft: "50px",
      width: "350px",          
      position:"relative",
      float: "left",
    },
    text: {
      color: "#fff",
      fontFamily: "Montserrat !important",
      wordBreak: "break-word",   
    },
    textHint: {
      color: "#fff",
      fontFamily: "Montserrat !important",
      wordBreak: "break-word", 
      fontSize: "10px !important",     
    },
    title: {
      color: "#E2B75F",
      fontFamily: "Montserrat !important",
      fontSize: "30px !important",    
    },
    subtitle: {
      color: "#E2B75F",
      fontFamily: "Montserrat !important",
      paddingLeft: 5,
    },
    container: {  
      position: "relative",
      float: "left"
    },
  })
);

export default useStyles;
