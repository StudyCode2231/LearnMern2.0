import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
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

        <Button color="secondary" variant="outlined" component="label"  fullWidth>
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
        </div>
    </div>
  )
}

export default index
