import React, { memo, ReactElement } from 'react'

import { Box, CircularProgress } from '@material-ui/core'

import { loaderStyleFn } from './loader.styles'

function Index(): ReactElement {
  const classes = loaderStyleFn()

  return (
    <Box className={classes.centerContent} position="absolute">
      <CircularProgress />
    </Box>
  )
}

export default memo(Index)
