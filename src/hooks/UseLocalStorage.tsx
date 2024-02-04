import React, {FC} from 'react';

interface HookPops {
    method:"get" | "set"
    key:string
    value?:any
}
const UseLocalStorage:FC<HookPops> = ({method,key,value}) => {
    switch (method){
        case "get":
            const result=JSON.parse(localStorage.getItem(key))
            return result
        case "set":
            localStorage.setItem(`${key}`,JSON.stringify(value))
            break
    }
};

export default UseLocalStorage;