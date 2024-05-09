import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formSate, setFormSate] = useState({
        userName: 'strider',
        email: 'fernando@google.com'
    });

    const { userName, email } = formSate;

    type InputChangeProps = {
        target: HTMLInputElement
    }

    const onInputChange = ({ target }: InputChangeProps
    ) => {

        const { name, value } = target;

        setFormSate({
            ...formSate,
            [name]: value
        });
    }


    useEffect(() => {
        // console.log('userName changed!');
    }, [userName]);

    useEffect(() => {
        // console.log('email changed!');
    }, [email]);



    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input
                type="text"
                name="userName"
                placeholder="Username"
                value={userName}
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

            {userName === 'strider2' && <Message />}

        </>
    )
}
