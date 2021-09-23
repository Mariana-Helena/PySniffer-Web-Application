import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import NavAppBar from "../../components/appbar";
import { VictoryChart, VictoryBar, VictoryAxis } from "victory";

interface chartBar {
  x: string;
  y: number;
  color: string;
}

export default function Statistics() {
  const classes = useStyles();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const example = {
    lib_list: [
      {
        name: "pymongo",
        amount: 1,
      },
      {
        name: "matplotlib",
        amount: 23,
      },
      {
        name: "numpy",
        amount: 20,
      },
      {
        name: "sklearn",
        amount: 5,
      },
      {
        name: "pytest",
        amount: 17,
      },
      {
        name: "scipy",
        amount: 15,
      },
      {
        name: "beautifulsoup",
        amount: 12,
      },
      {
        name: "pandas",
        amount: 10,
      },
      {
        name: "requests",
        amount: 18,
      },
      {
        name: "seaborn",
        amount: 3,
      },
      {
        name: "flask",
        amount: 1,
      },
      {
        name: "pillow",
        amount: 30,
      },
    ],
  };

  const [top10, setTop10] = useState([]);

  const colors = [
    "darkred",
    "firebrick",
    "indianred",
    "tomato",
    "coral",
    "salmon",
    "darksalmon",
    "lightsalmon",
    "sandybrown",
    "peachpuff",
  ];

  useEffect(() => {
    getTop10();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTop10 = () => {
    var list = example.lib_list;
    list = sortList(list).slice(0, 10);
    var bars: any = [];
    var i = 0;
    list.forEach((element) => {
      var bar: chartBar = {
        x: element.name,
        y: element.amount,
        color: colors[i],
      };
      bars.push(bar);
      i++;
    });
    setTop10(bars.reverse());
  };

  const sortList = (list: any) => {
    return list.sort((first: any, second: any) =>
      first.amount < second.amount ? 1 : first.amount > second.amount ? -1 : 0
    );
  };

  return (
    <div>
      <NavAppBar />
      <div className={classes.background}>
        <div className={classes.body}>
          <div className={classes.chart}>
            <VictoryChart domainPadding={10} >
              <VictoryBar horizontal
                data={top10}
                barWidth={20}
                style={{
                  data: {
                    fill: ({ datum }) => datum.color,
                  },
                }}
                labels={({ datum }) => `${datum.y}`}
              />
              {top10.map((d: any, i) => {
                return (
                  <VictoryAxis
                    label={d.name}
                    
                  />
                );
              })}
            </VictoryChart>
          </div>
        </div>
      </div>
    </div>
  );
}
