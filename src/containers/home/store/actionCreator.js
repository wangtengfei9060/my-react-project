import * as actionTypes from './actionTypes'

export const showModal = flag => ({
    type: actionTypes.SHOW_MODAL,
    value: !!flag
})

export const closeModal = flag => ({
    type: actionTypes.CLOSE_MODAL,
    value: !!flag
})

export const handleSelectedRowKeys = selectedRowKeys => ({
    type: actionTypes.SELECTED_ROW_KEYS,
    value: selectedRowKeys
})

export const changeModalForm = row => ({
    type: actionTypes.FORM_Detail,
    value: row
})

export const changePageSize = (current, pageSize) => ({
    type: actionTypes.CHANGE_PAGE_SIZE,
    pagination: {
        current: current,
        pageSize: pageSize
    }
})

export const changeCurrent = current => ({
    type: actionTypes.CHANGE_CURRENT,
    pagination: {
        current: current
    }
})