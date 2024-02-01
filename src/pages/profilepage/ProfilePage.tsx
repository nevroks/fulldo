import React, {useState} from 'react';
import classes from "./style.module.css";
import {GoPencil} from "react-icons/go";
import {IUser} from "../../types/types.tsx";
import Input from "../../components/ui/input/Input.tsx";
import {IoIosCheckmarkCircleOutline} from "react-icons/io";
import Button2 from "../../components/ui/button/Button2.tsx";


const ProfilePage = () => {
    const user=JSON.parse(localStorage.getItem("user"))
    const [modUser,setModUser]=useState<IUser>({
        login:user.login,
        password:user.password
    })

    const [isChanging,setIsChanging]=useState({
        login:false,
        password:false
    })
    const ConfirmChanges =()=>{
        let answer=confirm("Confirm changes,it will change your user profile")
        if (answer){
            localStorage.setItem("user",JSON.stringify(modUser))
            location.reload()
        }else{
            return
        }
    }
    return (
        <div className={classes.page}>
            <div><img src="" alt=""/></div>
            <div>
                {!isChanging.login ?
                    <p>Login:{user.login}(will be:{modUser.login})<button onClick={()=>setIsChanging({...isChanging,login:true})}><GoPencil/></button></p>
                    :
                    <div><Input value={modUser.login} onChange={e=>setModUser({...modUser,login:e.target.value})} placeholder={"Login"}/><button onClick={()=>setIsChanging({...isChanging,login:false})}><IoIosCheckmarkCircleOutline/></button></div>

                }
                {!isChanging.password ?
                    <p>Password:{user.password}(will be:{modUser.password})<button onClick={()=>setIsChanging({...isChanging,password:true})}><GoPencil/></button></p>
                    :
                    <div><Input value={modUser.password} onChange={e=>setModUser({...modUser,password:e.target.value})} placeholder={"Password"}/><button onClick={()=>setIsChanging({...isChanging,password:false})}><IoIosCheckmarkCircleOutline/></button></div>

                }
                <Button2 onClick={()=>ConfirmChanges()}>Confirm</Button2>
            </div>
        </div>
    );
};

export default ProfilePage;