
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
    return (
        <>

        <NavBar/>
        <ItemListContainer
            stock = {{item1:"item1", precio1:"precio1"}}
            />

        </>
    )
}

export default App;

