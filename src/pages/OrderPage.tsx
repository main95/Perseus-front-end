import {
  Container,
  Stack,
  Typography,
} from '@mui/material'
import { StyledCommonPageWrapper } from '../components/common/CommonComponents'
import { Link, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectPageStep } from '../features/app/selectors'

const OrderPage: React.FC = () => {
  const step = useSelector(selectPageStep)

  if (step !== 'order') {
    return <Navigate to='/xseo/tables' />
  }

  return (
    <StyledCommonPageWrapper>
      <Container disableGutters={false}>
        <Stack direction='row' alignItems='center' justifyContent='space-between' mb={5}>
          <Typography variant='h4' gutterBottom>
            Books
          </Typography>
          <Link to={'new-book'}>
            New book
          </Link>
        </Stack>
      </Container>
    </StyledCommonPageWrapper>
  )
}

export default OrderPage
