import React, { useState } from 'react';
import './mouseover.css';
import { Box } from '@chakra-ui/react';
import { SlFrame } from 'react-icons/sl'


export default function Mouseover() {


    return (
        <>
            <Box
                w={"80px"}
                h={'80px'}
                className="p-3"
                style={{
                    background: "#D1D5DA",
                    borderRadius: "50px",
                    cursor: "pointer",
                }}
            >

                <div style={{
                    fontSize: '48px'
                }}>
                    
                    <SlFrame  />
                    


                </div>

            </Box>



        </>
    )
}
