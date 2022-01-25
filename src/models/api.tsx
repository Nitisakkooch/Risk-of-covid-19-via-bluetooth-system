import axios, {AxiosInstance} from "axios";
import _ from "lodash";
import { url } from 'inspector';
import { config } from 'process';

class Api{
    private static axiosInstance: AxiosInstance;
    static init() {
        this.axiosInstance = axios.create({
            baseURL: "http://localhost:8080"
        });
    }
    static async get<ResponseType>(url: string) {
        return await Api.axiosInstance.get<ResponseType>(url);
    }
    static async post<ResponsType, DataType>(url:any, data:any) {
        return Api.axiosInstance.post<ResponsType, DataType>(url, data);
    }
}

export default Api;

