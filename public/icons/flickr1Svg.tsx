import { FC, CSSProperties } from "react"
import classNames from "classnames";


/** @external https://iconmonstr.com/flickr-1-svg/ */
export const flickr1Svg: FC<{ className?: string, style?: CSSProperties }> = ({ className, style }) =>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={classNames("aspect-square", className)} style={style}>
    <path d="M17 5c-1.961 0-3.731.809-5.002 2.108-1.27-1.299-3.038-2.108-4.998-2.108-3.866 0-7 3.134-7 7s3.134 7 7 7c1.96 0 3.728-.809 4.998-2.108 1.271 1.299 3.041 2.108 5.002 2.108 3.866 0 7-3.134 7-7s-3.134-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
  </svg>


export default flickr1Svg;
