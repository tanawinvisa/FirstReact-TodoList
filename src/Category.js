
const Category = ({ imageSrc, name, number , onClickCategory}) => {


    return ( 
        <div className="category" onClick={() => onClickCategory(name)}>
            <div className="head-category">
                <img src={imageSrc} alt="My Image" class="category-icon"/>
                <p className="category-name">{name}</p>
            </div>
            <div className="category-num">
                <p >{number}</p>
            </div>
        </div>
    );
}
 
export default Category;