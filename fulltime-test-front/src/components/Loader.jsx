import {Skeleton} from '@mui/material'
import {CircularProgress,Typography} from '@mui/material'

export default function Loader(){
    return(
    <div className="position-relative" style={{height:"40vh"}}>
        <Skeleton className="w-100 h-100"></Skeleton>
        <div className="position-absolute d-flex flex-column" style={{top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}>
            <CircularProgress></CircularProgress>
            <Typography variant="caption">Loading</Typography>
        </div>
    </div>
    )
}
