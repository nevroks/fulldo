export interface IUser
{
    login:string,
    password:string
}
export interface ITodo
{
    id?:number | string,
    title:string,
    description:string,
    completed?:boolean
}