import { LightningElement } from 'lwc';
import fetchTaskBySubject from '@salesforce/apex/TaskController.fetchTaskBySubject';

export default class SearchTaskBySubjectImperative extends LightningElement {

    subject;
    taskList;
    errorMessage;
    showTable = false;

    handleSubjectChange(event){
        this.subject = event.target.value;

    }

    searchTasks(){
        fetchTaskBySubject({subjectString : this.subject})
        .then(result => {
            console.log('Result'+ JSON.stringify(result));
            this.taskList = result;
            this.showTable = true;
        })
        .catch(error => {
            console.log('error'+ JSON.stringify(error));
            this.errorMessage = error.body.message;
        })


    
    }

}