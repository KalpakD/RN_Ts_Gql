import { AxiosResponse } from "axios";

export enum Status{
    SUCCESS=200,
    SERVER_ERROR=403,
    UNAUTHORIZED=401,
}

export const getResponse=(response:AxiosResponse):any=>{
    switch(response.status){
        case Status.SUCCESS:
            return response.data;
        case Status.SERVER_ERROR:
            return response.data.fault;
        case Status.UNAUTHORIZED:
            return response.data.fault;
        default: return null;
    }
}