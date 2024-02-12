import {FC} from 'react';

interface HookPops {
    method:"get" | "set"
    key:string
    value?:any
}
const UseLocalStorage:FC<HookPops> = ({method,key,value}) => {
    switch (method){
        case "get":
            // @ts-ignore
            return JSON.parse(localStorage.getItem(key))
        case "set":
            localStorage.setItem(`${key}`,JSON.stringify(value))
            break
    }
};

export default UseLocalStorage;