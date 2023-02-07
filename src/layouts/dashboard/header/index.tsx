import { styled } from '@mui/material/styles'
import { Box, Stack, AppBar, Toolbar, IconButton } from '@mui/material'
// import { bgBlur } from '../../../utils/cssStyles'
import Iconify from '../../../components/iconify'
import StandardButton from '../../../styleguide/StandardButton'
import { useSelector } from 'react-redux'
import { selectPageStep } from '../../../features/app/selectors'
// import AccountPopover from './AccountPopover'
// import LanguagePopover from './LanguagePopover'
// import NotificationsPopover from './NotificationsPopover'

// const NAV_WIDTH = 280
const HEADER_MOBILE = 64
// const HEADER_DESKTOP = 92

// const StyledRoot = styled(AppBar)(({ theme }) => ({
//   ...bgBlur({ color: theme.palette.background.default }) as any,
//   boxShadow: 'none',
//   [theme.breakpoints.up('lg')]: {
//     width: `calc(100% - ${NAV_WIDTH + 1}px)`,
//   },
// }))

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  paddingRight: theme.spacing(1),
  // padding: theme.spacing(0, 5),
}))

type Props = {
  onOpenNav: () => void
  onBack: () => void
  onNext: () => void
}

const Header: React.FC<Props> = ({ onOpenNav, onBack, onNext }) => {
  const step = useSelector(selectPageStep)
  const showBackButton = step !== 'tables'

  return (
    <AppBar position='fixed'>
      <StyledToolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: 'text.primary',
            display: { lg: 'none' },
          }}
        >
          <Iconify icon='eva:menu-2-fill' />
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction='row'
          alignItems='center'
          spacing={0.5}
        >
          {showBackButton && 
            <StandardButton icon='mdi:arrow-left-circle' color='error' onClick={onBack} />
          }
          
          <StandardButton icon='mdi:arrow-right-circle' color='success' onClick={onNext} />
        </Stack>
      </StyledToolbar>
    </AppBar>
  )
}

export default Header
