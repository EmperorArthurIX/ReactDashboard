import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoChevronRight } from 'react-icons/go'
import { Stacked, Pie, Button, SparkLine } from '../components'
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

const ECommerce = () => {
  return (
    <div className='mt-12'>
      {/* Hero Section */}
      <div className='flex
                      flex-wrap
                      lg:flex-nowrap
                      justify-center'>
        <div className='bg-white
                        dark:text-gray-200
                        dark:bg-secondary-dark-bg
                        h-44
                        rounded-xl
                        w-full
                        lg:w-80
                        p-8
                        pt-9
                        m-3
                        bg-[url("https://bluewaterdigital.com.au/wp-content/uploads/2021/03/section-bg-hero3.png")]
                        bg-no-repeat
                        bg-cover
                        bg-center'>
          <div className='flex
                          justify-between
                          items-center'>
            <div>
              <p className='font-bold text-gray-700'>Earnings</p>
              <p className='text-2xl'>$123,456</p>
            </div>
          </div>
          <div className='mt-6'>
            <Button color="white"
                    bgColor="blue"
                    text="Download"
                    borderRadius="10px"
                    size="md"/>
          </div>
        </div>
        <div className="flex
                        m-3
                        flex-wrap
                        justify-center
                        gap-1
                        items-center">
          {
            earningData.map((item) => (
              <div key={item.title}
                  className='bg-white
                            dark:text-gray-200
                            dark:bg-secondary-dark-bg
                            md:w-56
                            p-4
                            pt-9
                            rounded-2xl'>
                <button type='button'
                        style={{color: item.iconColor,
                                backgroundColor: item.iconBg}}
                        className='text-2xl
                                  opacity-0.9
                                  rounded-full
                                  p-4
                                  hover:drop-shadow-xl'>
                  {item.icon}
                </button>
                <p className='mt-3'>
                  <span className='text-lg font-semibold'>
                    {item.amount}
                  </span>
                  <span className={`text-sm
                                    text-${item.pcColor}
                                    ml-2`}>
                    {item.percentage}
                  </span>
                </p>
                <p className='text-sm text-gray-400 mt-1'>
                  {item.title}
                </p>
              </div>
            ))
          }
        </div>
      </div>

      {/* Revenue and Budget Cards */}
      <div className='flex
                      gap-10
                      flex-wrap
                      justify-center'>
        <div className='bg-white
                        dark:text-gray-200
                        dark:bg-secondary-dark-bg
                        m-1
                        p-2
                        rounded-2xl
                        md:w-780'>
          <div className='flex justify-between'>
            <p className='dont-semibold text-xl'>
              Revenue Updates
            </p>
            <div className='flex items-center gap-4'>
              <p className='flex
                            items-center
                            gap-3
                            text-gray-600
                            hover:drop-shadow-xl'>
                <span>
                  <GoChevronRight />
                </span>
                <span>
                  Expense
                </span>
              </p>
              <p className='flex
                            items-center
                            gap-3
                            text-green-400
                            hover:drop-shadow-xl'>
                <span>
                  <GoChevronRight />
                </span>
                <span>
                  Budget
                </span>
              </p>
            </div>
          </div>

          {/* Stacked Chart */}
          <div className='mt-10
                          flex
                          gap-10
                          flex-wrap
                          justify-center'>
            <div className='border-r-1
                          border-color
                          m-4
                          pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>
                    $90,000
                  </span>
                  <span className='p-1.5
                                  cursor-pointer
                                  hover:drop-shadow-xl
                                  rounded-full
                                  text-white
                                  bg-green-400
                                  ml-3
                                  text-xs'>
                    20%
                  </span>
                </p>
                <p className='text-gray-500 mt-1'>
                  Budget
                </p>
              </div>

              <div>
                <p>
                  <span className='text-3xl font-semibold'>
                    $48,000
                  </span>
                </p>
                <p className='text-gray-500 mt-1'>
                  Expense
                </p>
              </div>

              <div className="mt-5">
                <SparkLine currentColor = "blue"
                            id="line-sparkline"
                            type="Line"
                            height="80px"
                            width="250px"
                            data={SparklineAreaData}
                            color="blue" />
              </div>
              <div className="mt-10">
                <Button color="white"
                        bgColor="blue"
                        text="Download Report"
                        borderRadius="10px" />
              </div>
            </div>

            {/* Stacked Chart */}
            <div>
              <Stacked width="360px" height="360px" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ECommerce