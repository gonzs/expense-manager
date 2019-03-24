export const CURRENT_EXPENSE = 'CURRENT_EXPENSE'

const findCurrentExpense = (id,expenses) => {
    return {
        type: CURRENT_EXPENSE,
        id,
        expenses,
    }
}
export default findCurrentExpense