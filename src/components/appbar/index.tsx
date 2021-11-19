import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import useStyles from "./styles";
import logo from "../../assets/img/GrayLogo.png";
import { useHistory, useLocation } from "react-router-dom";

export default function NavAppBar() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const changeRoute = (route: string) => {
    history.push(route);
  };

  const openGitHub = () => {
    window.open("https://github.com/SinaraPimenta/PySniffer");
  };

  const openPaper = () => {
    //window.open("paper url");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => changeRoute("/")}
          >
            <img src={logo} alt="Py Sniffer Logo" className={classes.logo} />
          </IconButton>
          <Button
            color="inherit"
            className={location.pathname==='/statistics'? classes.buttonSelected: classes.button}
            onClick={() => changeRoute("/statistics")}
          >
            Statistics
          </Button>
          <Button
            color="inherit"
            className={classes.button2}
            onClick={openGitHub}
          >
            GitHub
          </Button>
          <Button
            color="inherit"
            className={classes.button2}
            onClick={openPaper}
          >
            Paper
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
