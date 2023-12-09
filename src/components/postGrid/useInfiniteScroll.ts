import { useEffect, useLayoutEffect, useRef, useState } from "react"

import type Post from "~/src/types/Post"

interface UseInfiniteScrollProperties {
  posts: Post[]
  scrollEdgeRef: React.RefObject<HTMLDivElement>
  maxPostNum: number
  offsetY: number
}

const useInfiniteScroll = ({
  posts,
  scrollEdgeRef,
  maxPostNum: maxPostNumber = 10,
  offsetY = 400,
}: UseInfiniteScrollProperties) => {
  const [hasMore, setHasMore] = useState(false)
  const [currentList, setCurrentList] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [observerLoading, setObserverLoading] = useState(false)

  const observer = useRef<IntersectionObserver>()

  useLayoutEffect(() => {
    if (posts.length === 0 || isLoading) return
    setHasMore(posts.length > maxPostNumber)
    setCurrentList(posts.slice(0, maxPostNumber))
    setIsLoading(true)
  }, [isLoading, posts, maxPostNumber])

  useEffect(() => {
    const loadEdges = () => {
      const currentLength = currentList.length
      const more = currentLength < posts.length
      const nextEdges = more
        ? posts.slice(currentLength, currentLength + maxPostNumber)
        : []
      setHasMore(more)
      setCurrentList([...currentList, ...nextEdges])
    }

    const scrollEdgeElement = scrollEdgeRef.current

    const option = {
      rootMargin: `0px 0px ${offsetY}px 0px`,
      threshold: [0],
    }

    observer.current = new IntersectionObserver(entries => {
      if (!hasMore) return
      for (const entry of entries) {
        if (!observerLoading) {
          setObserverLoading(true)
          continue
        }
        if (entry.isIntersecting) loadEdges()
      }
    }, option)

    observer.current.observe(scrollEdgeElement!)

    return () => observer.current && observer.current.disconnect()
  })

  return currentList
}

export default useInfiniteScroll
