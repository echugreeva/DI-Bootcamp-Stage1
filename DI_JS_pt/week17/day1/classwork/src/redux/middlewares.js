const myMiddleWare = (store) =>(next)=>(action)=> {
    console.log(store)
    console.log('store=>', store.getState())
    console.log('action=>', action)
    // store.dispatch({type:'PLUS'}) never ends
    next(action)
    console.log('store after action=>' ,store.getState())
  }

  export default myMiddleWare