import React from 'react';
import ReactDOM from 'react-dom';
import PaymentOption from './payment-option.jsx';
import classNames from 'classnames';

export default class PeriodOption extends PaymentOption {

    render() {

        var description;

        var optionClass = classNames({
            subscription__option: true,
            subscription__option_period: true,
            subscription__option_active: this.props.active,
            subscription__option_faded: this.props.faded
        });

        var data = this.props.data;

        if (this.props.data.description) {
            description = (
                <p>{this.props.data.description}</p>
            )
        }


        return (
            <div className={optionClass} onClick={this.clickHandler}>
                {data.val}
                <p>{data.cost + ' руб.'}</p>
                <p>{data.monthly + ' руб./месяц'}</p>
            </div>

        );
    }
}