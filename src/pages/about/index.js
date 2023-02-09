/** Libs */
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useFetchers } from "../../hooks/fetcher";

export default function About() {
    // Hooks
    const { data: dataKegiatan } = useSelector((state) => state.kegiatan)
    const { data, isLoading } = useFetchers({ path: 'users?page=2', method: 'get' });
    console.log(data);

    // Func
    return (
        <div>
            <h1>This is About</h1>
            <div>
                <h3>List kegiatan</h3>
                {dataKegiatan?.map((todo, i) => (
                    <p key={i}>{todo.i + 1}. {todo.kegiatan}</p>
                ))}
            </div>
            <div className="mt-4">
                {!isLoading ?
                    data?.data.map((item, i) => (
                        <Link to={`/about/${item?.id}`}>
                            <div key={i}>
                                {/* <div>
                                    <img src={item?.avatar} />
                                </div> */}
                                <h3>{item?.first_name} {item?.last_name}</h3>
                                {/* <p>{item?.email}</p> */}
                            </div>
                        </Link>
                    ))
                    :
                    <div>Is Loading...</div>
                }
            </div>
        </div>
    );
}