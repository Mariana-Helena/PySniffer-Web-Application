import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import NavAppBar from "../../components/appbar";
import { VictoryChart, VictoryBar, VictoryAxis, VictoryPie } from "victory";
import background from "../../assets/img/Background2.png";
interface chartBar {
  x: string;
  y: number;
  color: string;
}

export default function Statistics() {
  const classes = useStyles();

  const [hovered, setHovered] = React.useState(false);

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
      <div
        className={classes.background}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className={classes.body}>
          <div>
            <div className={classes.textDiv}>
              <span className={classes.title}>Most Used Modules</span>
            </div>
            <div className={classes.chart}>
              <VictoryChart domainPadding={10}>
                <VictoryBar
                  horizontal
                  data={top10}
                  barWidth={20}
                  style={{
                    data: {
                      fill: ({ datum }) => datum.color,
                    },
                    labels: {
                      fontSize: 10,
                      fill: "#D9D9D9",
                    },
                  }}
                  labels={({ datum }) => `${datum.y}`}
                />
                {top10.map((d: any, i) => {
                  return (
                    <VictoryAxis
                      label={d.name}
                      style={{
                        axis: {
                          stroke: "#D9D9D9",
                        },
                        tickLabels: {
                          fill: "#D9D9D9",
                          fontSize: 10,
                          fontFamily: "Montserrat",
                        },
                      }}
                    />
                  );
                })}
              </VictoryChart>
            </div>
          </div>
          <div className={classes.pieChart}>
            <svg width="600" height="400" viewBox="0 0 400 400">
              <VictoryPie
                colorScale={["transparent"]}
                data={top10}
                labelRadius={180}
                labels={({ datum }) => `${datum.x}`}
                standalone={false}
                radius={150}
                style={{
                  labels: {
                    fontSize: 20,
                    fill: "#000E22",
                  },
                }}
              />
              <VictoryPie
                colorScale={["#275ca1", "#5789c9", "#83a2c9", "#B0C4DE"]}
                data={top10}
                labelRadius={125}
                labels={({ datum }) => `${datum.y}%`}
                standalone={false}
                radius={150}
                style={{
                  labels: {
                    fontSize: 12,
                    fill: "#fff",
                  },
                }}
                events={[
                  {
                    target: "data",
                    eventHandlers: {
                      onMouseOut: () => {
                        return [{
                          target: "labels",
                          mutation: () => null,
                        },
                        {
                          mutation: () => null,
                        }
                        ];
                      },
                    },
                  },
                  {
                    target: "data",
                    eventHandlers: {
                      onMouseOver: () => {
                        return [{
                          target: "labels",
                          mutation: (props) => ({
                            style: Object.assign({}, props.style, {
                              fontSize: 20
                            }),

                          }),
                        },
                        {
                          mutation: (props) => ({
                            radius: 170,
                            sliceStartAngle: props.datum.startAngle + 5,
                            sliceEndAngle: props.datum.endAngle - 5,
                            labelRadius: 160,
                            style: Object.assign({}, props.style, {
                              fill: "tomato",
                            }),

                          }),
                        }
                        ];
                      },

                    }
                  }
                ]}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
