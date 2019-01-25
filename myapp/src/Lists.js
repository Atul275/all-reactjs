//Reading data from List/Collection using 'key'
import React, { Component } from 'react';
import Emp from './emp';
//import Loader1 from './hoc/loader';

class Lists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emps: [
                { product: 'Laptops', price: 40000, quantity: 5 },
                { product: 'Mobiles', price: 10000, quantity: 8 },
                { product: 'Tabs', price: 60000, quantity: 3 }
            ]
        }
    }
    
    delEmp = (index, e) => {
        const copyemps = Object.assign([], this.state.emps);
        copyemps.splice(index, 1);
        this.setState({ emps: copyemps });
    }
    render() {
        return (
            <div>
                <table style={{ width: '500px', color: 'green', border: '2px' }}>
                    <tbody>
                        {
                            this.state.emps.map((emp, quantity) => {
                                return (<Emp 
                                    product={emp.product}
                                    key={emp.quantity}
                                    price={emp.price}
                                    deletEvent={this.delEmp.bind(this, quantity)}>
                                    {emp.quantity}
                                     </Emp>

                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Lists;
// export default Loader1('emps')(Lists);