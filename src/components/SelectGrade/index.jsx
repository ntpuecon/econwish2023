import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import grades from "./grades.json"

export default function SelectGrade({users}) {
  const [grade, setGrade] = React.useState('全部');

  
  const handleChange = (event) => {
    console.log(event.target.value)
    setGrade(event.target.value);
    console.log(event.target.value)

    filterByGrade(grades, event.target.value)
  };

  return (
    // <Box sx={{ minWidth: 120, maxWidth: 120 }}>
      <FormControl fullWidth size="small" sx={{width: "150px"}}>
        <InputLabel
            variant='filled'
        id="demo-simple-select-label">分類</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={grade}
          label=""
          onChange={handleChange}
          sx={{backgroundColor: "white"}}
        >
        {
            grades.map(
                (e, i) => {
                    return (
                        <MenuItem key={i} value={e}>{e}</MenuItem>
                    )
                }
            )
        }
        </Select>
      </FormControl>
    // </Box>
  );
}

function filterByGrade(grades, grade){
    const index = grades.indexOf(grade)
    if(grade!=="全部"){
      const gradesToHide = grades.toSpliced(index, 1)
      gradesToHide.forEach(e => {
          hideElementsByGrade(e)
      })
      showChosenGrade(grade)
    } else {
      grades.forEach(e=>{
        showChosenGrade(e)
      }) 
    }

}
function showChosenGrade(grade){
  const elements = document.getElementsByClassName(grade)
  Object.keys(elements).forEach(e => {
    elements[e].style.display = "block"})
}

function hideElementsByGrade(grade){
  const elements = document.getElementsByClassName(grade)
  Object.keys(elements).forEach(e => {
    elements[e].style.display = "none"})
}