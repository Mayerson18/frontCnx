import React, {useState} from 'react';

const Context = React.createContext({})

export function ODataContextProvider ({children}) {
  const [odata, setOData] = useState([]);

  return <Context.Provider value={{
    odata,
    setOData
  }}>
    {children}
  </Context.Provider>;
}

export default Context;