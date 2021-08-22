import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  btnNovo: {},
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
  subTitulo: {
    fontSize: 35,
  },
  btnFiltrar: {
    fontSize: '10px',
    marginLeft: '15px',
    color: theme.palette.action.active,
  },
}))
