import { useLayoutEffect } from "react"

interface UseScrollCenterProps {
  ref: React.RefObject<HTMLUListElement>
  targetId: string
}

const useScrollCenter = ({ ref, targetId }: UseScrollCenterProps) => {
  useLayoutEffect(() => {
    const categoryWrapEl = ref.current

    if (!categoryWrapEl) {
      return
    }

    const isScrollActivated =
      categoryWrapEl.scrollWidth >= categoryWrapEl.offsetWidth

    if (!isScrollActivated) {
      return
    }

    const activeCategoryEl = categoryWrapEl.querySelector<HTMLUListElement>(
      `#${targetId}`
    )

    if (!activeCategoryEl) {
      return
    }

    const offsetX = activeCategoryEl.offsetLeft - categoryWrapEl.offsetLeft
    categoryWrapEl.scrollTo(
      offsetX -
        categoryWrapEl.offsetWidth / 2 +
        activeCategoryEl.offsetWidth / 2,
      0
    )
  }, [ref, targetId])
}

export default useScrollCenter
