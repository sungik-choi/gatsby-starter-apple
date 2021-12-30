import "styled-components"

import type styledTheme from "Styles/styledTheme"

declare module "styled-components" {
  type Theme = typeof styledTheme
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
