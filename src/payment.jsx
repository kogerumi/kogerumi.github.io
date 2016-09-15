import React from 'react';
import ReactDOM from 'react-dom';
import PaymentOption from './payment-option.jsx';
import classNames from 'classnames';

export default class Payment extends React.Component {

    constructor(props) {
        super(props);
        this.selectOption = this.selectOption.bind(this);
        this.asGiftHandler = this.asGiftHandler.bind(this);
    }

    selectOption(option) {
        this.props.updateSub({
            payment: option,
            useGiftCode: option.val == 'Подарочный код'
        });
    }

    asGiftHandler(e) {
        this.props.updateSub({
            buyAsGift: e.target.checked
        });
    }

    render() {
        var self = this,
            asGiftOption,
            options = self.props.options.map(function (opt, i) {

                if (opt.val == 'Подарочный код' && self.props.buyAsGift) {
                    return false;
                }

                var active = Object.is(self.props.selected, opt),
                    faded = self.props.selected && !active;

                return <PaymentOption
                    key={i}
                    data={opt}
                    active={active}
                    faded={faded}
                    optionGroup="payment"
                    select={self.selectOption}
                />;
            });


        if (!this.props.giftCode) {
            asGiftOption = (
                <div className="checkbox">
                    <input
                        type="checkbox"
                        id="asGift"
                        checked={this.props.buyAsGift}
                        onChange={this.asGiftHandler}
                    />
                    <label htmlFor="asGift">Купить подписку в подарок</label>
                </div>
            );
        }

        return (
            <div className="subscription__step">
                <h2 className="subscription__step-heading">{this.props.title}</h2>
                <div className="subscription__options">{options}</div>
                {asGiftOption}
            </div>
        );
    }
}
