import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';


export default function AutoCompleteSearch({ options }) {
  // reference: https://mui.com/material-ui/react-autocomplete/#free-solo


  const handleOnChange = (event, newValue) => {
    console.log(event)
    console.log(newValue)
    scrollToSearchedCard(newValue.id)
  }


  return (

    <Autocomplete
      freeSolo
      id="search"
      disableClearable
      options={options}
      size='small'
      
      renderInput={(params) => (
        <TextField
        variant="outlined"
          {...params}
          sx={{width: "18ch", backgroundColor: "white"}}
          label="搜尋寄件人"
          InputProps={{
            ...params.InputProps,
            type: 'search',
            variant: 'standard'
          }}
        />
      )}
      // sx={{width: "16ch", backgroundColor: "white", height: "1.5rem"}}
      onChange={handleOnChange}
    />

  );
}

function scrollToSearchedCard(id) {
  const card = document.getElementById(id)
  card.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" })
}