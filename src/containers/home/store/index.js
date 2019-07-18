import * as actionTypes from './actionTypes'

const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        title: '星期一' + i,
        description: '星期二' + i,
    });
}

const defaultState = {
    pagination: {
        pageSize: 10,
        current: 1,
        total: 100
    },
    visible: false,
    selectedRowKeys: [],
    dataSource: data,
    formObj: {
        title: '',
        description: ''
    }
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.SHOW_MODAL:
            return {
                ...state,
                visible: action.value
            }
        case actionTypes.CLOSE_MODAL:
            return {
                ...state,
                visible: action.value
            }
        case actionTypes.SELECTED_ROW_KEYS:
            return {
                ...state,
                selectedRowKeys: action.value
            }
        case actionTypes.FORM_Detail:
            return {
                ...state,
                formObj: {...action.value}
            }
        case actionTypes.CHANGE_PAGE_SIZE:
            return {
                ...state,
                pagination: {...action.pagination}
            }
        case actionTypes.CHANGE_CURRENT:
            return {
                ...state,
                pagination: {...action.pagination}
            }
        default:
            return state
    }
}