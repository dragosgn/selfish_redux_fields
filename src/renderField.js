import React from 'react';
import { Field } from 'redux-form';
import styled from "styled-components";


const Root = styled.div`
  width: 100%;
`


const EditButton = styled.button`
  width: 40px;
  height: 40px;
  margin: 0px;
  background-color: green;
`

const Value = styled.p`
  height: 40px;
  font-size: 16px;
  margin: 0px;
  border-color: none;
`


const renderInput = ({input, edit}) => {
  return(
    <div>
    {edit ? 
      <input {...input}></input>
    : <p>{input.value}</p>
    }
    </div>
  )
}


class EditableField extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      edit: false
    }
    this.onEdit = this.onEdit.bind(this)
    this.onSave = this.onSave.bind(this)
    this.onCancel = this.onCancel.bind(this)
  }

  onEdit(e){
    e.preventDefault()
    this.setState({
      edit: true
    })
  }

  onSave(e){
    e.preventDefault()
    this.setState({
      edit: false
    })
    this.props.handleSubmit()
  }

  onCancel(e) {
    e.preventDefault()
    this.setState({
      edit: false
    })
  }


  render(){
    let { label, name, placeholder, handleSubmit, value } = this.props
    let {edit} = this.state
    return(
      <Root>
        <label>{label}</label>
          <div>
            <Field
              name={name}
              component={renderInput}
              type="text"
              placeholder={placeholder}
              edit={edit}
            />
            </div> 
        {edit ?
        <div>
            <EditButton onClick={this.onCancel}>X</EditButton>
            <EditButton onClick={this.onSave}>Save</EditButton>
        </div>
          : 
          <EditButton onClick={this.onEdit}>Edit</EditButton>
        }
      </Root>
    )
  }
}


export default EditableField