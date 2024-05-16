type CardProps = {
    id?: any,
    name?: any,
    sprites: string[]
}

export const PokemonCard = ({ id, name, sprites }: CardProps) => {
    console.log(sprites);

    return (
        <section style={{ height: 200 }}>

            <h2>#{id} - {name}</h2>

            {/* Imagenes */}

            {
                sprites?.map(sprite => {

                    if (sprite) {
                        return <img key={sprite} src={sprite} alt={name} />
                    }
                })
            }

        </section>
    )
}

