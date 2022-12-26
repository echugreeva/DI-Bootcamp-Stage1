import {Link} from "react-router-dom";
import Blog from "../blog.png"


const Home = ({posts}) => {
    if(posts.length<1){
        return(
            <>
            <h1>No posts to show</h1>
            </>
        )
    } else {
        return (
            <div>
            {
                posts.map((item)=>{
                    return (
                        <div key={item.id} className="post card">
                            <img src={Blog}/>
                            <div className="card-content">
                                <Link to={'./post/' + item.id}>
                                    <h2 className="card-title red-text">{item.title}</h2>
                                </Link>
                                <p>{item.body}</p>
                            </div>
                            
                        </div>
                    )
                })
            }
            </div>
        )
    }
    
}

export default Home