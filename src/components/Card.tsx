import { use } from "react"

interface CardProps<T = unknown> {
  pokemonPromise: Promise<T>
}

const Card = ({ pokemonPromise }: CardProps) => {

  const pokemon = use(pokemonPromise)

  return (
    <div>
      <code>
        {JSON.stringify(pokemon, null, 2)}
      </code>
    </div>
  )
}

export default Card