import React from 'react';


import './App.css';


import Main from './components/MainComponent';

class App extends React.Component {

  
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
  // render(){
  //   return (
  //     <div className="App">
  //       <Navbar dark color="primary">
  //         <div className="container">
  //           <NavbarBrand href="/">Restaurant</NavbarBrand>
  //         </div>
  //       </Navbar>
  //       <Menu dishes={this.state.dishes}/>
  //     </div>
  //   );
  // }
}

export default App;
