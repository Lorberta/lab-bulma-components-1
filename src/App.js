import React, { Component } from 'react';
// import logo from './logo.svg';
import Navbar from './Navbar'
import FormField from './FormField'
import CoolButton from './CoolButton'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <form>
            <FormField label="Name" type="text" placeholder="Alex Smith" />
            <FormField label="Email" type="email" placeholder="alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="********" />
            <CoolButton isDanger isRounded>Submit</CoolButton>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
