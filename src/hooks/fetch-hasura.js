import axios from "axios";
import { useEffect, useState } from "react"

export const useFetchHasura = (config) => {
    const [data, dataSet] = useState();
    const [isLoading, isLoadingSet] = useState(true);

    const fetchData = async () => {
        isLoadingSet(true);
        console.log("GET DATA TODO");

        try {
            const { data: dataFromAPI } = await axios({
                baseURL: 'https://flexible-spaniel-66.hasura.app/api/rest',
                url: `${config?.path}`,
                method: 'get',
                headers: {
                    'x-hasura-admin-secret': '446HtDOKpu9mnhN6bsVckg26xcSxhKOUQedLpYaHZ316KM3yobu0NsDA95Wo1GuZ'
                }
            })

            dataSet(dataFromAPI);
            console.log(dataFromAPI);
            isLoadingSet(false);
        } catch (error) {
            console.log(error);
        }
    }

    const insertData = async (todo) => {
        isLoadingSet(true);

        try {
            const { data: dataFromAPI } = await axios({
                baseURL: 'https://flexible-spaniel-66.hasura.app/api/rest',
                url: `${config?.path}`,
                method: 'post',
                headers: {
                    'x-hasura-admin-secret': '446HtDOKpu9mnhN6bsVckg26xcSxhKOUQedLpYaHZ316KM3yobu0NsDA95Wo1GuZ'
                },
                data: {
                    todo: todo
                }
            })

            console.log(dataFromAPI);
            isLoadingSet(false);
            fetchData(config);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteData = async (i) => {
        isLoadingSet(true);

        try {
            const { data: dataFromAPI } = await axios({
                baseURL: 'https://flexible-spaniel-66.hasura.app/api/rest',
                url: `${config?.path}`,
                method: 'delete',
                headers: {
                    'x-hasura-admin-secret': '446HtDOKpu9mnhN6bsVckg26xcSxhKOUQedLpYaHZ316KM3yobu0NsDA95Wo1GuZ'
                },
                data: {
                    idTodo: i
                }
            })

            console.log(dataFromAPI);
            isLoadingSet(false);
            fetchData(config);
        } catch (error) {
            console.log(error);
        }
    }

    const checkData = async (i, isCompleted) => {
        isLoadingSet(true);

        try {
            const { data: dataFromAPI } = await axios({
                baseURL: 'https://flexible-spaniel-66.hasura.app/api/rest',
                url: `${config?.path}/check`,
                method: 'put',
                headers: {
                    'x-hasura-admin-secret': '446HtDOKpu9mnhN6bsVckg26xcSxhKOUQedLpYaHZ316KM3yobu0NsDA95Wo1GuZ'
                },
                data: {
                    idTodo: i,
                    checkTodo: isCompleted
                }
            })

            console.log(dataFromAPI);
            isLoadingSet(false);
            fetchData(config);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData(config);
    }, [])

    return { data, isLoading, insertData, checkData, deleteData }
}