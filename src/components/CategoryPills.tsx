import Button from "../styles-component/Button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

type CategoryPillsProps = {
  categories: string[];
  onSelect: (category: string) => void;
  selectedCategory?: string;
}


const TRANSLATE_AMOUNT = 200;


function CategoryPills({ categories, onSelect, selectedCategory }: CategoryPillsProps) {

  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(true);
  const [translate, setTranslate] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {

    if(containerRef.current === null) {
      return;
    }
    const observer = new ResizeObserver(entries => {
      const container = entries[0]?.target;

      if(container === null) return;

      setIsLeftVisible(translate > 0);
      setIsRightVisible(translate + container.clientWidth < container.scrollWidth);

    })

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    }


  },[categories,translate])


  return (
    <div ref={containerRef} className="overflow-x-hidden relative ">
      <div className="flex whitespace-nowrap gap-3 transition-transform w-max " style={{ transform: `translateX(-${translate}px)` }}>
        {categories.map((category) => {
          return (
            <Button
              key={category}
              variant={selectedCategory === category ? "dark" : "default"}
              className="py-1 px-3 rounded-lg whitespace-nowrap "
              onClick={() => onSelect(category)}
            >
              {category}
            </Button>
          )
        })}
      </div>
      {isLeftVisible && <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-linear-to-r from-white from-50% to-transparent w-24 h-full">
        <Button
          variant="ghost"
          size="icon"
          className="h-full aspect-square w-auto p-1.5"
          onClick={() => {
            const newTranslate = translate - TRANSLATE_AMOUNT;
            setTranslate(newTranslate);
            if (newTranslate <= 0) return 0
            return newTranslate;
          }}
        >
          <ChevronLeft />
        </Button>
      </div>}
      {isRightVisible && <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-linear-to-l from-white from-50% to-transparent w-24 h-full flex items-center justify-end">
        <Button
          variant="ghost"
          size="icon"
          className="h-full aspect-square w-auto p-1.5"
          onClick={() => {
            setTranslate(translate => {
              if (containerRef.current === null) {
                return translate;
              }
              const newTranslate = translate + TRANSLATE_AMOUNT;
              const edge = containerRef.current.scrollWidth;
              const width = containerRef.current.clientWidth;
              if (newTranslate + width >= edge) {
                return edge - width;
              }
              return newTranslate;
            })
          }}
        >
          <ChevronRight />
        </Button>
      </div>}
    </div>
  )
}

export default CategoryPills