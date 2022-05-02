import React from 'react'
import { render } from '@vtex/test-tools/react'

import Greeting from './index'

describe('Tests for the Greeting component', () => {
  it('should show name on screen', () => {
    const { getByText } = render(<Greeting name="Max" />)

    expect(getByText('Hey, Max')).toBeInTheDocument()
  })

  it('should show quantity of items in the cart', () => {
    const { getByText } = render(<Greeting name="Max" quantityMinicart={3} />)

    expect(getByText('You have 3 in your cart.')).toBeInTheDocument()
  })
})
