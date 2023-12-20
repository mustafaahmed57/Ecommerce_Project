import { Grid, Paper, Typography,TextField, Button, IconButton,Link } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import { VisibilityOff } from '@mui/icons-material';



const paperStyle={padding:20,height:'85vh',width:500, margin:'20px auto',borderRadius:10}


const Loginpage = () => {

  //state for password visibilty toggle
  const[showpassword,setshowpassword]=useState(false);

  //funtion to toggle password visibilty
  const handleshowpassword = () => {
    setshowpassword((prevshowpassword) => !prevshowpassword)
  };

  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');


  return (
    <Grid >
        <Paper elevation={10} style={paperStyle}>
          
           {/* Heading */}

            <Typography variant='h4' my={3} mx={2} fontWeight={700} fontFamily={''}>Sign in to Minimal</Typography>
            <Typography variant='body2' my={2} mx={2} >Don't have an account? <Link href="#" color={"textSecondary"}> Get started</Link> </Typography>

          {/* Social Media Icons */}

            <Grid container spacing={3} justifyContent={'center'} my={0.5} >
        <Grid item >
            <IconButton>
            <GoogleIcon />
            </IconButton>
        </Grid>
        <Grid item >
            <IconButton>
            <FacebookIcon/>
            </IconButton>
        </Grid>
        <Grid item>
            <IconButton>
            <TwitterIcon />
            </IconButton>
        </Grid>
      </Grid>

           {/* Email Input */}

          <Grid textAlign={'center'} my={1}>

          <TextField
            label={'Email address please'}
            variant='outlined'
            value={email}
            onChange={(e) => setemail(e.target.value)}
            sx={{margin:1,width:400,height:'7vh'}} />
           
           <br />

          {/* Password Input with Show/Hide toggle */}

           <TextField
            label={'Password'}
            variant='outlined'
            type={showpassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            sx={{margin:4,width:400,height:'7vh'}}
            InputProps={{
              endAdornment:(
                <IconButton onClick={handleshowpassword} edge="end">
                  {showpassword ? <VisibilityOff /> : <VisibilityOff /> }
                </IconButton>
              ),
            }}
           />

             {/* Forgot Password Link */}

            <Typography sx={{mt:1,marginRight:6 , textAlign:'right', color:'Purple'}}>
             <Link href="#" color={"textSecondary"}>  Forgot Password?
             </Link> 
            </Typography>

            {/* Login Button */}

              <Button variant="contained" sx={{width:400,height:'7vh' ,my:4, backgroundColor:'black', borderRadius:2}} >Login</Button>
              </Grid>


        </Paper>
    </Grid>

    )
  }
  

export default Loginpage
