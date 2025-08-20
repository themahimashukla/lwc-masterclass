public with sharing class DependentWiresController {
    @AuraEnabled(cacheable = true)
    public static List<Task> fetchTaskFormAccount(String accountName){
        try {
            return [SELECT Id, Subject, ActivityDate, Description, What.Name FROM TASK WHERE What.Name = : accountName];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }  
    }
}