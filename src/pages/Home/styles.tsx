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
      height: "1200px",
    },
    button: {
      backgroundColor: "#B48C3E !important",
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
    img: {
      paddingTop: "30px",
      paddingLeft: "30px",  
    },
    textDiv: {
      paddingTop: "80px",
      paddingLeft: "50px",
      marginRight: "100px",
      width: "550px",          
      position:"relative",
      float: "left",
    },
    title: {
      color: "#fff",
      fontFamily: "Montserrat !important",
      fontSize: "60px !important",
    },
    text: {
      color: "#fff",
      fontFamily: "Montserrat !important",
      wordBreak: "break-word",
    },
    rankingDiv: {      
      backgroundColor: "#D9D9D9",
      borderRadius: '25px',
      paddingTop: "30px",
      paddingBottom: "30px",
      marginTop: "50px",
      paddingLeft: "30px",
      display: "inline-block",
    },
    rankingSubtitle: {
      color: "#B48C3E",
      fontFamily: "Montserrat",
      paddingLeft: 5,
      fontWeight: "bolder",
    },
    rankingTitle: {
      color: "#000E22",
      fontFamily: "Montserrat !important",
      fontSize: "35px !important",
    },
    number: {
      color: "#B48C3E",
      fontSize: "60px !important",
      marginRight: "20px",
    },
    listItemTitle: {
      color: "#B48C3E",
      fontSize: "25px !important",
      marginRight: "10px",
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
    radio: {
      '&$checked': {
        color: '#B48C3E !important'
      }
    },
    checked: {},
    searchBar: {
      width: "450px",
      '& .MuiInput-underline:after': {
        borderBottomColor: '#B48C3E',
      },
      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: '#B48C3E',
        },
      }
    },
    searchButton: {
      height: "56px",
      backgroundColor: "#D9D9D9",
    },
    searchIcon: {
      color: "#B48C3E",
    },
    list: {      
      backgroundColor: "#D9D9D9",
      maxHeight: "350px",
      height: "350px",
      width: "550px",
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
    listItem: {      
      padding: 0
    },
    downloadButton: {
      backgroundColor: "#B48C3E !important",
      marginTop: "50px !important",
      width: "150px",
    },   
    div:{
      display: "inline-block",
    },
    infoDiv: {
      display: "inline-block",
      marginLeft: "30px",
    },
    icon: {
      fontSize: "100px  !important",
      color: "#fff"
    },
    info: {
      marginLeft: "15px",
      position: "relative",
      float: "right",
    },
    infoText: {
      color: "#fff",
      fontFamily: "Montserrat !important",
    },
    infoNumber: {
      color: "#fff",
      fontFamily: "Montserrat !important",
      fontSize: "60px !important",
    },
    noteDiv:{
      width: "850px",
      marginTop: "20px"
    },
    note: {
      color: "#fff",
      fontFamily: "Montserrat !important",
      fontSize: "12px",
      wordBreak: "break-all"    

    }
  })
);

export default useStyles;
