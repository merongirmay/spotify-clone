import {createContext} from 'react'

export const SpotifyContext = createContext()

// eslint-disable-next-line react/prop-types
export default function SpotifyContextProvider({children}) {
  return (
    <SpotifyContext.Provider>{children}</SpotifyContext.Provider>
  )
}
