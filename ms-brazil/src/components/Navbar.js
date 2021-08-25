import React from "react";
import {AppBar, Toolbar, Typography, Link, Button, Popper, Grow, ClickAwayListener, Paper, MenuList, MenuItem} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CopyUrlBtn from "../components/CopyUrlBtn";

//Icons
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PublicIcon from "@material-ui/icons/Public";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    zIndex: 50
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    fontSize: "24px",
  },
  beta: {
    color: "#DEF000",
    align: "left",
  },
  MenuList: {
    padding: "18px",
    paddingLeft: "0px",
    paddingRight: "5px",
    margin: "-7px",
    fontSize: "14px",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div>
            <Button
              ref={anchorRef}
              aria-controls={open ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              color="inherit"
              edge="start"
              className={classes.menuButton}
              aria-label="open drawer"
            >
              <MenuIcon />
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper
                    style={{
                      border: "7px solid #CED8D7",
                    }}
                  >
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown}
                        className={classes.MenuList}
                      >
                        <MenuItem style={{fontSize: "15px"}} onClick={handleClose}>
                          <Link color="inherit" href="https://github.com/csp-inc/fluvius">
                            <ExitToAppIcon
                              style={{ color: "rgb(246, 122, 55)" }}
                            />
                            &nbsp; Fluvius GitHub Repository
                          </Link>
                        </MenuItem>
                        <MenuItem style={{fontSize: "15px"}} onClick={handleClose}>
                          <Link
                            color="inherit"
                            href="https://analytics-lab.org/ecosystemmonitoring/"
                          >
                            <PublicIcon
                              style={{ color: "rgb(246, 122, 55)" }}
                            />
                            &nbsp; Analytics Lab + AI for Earth
                          </Link>
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>

          <Typography
            align="center"
            className={classes.title}
            variant="h6"
            noWrap
          >
            Fluvius{" "}
            {/* <span style={{ color: "#DEF000"}}>BETA</span> */}
          </Typography>

          <Typography variant="h6" noWrap className={classes.beta}>
            BETA
          </Typography>

          <CopyUrlBtn />
        </Toolbar>
      </AppBar>
    </div>
  );
}
