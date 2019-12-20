import React, { Component } from 'react'
import { Navbar, NavItem } from 'react-materialize'
import './NavBar.css'

class NavBar extends Component {

  render() {
    let navBarItems = [<NavItem key={1} href='/'>Home</NavItem>]
    if (this.props.isLoggedIn) {
      navBarItems.push(<NavItem key={2} href='/logout'>Log Out</NavItem>)
      if (this.props.user != null) {
        navBarItems.push(<NavItem key={5} href='/profile'>{this.props.user.email}</NavItem>)
        navBarItems.push(<NavItem key={9} href='/projectList'>Project List</NavItem>)
        navBarItems.push(<NavItem key={6} href='/createProject'>Create Project</NavItem>)
        // navBarItems.push(<NavItem key={7} href='/projectView'>Project View</NavItem>)
        navBarItems.push(<NavItem key={8} href='/galleryView'>Gallery</NavItem>)
      }
      
    } else {
      navBarItems.push(<NavItem key={3} href='/signup'>Sign Up</NavItem>)
      navBarItems.push(<NavItem key={10} href='/login'>Log In</NavItem>)
    }
    return (
      <Navbar brand='WELCOME to DEVE-ish' className='nav' right>

        {navBarItems}
      </Navbar>
    )
  }
}

export default NavBar
