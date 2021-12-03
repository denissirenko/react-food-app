import { Link } from "react-router-dom";

export const CategoryItem = (props) => {
    const { strCategory, strCategoryDescription, strCategoryThumb } = props;
    return (
        <div className="card">
            <div className="card-image">
                <img src={strCategoryThumb} alt={strCategory} />
            </div>
            <div className="card-content">
                <span className="card-title">{ strCategory }</span>
                <p>
                    { strCategoryDescription.length > 70 ? `${strCategoryDescription.slice(0, 70)}...` : strCategoryDescription }
                </p>
            </div>
            <div className="card-action">
                <Link to={`/category/${strCategory}`}>
                    Watch category
                </Link>
            </div>
        </div>
    )
}
