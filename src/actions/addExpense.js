export const EXPENSE = 'EXPENSE'

let nextId = 3

const addExpense = (category, text, value) => {
    return {
        type: EXPENSE,
        id: nextId++,
        category,
        text,
        value,
    }
}
export default addExpense