import { useContext } from "react";
import categories from "../assets/categories";
import PortifolioContext from "../context/PortifolioContext";
import * as S from "../Style/Projects.style";

const Categories = () => {
  const { setSelected, isBr } = useContext(PortifolioContext);

  const defaultCategory = isBr ? "Todas" : "All";

  const handleSelected = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = target.value;
    setSelected(selectedOption);
  };
  return (
    <S.Categories>
      <select name="categories" onChange={handleSelected}>
        <option>{defaultCategory}</option>
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </S.Categories>
  );
};

export default Categories;
