import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import RegisterTrans from './components/registertrans';
import uuid from "uuid";

class App extends Component {

constructor(){
  super();
  this.state = {  
    showArr:[]                                //breating an empty array in state object
  }
  this.tempArr = [];

}



i = 0;
showOnPage(){                                         //this function takes value from the form and stores it in an oject which later is tored in  th showArray
let objname = this.refs.name.value;
let objemail = this.refs.age.value;
let objmobile = this.refs.mobile.value;
let objadd = this.refs.address.value;
let objpurpose = this.refs.purpose.value;
let objdate = this.refs.date.value;
let obj = {
  id:uuid.v4(),
  name:objname,
  email:objemail,
  mobile:objmobile,
  address:objadd,
  purpose:objpurpose,
  date:objdate
}

this.tempArr[this.i] = obj;
this.setState({
  showArr:this.tempArr
})

console.log(this.tempArr);
this.i++;
}

onDelete(id){                                     //this function is delete array elements based id which is uuid we passed from registerItem to registerTrans to app
  console.log(id);
  let allRegister = this.state.showArr;
  let index = allRegister.findIndex(oneRegister => oneRegister.id === id);
  allRegister.splice(index,1);
  this.setState({
    showArr:allRegister
  });
  this.i--;
}




  render() {
    return (
      <div className="App">
      <h3>Customer Registration Form</h3>
      <input type="text" ref = "name" placeholder = "Username"/><br/>
      <br/>
      <input type="text" ref = "age" placeholder = "Email Id" /><br/>
      <br/>
      <input type="text" ref = "mobile" placeholder = "Mobile Number" /><br/>
      <br/>
      <input type="text" ref = "address" placeholder = "Address" /><br/>
      <br/>
      <input type="text" ref = "purpose" placeholder = "Purpose Of Visit" /><br/>
      <br/>
      <input type="text" ref = "date" placeholder = " date of visit" /><br/>
      <br/>
      <button type="button" id = "btapp" onClick = {this.showOnPage.bind(this)}>Add</button>
      <RegisterTrans transArr = {this.state.showArr} deleteElement = {this.onDelete.bind(this)} />
     
      </div>


    );
  }
}

export default App;
