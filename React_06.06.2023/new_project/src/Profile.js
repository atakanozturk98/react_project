import React, { Component } from 'react'
import { Table } from 'reactstrap';

export default class Profile extends Component {
  
    render() {
   
        var i=1;
    return (
        <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Password</th>
            <th>Select</th>
            <th>Select Multi</th>
            <th>Text</th>
            <th>Image</th>

          </tr>
        </thead>
        <tbody>
            {this.props.profile.map((profileDetail)=>(
                <tr>
                <th scope="row">{i++}</th>
                <td>{profileDetail.email}</td>
                <td>{profileDetail.password}</td>
                <td>{profileDetail.select}</td>
                <td>{profileDetail.selectMulti}</td>
                <td>{profileDetail.text}</td>
                {/* <th>
                {profileDetail.file && (
                  <img src={URL.createObjectURL(profileDetail.file)} alt="Profile Image" style={{ width: '100px' }} />
                )}
              </th> */}

              </tr>
            ))}
          
        </tbody>
      </Table>
    )
  }
}