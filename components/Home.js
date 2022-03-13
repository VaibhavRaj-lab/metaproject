import React from 'react';
import {useMoralis} from "react-moralis"
function Home(props) {
    const {logout,isAuthenticating} = useMoralis()
    return (
        <div>
            <p>hello</p>
            <button onClick={logout} disabled={isAuthenticating}>PRess NOw</button>
        </div>
    );
}

export default Home;