public with sharing class TaskController {

    @AuraEnabled(cacheable=true)
    public static List<Task> fetchTaskBySubject (String subjectString) {
        return [SELECT Id, Status, Description,Subject, Priority FROM Task WHERE Subject = :subjectString];


    }
}