import { calculateGrade, calculateGradeWithFor} from "./calculateGrade.js";
import {filterProducts, filterProductsWithFor} from "./filterProducts.js";

const students = [
  {
    name: "Алексей",
    scores: [85, 92, 78],
  },
  {
    name: "Мария",
    scores: [95, 87, 92],
  }
]

const products = [
  { name: "Ноутбук", price: 50000, category: "электроника" },
  { name: "Стул", price: 5000, category: "мебель" },
  { name: "Кофеварка", price: 15000, category: "электроника" }
];
const filters = { maxPrice: 20000, category: "электроника" };

console.log(calculateGrade(students))
// console.log(calculateGradeWithFor(students))

console.log(filterProducts(products, filters))
// console.log(filterProductsWithFor(products, filters))


