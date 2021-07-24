import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  btnNovo: {
    left: '80%',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
  subTitulo: {
    marginLeft: '5%',
    fontSize: 35,
  },
  btnFiltrar: {
    fontSize: '10px',
    marginLeft: '8%',
  },
}))
