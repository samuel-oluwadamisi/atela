import React from 'react'

const LoadingDemo = async() => {
     await new Promise((r) => setTimeout(r, 5000));
  return (
    <div>LoadingDemo</div>
  )
}

export default LoadingDemo