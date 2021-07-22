import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  btnNovo: {
    textAlign: 'right',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}))
