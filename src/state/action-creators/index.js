export const depositMoney = (amount) => {
    return (dispatchFunction) => {
        dispatchFunction({
            type: 'deposit',
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) => {
    return (dispatchFunction) => {
        dispatchFunction({
            type: 'withdraw',
            payload: amount
        })
    }
}