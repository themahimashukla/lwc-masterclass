import { LightningElement } from 'lwc';

export default class ChildToParentEvent extends LightningElement {

    showProduct;
    handleProductSelection(event){
        this.showProduct = event.detail;

    }
    
}