import {remove} from '../Reducers/ProducstsSlice'


 export const asyncremove = (index) => (dispatch,getState) => {
        setTimeout(()=>{
            dispatch(remove(index))
        },2000)

}

