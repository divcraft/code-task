import { ComponentType } from "react"
import { StatusType } from "../../types";

export const FetchedComponent = ({
   component: Component, 
   status, 
   ...props
}: {
   component: ComponentType, 
   status: StatusType
}) => {
   return (
      <>
         {status === 'LOADING' && <div>loading...</div>}
         {status === 'FAILED' && <div>loading failed</div>}
         {status === 'SUCCEEDED' && <Component {...props} />}
         {status === null && null}
      </>
   )
}