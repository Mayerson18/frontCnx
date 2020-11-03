import {useContext} from 'react';
import ODataContextProvider from '../context/OData';
import getOData from '../services/OData';
import useGlobalLoading from './loading';

export const useGlobalOData = () => {
  const {odata, setOData} = useContext(ODataContextProvider);
  return {odata, setOData};
}

export default function useOData () {
  
  const { setLoading } = useGlobalLoading();
  const { odata, setOData } = useGlobalOData();

  const changeOData = async () => {
    setLoading(true);
    try {
      const res = await getOData();
      setOData(res);
    } catch (error) {
      console.error('error', error);
      setOData([]);
    }
    setLoading(false);
  }
  
  return {
    odata,
    changeOData
  };
}
