import { Selector } from 'testcafe';

export default class ModelGeneral {
    constructor () {
        this.save = Selector('button').withExactText('Opslaan');
        this.titleH3 = Selector('h3');
        this.titleH4 = Selector('h4');
    }
}