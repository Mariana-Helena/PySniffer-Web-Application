import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import background from "../../assets/img/Background.png";
import NavAppBar from "../../components/appbar";

export default function Home() {
  const classes = useStyles();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
