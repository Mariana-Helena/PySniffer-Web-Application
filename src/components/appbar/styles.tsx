import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    appBar: {
      backgroundColor: "#000E22",
    },
    button: {
      fontFamily: "Montserrat",
      textTransform: "capitalize",
      "&:focus": {
        color: "#E2B75F",
      },
      "&:hover": {
        color: "#E2B75F",
      },
      marginLeft: "30px",
    },
    logo: {
      width: "80px",
    },
  })
);

export default useStyles;
