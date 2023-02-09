import {
  Container,
  Grid,
  styled,
} from '@mui/material'
import { StyledCommonPageWrapper } from '../components/common/CommonComponents'
import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentCategoryCode, selectPageStep } from '../features/app/selectors'
import {
  selectCurrentOrderCovereds,
  selectCurrentOrderName,
  selectCurrentOrderTable,
  selectDishes
} from '../features/order/selectors'
import { mockCategories } from '../_mocks/categories'
import CategoryComponent from '../components/category/CategoryComponent'
import appActions from '../features/app/actions'
import { Action, ThunkDispatch } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { mockDishes } from '../_mocks/dishes'
import DishComponent from '../components/dish/DishComponent'
import orderActions from '../features/order/actions'
import { useEffect } from 'react'

const StyledInfoRow = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main
}))

const StyledCategoriesRow = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  overflow: 'auto',
  paddingTop: theme.spacing(0.5),
}))

const Item = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const DishesContainer = styled('div')<{ gridTemplate: string }>(({ theme, gridTemplate }) => ({
  display: 'grid',
  gridGap: '5px',
  padding: '5px',
  gridTemplateAreas: gridTemplate,
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gridTemplateRows: '1fr 1fr 1fr 1fr',
  overflow: 'auto',
}))

const OrderPage: React.FC = () => {
  const categories = mockCategories
  const dispatch: ThunkDispatch<RootState, unknown, Action<string>> = useDispatch()
  const step = useSelector(selectPageStep)
  const orderName = useSelector(selectCurrentOrderName)
  const orderTable = useSelector(selectCurrentOrderTable)
  const orderCovereds = useSelector(selectCurrentOrderCovereds)

  const currentCategoryCode: string = useSelector(selectCurrentCategoryCode) || categories[0].code
  const currentCategory = categories.find(c => c.code === currentCategoryCode)
  const categoryDishesTemplate: string = currentCategory ? currentCategory.template : ''

  const dishes = useSelector(selectDishes)
  const currentDishes = dishes.filter(d => d.category === currentCategoryCode)

  const handleChangeCategory = (code: string) => {
    dispatch(appActions.setCurrentCategoryRow(code))
  }

  useEffect(() => {
    dispatch(orderActions.setDishes(mockDishes))
  }, [dispatch])

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

        <StyledCategoriesRow container wrap='nowrap' spacing={0} gap={0.25}>
          {
            categories.map((category, index) => {
              return (
                <CategoryComponent
                  key={`category_${category.code}_${index}`}
                  label={category.label}
                  isSelected={currentCategoryCode === category.code}
                  categoryColor={category.color}
                  onClick={() => handleChangeCategory(category.code)}
                />
              )
            })
          }
        </StyledCategoriesRow>

        <DishesContainer gridTemplate={categoryDishesTemplate}>
          {
            currentDishes.map((dish, index) => {
              return (
                <DishComponent
                  key={`dish_${dish._id}_${index}`}
                  dish={dish}
                />
              )
            })
          }
        </DishesContainer>
      </Container>
    </StyledCommonPageWrapper>
  )
}

export default OrderPage
