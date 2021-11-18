import React from "react";
import useStyles from "./styles";
import NavAppBar from "../../components/appbar";

export default function HowToUse() {
  const classes = useStyles();

  return (
    <div>
      <NavAppBar />
      <div
        className={classes.background}
      >
        <div className={classes.body}></div>
      </div>
    </div>
  );
}
