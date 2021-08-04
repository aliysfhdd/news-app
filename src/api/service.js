import {Axios} from "./config";

export default class APIService {
    listNews(){
        return Axios.get('portaljson')
    }
}
