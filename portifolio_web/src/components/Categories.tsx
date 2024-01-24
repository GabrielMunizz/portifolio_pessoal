import { useContext } from 'react';
import categories from '../assets/categories';
import PortifolioContext from '../context/PortifolioContext';

const Categories = () => {
  const { setSelected, isBr } = useContext(PortifolioContext);
  const mappedCategories = categories.map((category) => {
    if (isBr && category === 'All') {
      return 'Todas'
    }
    return category;
  })
  const handleSelected = ({target}: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = target.value;
    setSelected(selectedOption);
  }
  return(
    <div>
      <select 
        name="categories" 
        onChange={ handleSelected }        
      >
        { mappedCategories.map((category) => (
        <option key={ category }>
          { category }
        </option>
        )) }
      </select>
    </div>
  )
};

export default Categories;