import type { ReactNode } from 'react'

type SidebarProps = {
  children?: ReactNode
}

function Sidebar({ children }: SidebarProps) {
  return <aside>{children}</aside>
}

export default Sidebar
