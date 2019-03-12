import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';
import {PostData} from './PostData';
import {Redirect} from 'react-router-dom';

import './Welcome.css';


class Welcome extends Component {
constructor(props) {
    super(props);
       this.state = {
       loginError: false,
       redirect: false
};

this.signup = this.signup.bind(this);
}

signup(res, type) {
    let postData;
 
    if (type === 'google' && res.w3.U3) {
    postData = {
        // id:res.El,
        firstname: res.w3.ofa,
        lastname: res.w3.wea,
        name: res.w3.ig,
        email: res.w3.U3,
        // token: res.Zi.access_token,
        // provider: type,
        // provider_id: res.El,
        
        // provider_pic: res.w3.Paa
    };
 console.log(postData)
}


if (postData) {
    console.log(postData)
    PostData('signup', postData).then((result) => {
    console.log(JSON.stringify(result))
    let responseJson = result;

    console.log(sessionStorage.setItem(postData, JSON.stringify(responseJson)));
    this.setState({redirect:true});
});
} else {}
    PostData('signup', this.state).then((result) => {
        let responseJson = result
        console.log(responseJson.message)
        if (responseJson.message.indexOf("User added successfully") > -1) {
            sessionStorage.setItem('postData', JSON.stringify(responseJson))
            this.setState({ redirectToReferrer: true });
        } else {
            let string = responseJson.message[0]
            this.setState({ error: string })
        }

    });
}


render() {

if (this.state.redirect || sessionStorage.getItem('postData')) {
    return (<Redirect to={'./hh'}/>)
}



const responseGoogle = (response) => {
    console.log("google console");
    console.log(response);
    this.signup(response, 'google');
}

return (

<div className="first" >
<h1 ><u>NINELEAPS</u></h1>
<h5 >CHECKLIST MANAGEMENT STYSTEM</h5>

<GoogleLogin
 clientId="411712102453-i5s2q52lkrav2nlji4075pqs8lmbi9cs.apps.googleusercontent.com"
 buttonText="Login with Google"  
 onSuccess={responseGoogle}
 onFailure={responseGoogle} className="row"/>
</div>

);
}
}
export default Welcome;