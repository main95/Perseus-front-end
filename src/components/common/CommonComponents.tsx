import { styled } from '@mui/material'
import { APP_BAR_MOBILE } from '../../styleguide/Size'

export const StyledCommonPageLayoutWrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  // flexGrow: 1,
  // overflow: 'auto',
  minHeight: '100%',
  width: '100vw',
  paddingTop: APP_BAR_MOBILE,
  // paddingBottom: theme.spacing(10),
  // [theme.breakpoints.up('lg')]: {
  //   paddingTop: APP_BAR_DESKTOP + 24,
  //   paddingLeft: theme.spacing(2),
  //   paddingRight: theme.spacing(2),
  // },
}))

export const StyledCommonPageWrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  minHeight: '100%',
  width: '100vw',
}))
