import ItemCount from "./ItemCount"

const onAdd = () => {};

const ItemListContainer = ({greetings}) => {
    return (
        <>
        <div>
            <h2>{greetings}</h2>
        <ItemCount 
        stock = {5} onAdd = {onAdd} initial = {1}
        />
        </div>
        
        </>
        
    )
}

export default ItemListContainer;