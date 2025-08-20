import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import getTaskfromAccount from '@salesforce/apex/DependentWiresController.fetchTaskFormAccount';

export default class DependentWires extends LightningElement {
    accountName;
    taskList;
    taskFound = false;
    @api recordId;
    fields = [ACCOUNT_NAME]; 

    @wire(getRecord, {recordId : '$recordId', fields : '$fields'})
    WiredAccount({data, error}){

        if(data){
            console.log('Account Data'+JSON.stringify(data));
            this.accountName = data.fields.Name.value;

        }
        else if (error){

        }
    }
    @wire(getTaskfromAccount, {accountName :'$accountName'})
    wiredTask({data, error}){
        if(data){
            console.log('Task Data: ' + JSON.stringify(data));
            this.taskList = data;
            this.taskFound = true;

        } 
        else if (error){
            console.log('Error: ' + error.body.message);
            
        }

    }


}