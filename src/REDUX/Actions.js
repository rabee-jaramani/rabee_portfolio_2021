import { SET_SEASON_IMG } from "./Constants"


export const setSeasonExtAction=(season)=>{
    return{
        type:SET_SEASON_IMG,
        payload:season
    }
}