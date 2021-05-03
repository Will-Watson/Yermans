import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& .MuiPaper-root': {
      // backgroundColor: '#6930C3',
    },
    '& .MuiListItem-root': {
      paddingTop: '20px',
      paddingBottom: '20px',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
    fontFamily: 'Cormorant Unicase',
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  paper: {
    background: 'blue',
  },
}));

const NavBar = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <ListItem button style={{ color: 'black' }}>
            Home
          </ListItem>
        </Link>
        <Link to='/contact' style={{ textDecoration: 'none' }}>
          <ListItem button style={{ color: 'black' }}>
            Contact
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h4' className={classes.title}>
          Yerman's Irish Pub
        </Typography>
        <div>
          {['right'].map((anchor) => (
            <React.Fragment key={anchor}>
              <IconButton
                edge='start'
                className={classes.menuButton}
                color='inherit'
                aria-label='menu'
                onClick={toggleDrawer(anchor, true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                className={classes.root}
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
