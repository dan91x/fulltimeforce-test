import CommitIcon from "@mui/icons-material/Commit";
import { Typography,Button } from "@mui/material";

function dateDifference(dateToCalc){
    const dateNowTS = new Date()
    const dateToCalcTS = new Date(dateToCalc)
    const differenceTS = dateNowTS-dateToCalcTS

    const minsDiff = Math.floor(differenceTS/(1000*60))
    const minsYear = 365*24*60;
    const minsMonth = 30*24*60;
    const minsWeek = 7*24*60;
    const minsDay = 24*60;

    if( minsDiff>=minsYear ){
        return Math.floor(minsDiff/minsYear)+" year(s) ago"
    }else if(minsDiff>=minsMonth){
        return Math.floor(minsDiff/minsMonth)+" month(s) ago"
    }else if(minsDiff>=minsWeek){
        return Math.floor(minsDiff/minsWeek)+" week(s) ago"
    }else if(minsDiff>=minsDay){
        return Math.floor(minsDiff/minsDay)+" day(s) ago"
    }else if(minsDiff>=60){
        return Math.floor(minsDiff/60)+" hour(s) ago"
    }else{
        return Math.floor(minsDiff)+" minute(s) ago"
    } 
}

function Commit(props) {
    let { commitdata } = props;
    return (
        <div className="d-flex justify-content-between align-items-center border-bottom py-2 px-4">
            <div className="">
                <div className="d-flex justify-content-start align-items-center">
                    <CommitIcon className="text-secondary"></CommitIcon>
                    {commitdata?.commit?.message ? (
                        <Typography variant="body2" style={{fontFamily:"roboto",textAlign:"left"}} className="fw-bold ms-2">
                            {commitdata.commit.message} 
                        </Typography>
                    ) : (
                        ""
                    )}
                </div>
                <div className="d-flex align-items-start ms-5">
                    {
                        commitdata?.commit?.author?.name?
                        <Typography variant="caption" className="text-dark fw-bold">{commitdata.commit.author.name}</Typography>:""
                    }
                    <Typography variant="caption" className="text-secondary mx-1"> authored and </Typography>
                    {
                        commitdata?.commit?.committer?.name?
                        <Typography variant="caption" className="text-dark fw-bold">{commitdata.commit.committer.name}</Typography>:""
                    }
                    <Typography variant="caption" className="text-secondary mx-1">commited {dateDifference(commitdata.commit.committer.date)}.</Typography>
                </div>
            </div>
            <div className="">
                {
                    commitdata && commitdata.sha && commitdata.url?
                    <a href={commitdata.html_url} target="_blank" className="text-decoration-none">
                        <Button size="small" variant="outlined" style={{textTransform:'lowercase'}}>{commitdata.sha.substring(0,7)}</Button> 
                    </a>:""
                } 
            </div>
        </div>
    );
}

export default Commit
