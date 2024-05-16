import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    });

    const { username, email, password } = formState


    return (
        <>
            <h1>Formulario con custom hook</h1>
            <hr />

            <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={onInputChange}
            />
            <br />
            <br />
            <input
                type="email"
                name="email"
                placeholder="alberto@google.com"
                value={email}
                onChange={onInputChange}
            />

            <br />
            <br />
            <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={password}
                onChange={onInputChange}
            />

            <button type="button"
                onClick={onResetForm}>Borrar</button>
        </>
    )
}
