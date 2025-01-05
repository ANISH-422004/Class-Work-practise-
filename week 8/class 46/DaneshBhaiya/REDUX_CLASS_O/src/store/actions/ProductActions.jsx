export { add } from "../Productslice";
import {remove} from '../Productslice'

export const asyncremove = ()=>async(dispatch,getstate)=>{

    const data = getstate()
    setTimeout(()=>{
        dispatch(remove())


    },2000)
}
