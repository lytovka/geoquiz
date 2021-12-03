import React from 'react';
import { fontSize, width } from "@mui/system";
import styled from "styled-components";
//import { HomePage } from "components";  - this is to be done


// Here we have a function that will sytle or alter the HomePage component to adjust so that it is different when th pixels match that of a phone or computer
function HomePageNew () {

    const NewHomePage= styled.homePage`
        
      @media (max-width: 1200px) { // for when it is in a computer
                font-size: 16px;
                text-align: left;
                
        }
        @media (max-width: 800px) { // for when it is in a phone
                font-size: 12px;
                text-align: center;
        }

            `;

            return (

                < NewHomePage />

            )
        }

