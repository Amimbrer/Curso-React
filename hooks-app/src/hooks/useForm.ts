import { useState } from "react";
import { FormHook } from "../interfaces/IForm"

// TIPOS E INTERFACES
type InputChangeProps = {
    target: HTMLInputElement
}

export const useForm = (initialForm: FormHook = {}) => {

    const [formState, setFormSate] = useState(initialForm);

    const onInputChange = ({ target }: InputChangeProps
    ) => {

        const { name, value } = target;

        setFormSate({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormSate(initialForm)
    }



    return {
        formState, onInputChange, onResetForm
    }
}
