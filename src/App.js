import { Component } from "react";
import Sidebar from "./components/Sidebar";
import Video from "./components/Video";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component{

    render(){
        return(
            <div className='App'>
                <Provider store={store}>
                <Sidebar />
                <Video/>
                </Provider>
            </div>
        )
    }
}
export default App