const information = (store)=>(next)=>(action)=>{
    console.groupEnd(action.type)
    const result = next(action)
    console.log(action)
    console.log('store get state',store.getState())
    return result
}

export default information