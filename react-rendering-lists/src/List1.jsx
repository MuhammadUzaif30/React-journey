import PropTypes from 'prop-types'

function List1 (props) {
    const category = props.category
    const itemlist = props.items

    const listitems = itemlist.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.cals}</b>
                                            </li>)
    return (<><h3 className="list-category">{category}</h3>
            <ol className="list-items">{listitems}</ol></>);
    List1.PropTypes = {
        category : PropTypes.string,
        item : PropTypes.arrayOf(PropTypes.shape({id : PropTypes.number,
                                                name : PropTypes.string,
                                                cals : PropTypes.number}
        ))
    }
    List1.defaultProps = {
        category : "Category",
        items : []
    }
}
export default List1;