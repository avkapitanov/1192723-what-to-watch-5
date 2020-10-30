import {combineReducers} from "redux";
import {process} from "./process/process";
import {data} from "./data/data";
import {ReducerNameSpace} from "../../const";

export default combineReducers({
  [ReducerNameSpace.DATA]: data,
  [ReducerNameSpace.PROCESS]: process,
});
