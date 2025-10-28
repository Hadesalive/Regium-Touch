'use client'

import { useState } from 'react'
import { CategoryContext } from './context'

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
