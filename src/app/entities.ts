export interface AuditableEntity {                      
    id?: string,                                         
    createdDate: Date,                                  
    createdByUserId: string,                            
    amendedDate: Date,                                  
    amendedByUserId: string                             
}                                                       
                                                        
export interface Account extends AuditableEntity {      
    name: string                                        
}                                                       
                                                        
export interface Transaction extends AuditableEntity  { 
    transactionDate: Date,                              
    amount: number,                                     
    debitAccountId: string,                             
    creditAccountId: string,                            
    description: string                                 
}                                                       