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
            <h1>Loading...</h1>
        )
    } else {
        return (
            <div key = {post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <button onClick={(e)=> {
                    props.deletePost(post.id)
                    navigate('/')
                }}>delete</button>
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
  