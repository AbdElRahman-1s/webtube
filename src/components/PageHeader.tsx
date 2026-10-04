import { Menu, Upload, Bell, User, Mic, Search, ArrowLeft } from 'lucide-react'
import logo from '../assets/logo.png'

import Button from '../styles-component/Button'
import { useState } from 'react'

function PageHeader() {

  const [showFullWebSearch, setShowFullWebSearch] = useState(false)



  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div className={`${showFullWebSearch ? 'hidden' : 'flex'} gap-4 items-center shrink-0`}>
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="/">
          <img
            src={logo}
            alt="Logo"
            className="h-6"
          />
        </a>
      </div>
      <form className={`${showFullWebSearch ? 'flex' : 'hidden md:flex'}  gap-4 grow justify-center`}>
        {showFullWebSearch && (
          <Button
            onClick={() => setShowFullWebSearch(false)}
            type="button"
            size="icon"
            variant="ghost"
            className="flex shrink-0"
        >
          <ArrowLeft />
        </Button>)}
        <div className="flex grow max-w-150">
          <input type="search" placeholder="Search..." className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none" />
          <Button className="py-2 px-4 rounded-r-full border border-secondary-border border-l-0 shrink-0">
            <Search />
          </Button>
        </div>
        <Button
          type="button"
          size="icon"
          className="flex shrink-0"
        >
          <Mic />
        </Button>
      </form>
      <div className={`${showFullWebSearch ? 'hidden' : 'flex'} md:gap-2 items-center shrink-0`}>
        <Button onClick={() => setShowFullWebSearch(true)} variant="ghost" size="icon" className="md:hidden">
          <Search />
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Mic />
        </Button>
        <Button variant="ghost" size="icon">
          <Upload />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell />
        </Button>
        <Button variant="ghost" size="icon">
          <User />
        </Button>
      </div>
    </div>
  )
}

export default PageHeader