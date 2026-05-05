import { use } from "react"

interface CardProps<T = unknown> {
  pokemonPromise: Promise<T>
}

const Hero = ({ pokemonPromise }: CardProps) => {

  const pokemon = use(pokemonPromise)

  return (
    <div>
      <code>
        {JSON.stringify(pokemon, null, 2)}
      </code>
    </div>
  )
}

export default Hero