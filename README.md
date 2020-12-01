# Supply chain Payment solution using smart contract
  Objective: To provide a solution for customer to have seamless payment experience experience while giving orders to their favorate service providers.

Applications:
E-commerce company like flipkart, amazon can use this solution to give their user a semaless,secure and fast payment experience. 


Architecture Layer:
  User Interface:
     Three Main functions:
     1. ListenPayment: When customerpays for goods then this will wil called and pop-up massage will be shown to owner. 
     2. HandleInput: This function will update the change we making while creating new items.
     3. Handle submit: This function will send the created item to the blockchain.
     
  
   Item smart contract:
     Item property and payment acceptance functionality
     Calls Item Manager function to for furtehr  steps.
      
   Item Manager Smart contract:
      It handle the creation of item.
      Provides trigger delivery and payment functionality.
    
      
Tools and plateform used:
Remix,  Visual Studio code, React Framework, SafeMath library from openzappelin, Truffle Evironment to deploy and test the smart contract. 
  
  


Advantages:
  Payment will take place very fast,and in secure mode.
  With every payment, next payment security get improves.

Disadavantages:
  As this  is very new to user, So user may hesitate to adopt it for their payment.
  Currently only it is able to notifiy the different parties involved at certain points only.

Future improvement:
  Later it can improved so that each party involved can track the item status at every point of time.

Challanges: 
  Update in solidity very often.
  Changes in audited smart contract which
  Understanding connections between various party invlved




