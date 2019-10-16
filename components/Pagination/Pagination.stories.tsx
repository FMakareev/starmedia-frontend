import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Pagination from "./Pagination";

storiesOf('Pagination', module).add('with text', () => {
  return <Pagination
    onFetchMore={()=>{}}
    onPageChange={()=>{}}
    loading={false}
  />
})
