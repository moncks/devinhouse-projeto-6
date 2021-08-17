import { ThemeProvider, Container, Paper } from '@material-ui/core'
import { getTheme } from './theme/Theme'
import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from './keycloak'
import { AppRouter } from './routes'
import { useStyles } from './App.styles'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure()
const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const classes = useStyles()

  const toggleTheme = () => {
    setDarkMode((oldValue) => !oldValue)
  }

  const theme = getTheme(darkMode)

  const eventLogger = (event, error) => {}

  const tokenLogger = (tokens) => {}

  return (
    <>
    <ToastContainer />
    <ReactKeycloakProvider authClient={keycloak} onEvent={eventLogger} onTokens={tokenLogger}>
      <ThemeProvider theme={theme}>
        <Navbar toggleTheme={toggleTheme} />
        <Container className={classes.container} maxWidth="lg">
          <Paper elevation={4}>
            <Container>
              <AppRouter />
            </Container>
          </Paper>
        </Container>
      </ThemeProvider>
    </ReactKeycloakProvider>
    </>
  )
}

export default App
