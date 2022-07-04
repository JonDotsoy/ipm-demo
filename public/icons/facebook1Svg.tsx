import { FC, CSSProperties } from "react"
import classNames from "classnames";


/** @external https://iconmonstr.com/facebook-1-svg/ */
export const facebook1Svg: FC<{ className?: string, style?: CSSProperties }> = ({ className, style }) =>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={classNames("aspect-square", className)} style={style}>
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
  </svg>


export default facebook1Svg;
