import { useContext } from 'react';
import PortifolioContext from '../context/PortifolioContext';


const OrderBy = () => {
  const { isBr, setOrderBy } = useContext(PortifolioContext);
  const newest = isBr ? 'Mais recentes' : 'Newest projects';
  const oldest = isBr ? 'Mais antigos' : 'Oldest projects';

  const handleOrder = ({target}: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOrder = target.value;
    setOrderBy(selectedOrder);
  }
  return(
    <div>
      <select name="order" onChange={ handleOrder }>
        <option value={ oldest }>{ oldest }</option>
        <option value={ newest }>{ newest }</option>
      </select>
    </div>
  )
};

export default OrderBy;