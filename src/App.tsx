import { ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from './app/store'
import Routes from './Routes'
import theme from './theme'

// const StyledRoot = styled('div')({
//   fontFamily: 'Helvetica, Arial, sans-serif',
//   minHeight: '100vh',
// })

function App() {
  return (
    <div>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </Provider>
    </div>
  )
}

export default App