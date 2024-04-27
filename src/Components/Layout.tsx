import { Outlet } from "react-router-dom"
import { CustomLink } from "./CustomLink"

const Layout = () => {
  return (
    <>
      <header className='flex gap-5'>
        <CustomLink children={'Home'} to={'/'}/>
        <CustomLink children={'All Tasks'} to={'/all'}/>
        <CustomLink children={'Completed Tasks'} to={'/completed'}/>
        <CustomLink children={'Remove Tasks'} to={'/remove'}/>
      </header>

      <Outlet />
    </>
  )
}

export { Layout }