const SkillsEx2 = (props) =>{
    console.log(`props: ${props.item}`)
    console.log(typeof(props.item))
    let data = JSON.parse(props.item)
    console.log(typeof(data))
    const {Area, SkillSet} = data
    const {Name} = SkillSet[0]
        

    return (
        
        <div>
        <p>{Area}</p>
        {
            SkillSet.map((item)=>{
                return (
                    <p>{item.Name}</p>
                )
            })
        }
        </div>
    )      
    
}

export default SkillsEx2