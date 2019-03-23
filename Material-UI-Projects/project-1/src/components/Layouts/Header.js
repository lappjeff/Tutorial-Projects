import React from 'react'
//Material UI imports
import {AppBar, Typography, Toolbar} from '@material-ui/core'

const Header = props => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='headline' color='inherit'>
          Exercise Database
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
