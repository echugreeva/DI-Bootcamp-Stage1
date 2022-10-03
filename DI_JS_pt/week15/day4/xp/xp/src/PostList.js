const PostList = (props) =>{
    console.log(props)
    return (
        <div>
            <h2>{props.item.title}</h2>
            <p>{props.item.content}</p>
        </div>
    )
        
    
}

export default PostList