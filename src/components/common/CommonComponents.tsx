import { styled } from '@mui/material'

const APP_BAR_MOBILE = 64
const APP_BAR_DESKTOP = 92

export const StyledCommonPageWrapper = styled('div')(({ theme }) => ({
  // backgroundColor: theme.palette.secondary.main,
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}))
