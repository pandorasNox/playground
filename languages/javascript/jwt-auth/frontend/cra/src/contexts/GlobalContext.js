
import React, { Component } from 'react';

//util
const delay = ms => new Promise(rs => setTimeout(rs,ms)); 

//1st - new context
// const GlobalContext = React.createContext('inital state');
const GlobalContext = React.createContext({});

//2nd - create provider / providerWrapper
class GlobalProvider extends Component {
   state = {
      name: 'Atlas and Kara',
      age: 100,
      cool: true,
      isLoggedIn: false,
   }

   constructor(props) {
      super(props);
      console.log(`constructor GlobalProvider`);
   }

   getOlder = () => {
      this.setState({
         age: this.state.age + 1,
      })
   };

   login = async () => {
      await delay(1000);
      this.setState((state) => ({isLoggedIn: true}));
    };

   logout = async () => {
      await delay(1000);
      this.setState((state) => ({isLoggedIn: false}));
   };

   render () {
      const {name} = this.props
      return (
         <GlobalContext.Provider
            value={{
               state: this.state,
               getOlder: this.getOlder,
               login: this.login,
               logout: this.logout,
            }}
         >
            {this.props.children}
         </GlobalContext.Provider>
      );
   }
}

//3rd - create consumer
const GlobalConsumer = GlobalContext.Consumer;

export {
   GlobalProvider,
   GlobalConsumer,
};
