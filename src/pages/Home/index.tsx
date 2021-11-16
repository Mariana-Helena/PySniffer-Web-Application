import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import NavAppBar from "../../components/appbar";
import { Button, ListItem, ListItemText, Radio, RadioGroup, FormControl,
FormControlLabel, TextField } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import SettingsApplicationsOutlined from '@material-ui/icons/SettingsApplicationsOutlined';
import libs from '../../data/libs.json';
import libsPy from '../../data/libs_Py.json';
import filesJson from '../../data/files.json';
import CsvDownloader from 'react-csv-downloader';
import teamWork from '../../assets/img/teamWork.png';
import SearchIcon from '@material-ui/icons/Search';

export default function Home() {
  const classes = useStyles();

  const [modulesList, setModulesList] = useState<any>([]);
  const [projects, setProjects] = useState(0);
  const [files, setFiles] = useState(0);
  const [modules, setModules] = useState(0);
  const [searchModule, setSearchModule] = useState("");
  const [foundModulesList, setFoundModulesList] = useState<any>([]);
  const [selected, setSelected] = useState('all');

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    var list: any = [];

    libs.forEach(data => {
      var obj = {
        name: data.name,
        amount: parseInt(data.amount),
        desc: 'External Library'
      };
      list.push(obj);
    });

    libsPy.forEach(data => {
      var obj = {
        name: data.name,
        amount: parseInt(data.amount),
        desc: 'Standard Library'
      };
      list.push(obj);
    });
    list.sort(compare);
    setModulesList(list);
    setModules(libs.length + libsPy.length);
    setProjects(filesJson.length);
    setProjects(129);
    var qt = 0;
    filesJson.forEach(e => {
      qt += parseInt(e.amount_of_pyfiles);
    });
    setFiles(qt);
  }, []);

  function compare(a: any, b: any) {
    if (a.amount < b.amount) {
      return 1;
    }
    if (a.amount > b.amount) {
      return -1;
    }
    return 0;
  }

  /**
 * CSV data
 */
  const CSVdata: any = [];
  /**
   * CSV columns
   */
  const columns = [
    {
      id: "first",
      displayName: "Name",
    },
    {
      id: "second",
      displayName: "Amount",
    },
    {
      id: "third",
      displayName: "Origin",
    }
  ];

  /**
  * Return all events in CSV format
  */
  const getModules = () => {
    for (var i = 0; i < modulesList.length; i++) {
      if(selected == 'all' || modulesList[i].desc == selected){
        var event = {
          first: modulesList[i].name,
          second: modulesList[i].amount,
          third: modulesList[i].desc
        };
        CSVdata.push(event);
      }
    }
    return CSVdata;
  };

  const saveFile = () => {
    saveAs(
      "https://github.com/SinaraPimenta/PySniffer/archive/refs/heads/main.zip",
      "PySniffer.zip"
    );
  };

  const search = () => {
    setFoundModulesList(modulesList.filter((p)=> p.name.includes(searchModule)));
  };

  const handleSearchChange = (event) => {
        if (event.key === "Enter") {
          const searchString = (event.target.value).toLocaleLowerCase();
          setSearchModule(searchString)
          setFoundModulesList(modulesList.filter((p)=> p.name.includes(searchString)));
        }
  };

  const updateSelection = (event, value) => {
    setSelected(value);
  };

  return (
    <div>
      <NavAppBar />
      <div
        className={classes.background}
      >
        <div className={classes.body}>
          <div className={classes.textDiv}>
            <span className={classes.subtitle}>Python Module Statistics</span>
            <br />
            <span className={classes.title}>PySniffer</span>
            <br />
            <span className={classes.text}>
              The principle of the tool, called PySniffer, is to perform static analysis 
              of Python code and verify imports, generating a listof external modules and 
              a list of modules from the standard li-brary present in the repositories with 
              Python scripts best placedon GitHub, based on their stars. In addition, the 
              tool also gene-rates graphics to facilitate the understanding of the results 
              andallows the user to analyze his own project in order to verify ifthe libraries 
              used by him are present in the generated lists.
            </span>
            <br />       
            <Button variant="contained" className={classes.button} onClick={saveFile}>
              <span className={classes.buttonText}>Try it</span>
            </Button>
            <br />
            <div className={classes.rankingDiv}>
            <span className={classes.rankingSubtitle}>
              Python Open Source Projects*
            </span>
            <br />
            <span className={classes.rankingTitle}>List of Found Modules</span>
            <br />            
            <div>
            <FormControl component="fieldset">
              <RadioGroup row 
                aria-label="libs"
                defaultValue="all"
                name="radio-buttons-group"
                value={selected} onChange={updateSelection}
              >
                <FormControlLabel value="all" control={<Radio classes={{root: classes.radio, checked: classes.checked}}/>} label="All Libraries" />
                <FormControlLabel value="Standard Library" control={<Radio classes={{root: classes.radio, checked: classes.checked}}/>} label="Standard Library" />
                <FormControlLabel value="External Library" control={<Radio classes={{root: classes.radio, checked: classes.checked}}/>} label="External Libraries" />
              </RadioGroup>
            </FormControl>
            </div>
            <TextField id="outlined-basic"  variant="outlined" className={classes.searchBar}
              onBlur={(e)=> setSearchModule(e.target.value)} 
              onKeyDown={handleSearchChange}
            />
            <Button  onClick={search} className={classes.searchButton}>              
             <SearchIcon className={classes.searchIcon}/>
            </Button>
            <div className={classes.list}>
              {searchModule == '' ? modulesList.filter((m) => selected == 'all' || m.desc == selected).map((mod: any, index: any) => (
                <ListItem className={classes.listItem}>
                  <span className={classes.number}>{index+1}</span>
                  <ListItemText>
                    <span className={classes.modName}>{mod.name} ({mod.amount} projects)</span>
                    <br />
                    <span className={classes.modDesc}>From {mod.desc}</span>
                  </ListItemText>
                </ListItem>
              )):
              foundModulesList.map((mod: any, index: any) => (
                <ListItem className={classes.listItem}>
                  <span className={classes.number}>{index+1}</span>
                  <ListItemText>
                    <span className={classes.modName}>{mod.name} ({mod.amount} projects)</span>
                    <br />
                    <span className={classes.modDesc}>From {mod.desc}</span>
                  </ListItemText>
                </ListItem>
              ))
              }
            </div>
            <CsvDownloader
              filename={"ModulesList"}
              separator=";"
              wrapColumnChar="'"
              columns={columns}
              datas={getModules()}
            >
              <Button variant="contained" className={classes.downloadButton}>
                <span className={classes.buttonText}>Download List</span>
              </Button>
            </CsvDownloader>
          </div>
          </div>   
          
          <div className={classes.img}>
          <img src={teamWork}/>
          </div>
          <div >
          </div>
          <br />
          
          <div className={classes.div}>
            <div className={classes.infoDiv}>
              <GitHubIcon className={classes.icon} />
              <div className={classes.info}>
                <span className={classes.infoNumber}>{projects}</span>
                <br />
                <span className={classes.infoText}> repositories</span>
              </div>
            </div>
            <div className={classes.infoDiv}>
              <InsertDriveFileOutlinedIcon className={classes.icon} />
              <div className={classes.info}>
                <span className={classes.infoNumber}>{files}</span>
                <br />
                <span className={classes.infoText}> .py files</span>
              </div>
            </div>
            <div className={classes.infoDiv}>
              <SettingsApplicationsOutlined className={classes.icon} />
              <div className={classes.info}>
                <span className={classes.infoNumber}>{modules}</span>
                <br />
                <span className={classes.infoText}> modules</span>
              </div>
            </div>
            <br />
            <div className={classes.noteDiv}>
              <span className={classes.note}> *Data were collected from Python projects in open source GitHub repositories, being selected those with more than 10,000 stars and meeting some criteria, which are listed in this project's paper.</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
