import React from 'react'
import { memo } from 'react'

const TestOfMemo = (props) => {
  return (
    <div>
        <h1>newCount:{props.newCount}</h1>
    </div>
  )
}

export default memo(TestOfMemo);