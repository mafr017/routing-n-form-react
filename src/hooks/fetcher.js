import axios from "axios";
import { useEffect, useState } from "react"
import Cookies from 'js-cookie'

export const useFetchers = (config) => {
    const [data, dataSet] = useState();
    const [isLoading, isLoadingSet] = useState(true);

    const token = Cookies.get("token");

    const fetchData = async () => {
        isLoadingSet(true);

        try {
            const { data: dataFromAPI } = await axios({
                baseURL: 'https://reqres.in/api',
                url: `${config?.path}`,
                method: config?.method || 'get',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            dataSet(dataFromAPI);
            isLoadingSet(false);
        } catch (error) {
            console.log(error);
        }
    }

    const setLoading = (val) => isLoadingSet(val)

    useEffect(() => {
        fetchData(config);
    }, [])

    return { data, isLoading, setLoading }
}