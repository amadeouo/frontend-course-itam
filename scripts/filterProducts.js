const products = [
  { name: "Ноутбук", price: 50000, category: "электроника" },
  { name: "Стул", price: 5000, category: "мебель" },
  { name: "Кофеварка", price: 15000, category: "электроника" }
];
const filters = { maxPrice: 20000, category: "электроника" };


// Вариант через filter (так удобнее)
export function filterProducts(products, filter) {
  return products.filter((p) => {
    return filter.maxPrice === null || p.price <= filter.maxPrice && filter.category == null || p.category === filter.category
  })
}


// Вариант через for (по условию)
export function filterProductsWithFor(products, filter) {
  const newArr = []
  for (let product of products) {
    if (
      filter.maxPrice === null || product.price <= filter.maxPrice &&
      filter.category == null || product.category === filter.category
    ) {
      newArr.push(product)
    }
  }
  return newArr
}

