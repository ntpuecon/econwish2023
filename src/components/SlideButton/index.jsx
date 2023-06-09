import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import FloatingActionButtonGroup,  { FloatingActionMenuButton } from '../FAB';
import { BottomNavigation, Stack } from '@mui/material';
import {  AboutUsModal,SendPostCardModal } from '../Modal';
const icon = (
    <Paper sx={{ m: 1 }} elevation={4}>
        <Box component="svg" sx={{ width: 20, height: 20 }}>
            <Box
                component="polygon"
                sx={{
                    fill: (theme) => theme.palette.common.white,
                    stroke: (theme) => theme.palette.divider,
                    strokeWidth: 1,
                }}
                points="0,100 50,00, 100,100"
            />
        </Box>
    </Paper>
);

export default function SimpleSlide({autocompleteOptions}) {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    
    const fabs = <FloatingActionButtonGroup autocompleteOptions={autocompleteOptions} />

    return (
       
            <BottomNavigation>
            
            
                <Stack direction="row" sx={{ justifyContent: "flex-start" }}>
                    <FormControlLabel
                        control={<FloatingActionMenuButton onClick={handleChange} />}
                        label=""
                    />
                    {/* <FloatingActionMenuButton onClick={handleChange}/> */}
                    <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
                        <AboutUsModal />
                        <SendPostCardModal />
                    </Slide>
                </Stack>
            
                </BottomNavigation>
    );
}