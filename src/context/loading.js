import React, {useState} from 'react'

const Context = React.createContext({});

export function LoadingContextProvider ({children}) {
  const [loading, setLoading] = useState(false);

  return <Context.Provider value={{loading, setLoading}}>
    {children}
  </Context.Provider>;
}

export default Context;