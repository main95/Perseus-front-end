import {
  IconButton, styled,
} from '@mui/material'
import Iconify from '../components/iconify'

type StyledProps = {
  color: 'inherit' | 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined
}

const StyledButton = styled(IconButton)<StyledProps>(({ theme, color }) => ({
  // backgroundColor: theme.palette.secondary.main,
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  padding: 0,
}))

type Props = {
  icon: string
  color: 'inherit' | 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined
  label?: string
  onClick: () => void
}

const StandardButton: React.FC<Props> = ({ icon, color, label, onClick }) => {

  return (
    <StyledButton
      color={color}
      size='large'
      onClick={onClick}
      // variant='contained'
    >
      <Iconify icon={icon} sx={{ color: color, width: 50, height: 50 }} />
    </StyledButton>
  )
}

export default StandardButton
