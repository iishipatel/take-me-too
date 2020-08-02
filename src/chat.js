import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import Landing from "../screens/landing"
// import Moon from "../screens/moon"
// import Splash from "../screens/splashscreen"
// import BookMoon from "../screens/exploremoon"
// import Experience from "../screens/Experience"
// import Iss from "../screens/iss"
// import Form from "../screens/form"
// import Soon from "../screens/comingsoon"
// import Thankyou from "../screens/thankyou"


export default class Routes extends Component {
    
    componentDidMount() {
        (function(d, m){
            var kommunicateSettings = {"appId":"3e05e110474a3ec0bc02d44616b1a36cf","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
          })(document, window.kommunicate || {});
    }

    render(){
        return(
            <div></div>
        );
    }
}

