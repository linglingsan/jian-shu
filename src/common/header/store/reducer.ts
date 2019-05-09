const defaultState = {
    focused: false
}

export default (state = defaultState, action: any) => {
    switch (action.type) {
        case 'search_focus':
            return { focused: true}
        case 'search_blur':
            return { focused: false}
        default:
    }
    return state
}
