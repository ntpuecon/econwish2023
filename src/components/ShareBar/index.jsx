import { IconButton, Stack } from '@mui/material';
import { EmailShareButton, FacebookIcon, FacebookShareButton, LineIcon, LineShareButton, LinkedinShareButton } from 'react-share';
import LinkIcon from '@mui/icons-material/Link';
import { MailOutlineOutlined, Menu } from '@mui/icons-material';


export default function ShareBar({ shareLink, title }) {
    return (
        <div className="share">
            <Stack direction="row" spacing={2} sx={{ justifyContent: "center", marginTop: "10px" }}>
                <LineShareButton url={shareLink} title={title}>
                    <LineIcon size={32} round={true} />
                </LineShareButton>
                <FacebookShareButton url={shareLink} quote={title}>
                    <FacebookIcon size={32} round={true} sx={{ fill: "#787878" }} />
                </FacebookShareButton>
                <EmailShareButton url={shareLink} subject={title}>
                    <Stack sx={{
                        cursor: "pointer",
                        marginTop: "-7px",
                        justifyContent: "center", width: "32px", height: "32px", backgroundColor: "#1a1a1a", borderRadius: "32px"
                    }}>

                        <MailOutlineOutlined sx={{ fill: "white", margin: "auto" }} />
                    </Stack>
                </EmailShareButton>

                <Stack
                    sx={{
                        cursor: "pointer",
                        justifyContent: "center", width: "32px", height: "32px", backgroundColor: "#1a1a1a", borderRadius: "32px"
                    }}>
                    <LinkIcon sx={{ fill: "white", margin: "auto" }} onClick={() => {
                        console.log(shareLink)
                        navigator.clipboard.writeText(shareLink)
                            .then(() => {
                                alert("已複製連結")
                            })


                        // navigator.clipboard.writeText(shareLink)
                        // alert(shareLink+"已複製連結")
                    }} />
                </Stack>


                {/* <Like href={appConfig.appUrl + '#' + e.id} colorScheme="dark"/> */}

            </Stack>
        </div>

    )
}