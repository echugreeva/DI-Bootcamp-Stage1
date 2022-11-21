// import {useState, useEffect,useContext} from 'react'
// import { AppContext } from '../App';
// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import {
//   Chart,
//   BarSeries,
//   Title,
//   ArgumentAxis,
//   ValueAxis,
// } from '@devexpress/dx-react-chart-material-ui';
// import { Animation } from '@devexpress/dx-react-chart';


// const Leaderboard = (props) => {
//     const {teamId}=useContext(AppContext)
//     const [leaderboard, setLeaderboard] = useState([]);

//     useEffect(()=>{
//         fetch (`/leaderboard/${teamId}`)
//         .then(res=>{
//             if(res.status == 200) {
//                 return res.json()
//             }
//         }
//             )
//         .then(data=>{
            
//             console.log(data)
//             setLeaderboard(data)
            
//             leaderboard.map((i)=>Number(i.sum))
//             // leaderboard.sort((a,b)=>Number(a.sum) - Number(b.sum))
//             console.log(leaderboard)
//         })
//         .catch(e=>{console.log(e)})
//     },[])
    
    
//     return (
//         <Paper>
//           <Chart
//             data={leaderboard}
//             // rotated
//           >
//             <ArgumentAxis />
//             <ValueAxis max={7} />
  
//             <BarSeries
//               valueField="sum"
//               argumentField="username"
//             />
//             <Title text="Leaderboard" />
//             <Animation />
//           </Chart>
//         </Paper>
//       );
//     }

  

// export default Leaderboard


import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const data =  [
  { assignee_id: 1, tl_id: 1, username: 'A', sum: 2 },
  { assignee_id: 2, tl_id: 1, username: 'C', sum: 1},
  { assignee_id: 3, tl_id: 1, username: 'E', sum: 1},
  { assignee_id: 4, tl_id: 1, username: 'G', sum: 1 },
];
export default class LeaderBoard extends React.PureComponent {
    constructor(props) {
      super(props);
  
      this.state = {
        data: data,
        teamId: 1
      };
    }
    componentDidMount(){
    
        fetch (`/leaderboard/${this.state.teamId}`)
                .then(res=>{
                    if(res.status == 200) {
                        return res.json()
                    }
                }
                    )
                .then(result=>{
                    
                    console.log(result)
                    this.setState({data: result})
                    
                })
                .catch(e=>{console.log(e)})
      }
    
  
    render() {
      const { data: chartData  } = this.state.data;
  
      return (
        <Paper>
          <Chart
            data={chartData}
            // rotated
          >
            <ArgumentAxis />
            <ValueAxis max={7} />
  
            <BarSeries
              valueField="sum"
              argumentField="username"
            />
            <Title text="Leaderboard" />
            <Animation />
          </Chart>
        </Paper>
      );
    }
  }
  