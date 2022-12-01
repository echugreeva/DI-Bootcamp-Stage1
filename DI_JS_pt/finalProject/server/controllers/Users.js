import {register, login, team, getTasks,leaderBoardData, updateTaskStatus, updateAssignee, getMyTeams, getTeamLists, addTaskList, addTasks} from '../modules/Users.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { json } from 'sequelize';



export const _register = async(req, res) => {
    console.log(req.body);
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashPassword;
    
    register(req.body)
    .then(data=>{
      res.json(data)
    })
    .catch(e => {
      console.log(e);
      res.status(404).json({msg:'not found'})
  })
    
  }


  export const _login = (req, res) => {
    // console.log(req.body);
    login(req.body.email)
    .then((data) =>{
        json(data);
        console.log(data[0])
    //   console.log("data deom db login" + data.length)
        const match = async () => await bcrypt.compare(req.body.password, data[0].password);
        match()
        .then(data=>{
            json(data)
            console.log(data)
            if(!data) {return res.status(400).json({msg:'wrong password'})}else {
                res.status(200).json({msg:'login success'})
            };
        })
        
        // if(!correctPass) return res.status(400).json({msg:'wrong password'});
        
    })
    .catch(e => {
      console.log(e);
      res.status(404).json({msg:'email not found'})
  })
    
  }

  export const _team = (req, res) => {
    team(req.params.uid)
    .then(data=>{
      res.json(data)
    })
    .catch(e => {
      console.log(e);
      res.status(404).json({msg:'not found'})
  })
  }

  export const _getTasks = (req, res) => {
    getTasks(req.params.tid)
    .then(data=>{
      res.json(data)
    })
    .catch(e => {
      console.log(e);
      res.status(404).json({msg:'not found'})
  })
  }

  export const _leaderBoardData = (req, res) => {
    leaderBoardData(req.params.teamid)
    .then(data=>{
      // console.log(data)
      res.json(data)
    })
    .catch(e => {
      console.log(e);
      res.status(404).json({msg:'not found'})
  })
  }

  export const _updateTaskStatus = (req, res) => {
    updateTaskStatus(req.body.taskId, req.body.taskStatus)
    .then(data=>{
      console.log(data)
      res.json(data)
    })
    .catch(e => {
      console.log(e);
      res.status(404).json({msg:'not found'})
  })
  }

  export const _updateAssignee = (req, res) => {
    console.log(req.body)
    updateAssignee(req.body.taskId, req.body.assigneeId)
    .then(data=>{
      console.log(data)
      res.json(data)
    })
    .catch(e => {
      console.log(e);
      res.status(404).json({msg:'not found'})
  })
  }

  export const _getMyTeams = (req, res) => {
    getMyTeams(req.params.uid)
    .then(data=>{
      res.json(data)
    })
    .catch(e => {
      console.log(e);
      res.status(404).json({msg:'not found'})
  })
  }

  export const _getTeamLists = (req, res) => {
    getTeamLists(req.params.tid)
    .then(data=>{
      res.json(data)
    })
    .catch(e => {
      console.log(e);
      res.status(404).json({msg:'not found'})
  })
  }



  export const _addTaskList = async(req, res) => {
    
    addTaskList(req.body)
    .then(data=>{
      res.json(data)
    })
    .catch(e => {
      console.log(e);
      res.status(404).json({msg:'not found'})
  })
    
  }

  export const _addTasks = async(req, res) => {
    const tl_id = req.params.tlid
    console.log(req.body)
    const tasksToInsert = req.body.inputList.map((insert) => { 
      insert.completion_time = Number(insert.completion_time);
      return (
      
      {
        tl_id: tl_id,
        duedate: insert.duedate,
        description: insert.description,
        completion_time: insert.completion_time
      }
    )
      
    })
    addTasks(tasksToInsert)
    .then(data=>{
      res.json(data)
    })
    .catch(e => {
      console.log(e);
      res.status(404).json({msg:'not found'})
  })
    
  }