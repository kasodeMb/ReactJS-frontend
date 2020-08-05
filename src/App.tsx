import React, { Suspense } from 'react'
import { CssBaseline } from '@material-ui/core'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter } from 'react-router-dom'

import useTheme from 'hooks/theme.hook'
import Routers from 'routers'
import Loader from 'components/loader'

const App = (): JSX.Element => {
  const { theme } = useTheme()

  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<Loader />}>
          <Routers />
        </Suspense>
      </MuiThemeProvider>
    </BrowserRouter>
  )
}

export default App
