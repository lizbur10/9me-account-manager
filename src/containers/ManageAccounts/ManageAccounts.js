import React, { Component } from 'react';
import Account from '../../components/Account/Account';

class AccountContainer extends Component {
    state = {
        companyInfo: {
            accountManager: 'Sarah',
            companyName: 'ACME Corp',
            companyAddress: '123 Main St',
            companyCity: 'Cambridge',
            constantContactEmailList: 'ACME Corp',
            contactName: 'Joe',
            contactEmail: 'joe@acmecorp.com',
            contactPhone: '555-1000',
            deliveryDay: 'Tuesday',
            deliveryTime: '9:00-9:20',
            specialInstructions: 'Bring an anvil and some TNT'
        }
    }

    changeHandler = (event) => {
        this.setState({
            companyInfo: {
                ...this.state.companyInfo,
                [event.target.name]: event.target.value
            }
        })
      }


    render () {
        return (
            <React.Fragment>
                <Account companyInfo={this.state.companyInfo} changeHandler={this.changeHandler} /> 
            </React.Fragment>
        );
    }
}

export default AccountContainer;