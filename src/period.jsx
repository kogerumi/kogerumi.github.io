import React from 'react';
import ReactDOM from 'react-dom';
import PeriodOption from './period-option.jsx';

export default class Period extends React.Component {

    constructor(props) {
        super(props);
        this.selectOption = this.selectOption.bind(this);
        this.autoRenewalHandler = this.autoRenewalHandler.bind(this);
    }

    selectOption(option) {
        this.props.updateSub({
            period: option
        });
    }

    autoRenewalHandler (e) {
        this.props.updateSub({
            autoRenewal: e.target.checked
        });
    }

    render() {

        var self = this,
            options = self.props.options.map(function (opt, i) {

                var active = Object.is(self.props.selected, opt),
                    faded = self.props.selected && !active;

                return <PeriodOption
                    key={i}
                    data={opt}
                    active={active}
                    faded={faded}
                    optionGroup="period"
                    select={self.selectOption}
                />;
            });

        return (
            <div className="subscription__step">
                <h2 className="subscription__step-heading">{this.props.title}</h2>
                <div className="subscription__options subscription__options">
                    {options}
                </div>
                <label>
                    <input type="checkbox" checked={this.props.autoRenewal} onChange={this.autoRenewalHandler} />
                    Продлевать подписку автоматически
                </label>
            </div>
        );
    }
};

