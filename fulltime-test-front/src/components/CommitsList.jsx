import Commit from './Commit' 
import Loader from './Loader';

export default function CommitsList(props) {
    let { CommitsData,Loading } = props;

    if(!Loading){
        return (
            <div className="border bg-white shadow-sm py-1 mx-3 mt-3 rounded py-5">
                {CommitsData.map((commitdata, index) => {
                    return <Commit commitdata={commitdata} key={index}></Commit>;
                })}
            </div>
        );
    }else{
        return(
            <Loader></Loader>
        )
    }
}
