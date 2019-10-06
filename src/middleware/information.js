const information = (store)=>(next)=>((action)=>{
    console.group('type:',action.type)
    const reutrnValue = next(action)
    console.log("action",action)
    console.log("The state is",store.getState())
    console.groupEnd('')
    return reutrnValue
})
export default information