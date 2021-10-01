
import './App.css';
import Home from './component/Home';
import NavBar from './component/NavBar';
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Registeration from './component/Registeration';


function App() {
  
  return (
   <>
   <Router>
   <NavBar title="Covid-19"/>
   <Home/>
   <Switch>
     <Route exact path = "/register">
       <Registeration/>
     </Route>
   </Switch>

   </Router>
   
   
   
   

  
   </>
  );
}

export default App;
