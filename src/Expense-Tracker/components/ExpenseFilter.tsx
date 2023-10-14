import categories from "../categories";
interface propTypes {
    onSelectCategory: (category: string) => void;
}

const ExpenseFiler = ({ onSelectCategory }:propTypes) => {
    return(
        <select className="form-select" onChange={(e) => onSelectCategory(e.target.value)}>
            {categories.map((category) => <option key={category} value={category}>{category}</option>)}
        </select>
    )
}

export default ExpenseFiler;