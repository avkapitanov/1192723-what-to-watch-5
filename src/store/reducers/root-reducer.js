import {combineReducers} from "redux";
import {process} from "./process/process";
import {data} from "./data/data";
import {user} from "./user/user";
import {ReducerNameSpace} from "../../const";

export default combineReducers({
  [ReducerNameSpace.DATA]: data,
  [ReducerNameSpace.PROCESS]: process,
  [ReducerNameSpace.USER]: user
});
