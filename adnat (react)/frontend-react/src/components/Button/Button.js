import React from 'react';
import './style.css'
import styled, { css } from 'styled-components'

const Button = styled.button`
    width: ${props => props.width || "25px"};
    height: ${props => props.height || "10px"};
`

export default Button;