const NoTasks = (props) => {
    if (props.display === 1) {
        return (
            <div>You have no tasks to do </div>
        )
    } else {
        return (
            <div></div>
        )
    }
    
}

export default NoTasks
