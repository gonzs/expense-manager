export const EXPENSE = 'EXPENSE'

let nextId = 0

const expense = (category, text, value) => {
    return {
        type: EXPENSE,
        id: nextId++,
        category,
        text,
        value
    }
}
export {expense} 