type FirstAppProps = {
    tittle?: string;
    subTittle: string;
}

const FirstApp = ({ tittle, subTittle }: FirstAppProps) => {
    return (
        <>
            <h1> {tittle} </h1>
            <p> {subTittle} </p>
        </>
    )
}

FirstApp.defaultProps = {
    tittle: 'No hay titulo'
}

export default FirstApp

