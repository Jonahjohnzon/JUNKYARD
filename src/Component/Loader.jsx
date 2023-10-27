import React from 'react'
import ReactLoading from 'react-loading'

const Loader = () => {
  return (
    <div className=' flex justify-center items-center w-full h-full overflow-hidden'>
      <ReactLoading height={100} width={100} type='bars' color='white'/>
    </div>
  )
}

export default Loader