import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AutoCompleteSearch from './AutocompleteSearch';
import { BottomNavigation } from '@mui/material';

export default function SearchAppBar({autocompleteOptions}) {

   let search = <AutoCompleteSearch options={autocompleteOptions}/>
    
  return (
    // https://mui.com/material-ui/react-bottom-navigation/
    <BottomNavigation sx={{
      backgroundColor:  "#1976d2",
      paddingTop: "5px"}}>
                {
            search
          }
  </BottomNavigation>
  );
}