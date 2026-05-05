export const createSingleFlight = <T = unknown>() => {
  const flightRegister = new Map<string, Promise<T>>()

  return (id: string, asyncFn: () => Promise<T>): Promise<T> => {
    if (flightRegister.has(id)) return flightRegister.get(id)!

    const promise = asyncFn().finally(() => {
      flightRegister.delete(id)
    })

    flightRegister.set(id, promise)
    return promise
  }
}

