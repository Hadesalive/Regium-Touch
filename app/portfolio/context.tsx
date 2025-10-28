'use client'

import { createContext, useContext } from 'react'

type CategoryContextType = {
  activeCategory: string
  setActiveCategory: (category: string) => void
}

export const CategoryContext = createContext<CategoryContextType>({
  activeCategory: 'All',
  setActiveCategory: () => {}
})

export const useCategory = () => useContext(CategoryContext)

