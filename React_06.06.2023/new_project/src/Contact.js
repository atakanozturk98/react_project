import React, { Component,setErrorData,setData } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import alertify from 'alertifyjs'
import axios from 'axios';

export default class Contact extends Component {
    state={
        email:"",
        password:"",
        select:"",
        selectMulti:"",
        text:"",
        file:""
    }

    onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
      };

    // handleFile = (e) => {
    //     let file = e.target.file[0]
    //     this.setState({file: file})
        
    // }

    // handleUpload = (event) => {
    //     let file = this.state.file
    //     let formdata = new FormData()

    //     formdata.append('image', file)

    // }

    // axios ({
    //     url:`/some`,
    //     method: "POST",
    //     header:{
    //         authorization: `your token`
    //     }
    // }).then((res) => {

    // })

    // onChangeHandler = (event) => {
    //     let name = event.target.name;
    //     let value =
    //       event.target.type === "file" ? event.target.files[0] : event.target.value;
    //     this.setState({ [name]: value });
    //     if (event.target.type === "file") {
    //       this.setState({ previewImage: URL.createObjectURL(event.target.files[0]) });
    //     }
    //   };

    // onChangeHandler = (event) => {
    //     let name = event.target.name;
    //     let value =
    //       event.target.type === "file" ? event.target.files[0] : event.target.value;
    //     this.setState({ [name]: value });
    //   };

    onSubmitHandler = (event) => {
        event.preventDefault()
        alertify.success(this.state.email+" login successfull",2)
    }

    // selectFile = (event) => {
    //     setCurrentFile(event.target.files[0]);
    //     setPreviewImage(URL.createObjectURL(event.target.files[0]));
    //     setProgress(0);
    //     setMessage("");
    //   };

  render() {
    return (
        <div>
            <h2>Contact</h2>
            <p>{this.state.email}</p>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input 
                    type="email" 
                    name="email" 
                    id="exampleEmail" 
                    placeholder="with a placeholder"
                    onChange={this.onChangeHandler}
                    value={this.state.email}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input 
                    type="password" 
                    name="password" 
                    id="examplePassword" 
                    placeholder="password placeholder"
                    onChange={this.onChangeHandler}
                    value={this.state.password}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Select</Label>
                    <Input 
                    type="select" 
                    name="select" 
                    id="exampleSelect"
                    onChange={this.onChangeHandler}
                    value={this.state.select}
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelectMulti">Select Multiple</Label>
                    <Input 
                    type="select" 
                    name="selectMulti" 
                    id="exampleSelectMulti" multiple
                    onChange={this.onChangeHandler}
                    value={this.state.selectMulti}
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Text Area</Label>
                    <Input 
                    type="textarea" 
                    name="text" 
                    id="exampleText"
                    onChange={this.onChangeHandler}
                    value={this.state.text}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleFile">File</Label>
                    <Input 
                    type="file" 
                    name="file" 
                    id="exampleFile"
                    onChange={this.onChangeHandler}
                    value={this.state.file}
                    />
                </FormGroup>
                <Button onClick={()=> this.props.addToProfile(this.state.email,this.state.password,this.state.select,this.state.selectMulti,this.state.text,this.state.file)}>Submit</Button>
            </Form>
        </div>
        
    )
  }
}