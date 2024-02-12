import classes from "./style.module.css";

const HomePage = () => {


    return (
            <div className={classes.page__content}>
                <h2>About app</h2>
                <p className={"homepage_text"}>So, to be brief, in this app you can <ul>
                    <li>1.Create your own tasks and do planning</li>
                    <li>2.Save your tasks so as not to forget what actually happened there, and also edit them</li>
                    <li>3.Change your profile and even register</li>
                </ul>
                    In the task options there is when it was created, the status of whether the task is completed or not, the name of the task for reference, as well
                    there is a description of the tasks, each task has its own page where this data can be edited/changed somehow</p>
                <h2>About usage</h2>
                <p className={"homepage_text"}>
                    We go to the “Todos” page and there we see 1 select in which you can select 3 options <ul>
                    <li>Save - This option allows you to save your tasks in LocalStorage and then load from there</li>
                    <li>Delete loaded todos - This will simply take and delete all the tasks that have been saved</li>
                    <li>Load all saved todos - This option makes sure that tasks from LocalStorage are loaded into state</li>
                </ul>
                    There is also popUp CreateNew which is responsible for creating new tasks <br/>
                    You can also search by the title of your tasks
                </p>
                <h2>For recruiters</h2>
                <p className={"homepage_text"}>The following technologies were used here: <ul>
                    <li>HTML</li>
                    <li>Css</li>
                    <li>JS</li>
                    <li>ReactJS</li>
                    <li>Typescript for typing react app as well as for typing redux toolkit</li>
                    <li>React router dom through which all routing and dynamic pagination was implemented, there are both public and private routes</li>
                    <li>Redux Toolkit was used to work with state more conveniently than through the react context</li>
                    <li>Additional libraries:React redux,React icons.</li>
                </ul></p>
            </div>
    );
};

export default HomePage;