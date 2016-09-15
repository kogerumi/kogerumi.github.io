import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export default class PaymentOption extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(e) {
        this.props.select(this.props.data);
    }

    render() {

        var description;

        var optionClass = classNames({
            subscription__option: true,
            subscription__option_active: this.props.active,
            subscription__option_faded: this.props.faded
        });

        if (this.props.data.description) {
            description = (
                <p>{this.props.data.description}</p>
            )
        }


        return (
            <div className={optionClass} onClick={this.clickHandler}>
                {this.props.data.val}
                {description}
            </div>
        );
    }
}