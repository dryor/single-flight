
import { createBrowserRouter, Link, useLoaderData } from "react-router";
import { RouterProvider } from "react-router/dom";

import './App.css'
import Hero from "./components/Hero";
import Card from "./components/Card";
import { Suspense } from "react";
import { createSingleFlight } from "./utils/single-flight";

const router = createBrowserRouter([
  {
    path: "/",
    Component: () => {
      return (
        <div>
          <h1>Home</h1>

          <Link to="/thundering-herd-problem">Thundering Herd Problem</Link>
          <br />
          <Link to="/single-flight">Single Flight Solution</Link>
        </div>
      )
    },
  },
  {
    path: "/thundering-herd-problem",
    loader: async () => {
      const pokemonPromiseA = fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then(res => res.json())
        .then(data => {
          return {
            name: data.name,
            id: data.id,
          };
        });

      const pokemonPromiseB = fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then(res => res.json())
        .then(data => {
          return {
            name: data.name,
            id: data.id,
          };
        });

      return { pokemonPromiseA, pokemonPromiseB };
    },
    Component: () => {
      const { pokemonPromiseA, pokemonPromiseB } = useLoaderData();

      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <h1>Thundering Herd Problem</h1>

          <Suspense fallback={<div>Loading...</div>}>
            <Hero pokemonPromise={pokemonPromiseA} />
          </Suspense>

          <Suspense fallback={<div>Loading...</div>}>
            <Card pokemonPromise={pokemonPromiseB} />
          </Suspense>

          <Link to="/">Go Back</Link>
        </div>
      )
    }
  },
  {
    path: "/single-flight",
    loader: async () => {
      const singleFlight = createSingleFlight()

      const pokemonPromiseA = singleFlight("pikachu",
        () => fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
          .then(res => res.json())
          .then(data => {
            return {
              name: data.name,
              id: data.id,
            };
          })
      );

      const pokemonPromiseB = singleFlight("pikachu",
        () => fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
          .then(res => res.json())
          .then(data => {
            return {
              name: data.name,
              id: data.id,
            };
          })
      );

      return { pokemonPromiseA, pokemonPromiseB };
    },
    Component: () => {
      const { pokemonPromiseA, pokemonPromiseB } = useLoaderData();

      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <h1>Single Flight Solution</h1>

          <Suspense fallback={<div>Loading...</div>}>
            <Hero pokemonPromise={pokemonPromiseA} />
          </Suspense>

          <Suspense fallback={<div>Loading...</div>}>
            <Card pokemonPromise={pokemonPromiseB} />
          </Suspense>

          <Link to="/">Go Back</Link>
        </div>
      )
    }
  },
]);


function App() {
  return <RouterProvider router={router} />
}

export default App
