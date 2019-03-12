import React from 'react'
import { expense } from '../actions'
import { connect } from 'react-redux'
import { Form, Input, Button, Icon, Select } from 'semantic-ui-react'

const categoryOptions = [{ key: 'IN', value: 'IN', text: 'Income' }, { key: 'EX', value: 'EX', text: 'Expense' }]

const Add = ({ dispatch }) => {

    let text
    let value
    let category

    const getCategory = (e) => {
        category = e.target.textContent;
    }

    return (
        <div>
            <Form onSubmit={e => {
                e.preventDefault()
                if (!text.inputRef.value.trim())
                    return

                if (value.inputRef.value < 0)
                    return

                if (!category.trim())
                    return

                dispatch(expense(category, text.inputRef.value, value.inputRef.value))
                text.inputRef.value = ''
                value.inputRef.value = ''
            }}
            >

                <Select placeholder='Select category' options={categoryOptions} onChange={getCategory} />
                <Input placeholder='Description...' ref={node => { text = node }} />
                <Input type='number' placeholder='Value...' ref={node => { value = node }} />

                <Button type='submit'><Icon name='add' /></Button>
            </Form>
        </div>
    )
}

const AddExpense = connect()(Add)

export default AddExpense