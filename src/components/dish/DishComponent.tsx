import { styled } from '@mui/material'
import { Action, ThunkDispatch } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { RootState } from '../../app/store'
import orderActions from '../../features/order/actions'
import { Dish } from '../../types/Dish'

const StyledDish = styled('div')(({theme}) => ({
  backgroundColor: theme.palette.success.main,
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '0.75rem',
  padding: theme.spacing(1, 1, 1, 1)
}))

const StyledDishLabel = styled('div')(({theme}) => ({
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: theme.spacing(0.5)
}))

const StyledDishPrice = styled('div')(({theme}) => ({
  minWidth: '100%',
  color: 'yellow',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontWeight: 'bold',
}))

type Props = {
  dish: Dish,
}

const DishComponent: React.FC<Props> = ({
  dish,
}) => {
  const dispatch: ThunkDispatch<RootState, unknown, Action<string>> = useDispatch()
  const dishId = dish._id

  const handleClick = () => {
    dispatch(orderActions.addQuantity(dishId))
  }

  return (
    <StyledDish
      style={{ gridArea: `${dishId}` }}
      onClick={handleClick}
    >
      <StyledDishLabel>
        <div>{dish.label}</div>
      </StyledDishLabel>
      <StyledDishPrice>
        <div>{dish.price}</div>
        <div>{`QT: ${dish.quantity}`}</div>
      </StyledDishPrice>
    </StyledDish>
  )
}

export default DishComponent
