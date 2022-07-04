import { FC, CSSProperties } from "react"
import classNames from "classnames";


/** @external https://iconmonstr.com/paypal-1-svg/ */
export const paypal1Svg: FC<{ className?: string, style?: CSSProperties }> = ({ className, style }) =>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={classNames("aspect-square", className)} style={style}>
    <path d="M22 9.761c0 .536-.065 1.084-.169 1.627-.847 4.419-3.746 5.946-7.449 5.946h-.572c-.453 0-.838.334-.908.789l-.803 5.09c-.071.453-.456.787-.908.787h-2.736c-.39 0-.688-.348-.628-.732l1.386-8.88.062-.056h2.155c5.235 0 8.509-2.618 9.473-7.568.812.814 1.097 1.876 1.097 2.997zm-14.216 4.252c.116-.826.459-1.177 1.385-1.179l2.26-.002c4.574 0 7.198-2.09 8.023-6.39.8-4.134-2.102-6.442-6.031-6.442h-7.344c-.517 0-.958.382-1.038.901-2.304 14.835-2.97 18.607-3.038 19.758-.021.362.269.672.635.672h3.989l1.159-7.318z"></path>
  </svg>


export default paypal1Svg;
