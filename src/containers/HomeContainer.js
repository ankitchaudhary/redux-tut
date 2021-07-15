import {connect} from "react-redux";
import {addtoCart, removetoCart} from "../services/actions/action";
import Home from "../components/Home";

const mapStateToProps=state =>({
    
})

const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addtoCart(data)),
    removetoCartHandler:data=>dispatch(removetoCart(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);