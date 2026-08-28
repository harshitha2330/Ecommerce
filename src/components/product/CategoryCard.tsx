type CategoryCardProps = {
  category?: { name?: string }
}

function CategoryCard({ category }: CategoryCardProps) {
  return <article>{category?.name ?? 'Category'}</article>
}

export default CategoryCard
