import React from 'react'
import { render } from '@vtex/test-tools/react'
import { ProductContext, useProduct } from 'vtex.product-context'

import AvaliableQuantityDisclaimer from './index'

const mockUseProduct = useProduct as jest.Mock<ProductContext>

mockUseProduct.mockImplementation(() => ({
  selectedItem: {
    sellers: [{ commertialOffer: { AvailableQuantity: 7 } }],
  },
}))

describe('Tests for the Greeting component', () => {
  it('should show name on screen', () => {
    const { getByText } = render(<AvaliableQuantityDisclaimer />)

    expect(getByText('Last units avaliable')).toBeDefined()
  })
})
