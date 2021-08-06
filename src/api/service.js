import {Axios} from "./config";

export default class APIService {
    getListNews(){
        return Axios.get('portaljson')
    }
}
