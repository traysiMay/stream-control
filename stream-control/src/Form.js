import React from 'react'
import { connect } from "react-redux"
import Field from './Field';
import styled from "styled-components"

import io from "socket.io-client"
const socket = io.connect('ws://localhost:4000')

const FormContainer = styled.div`
margin:auto;
margin:1rem 0rem;
padding:1rem;
width:70%;
`

const FieldContainer = styled.div`
padding:0rem;
`
const Button = styled.button`
width: 8rem;
    height: 3rem;
    background: white;
    border: 2px solid black;
    font-weight: bold;
    font-size: 1rem;
    margin: 0 2rem;
`
function Form({ names }) {
    console.log(names)
    const submitForm = () => {
        socket.emit('change_names', names)
    }

    return (
        <FormContainer>
            <h1>NAMES</h1>
            <FieldContainer>
                <Field name={'first'} />
                <Field name={'second'} />
                <Field name={'third'} />
                <Button onClick={submitForm}>SUBMIT</Button>
            </FieldContainer>
        </FormContainer>
    )
}

const mapStateToProps = state => state
export default connect(mapStateToProps)(Form)
