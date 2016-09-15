import React from 'react';
import ReactDOM from 'react-dom';

export default class Total extends React.Component {

    constructor(props) {
        super(props);
        this.discountSubHandler = this.discountSubHandler.bind(this);
    }

    discountSubHandler(e) {
        this.props.updateSub({
            discountSub: e.target.checked
        })
    }

    render() {

        var period = this.props.period,
            total = period.cost + (this.props.discountSub ? this.props.discountSubCost : 0),
            calculationStr = this.props.discountSub ? period.cost + ' + ' + this.props.discountSubCost + ' = ' : '',
            totalStr = calculationStr + total + ' руб.',
            monthly;

        if (this.props.autoRenewal) {
           monthly = (
               <p>Далее {period.monthly} руб. в месяц</p>
           )
        }

        return (
            <div className="subscription__step">
                <h2 className="subscription__step-heading">Итого к оплате (за {this.props.period.val})</h2>
                <div className="subscription__total">
                    <div className="subscription__sum">{totalStr}</div>
                    {monthly}
                </div>
                <label>
                    <input type="checkbox" checked={this.props.discountSub} onChange={this.discountSubHandler} />
                    Добавить подписку на скидку 5% на ассортимент всех товаров
                    <p>Срок действия подписки 6 месяцев. Стоимость подписки 150 рублей.</p>
                </label>
            </div>
        );
    }
};