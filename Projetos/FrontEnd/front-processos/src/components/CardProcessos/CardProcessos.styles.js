import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: '20px auto',
    backgroundColor: theme.palette.background.default,
  },
  primeiraColuna: {
    marginBottom: 30,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.action.active,
  },
}))
