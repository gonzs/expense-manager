import React from 'react'
import { Form, Input, Button, Icon, Select } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const categoryOptions = [{ key: 'IN', value: 'IN', text: 'Income' }, { key: 'EX', value: 'EX', text: 'Expense' }]

const AddExpense = ({ onAddExpense }) => {

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

                onAddExpense(category, text.inputRef.value, parseInt(value.inputRef.value))
                text.inputRef.value = ''
                value.inputRef.value = ''
            }}
            >
                <Select placeholder='Select category' options={categoryOptions} onChange={getCategory} />
                <Input placeholder='Description...' ref={node => { text = node }} />
                <Input type='number' step=".01" placeholder='Value...' ref={node => { value = node }} />

                <Button type='submit'><Icon name='add' /></Button>
            </Form>
        </div >
    )
}

AddExpense.propTypes = {
    onAddExpense: PropTypes.func.isRequired,
}

export default AddExpense