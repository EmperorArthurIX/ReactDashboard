import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { Navbar, Footer, Sidebar, ThemeSettings } from './components'
import { Calendar, ColourPicker, Customers, ECommerce, Editor, Employees, Kanban, Orders, Area, Bar, ColourMapping, Financial, Line, Pie, Pyramid, Stacked } from './pages'
import { useStateContext } from './contexts/ContextProvider'
import './App.css'

const App = () => {
  const { activeMenu } = useStateContext();
  return (
    <div>
      <BrowserRouter>
        <div className='flex 
                        relative
                        bg:dark-main-dark-bg'>

          {/* Settings Button */}
          <div className='fixed
                          right-4
                          bottom-4'
                style={{zIndex: 1000}}>

            <TooltipComponent content="Settings" position='Top'>
              <button className='text-3xl
                                  p-3
                                  hover:drop-shadow-xl
                                  hover:bg-light-gray
                                  text-white'
                      type='button'
                      style={{background: 'blue', borderRadius: '50%'}}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          
          {/* Menu Sidebar */}
          {activeMenu ? (
            <div className='w-72
                            fixed
                            sidebar
                            dark:bg-secondary-dark-bg
                            bg-white'>
                <Sidebar />
              </div>
          ) : (
            <div className='w-0
                          dark:bg-secondary-dark-bg'>
                <Sidebar />              
            </div>
          )}

          {/* Navbar */}
          <div className={`dark:bg-main-bg
                        bg-main-bg
                        min-h-screen
                        w-full
                        ${activeMenu? 'md:ml-72':'flex-2'}`}>
            <div className='fixed
                            md:static
                            bg-main-bg
                            dark:bg-main-bg
                            navbar
                            w-full'>
              <Navbar />
            </div>

            {/* Routing */}
            <div>
              <Routes>
                {/* Dashboard */}
                <Route path='/' element= { <ECommerce /> } />
                <Route path='/e-commerce' element= { <ECommerce /> } />

                {/* Pages */}
                <Route path='/orders' element= { <Orders /> } />
                <Route path='/employees' element= { <Employees /> } />
                <Route path='/customers' element= { <Customers /> } />

                {/* Apps */}
                <Route path='/kanban' element= { <Kanban /> } />
                <Route path='/editor' element= { <Editor /> } />
                <Route path='/calendar' element= { <Calendar /> } />
                <Route path='/colour-picker' element= { <ColourPicker /> } />

                {/* Charts */}
                <Route path='/line' element= { <Line /> } />
                <Route path='/bar' element= { <Bar /> } />
                <Route path='/area' element= { <Area /> } />
                <Route path='/pie' element= { <Pie /> } />
                <Route path='/colour-mapping' element= { <ColourMapping /> } />
                <Route path='/financial' element= { <Financial /> } />
                <Route path='/stacked' element= { <Stacked /> } />
                <Route path='/pyramid' element= { <Pyramid /> } />

              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App