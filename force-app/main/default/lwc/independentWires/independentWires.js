import { LightningElement, wire } from 'lwc';
import fetchCase from '@salesforce/apex/IndependentWiresController.getCase';
import fetchTask from '@salesforce/apex/IndependentWiresController.getTask';

export default class IndependentWires extends LightningElement {
    foundCase = false;
    foundTask = false;

    caseList;
    taskList;

    @wire(fetchCase)
    wiredCase({data, error}){
        if(data){
            this.caseList = data;
            this.foundCase = true;

        }
        if(error){
            this.caseList = undefined;

        }

        
    }
    @wire(fetchTask)
    wiredTask({data, error}){
        if(data){
            this.taskList = data;
            this.foundTask = true;

        }
        if(error){
            this.taskList = undefined;

        }

        
    }

    
}