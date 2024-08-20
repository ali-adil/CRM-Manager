import React from 'react'
import { Input} from 'antd';

function InputAnt({placeholder,type, prefix,size}) {
  return (
    <>
      <div style={{textAlign:"center", marginBottom:"15px"}}>
        <Input 
          style={{
            width:"350px", 
            padding:"12px",
            background:"lightgrey"
          }} 
          placeholder={placeholder} 
          type={type} 
          prefix={prefix} 
          size={size} />
      </div>
    </>
      
  )
}
export default InputAnt;