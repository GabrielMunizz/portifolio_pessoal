import { useContext } from 'react';
import PortifolioContext from '../context/PortifolioContext';
import * as S from '../Style/projectsStyle';

const OrderBy = () => {
  const { isBr, setOrderBy } = useContext(PortifolioContext);
  const newest = isBr ? 'Mais recentes' : 'Newest projects';
  const oldest = isBr ? 'Mais antigos' : 'Oldest projects';

  const handleOrder = ({target}: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOrder = target.value;
    setOrderBy(selectedOrder);
  }
  return(
    <S.OrderBy>
      <select name="order" onChange={ handleOrder }>
        <option value={ oldest }>{ oldest }</option>
        <option value={ newest }>{ newest }</option>
      </select>
    </S.OrderBy>
  )
};

export default OrderBy;