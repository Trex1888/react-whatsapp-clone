import React from "react";
import "../styles/Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/225px-WhatsApp.svg.png"
          alt="whatsapp"
        />
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
}
export default Login;

// import React from "react";
// import { Button } from "@material-ui/core";
// import "../styles/Login.css";
// import { auth, provider } from "../firebase";
// import { useStateValue } from "../StateProvider";
// import { actionTypes } from "../reducer";

// function Login() {
//   const [{}, dispatch] = useStateValue();

//   const signIn = () => {
//     auth
//       .signInWithPopup(provider)
//       .then((result) => {
//         dispatch({
//           type: actionTypes.SET_USER,
//           user: result.user,
//         });
//       })
//       .catch((error) => alert(error.message));
//   };

//   return (
//     <div className="login">
//       <div className="login-container">
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/225px-WhatsApp.svg.png"
//           alt="whatsapp"
//         />
//         <div className="login-text">
//           <h1>Sign in to WhatsApp</h1>
//         </div>
//         <Button onClick={signIn}>Sign In With Google</Button>
//       </div>
//     </div>
//   );
// }

// export default Login;
