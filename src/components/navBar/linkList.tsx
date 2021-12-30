import React from "react"
import { isNil } from "lodash"
import { Link } from "gatsby"

import type { SiteSiteMetadataMenuLinks } from "Types/GraphQL"
import type { UseSiteMetaDataReturnType } from "Hooks/useSiteMetadata"
import type { UseMenuReturnType } from "./useMenu"

const ROOT = "/"
const EXTENRAL_LINK_EXP =
  /(https?:\/\/)?[\w\-~]+(\.[\w\-~]+)+(\/[\w\-~@:%]*)*(#[\w-]*)?(\?[^\s]*)?/gi

interface LinkListProps extends Pick<UseMenuReturnType, "setToggle"> {
  links: UseSiteMetaDataReturnType["menuLinks"]
}

const LinkList: React.FC<LinkListProps> = ({ links, setToggle }) => {
  const generateLink = (props: SiteSiteMetadataMenuLinks | null) => {
    if (isNil(props)) {
      return
    }

    const { link, name } = props
    const safeLink = isNil(link) ? "" : link
    const isExternalLink = EXTENRAL_LINK_EXP.test(safeLink)
    if (safeLink === ROOT) {
      return (
        <li key={name}>
          <Link to={safeLink} onClick={() => setToggle(false)}>
            {name}
          </Link>
        </li>
      )
    }
    if (isExternalLink) {
      return (
        <li key={name}>
          <a target="__blank" rel="noreferrer" href={safeLink}>
            {name}
          </a>
        </li>
      )
    }
    return (
      <li key={name}>
        <Link to={safeLink}>{name}</Link>
      </li>
    )
  }

  return <>{links?.map(generateLink)}</>
}

export default LinkList
