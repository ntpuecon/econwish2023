import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AbuotUs from '../AboutUs';
import SendIcon from '@mui/icons-material/Send';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { IconButton, Link, List, ListItem, ListItemButton, ListItemText, Stack } from '@mui/material';
import Fab from '@mui/material/Fab';
import { FormatListBulleted } from '@mui/icons-material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "70vw",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    color: "black",
    maxWidth: "450px",
    p: 4,
};

export function AboutUsModal({ fab }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const button = fab ? (<Stack sx={{ justifyContent: "center" }} mr={3}>

        <IconButton

            onClick={handleOpen}
            size="small"
            edge="start"
            color="#091e32"
            aria-label="open drawer"
        >
            <InfoOutlinedIcon />
        </IconButton>

        <Typography>
            設計團隊
        </Typography>

    </Stack>) : (
        <Fab
            size="small"
            onClick={handleOpen}
            color="#091e32" aria-label="edit">

            <InfoOutlinedIcon />
        </Fab>
    )
    return (
        <>
            {button}
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <AbuotUs />
                </Box>
            </Modal>
        </>
    );
}

export function SendPostCardModal({ fab }) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const button = (fab) ? (<Stack sx={{ justifyContent: "center" }} mr={3}>

        <IconButton
            onClick={handleOpen}
            size="small"
            edge="start"
            color="inherit"
            aria-label="open drawer"
        >
            <SendIcon />
        </IconButton>

        <Typography>
            寄明信片
        </Typography>

    </Stack>) : (
        <Fab
            size="small"
            onClick={handleOpen}
            color="#091e32" aria-label="edit">

            <SendIcon />
        </Fab>
    )
    return (
        <>
            {button}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Stack spacing={2} sx={{ justifyContent: "center", alignItems: "center"}} >
                        <Typography>按鈕填寫表單，送出生成明信片賀卡。</Typography>
                        <Fab variant='circular' sx={{ backgroundColor: "#673ab7", color: "white", margin: "auto" }}>
                            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf2uefS9Q6o16R35FbHbvjZbBlkMysjLdQw6nMzYJ2mkF4sdA/viewform?usp=sf_link"
                                underline="none" color="white">
                                <FormatListBulleted />

                            </Link>
                        </Fab>
                        <ModalSendPostcardList />
                    </Stack>
                </Box>
            </Modal>

        </>
    );
}

function ModalSendPostcardList(){
    return(
        <List>
            <ListItem disablePadding sx={{flexDirection: "column", alignItems: "flex-start", }}>
                
                <ListItemText>
                • 須使用可收到系辦通知的email寄送明信片。
                </ListItemText>
                
                <ListItemText>
                • 一人限寄送一張明信片。
                    </ListItemText>
                <ListItemText>
                    • 要修改明信片內容請再次填寫表單，新的明信片會覆蓋舊的。
                </ListItemText>
            </ListItem>
        </List>
    )
}