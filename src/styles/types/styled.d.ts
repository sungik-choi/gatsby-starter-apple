import "styled-components"

import type styledTheme from "~/src/styles/styledTheme"

declare module "styled-components" {
  type Theme = typeof styledTheme
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
