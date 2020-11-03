import {useContext} from 'react';
import LoadingContext from '../context/loading';

export default function useGlobalLoading () {
  const {loading, setLoading} = useContext(LoadingContext);
  return {loading, setLoading};
}
