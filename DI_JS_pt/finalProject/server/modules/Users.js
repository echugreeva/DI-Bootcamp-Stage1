import db from '../connections/elephant_db.js';


export const register = (user) => {
    return db('users')
    .insert(user)
    .returning('*')
  
  }

//user passes req.body object
// {
//     id: uid,
//     email: dufyu,
//     passwords: fgjfy,
// } etc

export const login = (email) => {
    return db('users')
    .select("*")
    .where({email: email})
}


export const team = (teamId) => {
    return db('teams')
    .join('users', 'users.id', '=','users' )
    .select("*")
    .where({team_id:teamId})
}

export const getTasks = (tlId)=> {
        return db('tasks')
        .select('*')
        .where({tl_id: tlId})
    }

export const leaderBoardData = (teamId)=>{
        return db('tasks')
        .join('task_list', 'task_list.tl_id', '=','tasks.tl_id')
        .join('users', 'users.id','=', 'assignee_id')
        .select('tasks.assignee_id', 'tasks.tl_id', 'users.email').sum ('tasks.completion_time')  
        .where({team_id: teamId}, {status: 'done'})
        .groupBy('tasks.assignee_id')
        .groupBy('users.email')
        .groupBy('tasks.tl_id')
        
    }

    export const updateTaskStatus = (taskId, taskStatus) => {
        return db('tasks')
        .where({task_id: taskId})
        .update({
            status: taskStatus})
        .returning('*')
      
      }

    export const updateAssignee = (taskId, assigneeId) => {
        return db('tasks')
        .where({task_id: taskId})
        .update({
            assignee_id: assigneeId})
        .returning('*')
      
      }


    export const getMyTeams = (userId)=> {
        return db('teams')
        .select('*')
        .where({users: userId})
    }

    

    export const getTeamLists = (teamId)=> {
        return db('task_list')
        .select('*')
        .where({team_id: teamId})
    }

    export const addTaskList = (taskList) => {
        return db('task_list')
        .insert(taskList)
        .returning('*')
      
      }
    
     export const addTasks = (taskList) => {
        return db('tasks')
        .insert(taskList)
        .returning('*')
      
      }
    
      export const addTeam = (id, name) => {
        return db('teams')
        .insert({admin_id: id,users: id,name: name})
        .returning('*')
      
      }

      export const addUserToTeam = (admin_id, team_id, team_name, user_id) => {
        return db('teams')
        .insert({admin_id: admin_id,users: user_id,name: team_name, team_id:team_id})
        .returning('*')
      
      }
    
      export const userExistInTeam = (userId, teamId) => {
        return db('teams')
        .select("*")
        .where({users: userId})
        .andWhere({team_id: teamId})
    }