import React from "react"

import type { UseThemeReturnType } from "Hooks/useTheme"
import { DARK } from "Constants/theme"

interface ThemeIconProps {
  theme: UseThemeReturnType["theme"]
}

const ThemeIcon: React.FC<ThemeIconProps> = ({ theme }) => {
  return (
    <>
      {theme === DARK ? (
        <>
          <g>
            <circle cx="12" cy="12" r="6" />
          </g>
          <rect x="11" y="1" width="2" height="3" />
          <rect
            x="4.3"
            y="3.8"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.1881 5.2825)"
            width="2"
            height="3"
          />
          <rect
            x="1.5"
            y="10.5"
            transform="matrix(4.547480e-11 -1 1 4.547480e-11 -9.5 14.5)"
            width="2"
            height="3"
          />
          <rect
            x="4.3"
            y="17.2"
            transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 -4.2175 35.6881)"
            width="2"
            height="3"
          />
          <rect
            x="11"
            y="20"
            transform="matrix(-1 -9.004010e-11 9.004010e-11 -1 24 43)"
            width="2"
            height="3"
          />
          <rect
            x="17.7"
            y="17.2"
            transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 45.1881 18.7175)"
            width="2"
            height="3"
          />
          <rect
            x="20.5"
            y="10.5"
            transform="matrix(-1.355149e-10 1 -1 -1.355149e-10 33.5 -9.5)"
            width="2"
            height="3"
          />
          <rect
            x="17.7"
            y="3.8"
            transform="matrix(0.7071 0.7071 -0.7071 0.7071 9.2175 -11.6881)"
            width="2"
            height="3"
          />
        </>
      ) : (
        <path
          d="M16.3,15.2c-4.1-1.2-7.2-4.8-7.5-9.1C8.8,4.8,8.9,3.5,9.3,2.4C4.8,3.6,1.5,8,2.1,13.1c0.5,4.6,4.2,8.3,8.7,8.8
	c4.9,0.6,9.2-2.4,10.6-6.7C19.9,15.7,18.1,15.8,16.3,15.2z"
        />
      )}
    </>
  )
}

export default ThemeIcon
