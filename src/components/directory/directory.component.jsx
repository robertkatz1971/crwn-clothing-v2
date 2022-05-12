import CategoryItem from '../category-item/category-item.component.jsx';
import '../directory/directory-container.styles.scss';

const Directory = ({categories}) => {
    return (
        <div className="directory-container">
        {categories.map(category => <CategoryItem category={category} key={category.id} />)}
      </div>
    )
}

export default Directory;