import { connect } from "react-redux";
import App from '../component/app';
import increment from "../action/app";

function mapStateToProps(fuga) {
    return fuga
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick(){
            dispatch(increment())
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);