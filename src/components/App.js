import React from "react";
import "../styles/App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "../StateProvider";

function App() {
  const [{ user }] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;

// import React from "react";
// import "../styles/App.css";
// import Chat from "../components/Chat";
// import Sidebar from "../components/Sidebar";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Login from "../components/Login";
// import { useStateValue } from "../StateProvider";

// function App() {
//   const [{ user }, dispatch] = useStateValue();

//   return (
//     <div className="app">
//       {!user ? (
//         <Login />
//       ) : (
//         <div className="app-body">
//           <Router>
//             <Sidebar />
//             <Switch>
//               <Route path="/rooms/:roomId">
//                 <Chat />
//               </Route>
//               <Route path="/">
//                 <Chat />
//               </Route>
//             </Switch>
//           </Router>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
