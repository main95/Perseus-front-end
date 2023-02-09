import { Category } from '../types/Category'

export const mockCategories: Category[] = [
  {
    code: 'BEV',
    label: 'BEV',
    color: '#d5ee0d',
    template: `
      'A0001 . . .'
      '. A0002 . .'
      '. . A0003 .'
      '. . . A0004'
    `,
  },
  {
    code: 'PIZ',
    label: 'PIZ',
    color: '#d5ee0d',
    template: `
      '. . . .'
      '. A0005 . .'
      '. . . .'
      '. . A0006 .'
    `,
  },
  {
    code: 'PAN',
    label: 'PAN',
    color: '#d5ee0d',
    template: `
      '. . . .'
      '. A0007 . .'
      '. . . .'
      '. . A0008 .'
    `,
  },
  {
    code: 'FRI',
    label: 'FRI',
    color: '#d5ee0d',
    template: `
      '. . A0009 .'
      '. . . .'
      '. . . .'
      '. . . .'
    `,
  },
  {
    code: 'DOL',
    label: 'DOL',
    color: '#d5ee0d',
    template: `
      '. . . A0010'
      '. . . .'
      '. . . .'
      '. . . .'
    `,
  },
  {
    code: 'PRI',
    label: 'PRI',
    color: '#d5ee0d',
    template: '',
  },
]