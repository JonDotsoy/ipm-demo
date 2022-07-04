import { FC, CSSProperties } from "react"
import classNames from "classnames";


/** @external data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle r='50' cx='50' cy='50' fill='tomato'/%3E%3Ccircle r='41' cx='47' cy='50' fill='orange'/%3E%3Ccircle r='33' cx='48' cy='53' fill='gold'/%3E%3Ccircle r='25' cx='49' cy='51' fill='yellowgreen'/%3E%3Ccircle r='17' cx='52' cy='50' fill='lightseagreen'/%3E%3Ccircle r='9' cx='55' cy='48' fill='teal'/%3E%3C/svg%3E */
export const demoIcon: FC<{ className?: string, style?: CSSProperties }> = ({ className, style }) =>
  <svg xmlns="http://www.w3.org/2000/svg" className={classNames("aspect-square", className)} style={style}>
    <circle r="50" cx="50" cy="50" fill="tomato"></circle>     <circle r="41" cx="47" cy="50" fill="orange"></circle>     <circle r="33" cx="48" cy="53" fill="gold"></circle>     <circle r="25" cx="49" cy="51" fill="yellowgreen"></circle>     <circle r="17" cx="52" cy="50" fill="lightseagreen"></circle>     <circle r="9" cx="55" cy="48" fill="teal"></circle>
  </svg>


export default demoIcon;
