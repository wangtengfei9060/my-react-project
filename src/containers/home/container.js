import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Home from './component'
import * as actionCreator from './store/actionCreator'

const mapStateToProps = (state) => ({
    visible: state.home.visible,
    selectedRowKeys: state.home.selectedRowKeys,
    dataSource: state.home.dataSource,
    formObj: state.home.formObj,
    pagination: state.home.pagination
})

// const mapDispatchToProps = dispatch => ({
//     // bindActionCreators()
//     showModal(flag) {
//         const action = actionCreator.showModal(flag)
//         dispatch(action)
//     },
//     closeModal(flag) {
//         const action = actionCreator.closeModal(flag)
//         dispatch(action)
//     },
//     handleSelectedRowKeys(selectedRowKeys) {
//         const action = actionCreator.handleSelectedRowKeys(selectedRowKeys)
//         dispatch(action)
//     },
//     changeModalForm(row) {
//         const action = actionCreator.changeModalForm(row)
//         dispatch(action)
//     },
//     changePageSize(current, pageSize) {
//         const action = actionCreator.changePageSize(current, pageSize)
//         dispatch(action)
//     }, 
//     changeCurrent(current) {
//         const action = actionCreator.changeCurrent(current)
//         dispatch(action)
//     }
// })

const mapDispatchToProps = dispatch =>(bindActionCreators(actionCreator, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(Home)
