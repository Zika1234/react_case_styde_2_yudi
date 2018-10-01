import React, { Component } from 'react';
//import ProjectItem from "./projectItem"
import RegisterItems from './registerItem';

class RegisterTrans extends Component {

onDelete(id){
    console.log(id);
    this.props.deleteElement(id);
}




  render() {

    let registerItem;

    registerItem = this.props.transArr.map(     //this component is mainly used to seperate each element(object) of the array and pass it to registertItem
        (items)=>{
            return(

                <RegisterItems itemsTrans = {items}  deleteElement = {this.onDelete.bind(this)}/>


            )
        }
    )



    return (
      <div className="App">
      <h4>Cutomer Visit Information</h4>
        {registerItem}
      </div>


    );
  }
}

export default RegisterTrans;
