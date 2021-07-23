import React from 'react'

import { Card, CardActions, CardContent, Typography, Grid, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

import { useStyles } from './CardProcessos.styles'

export const CardProcessos = ({ processo }) => {
  const classes = useStyles()

  console.log(processo)
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container justifyContent="space-between">
          <Grid item xs={4}>
            <Typography className={classes.title}>
              <strong>Nº Processo:</strong>
            </Typography>
            <Typography variant="h5" component="h2">
              {processo.nuProcesso}
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography className={classes.title}>
              <strong>Orgao/Setor:</strong>
            </Typography>
            <Typography>{processo.sgOrgaoSetor}</Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography className={classes.title}>
              <strong>Ano</strong>
            </Typography>
            <Typography variant="h5" component="h2">
              {processo.nuAno}
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="space-between">
          <Grid item xs={4}>
            <Typography className={classes.title}>
              <strong>Interessado:</strong>
            </Typography>
            <Typography>{processo.cdInteressado.nmInteressado}</Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography className={classes.title}>
              <strong>Assunto:</strong>
            </Typography>
            <Typography>{processo.cdAssunto.descricao}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.title}>
              <strong>Descrição:</strong>
              {processo.descricao}
            </Typography>
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
  )
}
