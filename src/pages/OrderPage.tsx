import {
  Container,
  Grid,
  styled,
} from '@mui/material'
import { StyledCommonPageWrapper } from '../components/common/CommonComponents'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectPageStep } from '../features/app/selectors'
import { selectCurrentOrderCovereds, selectCurrentOrderName, selectCurrentOrderTable } from '../features/order/selectors'

const StyledInfoRow = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main
}))

const Item = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const OrderPage: React.FC = () => {
  const step = useSelector(selectPageStep)
  const orderName = useSelector(selectCurrentOrderName)
  const orderTable = useSelector(selectCurrentOrderTable)
  const orderCovereds = useSelector(selectCurrentOrderCovereds)

  if (step !== 'order') {
    return <Navigate to='/xseo/tables' />
  }

  return (
    <StyledCommonPageWrapper>
      <Container disableGutters={true}>
        <StyledInfoRow container spacing={0}>
          <Grid item xs={6} md={8}>
            <Item>{`Nome: ${orderName}`}</Item>
          </Grid>
          <Grid item xs={3} md={2}>
            <Item>{`TAV: ${orderTable}`}</Item>
          </Grid>
          <Grid item xs={3} md={2}>
            <Item>{`COP: ${orderCovereds}`}</Item>
          </Grid>
        </StyledInfoRow>
        {/* <Stack
          direction='row'
          alignItems='center'
          justifyContent='start'
          mb={5}
          style={{border: '2px solid red'}}
        >
          <Typography variant='h4' gutterBottom>
            Books
          </Typography>
          <Link to={'new-book'}>
            New book
          </Link>
        </Stack> */}
      </Container>
    </StyledCommonPageWrapper>
  )
}

export default OrderPage
