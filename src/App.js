import { useEffect } from 'react'
import './App.css';
import Login from './Component/Login'
import Header from './Component/Header';
import {BrowserRouter as Router,Switch,Route} from'react-router-dom'
import Home from './Component/Home';
import {getUserAuth} from './Action/index'
import {connect} from 'react-redux'
import MyNetwork from './Component/MyNetwork';
import Job from './Component/Job';
import Messaging from './Component/Messaging'
import Notifications from './Component/Notifications'
function App(props) {
  useEffect(()=>
  {
props.getUserAuth();
  },[])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login/>
          </Route>
          <Route path="/home">
           <Header/>
          <Home/>
          </Route>
         <Route path="/my-network">
           <Header/>
            <MyNetwork/>
         </Route>
         <Route path="/job">
           <Header/>
           <Job/>
         </Route>
         <Route path="/message">
           <Header/>
          <Messaging/>
         </Route>
         <Route path="/notifactions">
             <Header/>
            <Notifications/>
           </Route>
        </Switch>
      </Router>
    </div>
  );
}
const mapStateToProps= (state) =>
{
  return{

  }
}
const mapDispatchToProps =(dispatch)=>({
  getUserAuth:()=>dispatch(getUserAuth())
})
export default connect(mapStateToProps,mapDispatchToProps)(App)
