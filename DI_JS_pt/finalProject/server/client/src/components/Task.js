const Task  = (props)=> {
    console.log(props)
    return (
    <div>
        <p>{props.data.desciption}</p>
        <p>Due date: {props.data.duedate}</p>
        <p>Assignee: {props.data.assignee_id}</p>
        <p>Status: {props.data.status}</p>
        <p>Time to complete: {props.data.completion_time}</p>
    </div>
    )
}

export default Task