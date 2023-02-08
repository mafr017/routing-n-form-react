import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useFetchers } from "../../hooks/fetcher";

export default function AboutDetail() {
    // Hooks
    const params = useParams();
    const { data, isLoading } = useFetchers({ path: `users/${params.id}`, method: 'get' });

    // Func
    return (
        <div>
            <h1>This is Detail User</h1>
            <div className="mt-4">
                {!isLoading ?
                    <div>
                        <div>
                            <img src={data?.data.avatar} />
                        </div>
                        <h3>{data?.data.first_name} {data?.data.last_name}</h3>
                        <p>{data?.data.email}</p>
                    </div>
                    :
                    <div>Is Loading...</div>
                }
            </div>
        </div>
    );
}