import { useEffect } from "react";

export const Message = () => {

    useEffect(() => {
        console.log('Meesage Mounted');


        return () => {
            console.log('Meesage Unmounted');
        }
    }, [])


    return (
        <>
            <h3>Usuario ya existe</h3>
        </>
    )
}
