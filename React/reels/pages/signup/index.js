import React from 'react';
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import Logo from '../../asset/Instagram.png'
function index() {
  return (
    <div className="signup-container">
        <div className="signup-card">
        <Image src={Logo}/>
        <TextField id="outlined-basic" size='small' label="Email" variant="outlined" fullWidth margin='dense' />
        <TextField id="outlined-basic" size='small' label="Password" variant="outlined" fullWidth margin='dense' />
        <TextField id="outlined-basic" size='small' label="Full Name" variant="outlined" fullWidth margin='dense' />
        </div>
    </div>
  )
}

export default index
