import React, { useState, useEffect } from "react";
import logo from '../logo.svg';
import '../App.css';
import { makeStyles } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Efek = () => {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const [name, setName] = useState({
    lastName: "",
    firstName: "",
  });
  useEffect(() => {
    document.title = `${count}Kali Click`;
  }, [count]);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Tugas Modul4 Kelompok 31</h1>
          <p>{`${count}Kali Click`}</p>
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button onClick={() => setCount((prev) => prev + 1)}>Button</Button>
            <Button onClick={() => setCount(0)}>Reset</Button>
          </ButtonGroup>
          <p>{`Nama saya ${name.lastName} ${name.firstName}`}</p>
          <form className={classes.root} noValidate autoComplete="off">
            <Input
              placeholder="First Name"
              value={name.lastName}
              onChange={(e) => {
                setName({ ...name, lastName: e.target.value });
              }}
            />
            <Input
              placeholder="Last Name"
              value={name.firstName}
              onChange={(e) => {
                setName({ ...name, firstName: e.target.value });
              }}
            />
          </form>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </>
  );
};

export default Efek;
