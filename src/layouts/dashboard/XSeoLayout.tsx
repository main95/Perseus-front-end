import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Nav from './nav'
import Header from './header'
import { styled } from '@mui/material'
import { StyledCommonPageLayoutWrapper } from '../../components/common/CommonComponents'
import { PageStep } from '../../types/model'
import { useDispatch, useSelector } from 'react-redux'
import { selectPageStep } from '../../features/app/selectors'
import appActions from '../../features/app/actions'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from '../../app/store'
import { Action } from 'redux'

const StyledRoot = styled('div')({
  display: 'flex',
  minHeight: '100vh',
  overflow: 'hidden',
})

const getBackUrl = (step: PageStep) => {
  switch (step) {
    case 'tables':
      return ''
    case 'order':
      return 'tables'
    default:
      return ''
  }
}

const getNextUrl = (step: PageStep) => {
  switch (step) {
    case 'tables':
      return 'order'
    case 'order':
      return ''
    default:
      return ''
  }
}

const DashboardLayout: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, unknown, Action<string>> = useDispatch()
  const [open, setOpen] = useState(false)
  const step = useSelector(selectPageStep)

  const navigate = useNavigate()

  const onBack = () => {
    const backUrl = getBackUrl(step)
    dispatch(appActions.setPageStep(backUrl))
    navigate(backUrl)
  }

  const onNext = () => {
    const nextUrl = getNextUrl(step)
    dispatch(appActions.setPageStep(nextUrl))
    navigate(nextUrl)
  }

  return (
    <StyledRoot>
      <Header
        onOpenNav={() => setOpen(true)}
        onBack={onBack}
        onNext={onNext}
      />

      <Nav openNav={open} onCloseNav={() => setOpen(false)} />

      <StyledCommonPageLayoutWrapper>
        <Outlet />
      </StyledCommonPageLayoutWrapper>
    </StyledRoot>
  )
}

export default DashboardLayout
