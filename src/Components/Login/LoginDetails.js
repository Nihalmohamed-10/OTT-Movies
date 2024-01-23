// import React, { useEffect, useState } from "react";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { auth } from "../../Firebase";

// function LoginDetails() {

//   const [authUser, setAuthUser] = useState(null);
//   useEffect(() => {
//     const listen = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setAuthUser(user);
//       } else {
//         setAuthUser(null);
//       }
//     });

//     return () => {
//       listen();
//     };
//   }, []);

//   const userSignOut = () => {
//     signOut(auth)
    
//       .then(() => {
//         console.log("signOut successfully");
//       })
//       .catch((error) => console.log(error));
//   };
//   return (
//     <div>
//       {authUser ? (
//         <div>
//           <p>{`Sign In as ${authUser.email}`}</p>
//           <button type="button" onClick={userSignOut}>
//             Sign Out
//           </button>
//         </div>
//       ) : (
//         <p>Sign Out</p>
//       )}
//     </div>
//   );
// }

// export default LoginDetails;
