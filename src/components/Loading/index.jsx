import React from 'react'
import { useSelector } from 'react-redux'

import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import { getCommonData } from '@/store/selector/common'

const Loading = () => {
  const { isLoading } = useSelector(getCommonData)

  return (
    <div>
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}

export default Loading
