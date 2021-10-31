const Category = (props) => {
    return ( 
        <div className="category-element d-flex justify-content-between py-2">
            <h6>{props.list.name}</h6>
            <p className="m-0 soft-text">{props.list.number}</p>
        </div>
     );
}
 
export default Category;