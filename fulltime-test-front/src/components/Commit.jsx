import CommitIcon from "@mui/icons-material/Commit";
import { Typography,Button } from "@mui/material";
import dateDifference from "./functions/dateDifference";


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
                    <a href={commitdata.html_url} target="_blank" rel="noreferrer" className="text-decoration-none">
                        <Button size="small" variant="outlined" style={{textTransform:'lowercase'}}>{commitdata.sha.substring(0,7)}</Button> 
                    </a>:""
                } 
            </div>
        </div>
    );
}

export default Commit
