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

    // selectChangeHandler = (event) => {

    // }

    render () {
        return (
            <React.Fragment>
                <Account companyInfo={this.state.companyInfo} changeHandler={this.changeHandler} /> 
                {/* <Account companyInfo={this.state.companyInfo} changeHandler={this.changeHandler} selectChangeHandler={this.selectChangeHandler}/>  */}
                {/* <Account companyName="Springfield Nuclear Power Plant"/> 
                <Account companyName="Spacely Sprockets"/> 
                <Account companyName="Slate Rock and Gravel Company"/>  */}
            </React.Fragment>
        );
    }
}

export default AccountContainer;