import React, { Component } from 'react';
import './registerItem.css';

class RegisterItems extends Component {


onDelete(id){

    console.log(id);
    this.props.deleteElement(id);

}


  render() {
    return (
      <div>
        <table>
            <tr>
                <th>Name:</th>
                <td>{this.props.itemsTrans.name}</td>
              </tr>
              <tr>
                <th>Eamil Id:</th>
                <td>{this.props.itemsTrans.email}</td>
              </tr>
              <tr>
                <th>Mobile Number:</th>
                <td>{this.props.itemsTrans.mobile}</td>
              </tr>
              <tr>
                <th>Address:</th>
                <td>{this.props.itemsTrans.address}</td>
                </tr>
                <tr>
                <th>Description/Purpose:</th>
                <td>{this.props.itemsTrans.purpose}</td>
                </tr>
                <tr>
                <th>Date of visit:</th>
                <td>{this.props.itemsTrans.date}</td>
                <td></td>
                <td><button type="button" id = "bt" onClick = {this.onDelete.bind(this,this.props.itemsTrans.id)}>Delete</button></td>
            </tr>
            </table>
              <br/>
              <br/>
              <br/>
      </div>


    );
  }
}

export default RegisterItems;
