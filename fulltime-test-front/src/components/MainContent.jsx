import {Typography} from '@mui/material'
import useData from './datahook/useData'
import CommitsList from './CommitsList'

export default function MainContent(props){

    const { CommitsData,Loading } = useData()

    return(
        <div className="container py-5">
            <div className="rounded bg-light py-5 border shadow-sm">
                <Typography variant="body1" style={{fontFamily:"roboto"}}>
                    <span className="fw-bold">Daniel Guerra </span>
                    Technical Test Fulltime-Force
                </Typography>
                <Typography variant="body2" className="text-secondary">Link to 
                    <a href="https://github.com/dan91x/fulltimeforce-test/commits/master" rel="noreferrer" className="ms-1" target="_blank">Repository</a>
                </Typography>
                <CommitsList Loading={Loading} CommitsData={CommitsData}/>
            </div>
        </div>
    )
}
