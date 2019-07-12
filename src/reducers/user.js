let store = {
    count : 1,
    loading : false,
    piclist:[]
}
const reducers =  (state=store,action) => {
    switch (action.type) {
        case 'ADD' :
            return Object.assign({},state,{count : state.count+1})
            break
        case 'JIAN':
            return Object.assign({},state,{count : state.count-1})
            break
        case  'REQUESTLIST' :
            return Object.assign({},state,{loading:action.data})
        case 'PICLIST' :
            let data = state.piclist.concat(action.data)
            return Object.assign({},state,{piclist: data,loading:action.loading})
        default :
            return state
    }
}

export default reducers