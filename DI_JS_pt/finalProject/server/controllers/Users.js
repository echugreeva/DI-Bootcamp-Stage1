import { register, login, team, getTasks, leaderBoardData, updateTaskStatus, updateAssignee, getMyTeams, getTeamLists, addTaskList, addTasks, addTeam, addUserToTeam, userExistInTeam, currentList } from '../modules/Users.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// import { json } from 'sequelize';

//use try and catch inside async await, cause db is disconnected

export const _register = async (req, res) => {

  console.log(req.body);
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashPassword;

  register(req.body)
    .then(data => {
      res.json(data)
    })
    .catch(e => {
      console.log(e);
      res.status(404).json({ msg: 'not found' })
    })

}


export const _login = async (req, res) => {
  //  console.log(req.body);
  // let email=req.body.email;
  // let userId;
  login(req.body.email)
    .then((data) => {
      console.log(data[0])
      let email = data[0].email;
      let userId = data[0].id;

      //   console.log("data deom db login" + data.length)
      const match = async () => await bcrypt.compare(req.body.password, data[0].password);
      match()
        .then(data => {
          // data.json()
          console.log(data)
          if (!data) {
            return res.status(400).json({ msg: 'wrong password' })
          }

        })

      const accessToken = jwt.sign({ userId, email }, process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '600s' })

      console.log(accessToken)

      res.cookie('accessToken', accessToken, {
        httpOnly: true,
        maxAge: 60 * 10000
      });


      res.json({ token: accessToken })


      // if(!correctPass) return res.status(400).json({msg:'wrong password'});

    })
    .catch(e => {
      console.log(e);
      res.status(404).json({ msg: 'email not found' })
    })

}

export const _team = (req, res) => {
  team(req.params.tid)
    .then(data => {
      console.log(data)
      res.json(data)
    })
    .catch(e => {
      console.log(e);
      res.status(404).json({ msg: 'not found' })
    })
}

export const _getTasks = (req, res) => {
  getTasks(req.params.tid)
    .then(data => {
      res.json(data)
    })
    .catch(e => {
      console.log(e);
      res.status(404).json({ msg: 'not found' })
    })
}

export const _leaderBoardData = (req, res) => {
  let today = new Date();
  currentList(req.params.teamid, today)
    .then(data => {
      console.log(data)
      let currListId = data[0].tl_id
      // json(data);
      leaderBoardData(req.params.teamid, currListId)
        .then(data => {
          // console.log(data)
          res.json(data)
        })
        .catch(e => {
          console.log(e);
          res.status(404).json({ msg: 'not found' })
        })
    })

}

export const _updateTaskStatus = (req, res) => {
  updateTaskStatus(req.body.taskId, req.body.taskStatus)
    .then(data => {
      console.log(data)
      res.json(data)
    })
    .catch(e => {
      console.log(e);
      res.status(404).json({ msg: 'not found' })
    })
}

export const _updateAssignee = (req, res) => {
  console.log(req.body)
  updateAssignee(req.body.taskId, req.body.assigneeId)
    .then(data => {
      console.log(data)
      res.json(data)
    })
    .catch(e => {
      console.log(e);
      res.status(404).json({ msg: 'not found' })
    })
}

export const _getMyTeams = (req, res) => {
  getMyTeams(req.params.uid)
    .then(data => {
      res.json(data)
    })
    .catch(e => {
      console.log(e);
      res.status(404).json({ msg: 'not found' })
    })
}

export const _getTeamLists = (req, res) => {
  getTeamLists(req.params.tid)
    .then(data => {
      res.json(data)
    })
    .catch(e => {
      console.log(e);
      res.status(404).json({ msg: 'not found' })
    })
}



export const _addTaskList = async (req, res) => {

  addTaskList(req.body)
    .then(data => {
      res.json(data)
    })
    .catch(e => {
      console.log(e);
      res.status(404).json({ msg: 'not found' })
    })

}

export const _addTasks = async (req, res) => {
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
    .then(data => {
      res.json(data)
    })
    .catch(e => {
      console.log(e);
      res.status(404).json({ msg: 'not found' })
    })

}




export const _addTeam = async (req, res) => {

  addTeam(req.body.userId, req.body.name)
    .then(data => {
      res.json(data)
    })
    .catch(e => {
      console.log(e);
      res.status(404).json({ msg: 'not found' })
    })

}

export const _addUserToTeam = async (req, res) => {

  login(req.body.input)

    .then((data) => {
      json(data);
      console.log(data[0].id);
      let userId = data[0].id
      console.log(req.body.team_id);
      userExistInTeam(userId, req.body.team_id)
        .then((result) => {
          json(result);
          if (result == []) {
            console.log('user already in this team')
            res.status(404).json({ msg: 'user already in this team' })

          } else {
            addUserToTeam(req.body.admin_id, req.body.team_id, req.body.team_name, userId)
              .then(data => {
                res.json(data)
                console.log(data)
              })
          }

        })

    })
    .catch(e => {
      console.log(e);
      res.status(404).json({ msg: 'email not found, to add user they need to be registered in the app' })
    })


}



export const _currentList = (req, res) => {
  let today = new Date()
  currentList(req.params.tid, today)
    .then(data => {
      // console.log(data)
      res.json(data)
    })
    .catch(e => {
      console.log(e);
      res.status(404).json({ msg: 'not found' })
    })
}