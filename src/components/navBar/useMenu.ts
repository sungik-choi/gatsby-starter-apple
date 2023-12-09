import { useCallback, useEffect, useRef, useState } from "react"

import disableScroll from "disable-scroll"

import type styledTheme from "~/src/styles/styledTheme"

interface UseMenuProperties {
  navRef: React.RefObject<HTMLElement> | null
  curtainRef: React.RefObject<HTMLDivElement> | null
  listRef: React.RefObject<HTMLUListElement> | null
  device: (typeof styledTheme)["device"]
}

interface NonNullableReference<Type>
  extends NonNullable<React.RefObject<Type>> {
  current: Type
}

const isNonNullableReference = <Type>(
  reference: React.RefObject<Type> | null,
): reference is NonNullableReference<Type> => !!(reference && reference.current)

const FOCUSABLE_TABINDEX = 0
const NON_FOCUSABLE_TABINDEX = -1

const ESC_CODE = "Escape"
const TAB_CODE = "Tab"

const useMenu = ({
  navRef,
  curtainRef,
  listRef,
  device,
}: UseMenuProperties) => {
  const [toggle, setToggle] = useState(false)
  const mql = useRef<MediaQueryList>()

  const handleClick = () =>
    toggle === true ? setToggle(false) : setToggle(true)

  const focusableElementsString = `a[href], button:not([disabled])`

  useEffect(() => {
    mql.current = window.matchMedia(`(max-width: ${device.sm})`)
  }, [device.sm])

  const toggleKeyboardFocus = useCallback(() => {
    const focusableElements = listRef?.current?.querySelectorAll(
      focusableElementsString,
    )

    if (!mql.current?.matches) {
      if (focusableElements)
        for (const e of focusableElements)
          e.setAttribute("tabindex", `${FOCUSABLE_TABINDEX}`)

      return
    }

    const tabIndex = toggle ? FOCUSABLE_TABINDEX : NON_FOCUSABLE_TABINDEX
    if (focusableElements)
      for (const e of focusableElements)
        e.setAttribute("tabindex", `${tabIndex}`)
  }, [focusableElementsString, listRef, toggle])

  useEffect(() => {
    toggleKeyboardFocus()
  }, [toggleKeyboardFocus])

  useEffect(() => {
    mql.current?.addEventListener("change", toggleKeyboardFocus)
    return () => mql.current?.removeEventListener("change", toggleKeyboardFocus)
  })

  useEffect(() => {
    const focusableElements = navRef?.current?.querySelectorAll(
      focusableElementsString,
    )
    const firstTabStop = focusableElements?.[0] as HTMLInputElement
    const lastTabStop = focusableElements?.[
      focusableElements?.length - 1
    ] as HTMLInputElement

    const trapTabKey = (e: KeyboardEvent) => {
      if (!toggle) return
      if (e.code === TAB_CODE) {
        if (e.shiftKey) {
          if (document.activeElement === firstTabStop) {
            e.preventDefault()
            lastTabStop?.focus()
          }
        } else {
          if (document.activeElement === lastTabStop) {
            e.preventDefault()
            firstTabStop?.focus()
          }
        }
      }
      if (e.code === ESC_CODE) setToggle(false)
    }

    window.addEventListener("keydown", trapTabKey)
    return () => window.removeEventListener("keydown", trapTabKey)
  }, [focusableElementsString, navRef, toggle, setToggle])

  useEffect(() => {
    if (toggle) disableScroll.on()
    else disableScroll.off()
  }, [toggle])

  useEffect(() => {
    const TIMER = 500

    const hideAnimation = () => {
      if (
        isNonNullableReference(curtainRef) &&
        isNonNullableReference(listRef)
      ) {
        curtainRef.current.style.display = "none"
        listRef.current.style.display = "none"
      }
      setTimeout(() => {
        if (
          isNonNullableReference(curtainRef) &&
          isNonNullableReference(listRef)
        ) {
          curtainRef.current.style.display = "block"
          listRef.current.style.display = "flex"
        }
      }, TIMER)
    }

    const closeMenu = (e: MediaQueryListEvent) => {
      if (e.matches) {
        hideAnimation()
        return
      }
      setToggle(false)
    }

    mql.current?.addEventListener("change", closeMenu)
    return () => mql.current?.removeEventListener("change", closeMenu)
  })

  return {
    toggle,
    setToggle,
    handleClick,
  }
}

export type UseMenuReturnType = ReturnType<typeof useMenu>

export default useMenu
