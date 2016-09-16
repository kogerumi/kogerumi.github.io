import React from 'react';
import ReactDOM from 'react-dom';
import Payment from './payment.jsx';
import Period from './period.jsx';
import Total from './total.jsx';


export default class Subscription extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            autoRenewal: this.props.autoRenewal,
            buyAsGift: this.props.buyAsGift,
            discountSub: this.props.discountSub
        };

        this.updateSub = this.updateSub.bind(this);
    }

    // Передаем в модуль данные из компонентов
    updateSub(stepData) {
        this.setState(stepData);
    }

    render() {
        var payment,
            period,
            total,
            footer;

        payment = (
            <Payment
                title={'Выберите способ оплаты'}
                options={this.props.paymentOptions}
                selected={this.state.payment}
                buyAsGift={this.state.buyAsGift}
                updateSub={this.updateSub}
            />
        );

        if (this.state.payment && !this.state.useGiftCode) {
            period = (
                <Period
                    title={'На какой срок'}
                    options={this.props.periods}
                    selected={this.state.period}
                    autoRenewal={this.state.autoRenewal}
                    updateSub={this.updateSub}
                />
            );
        }

        if (this.state.period && !this.state.useGiftCode) {
            total = (
                <Total
                    period={this.state.period}
                    autoRenewal={this.state.autoRenewal}
                    discountSub={this.state.discountSub}
                    discountSubCost={this.props.discountSubCost}
                    updateSub={this.updateSub}
                />
            );
        }

        if (this.state.period || this.state.useGiftCode) {
            footer = (
                <div className="subscription__footer">
                    <button>Оплатить</button>
                </div>
            );
        }

        return (

            <div className="subscription">
                <form>
                    <div className="subscription__header">{this.props.name}</div>
                    {payment}
                    {period}
                    {total}
                    {footer}
                </form>
            </div>
        );
    }
}