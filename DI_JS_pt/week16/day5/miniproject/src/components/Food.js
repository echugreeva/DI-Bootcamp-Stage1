import {useState, useEffect} from 'react';


const Food = (props) => {

  
    const [imgList, setImages] = useState({
    images:[],
    
  })
  
  useEffect (()=> {
    const options = {
      method: 'GET',
      headers: {
        Authorization: '563492ad6f91700001000001099cb8888c044472af40dc3b60a997e1',
        'X-RapidAPI-Key': '4980814c76msh916d21acc0ea2b9p1680a1jsn3be7217effc7',
        'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com'
      }
    };
    
    fetch('https://pexelsdimasv1.p.rapidapi.com/v1/search?query=food&locale=en-US&per_page=30&page=1&Max=30', options)
      .then(response => response.json())
      .then((response) => {
        console.log(response)
        setImages({
          images:response.photos
        })
        
      
      })
      .catch(err => console.error(err))}, [])
      console.log(imgList.images)
    return (
      <div className="App">
       
          <h1>Food images</h1>
          {
            imgList.images.map((item,i)=>{
              return (
                <img src = {item.src.small}/>
              )
            })
          }
        
      </div>
    );
  }
  
  export default Food;