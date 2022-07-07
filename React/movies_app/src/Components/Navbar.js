import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <div style={{display:'flex', background:"	#404040", padding:'1rem', justifyContent:"center", alignItems:"center", }}>
            <h1 style={{color:"#D9E1E5"}}>Movies App</h1>
            <h1 style={{marginLeft:"2rem", color:"#D9E1E5"}}>Favourites</h1>
      </div>
    )
  }
}