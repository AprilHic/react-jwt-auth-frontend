import React, { Component } from 'react'
import './Profile.css'

class Profile extends Component {
  render() {
      return (
        <div class="row">
         <div class="col s12 m7">
          <div class="card">
           <div class="card-image">
            <img src="https://images.unsplash.com/photo-1564573732309-36969653e65c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1929&q=80"/>
            <span class="card-title"></span>
        </div>
        <div class="card-content">
          <p>Life hands you color. You choose what to do with it</p>
        </div>
        <div class="card-action">
          <a href="#">GitHub</a>
        </div>
      </div>
    </div>
  </div>
            
      )
  }

}

export default Profile
