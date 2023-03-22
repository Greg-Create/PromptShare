import Header from "./Components/Header/Header"
import Front from "./Components/Front/Front"
import Categories from './Components/Categories/Categories';
import Carouselle from './Components/Carouselle/Carouselle';



function Home() {
    return(
        <div className="App">
        <Header />
        <Front />
        <Categories />
        <Carouselle title={"Popular"} />
        <Carouselle title={"Recent"} />
        <Carouselle title={"Movies"} />
        <Carouselle title={"Bipasses"} />
        </div>

    )
}

export default Home