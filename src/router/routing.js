import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Landing from "../screens/landing"
import Moon from "../screens/moon"
import Splash from "../screens/splashscreen"
import BookMoon from "../screens/exploremoon"
import Experience from "../screens/Experience"
import Iss from "../screens/iss"
import Form from "../screens/form"
import Soon from "../screens/comingsoon"
import Thankyou from "../screens/thankyou"
import KommunicateChat from "../chat"


export default class Routes extends Component {
    // state={
    //     loader:true
    // }




    // componentDidMount() {
    //     this.timer = setInterval(
    //         () => this.setState(prevState => ({ loader: false })),
    //         2000,
    //     );
    // }

    // componentWillUnmount() {
    //     clearInterval(this.timer);
    // }

    constructor(props) {
        super(props);
        this.state = { loader: true }
        console.log(this.state.loader)
    }
    
    componentDidMount() {
        this.setState({loader: false},()=>  console.log(this.state.loader))
      

    }

    render(){
        // const loader = this.state.loader;
        let Component;
        if (this.state.loader==true) {
          Component = <Splash/>;
        } else {
          Component = <Router>
          <Switch>
          <Route exact path="/">
              <Landing />
              <KommunicateChat/>
          </Route>
          <Route path="/moon">
              <Moon />
              <KommunicateChat/>
          </Route>
          <Route path="/moondestination">
              <BookMoon />
              <KommunicateChat/>
          </Route>
          <Route path="/experience">
              <Experience />
              <KommunicateChat/>

          </Route>
          <Route path="/spacestation">
              <Iss />
              <KommunicateChat/>

          </Route>
          <Route path="/form">
              <Form/>
              <KommunicateChat/>

          </Route>
          <Route path="/comingsoon">
              <Soon/>
              <KommunicateChat/>

          </Route>
          <Route path="/thankyou">
              <Thankyou/>
              <KommunicateChat/>

          </Route>
          </Switch>
      </Router>
        }
        return(
        <div>
                        {Component}

        </div>
            
        );
    }
}

