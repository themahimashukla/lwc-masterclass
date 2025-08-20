import { LightningElement } from 'lwc';

export default class ChildEventTrigger extends LightningElement {
    SelectedProduct;

    handleFiringEvent(){
        this.SelectedProduct = 'Geely Coolray';

        const event = new CustomEvent('sendproductselected', {
        detail : this.SelectedProduct

    });

        this.dispatchEvent(event);

    }
    
    
}