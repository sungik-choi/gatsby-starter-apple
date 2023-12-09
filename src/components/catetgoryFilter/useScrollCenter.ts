import { useLayoutEffect } from "react"

interface UseScrollCenterProperties {
  ref: React.RefObject<HTMLUListElement>
  targetId: string
}

const useScrollCenter = ({ ref, targetId }: UseScrollCenterProperties) => {
  useLayoutEffect(() => {
    const categoryWrapElement = ref.current

    if (!categoryWrapElement) {
      return
    }

    const isScrollActivated =
      categoryWrapElement.scrollWidth >= categoryWrapElement.offsetWidth

    if (!isScrollActivated) {
      return
    }

    const activeCategoryElement =
      categoryWrapElement.querySelector<HTMLUListElement>(`#${targetId}`)

    if (!activeCategoryElement) {
      return
    }

    const offsetX =
      activeCategoryElement.offsetLeft - categoryWrapElement.offsetLeft
    categoryWrapElement.scrollTo(
      offsetX -
        categoryWrapElement.offsetWidth / 2 +
        activeCategoryElement.offsetWidth / 2,
      0,
    )
  }, [ref, targetId])
}

export default useScrollCenter
