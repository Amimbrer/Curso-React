import { useState } from "react";
import { FormHook } from "../interfaces/IForm"


export const useForm = (initialForm: FormHook = {}) => {
    // TIPOS E INTERFACES
    type InputChangeProps = {
        target: HTMLInputElement
    }

    const [formState, setFormSate] = useState(initialForm);

    // Evento change que accede al tarjet de la propiedad event
    const onInputChange = ({ target }: InputChangeProps) => {
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
