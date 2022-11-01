import {Link} from "react-router-dom";

const Home = ({posts}) => {
    if(posts.length<1){
        return(
            <>
            <h1>No posts to show</h1>
            </>
        )
    } else {
        return (
            <>
            {
                posts.map((item)=>{
                    return (
                        <div key={item.id}>
                            <Link to={'./post/' + item.id}>
                                <h2>{item.title}</h2>
                            </Link>
                                <p>{item.body}</p>
                        </div>
                    )
                })
            }
            </>
        )
    }
    
}

export default Home