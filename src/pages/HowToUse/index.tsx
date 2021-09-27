import React from "react";
import useStyles from "./styles";
import NavAppBar from "../../components/appbar";
import background from "../../assets/img/Background3.png";

export default function HowToUse() {
  const classes = useStyles();

  return (
    <div>
      <NavAppBar />
      <div
        className={classes.background}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className={classes.body}></div>
      </div>
    </div>
  );
}
