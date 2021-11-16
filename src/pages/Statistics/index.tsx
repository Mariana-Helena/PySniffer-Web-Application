import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import NavAppBar from "../../components/appbar";
import { VictoryChart, VictoryBar, VictoryAxis, VictoryPie } from "victory";
import libs from '../../data/libs.json';
import libsPy from '../../data/libs_Py.json';
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

  const [top10, setTop10] = useState([]);
  const [top10Py, setTop10Py] = useState([]);

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
    setTop10Py(getTop10(libsPy));
    setTop10(getTop10(libs));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTop10 = (libsList) => {
    var list = sortList(libsList);
    list.reverse();
    list = list.slice(0, 10);
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
    return bars.reverse();
  };

  const sortList = (list: any) => {
    return list.sort((first: any, second: any) =>
      first.amount - second.amount  
    );
  };

  return (
    <div>
      <NavAppBar />
      <div
        className={classes.background}
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
            <div className={classes.chart}>
              <VictoryChart domainPadding={10}>
                <VictoryBar
                  horizontal
                  data={top10Py}
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
                  labels={({ datum }) => `${datum.y} `}
                />
                {top10Py.map((d: any, i) => {
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
