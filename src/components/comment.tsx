import React, { useContext, useEffect, useRef } from "react"

import { DARK } from "~/src/constants/theme"
import useSiteMetadata from "~/src/hooks/useSiteMetadata"
import ThemeContext from "~/src/stores/themeContext"

const source = "https://utteranc.es"
const utterancesSelector = "iframe.utterances-frame"
const LIGHT_THEME = "github-light"
const DARK_THEME = "github-dark"

type ThemeMode = typeof LIGHT_THEME | typeof DARK_THEME

const Comment = () => {
  const site = useSiteMetadata()
  const { repo } = site.utterances ?? { repo: undefined }
  const theme = useContext(ThemeContext)
  const containerReference = useRef<HTMLDivElement>(null)
  const isUtterancesCreated = useRef(false)

  useEffect(() => {
    if (!repo) return
    let themeMode: ThemeMode

    if (isUtterancesCreated.current) {
      themeMode = theme === DARK ? DARK_THEME : LIGHT_THEME
    } else {
      themeMode =
        document.body.dataset.theme === DARK ? DARK_THEME : LIGHT_THEME
    }

    const createUtterancesElement = () => {
      const comment = document.createElement("script")
      const attributes = {
        src: `${source}/client.js`,
        repo,
        "issue-term": "title",
        label: "comment",
        theme: themeMode,
        crossOrigin: "anonymous",
        async: "true",
      }
      for (const [key, value] of Object.entries(attributes)) {
        comment.setAttribute(key, value)
      }
      containerReference.current?.append(comment)
      isUtterancesCreated.current = true
    }

    const utterancesElement = containerReference.current?.querySelector(
      utterancesSelector,
    ) as HTMLIFrameElement

    const postThemeMessage = () => {
      if (!utterancesElement) return
      const message = {
        type: "set-theme",
        theme: themeMode,
      }
      utterancesElement?.contentWindow?.postMessage(message, source)
    }

    isUtterancesCreated.current ? postThemeMessage() : createUtterancesElement()
  }, [repo, theme])

  return <div ref={containerReference} />
}

Comment.displayName = "comment"

export default Comment
