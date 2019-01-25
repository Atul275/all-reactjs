import React, {Component} from 'react';
import './loader.css';

const Loader1 = (propName) => (WrappedComponemt) =>{
    return class Loader1 extends Component {
        render() {
            if(this.props.emps) {
                return this.props[propName].lenght===0 ? <div className='loader'></div>:<
                WrappedComponemt{...this.props} />
            }
            else {
                return <div className='loader'/>
            }
        }
    }
}
export default Loader1;