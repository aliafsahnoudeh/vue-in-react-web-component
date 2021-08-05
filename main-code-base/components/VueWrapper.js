import * as React from 'react'
import '../../vue-web-components/dist/my-vue-component'

const VueWrapper = () => {
    return (
      <div className='vue-Wrapper'>
        <my-vue-component msg='prop from react world' />
      </div>
    )
  }
  
export default VueWrapper
