import { useForm } from "react-hook-form";
import Cookies from 'js-cookie';

export default function Login({ loginset }) {
    // Hooks
    const { register, handleSubmit, getValues, formState: { errors, touchedFields } } = useForm({ mode: 'onBlur' });

    // func
    const handleLogin = (e) => {
        loginset(true)
        // e.PreventDefault();
        console.log(e);
        console.log(getValues());
        Cookies.set('token', 'Cobaa lagi');
    }

    console.log({ errors, touchedFields });

    return (
        <div className="App">
            <span style={{ marginBottom: '30px' }}>Login</span>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div>
                    <label>Email</label>
                    <input {...register("email", { required: { value: true, message: 'Gak boleh Kosong' }, minLength: { value: 6, message: "tidak boleh kurang dari 6 karakter" } })} type={'text'} />
                    {errors?.email && <span>{errors?.email?.message}</span>}
                </div>
                <div>
                    <label>Password</label>
                    <input {...register("password", { minLength: { value: 3, message: "tidak boleh kurang dari 3 karakter" } })} type={'password'} />
                    {errors?.password && <span>{errors?.password?.message}</span>}
                </div>
                <button>Login</button>
            </form>
        </div>
    );
}