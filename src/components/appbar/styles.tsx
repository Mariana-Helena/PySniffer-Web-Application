import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      minWidth:"1500px",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    appBar: {
      backgroundColor: "#000E22",
    },
    button: {
      width: "150px",
      minWidth: "150px",
      fontFamily: "Montserrat",
      textTransform: "capitalize",
      "&:focus": {
        color: "#E2B75F",
      },
      "&:hover": {
        color: "#E2B75F",
      },
      marginLeft: "0px",
    },
    logo: {
      width: "80px",
    },
  })
);

export default useStyles;
