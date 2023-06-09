import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { SendPostCardModal } from '../Modal';
import { Fab } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AutoCompleteSearch from '../SearchAppBarTop/AutocompleteSearch';
import SendIcon from '@mui/icons-material/Send';
import { RefreshOutlined } from '@mui/icons-material';


export default function SpeedDailTools({ autocompleteOptions }) {
  return (
    
      <SpeedDial
        direction="right"
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 16, left: 16 }}
        icon={<SpeedDialIcon />}
      >

        <SpeedDialAction
          icon={<SendPostCardModal />} />
        <SpeedDialAction sx={{marginLeft: "10px", width: "130px",
        borderWidth: "0px"}}
          icon={<AutoCompleteSearch options={autocompleteOptions} />} />
          <SpeedDialAction
            icon={<RefreshOutlined 
            onClick={() => window.location.reload()}
            />} />



        {/* {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))} */}
      </SpeedDial>
    
  );
}