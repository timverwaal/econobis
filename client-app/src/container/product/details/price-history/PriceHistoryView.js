import React from 'react';
import {connect} from "react-redux";
import moment from "moment/moment";

const PriceHistoryView = props => {
    const {id, dateStart, price, vatPercentage, priceInclVat } = props.price;

    return (
        <div className={`row border ${props.highlightLine}`} onMouseEnter={() => props.onLineEnter()} onMouseLeave={() => props.onLineLeave()}>
            <div className="col-sm-3" > {dateStart ? moment(dateStart).format('L') : ''}</div>
            <div className="col-sm-3" >{price ? '€' + price.toLocaleString('nl',{ minimumFractionDigits: 2, maximumFractionDigits: 2 }) : ''}</div>
            <div className="col-sm-2" >{vatPercentage ? vatPercentage : ''}</div>
            <div className="col-sm-2" >{priceInclVat ? '€' + priceInclVat.toLocaleString('nl',{ minimumFractionDigits: 2, maximumFractionDigits: 2 }) : ''}</div>
            <div className="col-sm-2">{id === props.currentPriceId ? 'Ja' : ''}</div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        currentPriceId: state.productDetails.currentPrice.id
    }
};

export default connect(mapStateToProps)(PriceHistoryView);