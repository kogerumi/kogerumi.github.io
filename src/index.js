import React from 'react';
import ReactDOM from 'react-dom';
import Subscription from './subscription.jsx';

const PAYMENT_MODES = [
    {
        id: 1,
        val: 'Visa'
    },
    {
        id: 2,
        val: 'Яндекс Деньги'
    },
    {
        id: 3,
        val: 'PayPal'
    },
    {
        id: 4,
        val: 'Webmoney'
    },
    {
        id: 5,
        val: 'SMS',
        description: 'Только для России'
    },
    {
        id: 6,
        val: 'Qiwi'
    },
    {
        id: 7,
        val: 'Подарочный код'
    }
];

const PERIODS = [
    {
        id: 1,
        val: '2 года',
        cost: 2880,
        monthly: 120
    },
    {
        id: 2,
        val: '1 год',
        cost: 1550,
        monthly: 125
    },
    {
        id: 3,
        val: '6 месяцев',
        cost: 780,
        monthly: 130
    }
];

const DISCOUNT_SUB_COST = 150;

ReactDOM.render(
    <Subscription
        name={'Клуб выгоднях покупок'}
        paymentOptions={PAYMENT_MODES}
        periods={PERIODS}
        discountSubCost={DISCOUNT_SUB_COST}
        useGiftCode={false}
        buyAsGift={false}
        autoRenewal={true}
        discountSub={false}
    />,
    document.getElementById("content")
);