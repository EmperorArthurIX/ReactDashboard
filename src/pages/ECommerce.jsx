import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { Stacked, Pie, Button, SparkLine } from '../components'
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

const ECommerce = () => {
  return (
    <div className='mt-12'>
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
                    bgColour="blue"
                    text="Download"
                    borderRadius="10px"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ECommerce