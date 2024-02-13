import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import {store} from "./store/store.ts";
import {Provider} from "react-redux";



ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter basename="/fulldo/">
                <App />
        </BrowserRouter>
    </Provider>

)
