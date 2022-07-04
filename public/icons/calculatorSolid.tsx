import { FC, CSSProperties } from "react"
import classNames from "classnames";


/** @external https://heroicons.com/?group=solid&icon_name=calculator */
export const calculatorSolid: FC<{ className?: string, style?: CSSProperties }> = ({ className, style }) =>
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className={classNames("aspect-square", className)} style={style}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
  </svg>


export default calculatorSolid;
