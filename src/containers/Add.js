import React from 'react'
import { expense } from '../actions'
import { connect } from 'react-redux'
import { Form, Input, Button, Icon, Select } from 'semantic-ui-react'


const AddTo = ({ dispatch }) => {
    return (
        <div>
            <Form onSubmit={e => {
                e.preventDefault()
                /*                 if (!category.InputRef.value.trim())
                                    return
                
                                if (!value.InputRef.value.trim())
                                    return
                */
                dispatch(expense('expense','Food','1000'))
                dispatch(expense('income','sueldo','300'))
            }}
            >
                <Button type="submit"><Icon name='add' /></Button>
            </Form>
        </div>
    )
}

const Add = connect()(AddTo)

export default Add