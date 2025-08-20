public with sharing class IndependentWiresController {

    @AuraEnabled(cacheable=true)
    public static List<Case> getCase(){
        return [SELECT Id, Origin, Subject, Description FROM CASE LIMIT 5 ];
    }

     @AuraEnabled(cacheable=true)
     public static List<Task> getTask(){
        return [SELECT Id, ActivityDate, Subject, Description FROM TASK LIMIT 5 ];
    }
}