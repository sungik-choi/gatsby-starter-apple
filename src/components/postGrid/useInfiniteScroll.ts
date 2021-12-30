import { useState, useEffect, useLayoutEffect, useRef } from "react"

import type Post from "Types/Post"

interface UseInfiniteScrollProps {
  posts: Post[]
  scrollEdgeRef: React.RefObject<HTMLDivElement>
  maxPostNum: number
  offsetY: number
}

const useInfiniteScroll = ({
  posts,
  scrollEdgeRef,
  maxPostNum = 10,
  offsetY = 400,
}: UseInfiniteScrollProps) => {
  const [hasMore, setHasMore] = useState(false)
  const [currentList, setCurrentList] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [observerLoading, setObserverLoading] = useState(false)

  const observer = useRef<IntersectionObserver>()

  useLayoutEffect(() => {
    if (!posts.length || isLoading) return
    setHasMore(posts.length > maxPostNum)
    setCurrentList([...posts.slice(0, maxPostNum)])
    setIsLoading(true)
  }, [isLoading, posts, maxPostNum])

  useEffect(() => {
    const loadEdges = () => {
      const currentLength = currentList.length
      const more = currentLength < posts.length
      const nextEdges = more
        ? posts.slice(currentLength, currentLength + maxPostNum)
        : []
      setHasMore(more)
      setCurrentList([...currentList, ...nextEdges])
    }

    const scrollEdgeElem = scrollEdgeRef.current

    const option = {
      rootMargin: `0px 0px ${offsetY}px 0px`,
      threshold: [0],
    }

    observer.current = new IntersectionObserver(entries => {
      if (!hasMore) return
      entries.forEach(entry => {
        if (!observerLoading) {
          setObserverLoading(true)
          return
        }
        if (entry.isIntersecting) loadEdges()
      })
    }, option)

    observer.current.observe(scrollEdgeElem!)

    return () => observer.current && observer.current.disconnect()
  })

  return currentList
}

export default useInfiniteScroll
