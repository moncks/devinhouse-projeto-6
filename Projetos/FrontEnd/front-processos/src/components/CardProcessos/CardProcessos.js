import React from 'react'

import { Card, CardActions, CardContent, Typography, Grid, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

import { useStyles } from './CardProcessos.styles'

export const CardProcessos = () => {
  const classes = useStyles()

  return (
    <Grid item xs={12} sm={12} md={24} lg={18} xl={12}>
      <Card className={classes.root}>
        <CardContent>
          <Grid container justifyContent="space-between">
            <Typography variant="h5" component="h2" className={classes.title} color="textSecondary" gutterBottom>
              Nº Processo:
            </Typography>
            <Typography variant="h5" component="h2" className={classes.title} color="textSecondary" gutterBottom>
              Ano
            </Typography>
          </Grid>
          <Grid container justifyContent="space-between">
            <Typography variant="h5" component="h2">
              123
            </Typography>
            <Typography variant="h5" component="h2">
              12
            </Typography>
          </Grid>
          <Grid container justifyContent="space-between">
            <Grid>
              <Grid container>
                <Typography className={classes.title}>
                  <strong>Orgao/Setor:</strong>
                </Typography>
              </Grid>
              <Typography>SOFT/TESTES</Typography>
              <Grid container>
                <Typography className={classes.title}>
                  <strong>Interessado:</strong>
                </Typography>
              </Grid>
              <Typography>Joaozinho</Typography>
            </Grid>
            <Grid>
              <Grid container>
                <Typography className={classes.title}>
                  <strong>Assunto:</strong>
                </Typography>
              </Grid>
              <Typography>Morreu</Typography>
              <Grid container>
                <Typography className={classes.title}>
                  <strong>Descrição:</strong>
                  Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss
                  quisso pudia ce receita de bolis, mais bolis eu num gostis.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container justifyContent="flex-end">
            <IconButton className={classes.button} variant="contained">
              <EditIcon />
            </IconButton>
            <IconButton className={classes.button} variant="contained">
              <DeleteIcon />
            </IconButton>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  )
}
