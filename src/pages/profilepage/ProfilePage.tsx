import React, {useState} from 'react';
import classes from "./style.module.css";
import {GoPencil} from "react-icons/go";
import {IUser} from "../../types/types.tsx";
import Input from "../../components/ui/input/Input.tsx";
import {IoIosCheckmarkCircleOutline} from "react-icons/io";
import Button2 from "../../components/ui/button/Button2.tsx";
import UseLocalStorage from "../../hooks/UseLocalStorage.tsx";
import {IoLogOutSharp} from "react-icons/io5";


const ProfilePage = () => {
    const user=UseLocalStorage({method:"get",key:"user"})
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
            UseLocalStorage({method:"set",key:"user",value:modUser})
            location.reload()
        }else{
            return
        }
    }
    const logoutHandler=()=>{
        let answer=confirm("It will delete your account and todos,continue?")
        if (answer){
            localStorage.clear()
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
                <div className={classes.button__container}>
                    <Button2 onClick={()=>ConfirmChanges()}>Confirm</Button2>
                    <Button2 variant={"red"} onClick={logoutHandler}>LogOut <IoLogOutSharp /></Button2>
                </div>

            </div>
        </div>
    );
};

export default ProfilePage;