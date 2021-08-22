import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alerta: {
    marginBottom: '30px',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
  },
  btnSalvar: {
    marginRight: '10px',
  },
}))
