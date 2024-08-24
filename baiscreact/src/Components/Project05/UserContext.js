import React from "react";

const UserContext = React.createContext();

// this is wrapping tag like div like iske andar joh hoga they can acess the data from this contexr
// so aab yeh niche wala eg main home and login can access data of this context
{
  /* <context>
    <Home />
    <Login />
  </context>; */
}

// usercontext.js and usercontextprovider.jsx dono ek alag folder main banti hai called as context
export default UserContext;
