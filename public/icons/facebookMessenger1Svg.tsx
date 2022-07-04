import { FC, CSSProperties } from "react"
import classNames from "classnames";


/** @external https://iconmonstr.com/facebook-messenger-1-svg/ */
export const facebookMessenger1Svg: FC<{ className?: string, style?: CSSProperties }> = ({ className, style }) =>
  <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className={classNames("aspect-square", className)} style={style}>
    <path d="M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111 0-6.136-5.373-11.111-12-11.111zm1.193 14.963l-3.056-3.259-5.963 3.259 6.559-6.963 3.13 3.259 5.889-3.259-6.559 6.963z"></path>
  </svg>


export default facebookMessenger1Svg;