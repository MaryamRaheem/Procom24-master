import React from 'react'
import { Button } from './button'

const CustomButton = ({children, props}) => {
  return (
    <Button className="rounded-full py-7 text-base px-10 border border-indigo-400" variant="theme" {...props} >
        {children}
    </Button>
  )
}

export default CustomButton