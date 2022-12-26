import { connect } from "react-redux";
import { deletePost } from "../redux/actions";
import { useParams, Link, useNavigate } from "react-router-dom";

const Post = (props)=> {
    let navigate = useNavigate()
    let {id} = useParams()
    console.log(id)
    let post = props.posts.find(post => post.id === id)
    console.log(post)
    if(!post){
        return(
            <h1 className="center">Loading...</h1>
        )
    } else {
        return (
            <div className="container">
                <div className="post" key = {post.id}>
                    <h2 className="center">{post.title}</h2>
                    <p className="center"> {post.body}</p>
                    <button  className="btn grey" onClick={(e)=> {
                        props.deletePost(post.id)
                        navigate('/')
                    }}>delete</button>
                </div>
            </div>
            
        )
    }
   
}

const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps.match.params.id);
    // let id = ownProps.match.params.id
    return {
        posts: state.posts
    }
  }
  
  const mapDispatchToProps = (dispatch)=> {
    return {
      deletePost: (id) => dispatch(deletePost(id))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Post)
  