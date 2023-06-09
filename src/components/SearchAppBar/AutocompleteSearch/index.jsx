import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';


export default function AutoCompleteSearch({options}) {
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
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search input"
          InputProps={{
            ...params.InputProps,
            type: 'search',
          }}
        />
      )}
      sx={{ width: "200px", backgroundColor: "white" }}
      onChange={handleOnChange}
    />
  );
}

function scrollToSearchedCard(id) {
  const card = document.getElementById(id)
  card.scrollIntoView({ behavior: 'smooth', block: 'center' })
}