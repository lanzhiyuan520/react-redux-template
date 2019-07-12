import axios from 'axios'
const PICLIST = 'PICLIST'
const REQUESTLIST = 'REQUESTLIST'
function RequestPicListAction (data) {
    return {
        type : REQUESTLIST,
        data
    }
}
function PicListAction(data) {
    return {
        type: PICLIST,
        data : data,
        loading : false
    }
}
export function picList(data) {
    return function (dispatch) {
        dispatch(RequestPicListAction(true))
        return axios(`/apiv2/picture_list?page=${data.page}`).then(res=>{
            console.log(res)
            if (res.data.code === 0) {
                setTimeout(()=>{dispatch(PicListAction(res.data.data))},1000)
            }
        })
    }
}