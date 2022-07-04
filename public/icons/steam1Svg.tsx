import { FC, CSSProperties } from "react"
import classNames from "classnames";


/** @external https://iconmonstr.com/steam-1-svg/ */
export const steam1Svg: FC<{ className?: string, style?: CSSProperties }> = ({ className, style }) =>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={classNames("aspect-square", className)} style={style}>
    <path d="M22.411 9.681c0 .924-.751 1.676-1.676 1.676-.924 0-1.676-.752-1.676-1.676s.752-1.676 1.676-1.676c.925 0 1.676.752 1.676 1.676zm1.589 0c0 1.801-1.464 3.282-3.303 3.263l-2.872 2.141-.006.002c-.008 1.369-1.111 2.483-2.485 2.496-1.24.01-2.257-.872-2.484-2.021l-8.962-3.769c-.39.256-.854.409-1.354.414-1.398.012-2.521-1.109-2.534-2.486-.014-1.395 1.113-2.534 2.511-2.534 1.213 0 2.228.863 2.459 2.013l8.971 3.772c.416-.272.896-.418 1.428-.407l2.105-2.946c.033-1.773 1.48-3.202 3.262-3.202 1.802 0 3.264 1.461 3.264 3.264zm-20.794 1.826l-1.226-.515c-.716-.301-1.052-1.125-.751-1.84.301-.716 1.125-1.052 1.841-.751l1.211.509c-.303-.678-.984-1.153-1.77-1.153-1.096.004-1.951.895-1.941 1.958.01 1.044.861 1.926 1.958 1.922.236-.002.464-.048.678-.13zm14.045 3.547c-.01-1.06-.88-1.922-1.939-1.922-.229.001-.455.04-.686.127l1.229.517c.716.301 1.052 1.125.751 1.84-.301.715-1.124 1.052-1.841.751l-1.23-.518c.302.685.985 1.165 1.794 1.162 1.072-.009 1.932-.884 1.922-1.957zm5.703-5.373c0-1.224-.995-2.219-2.219-2.219-1.223 0-2.219.995-2.219 2.219 0 1.223.996 2.219 2.219 2.219 1.224 0 2.219-.996 2.219-2.219z"></path>
  </svg>


export default steam1Svg;
