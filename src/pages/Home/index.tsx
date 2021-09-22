import React, { useEffect } from "react";
import useStyles from "./styles";
import background from "../../assets/img/Background.png";
import NavAppBar from "../../components/appbar";
import { Button, ListItem, ListItemText } from "@material-ui/core";
import top10 from "../../assets/img/top10.png";

export default function Home() {
  const classes = useStyles();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const modulesList = [
    {
      name: "Module Name 1",
      desc: "Something about it.",
    },
    {
      name: "Module Name 2",
      desc: "Something about it.",
    },
    {
      name: "Module Name 3",
      desc: "Something about it.",
    },
    {
      name: "Module Name 4",
      desc: "Something about it.",
    },
    {
      name: "Module Name 5",
      desc: "Something about it.",
    },
    {
      name: "Module Name 5",
      desc: "Something about it.",
    },
  ];

  return (
    <div>
      <NavAppBar />
      <div
        className={classes.background}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className={classes.body}>
          <div className={classes.textDiv}>
            <span className={classes.subtitle}>Python Module Statistics</span>
            <br />
            <span className={classes.title}>PySniffer</span>
            <br />
            <span className={classes.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              eget mauris eleifend, hendrerit ante id, ornare sem. Aliquam erat
              volutpat. Aliquam ornare vehicula ipsum. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Vestibulum congue, purus ac imperdiet mollis, eros odio
              vehicula metus, et blandit nibh est nec leo. Maecenas ornare
              posuere nunc eget elementum. Etiam consectetur tincidunt tellus
              rhoncus pellentesque. Sed rhoncus gravida massa, sit amet iaculis
              nunc sagittis eu. Maecenas dignissim est ante, nec malesuada
              turpis fringilla sit amet. Vivamus finibus arcu arcu. Cras
              sagittis ante sit amet nunc tempus, pellentesque scelerisque
              tellus pellentesque.
            </span>
          </div>
          <Button variant="contained" className={classes.button}>
            <span className={classes.buttonText}>Install</span>
          </Button>
          <br />
          <div className={classes.rankingDiv}>
            <span className={classes.rankingSubtitle}>
              Python Open Source Projects
            </span>
            <br />
            <span className={classes.rankingTitle}>Most Used Modules</span>
            <br />
            <div className={classes.list}>
              {modulesList.map((mod, index) => (
                <ListItem>
                  <span className={classes.number}>{index + 1}</span>
                  <ListItemText>
                    <span className={classes.modName}>{mod.name}</span>
                    <br />
                    <span className={classes.modDesc}>{mod.desc}</span>
                  </ListItemText>
                </ListItem>
              ))}
            </div>

            <Button variant="contained" className={classes.downloadButton}>
              <span className={classes.buttonText}>Download List</span>
            </Button>
          </div>
          <div className={classes.chartDiv}>
            <img src={top10} alt="Top 10 Bar Chart" className={classes.chart} />
          </div>
        </div>
      </div>
    </div>
  );
}
