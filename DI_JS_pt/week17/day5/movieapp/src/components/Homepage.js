import Search from "./Search"
import CardList from "./CardList"
const Homepage =(props)=>{
    return(
        <div className="container">
        <h1>Homepage</h1>
        <Search/>
        <CardList/>
        </div>
    )
    
}

export default Homepage