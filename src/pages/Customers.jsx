import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Search, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids'
import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers"></Header>
      <GridComponent
                    dataSource={customersData}
                    allowPaging
                    allowSorting
                    toolbar={['Search', 'Delete']}
                    width='auto'
                    editSettings={{'allowDeleting': true, allowEditing: true}}
                    >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {... item}>
            </ColumnDirective>
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Edit, Search, Selection, Sort, Filter, Toolbar]}></Inject>
      </GridComponent>
    </div>
  )
}

export default Customers