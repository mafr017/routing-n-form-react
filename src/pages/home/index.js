/** Libs */
import { useState } from 'react';

/** Assets */
import '../../App.css';
import { useFetchHasura } from '../../hooks/fetch-hasura';

export default function Home() {
    // State
    const [kegiatan, kegiatanSet] = useState("")

    // Hooks
    const { data, isLoading, insertData, checkData, deleteData } = useFetchHasura({ path: '/kegiatan', method: 'get' });

    // Func


    // Handler
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (kegiatan === "") {
            alert("Tidak boleh Kosong")
        } else {
            insertData(kegiatan)
            kegiatanSet("")
        }
    }
    const editHandler = (value) => {
        kegiatanSet(value.title);
        deleteData(value.id);
    }
    const deleteHandler = (value) => {
        deleteData(value.id);
    }
    const checkCompleteHandler = (value) => {
        checkData(value.id, !value.completed);
    }

    return (
        <div className="App">
            <h1 className='custom-h1'>TODOS</h1>
            <form onSubmit={onSubmitHandler}>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <input style={{ width: '500px' }} type={'text'} placeholder='Add todo...' value={kegiatan} onChange={(e) => kegiatanSet(e.target.value)} />
                    <button type='submit'>Submit</button>
                </div>
            </form>
            <div>
            {!isLoading ?
            data?.kegiatan.map((el, i) => (
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }} key={el.i}>
                        <input value={el.completed} checked={el.completed} type={'checkbox'} onClick={() => checkCompleteHandler(el)}></input>
                        <div style={el.completed ? { textDecoration: 'line-through' } : null}>{el.title}</div>
                        <button onClick={() => { deleteHandler(el) }}>Delete</button>
                        <button onClick={() => { editHandler(el) }}>Edit</button>
                    </div>
            ))
            :
            <div>Is Loading...</div>
            }
            </div>
        </div>
    );
}