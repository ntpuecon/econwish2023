import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import { BottomNavigation } from '@mui/material';
import AutoCompleteSearch from '../SearchAppBarTop/AutocompleteSearch';
import SearchIcon from '@mui/icons-material/Search';
import { AboutUsModal, SendPostCardModal } from '../Modal';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import RefreshIcon from '@mui/icons-material/Refresh';

export default function FloatingActionButtons({ autocompleteOptions }) {
    return (
        <BottomNavigation sx={{
            "position": "fixed",
            "bottom": "3vh",
            "background": "transparent",
            justifyContent: "flex-start"
        }}>
            {/* <FloatingActionMenuButton /> */}
            <FloatingActionButtonGroup autocompleteOptions={autocompleteOptions}/>
            {/* <FloatingActionSlideButton autocompleteOptions={autocompleteOptions} /> */}
        </BottomNavigation>
    );
}

export function FloatingActionSlideButton({autocompleteOptions}) {

    const [checked, setChecked] = React.useState(false);
    const containerRef = React.useRef(null);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <Box
            sx={{
                height: 180,
                width: 240,
                display: 'flex',
                padding: 2,
                borderRadius: 1,
                bgcolor: (theme) =>
                    theme.palette.mode === 'light' ? 'grey.100' : 'grey.900',
                overflow: 'hidden',
            }}
            ref={containerRef}
        >
            <Box sx={{ width: 200 }}>
                <FloatingActionMenuButton onClick={handleChange} />
                {/* <FormControlLabel
                    control={
                    
                    // <Switch checked={checked} onChange={handleChange} />
                }
                    label="Show from target"
                /> */}
                <Slide direction="right" in={checked} container={containerRef.current}>
                    <FloatingActionButtonGroup autocompleteOptions={autocompleteOptions}/>
                </Slide>
            </Box>
        </Box>
    );

}
export function FloatingActionMenuButton({onClick}) {
    return(
        <Fab color="primary" aria-label="add" onClick={onClick} size="small">
            <AddIcon />
        </Fab>
    )
}

export function FloatingActionButtonGroup({autocompleteOptions}) {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>

            <AboutUsModal />
            <SendPostCardModal />

            <Fab variant="extended" size="small">
                <SearchIcon sx={{ mr: 1 }} />
                <AutoCompleteSearch options={autocompleteOptions} />
            </Fab>
            <Fab variant="extended" size="small">
                <RefreshIcon onClick={
                    () => {window.location.reload()}
                }/>
            </Fab>

        </Box>
    )
}