// import React, { createContext } from "react";
// import { BASE_URL } from "../config/Axios";
// import axios from "axios";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const register = (nama, email, password) => {
//     axios
//       .post(`${BASE_URL}/register`, {
//         nama,
//         email,
//         password,
//       })
//       .then((res) => {
//         let userInfo = res.data;
//         console.log(userInfo);
//       })
//       .catch((e) => {
//         console.log(`register error ${e}`);
//       });
//   };
//   return (
//     <AuthContext.Provider value={{ register }}>{children}</AuthContext.Provider>
//   );
// };
