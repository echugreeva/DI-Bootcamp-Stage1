import {useState, useEffect} from 'react'

const Shop2 = (props)=>{
    const [products, setProducts] = useState([])
    const [search, setSearch]=useState('')
    

    useEffect(()=>{
        // fetch(process.env.REACT_APP_BASE_URL+'/api/products/all')// with env
        fetch('/api/products/all') 
        .then(resp=>resp.json())
        .then(data =>
            {setProducts(data)})
        
      },[])
    
   
    const sendReq = () => {
        console.log(`/api/products/search?q=${search}`)
        fetch(`http://localhost:5001/api/products/search?q=${search}`) 
        .then(resp=>resp.json())
        .then(data =>
            {
                console.log(data)
                setProducts(data)
            })
    }
      return (
        <div>
            <h1>Shop2</h1>
            <div>
                Search: 
                <input type='text' onChange={(e)=>setSearch(e.target.value)}></input>
                <button onClick={()=>sendReq()}>Search</button>
            </div>
            {
                products.map((item)=>{
                    return(
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <p>{item.price}</p>     
                        </div>
                    ) 
                })
            }
        </div>
        
    )
}


export default Shop2