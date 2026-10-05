import PageHeader from './components/PageHeader'
import CategoryPills from './components/CategoryPills'
import { categories } from './data/home'
import { useState } from 'react'
function App() {

  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] grow overflow-auto">
        <div>sidebar</div>
        <div className="overflow-x-hidden px-8 pb-4">
        <div className="sticky top-0 bg-white z-10 pb-4">
          <CategoryPills 
          categories={categories}
          onSelect = {setSelectedCategory}
          selectedCategory={selectedCategory}
          />
        </div>
        </div>
      </div>

    </div>
  )
}

export default App