import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Book from '@material-ui/icons/Book';

import './Header.css';

const Header = ({ removeUser, user }) => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton aria-label="Menu">
          <Book />
        </IconButton>
        <Typography variant="h6" color="inherit">
          React Performance Benchmark
        </Typography>
        <div className="Header--menu-container">
          <Button component={Link} to="/home">
            Home
          </Button>
          <Button component={Link} to="/login">
            Login
          </Button>
          <Button onClick={() => removeUser()}>Logout {user.email}</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
