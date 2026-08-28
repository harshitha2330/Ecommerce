import type { InputHTMLAttributes } from 'react'

function SearchBar(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input type="search" placeholder="Search products" {...props} />
}

export default SearchBar
