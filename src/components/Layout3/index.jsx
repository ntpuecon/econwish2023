import { Container } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";


export function Gallery({children}){
    return(
        <Grid2 container spacing={2} justifyContent="center">
            {children}
        </Grid2>
    )
}
export function GalleryItem({className, children}){
    return(
        <Grid2 item="true" xs={12} sm={"auto"} md={6} lg={4} xl={3} className={className} >
            
            {children}
            
        </Grid2>
    )
}