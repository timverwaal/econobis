import { Selector } from 'testcafe';

export default class ModelDetailsProduct {
    constructor () {
        //price history
        this.newPriceHistory = Selector('span').withExactText('Prijshistorie').parent().child('a');
        this.dateStart = Selector('input[name="dateStart"]');
        this.price = Selector('input[name="price"]');
        this.vatPercentage = Selector('select[name="vatPercentage"]');
        this.priceHistoryRows = Selector('span').withExactText('Prijshistorie').parent().parent().child().nth(1).child().child().child();
    }
}