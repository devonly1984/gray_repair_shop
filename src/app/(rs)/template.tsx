import { ReactNode } from "react"

const RSTemplate = async({children}:{children:ReactNode}) => {
  return <div className="animate-appear">{children}</div>;
}
export default RSTemplate