import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { links } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-md m-2 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray';

  const handleCloseSidebar = () => {
    if(activeMenu && screenSize <= 900)
      setActiveMenu(false)
  }
  return (
    <div className='ml-3
                    h-screen
                    md:overflow-hidden
                    overflow-auto
                    md:hover:overflow-auto
                    pb-10'>
      {activeMenu && (<>
        <div className='flex
                        justify-between
                        items-center'>
            
            {/* Link to Home */}
            {/* To Auto-close the sidebar on navigating in mobile device */}
            <Link to="/" onClick={handleCloseSidebar}
                  className='items-center
                            gap-3
                            ml-3
                            mt-4
                            flex
                            text-xl
                            font-extrabold
                            tracking-tight
                            dark:text-white
                            text-slate-900'>
              <SiShopware />
              <span>Page Name</span>
            </Link>

            {/* Close Menu Button */}
            <TooltipComponent content="Menu"
                              position='BottomCentre'>
              <button type='button'
                      onClick={() => {
                        setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                      }}
                      className='text-xl
                                rounded-full
                                p-3
                                hover:bg-light-gray
                                mt-4
                                block
                                md:hidden'>
                <MdOutlineCancel />
              </button>
            </TooltipComponent>

        </div>

        {/* Populate Links in Sidebar from Dummy Database JS File */}
        <div className='mt-10'>
          {/* For Each Category in Links */}
          {links.map(
            (item) => (
              // Show Category Title
              <div key={item.title}>
                <p className='text-gray-400
                              m-3
                              mt-4
                              uppercase'>
                  {item.title}
                </p>
                {/* For Each Link in Category */}
                {item.links.map(
                  (link) => (
                    // Show Link Icon and Name
                    <NavLink to={`/${link.name}`}
                            key={link.name}
                            // To Auto-close the sidebar when navigating on mobile device
                            onClick={handleCloseSidebar}
                            className={({ isActive }) => isActive ? activeLink : normalLink}>
                      {link.icon}
                      <span className='capitalize'>{link.name}</span>
                    </NavLink>
                  )
                )}
              </div>
            )
          )}
        </div>
      </>)
      }
    </div>
  )
}

export default Sidebar