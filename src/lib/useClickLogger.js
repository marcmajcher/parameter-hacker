import { useDispatch } from 'react-redux';
import { logger } from '../lib/actions';

export default function useClickLogger(node) {
  const dispatch = useDispatch();
  return () => {
    dispatch(logger(`CLICK ${node.id}`));
  };
}
