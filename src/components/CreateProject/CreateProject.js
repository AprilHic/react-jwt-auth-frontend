import React, { Component } from 'react'
import './CreateProject.css'
import axios from 'axios';

const databaseUrl = process.env.NODE_ENV === 'production' ? process.env.BACKEND_APP_URL : 'http://localhost:3000'

class CreateProject extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      description: '',
      deadline: '',
      project: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let newProject = {
      name: this.state.name,
      description: this.state.description,
      deadline: this.state.deadline,
      user: JSON.parse(localStorage.user)._id
    }

    // AXIOS CALL
      axios.post(`${databaseUrl}/api/projects`, newProject)
        .then(project => {
          console.log(project)
          this.setState({ project })
        })
    
    // CLEAR FORM OR REDIRECT
    this.props.history.push('projectView', )
    

    console.log('NEW PROJECT', newProject)
  }


  render() {
      console.log
      return (
        <div>
          <h4>Create Project</h4>
          <form id="project-form" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' onChange={this.handleInput} required/>
          </div>
          <div>
            <label htmlFor='description'>Description</label>
            <input type='text' name='description' onChange={this.handleInput} />
          </div>
          <div>
            <label htmlFor='deadline'>Deadline</label>
            <input type='date' name='deadline' onChange={this.handleInput} />
          </div>
          <input value='Submit' type='submit'/>
        </form>
        </div>
      )
  }

}

export default CreateProject
