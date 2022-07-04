import { FC, CSSProperties } from "react"
import classNames from "classnames";


/** @external https://iconmonstr.com/deviantart-1-svg/ */
export const deviantart1Svg: FC<{ className?: string, style?: CSSProperties }> = ({ className, style }) =>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={classNames("aspect-square", className)} style={style}>
    <path d="M20 4.364v-4.364h-4.364l-.435.439-2.179 4.124-.647.437h-7.375v6h4.103l.359.404-4.462 8.232v4.364h4.509l.435-.439 2.174-4.124.648-.437h7.234v-6h-3.938l-.359-.438z"></path>
  </svg>


export default deviantart1Svg;
