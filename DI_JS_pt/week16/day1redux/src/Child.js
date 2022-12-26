import {connect} from 'react-redux';

const Child = (props) => {
    return  (
    <p>
        I'm a child with {props.a1} and {props.b1}
        and {props.txt}
    </p>

    )
    
}

const mapStateToProps = (state)=> {
    return {
      a1: state.prop_1,
      b1: state.prop_2, 
      txt: state.text
    }
  }
  
export default connect(mapStateToProps)(Child)
