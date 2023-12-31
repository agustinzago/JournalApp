import {Link as RouterLink} from 'react-router-dom'
import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>
              <form>
          <Grid container>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField 
                label='Fullname'
                type='text' 
                placeholder='Your name' 
                fullWidth>
                </TextField> 
            </Grid>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField 
                label='Email'
                type='email' 
                placeholder='email@google.com' 
                fullWidth>
                </TextField> 
            </Grid>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField 
                label='Password'
                type='password' 
                placeholder='Password' 
                fullWidth>
                </TextField> 
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
            <Grid item xs={12}>
              <Button variant='contained' fullWidth>
                Create account
              </Button>
            </Grid>
          </Grid>
        <Grid container direction='row' justifyContent='end'>
          <Typography sx={{mr:1}}>Already have an account?</Typography>
          <Link component={RouterLink} color='inherit' to='/auth/login'>
            Login
          </Link>
        </Grid>
      </form>

    </AuthLayout>
  )
}

