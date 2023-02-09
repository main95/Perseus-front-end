import { Grid, styled } from '@mui/material'

const StyledGrid = styled(Grid)<{ selected: boolean, color: string }>(({ theme, selected, color }) => ({
  backgroundColor: selected ? color : theme.palette.primary.dark,
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'bold',
  fontSize: '1rem',
  padding: theme.spacing(2, 4, 2, 4),
}))

type Props = {
  label: string,
  isSelected: boolean,
  categoryColor: string,
  onClick: any
}

const CategoryComponent: React.FC<Props> = ({
  label,
  isSelected,
  categoryColor,
  onClick,
}) => {
  
  return (
    <StyledGrid
      item
      xs={3}
      selected={isSelected}
      color={categoryColor}
      onClick={onClick}
    >
      <div>
        {label}
      </div>
    </StyledGrid>
  )
}

export default CategoryComponent
