'use client'

import { useState, createContext, useContext } from 'react'

type CategoryContextType = {
  activeCategory: string
  setActiveCategory: (category: string) => void
}

const CategoryContext = createContext<CategoryContextType>({
  activeCategory: 'All',
  setActiveCategory: () => {}
})

export const useCategory = () => useContext(CategoryContext)

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [activeCategory, setActiveCategory] = useState<string>('All')

  return (
    <CategoryContext.Provider value={{ activeCategory, setActiveCategory }}>
      {children}
    </CategoryContext.Provider>
  )
}
