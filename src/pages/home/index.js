/** Libs */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/** Assets */
import '../../App.css';
import { submitData } from '../../store/reducer-kegiatan';

export default function Home() {
    // State
    const [kegiatan, kegiatanSet] = useState("")
    const [indeks, indeksSet] = useState(0)
    const [isCompleted, isCompletedSet] = useState(false)
    const [listkegiatans, listkegiatansSet] = useState([]);

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
            console.log(`kegiatans: ${kegiatan}, indeks: ${indeks}, completed: ${isCompleted}`);
            isCompletedSet(false)
            indeksSet((prev) => prev + 1)
            listkegiatansSet((prev) => [...prev, { kegiatan, indeks, isCompleted }])
            dispatch(submitData({ kegiatan: kegiatan, i: indeks, completed: isCompleted }))
            kegiatanSet("")
        }
    }
    const editHandler = (value) => {
        kegiatanSet(value.kegiatan)
        listkegiatansSet((prev) => [...prev].filter((e) => e.indeks !== value.indeks))
    }
    const deleteHandler = (value) => {
        listkegiatansSet((prev) => [...prev].filter((e) => e.indeks !== value.indeks))
    }
    const checkCompleteHandler = (value) => {
        const newState = listkegiatans.map(prev =>
            prev.indeks === value.indeks ? { ...prev, isCompleted: !value.isCompleted } : prev
        )
        listkegiatansSet(newState)
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
                {listkegiatans.map((el) => (
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }} key={el.indeks}>
                        <input value={el.isCompleted} type={'checkbox'} onClick={() => checkCompleteHandler(el)}></input>
                        <div style={el.isCompleted ? { textDecoration: 'line-through' } : null}>{el.kegiatan}</div>
                        <button onClick={() => { deleteHandler(el) }}>Delete</button>
                        <button onClick={() => { editHandler(el) }}>Edit</button>
                    </div>
                ))}
            </div>
        </div>
    );
}