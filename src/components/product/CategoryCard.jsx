function CategoryCard({ category }) {
  return <article>{category?.name ?? 'Category'}</article>
}

export default CategoryCard
