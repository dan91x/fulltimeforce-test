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
export default dateDifference
