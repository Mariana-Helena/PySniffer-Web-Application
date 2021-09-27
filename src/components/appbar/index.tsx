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
    //window.open("http://www.google.com");
  };

  const openPaper = () => {
    //window.open("http://www.google.com");
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
            onClick={() => changeRoute("/home")}
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
            className={location.pathname==='/how-to-use'? classes.buttonSelected: classes.button}
            onClick={() => changeRoute("/how-to-use")}
          >
            How to Use
          </Button>
          <Button
            color="inherit"
            className={classes.button}
            onClick={openGitHub}
          >
            GitHub
          </Button>
          <Button
            color="inherit"
            className={classes.button}
            onClick={openPaper}
          >
            Paper
          </Button>
          <Button
            color="inherit"
            className={classes.button}
            onClick={() => changeRoute("/about-us")}
          >
            About us
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
