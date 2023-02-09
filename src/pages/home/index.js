/** Libs */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteData, editData, submitData } from '../../store/reducer-kegiatan';

/** Assets */
import '../../App.css';

export default function Home() {
    // State
    const [kegiatan, kegiatanSet] = useState("")
    const [indeks, indeksSet] = useState(0)
    const [isCompleted, isCompletedSet] = useState(false)
    // const [listkegiatans, listkegiatansSet] = useState([]);

    // Hooks
    const { data: dataKegiatan } = useSelector((state) => state.kegiatan);
    const dispatch = useDispatch();

    // Func


    // Handler
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (kegiatan === "") {
            alert("Tidak boleh Kosong")
        } else {
            let ii = 0;
            isCompletedSet(false)
            // listkegiatansSet((prev) => [...prev, { kegiatan, indeks, isCompleted }])
            if ((dataKegiatan[0]) !== undefined) {
                ii = ((dataKegiatan[(dataKegiatan.length) - 1].i) + 1);
            }
            dispatch(submitData({ kegiatan: kegiatan, i: ii, completed: isCompleted }));
            kegiatanSet("")
        }
    }
    const editHandler = (value) => {
        kegiatanSet(value.kegiatan)
        dispatch(deleteData(value));
    }
    const deleteHandler = (value) => {
        // listkegiatansSet((prev) => [...prev].filter((e) => e.indeks !== value.indeks))
        dispatch(deleteData(value));
    }
    const checkCompleteHandler = (value) => {
        // const newState = dataKegiatan.map(prev =>
        //     prev.indeks === value.indeks ? { ...prev, isCompleted: !value.isCompleted } : prev
        // )
        // listkegiatansSet(newState)
        dispatch(editData(value));
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
                {dataKegiatan.map((el) => (
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }} key={el.i}>
                        <input value={el.completed} checked={el.completed} type={'checkbox'} onClick={() => checkCompleteHandler(el)}></input>
                        <div style={el.completed ? { textDecoration: 'line-through' } : null}>{el.kegiatan} hiyaaa</div>
                        <button onClick={() => { deleteHandler(el) }}>Delete</button>
                        <button onClick={() => { editHandler(el) }}>Edit</button>
                    </div>
                ))}
            </div>
        </div>
    );
}