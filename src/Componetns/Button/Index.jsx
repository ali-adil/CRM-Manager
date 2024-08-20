import React from 'react'
import {Button} from 'antd';

   function Btn() {
    return(
        <>
            <div style={{textAlign:"center"}}>
                <Button 
                    style={{
                        width:"350px", 
                        padding:"25px", 
                        fontWeight:"bold", 
                        background:"#090230", 
                        color:"white",
                        borderRadius:"10px"
                    }} 
                    type="default" 
                    block
                >
                    Sign In
                </Button>
            </div>
        </>
    );
};

export default Btn;
