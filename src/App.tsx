import PageHeader from './components/PageHeader'
import CategoryPills from './components/CategoryPills'
import VideoGridItem from './components/VideoGridItem'
import SideBar from './components/SideBar'
import { categories , videos} from './data/home'
import { useState } from 'react'
function App() {

  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto_1fr] grow overflow-auto">
        <SideBar />
        <div className="overflow-x-hidden px-8 pb-4">
        <div className="sticky top-0 bg-white z-10 pb-4">
          <CategoryPills 
          categories={categories}
          onSelect = {setSelectedCategory}
          selectedCategory={selectedCategory}
          />
        </div>

        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          {videos.map(video => {
            return (
              <VideoGridItem key={video.id} {...video} />
            )
          })}
    
        </div>

        </div>
      </div>

    </div>
  )
}

export default App