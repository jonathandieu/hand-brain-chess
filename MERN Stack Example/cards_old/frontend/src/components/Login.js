import React from 'react';

function Login() {
    const doLogin = async event => {
        event.preventDefault();

        alert("doIt()");
    };

    return (
        <div id="loginDiv">
            <form onSubmit={doLogin}>
                <span id="inner-title"> PLEASE LOG IN</span><br />
                <input type="text" id="loginName" placeholder='Username'></input>
                <input type="password" id="loginPassword" placeholder='Password'></input>
                <input type="submit" id="loginButton" class="buttons" value="Do it" onClick={doLogin}></input>
            </form>
            <span id="loginResult"></span>
        </div>
    );
};

export default Login;