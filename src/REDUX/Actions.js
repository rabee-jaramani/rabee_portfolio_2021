import { SET_SEASON} from "./Constants"


export const setSeasonAction=(season)=>{
    return{
        type:SET_SEASON,
        payload:season
    }
}