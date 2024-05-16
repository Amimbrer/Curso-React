import { useEffect } from "react";

export const Message = () => {

    useEffect(() => {
        type OnMouseProps = {
            x: number,
            y: number
        }


        const onMouseMove = ({ x, y }: OnMouseProps) => {
            const coords = { x, y }
            console.log(coords);
        }


        window.addEventListener('mousemove', onMouseMove)

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
        }
    }, [])


    return (
        <>
            <h3>Usuario ya existe</h3>
        </>
    )
}
