import api from "../../index";
import {ITime} from "../../../interfaces/Time.Interface";

class TimeData{
    index(){
        return api.get<ITime[]>('time');
    }
}

export default new TimeData;