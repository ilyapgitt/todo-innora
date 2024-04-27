import { NavLink } from "react-router-dom"

export const CustomLink = ({ children, to, ...props }: { children: string, to: string}) => {
  return (
    <NavLink
      to={to}
      {...props}
      className="focus:text-purple-500"
    >
      {children}
    </NavLink>
  )
}