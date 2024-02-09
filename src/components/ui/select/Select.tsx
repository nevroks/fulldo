import {FC} from 'react';
import classes from "./style.module.css";
type optionType={
    value:string,
    name:string,
}
interface selectProps {
    defaultValue:string,
    options:Array<optionType>,
    setSelectedAction:any
}
const Select:FC<selectProps> = ({defaultValue,options,setSelectedAction}) => {
    return (
            <select onChange={e => setSelectedAction(e.target.value)} className={classes.select}>
                <option disabled >{defaultValue}</option>
                {options.map(option=>
                    <option key={option.value} value={option.value}>{option.name}</option>
                )}
            </select>

    );
};

export default Select;