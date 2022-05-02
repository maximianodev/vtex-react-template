declare module 'vtex.product-context' {
  export interface ProductContext {
    selectedItem?: SelectedItem
  }

  interface SelectedItem {
    sellers: Array<{
      commertialOffer: {
        AvailableQuantity: number
      }
    }>
  }

  export function useProduct(): ProductContext
}
