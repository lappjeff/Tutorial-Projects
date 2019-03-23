import React, { Fragment } from 'react'
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core'

const styles = {
  Paper: {
    padding: 20,
    margin: 10,
    height: 500,
    overflowY: 'auto'
  }
}

export default ({ exercises }) => {
  return (
    <Grid container>
      <Grid item sm>
        <Paper style={styles.Paper}>

          {exercises.map(([group, exercises]) =>
            <Fragment>
              <Typography
                variant='headline'
                style={{textTransform: 'capitalize'}}
                >

                {group}
              </Typography>

              <List component="ul">
                {exercises.map(({ title }) =>
                  <Fragment>
                    <ListItem button>
                      <ListItemText primary={title} />
                    </ListItem>
                  </Fragment>

                )}

              </List>
            </Fragment>
          )}

        </Paper>
      </Grid>
      <Grid item sm>
        <Paper style={styles.Paper}>
          <Typography
            variant='display1'
          >
            Welcome:
          </Typography>
          <Typography
            variant='subheading'
            style={{marginTop: 20}}
          >
            Please select an exercise from the list on the left
          </Typography>

        </Paper>
      </Grid>
    </Grid>
  )
}
