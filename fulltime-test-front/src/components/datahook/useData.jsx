import { useState, useEffect } from "react";
import axios from "axios";

export default function useData() {
    const [CommitsData, setCommitsData] = useState([]);
    const [Loading,setLoading] = useState(true);

    useEffect(() => {
        const loadCommits = () => {
            axios({
                url: "http://localhost:3020/repository/commits",
            })
                .then((resp) => {
                    if (resp.status === 200 && resp.data) {
                        setCommitsData(resp.data);
                        setLoading(false)
                    }
                })
                .catch((resp) => {
                    console.log(resp);
                });
        };

        loadCommits()
    },[])

    return { CommitsData,Loading };
}
