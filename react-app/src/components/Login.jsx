import {useState} from 'react';
import {Link } from 'react-router-dom';
import{ Box, Container,Grid,TextField, Typography,Button} from '@mui/material';



const Login =() =>{
   

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const handleRegister =() =>{
        //you can handle the registration logic here

        const Data = {
            
            email,
            password,
            
        };
        console.log('Registration Data:',Data);

    };
 return (
    
    
         <Box sx={{ mt:8}}>
           <Typography variant="h4" align="center" gutterBottom>
            Login
            </Typography>
            <Grid container spacing={2}>

                <Grid itme xs ={12}>
                    <TextField
                    fullWidth
                    label="Email"
                    required
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    />
                    </Grid>
                    </Grid>
                    <Grid itme xs ={12}>
                    <TextField
                    fullWidth
                    label="Password"
                    type="password" //Make sure the type is set to "password"
                    required
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                   </Grid>
                   <Grid item xs={12}>
                    <Button variant ="contained"color = "primary" onClick={handleRegister}>
                     Login
                  </Button>
                  </Grid>
                  <Grid item xs ={12}>
                  <Typography variant = "body2"align="center">
                 Already have an account? <Link to="/Register">Registre</Link>
                    </Typography>
                   </Grid>
                </Box>
                
);
            };

            export default Login;