const ItemManager=artifacts.require("./ItemManager.sol");
contract("ItemManager",accounts=>{//here accounts a fallback function will be called for all available accounts in a node to which we are connected to.
    it("...should let you create new Items.",async()=>{//"it" is a function which is accepting a fallback function as parameter
        const itemManagerInstance=await ItemManager.deployed() ;//here deployed function will give truffle contract instance from  json file of contract 
        const itemName="test" ;
        const itemPrice=5400 ;
        const result=await itemManagerInstance.createItem(itemName,itemPrice,{from:accounts[0]}) ;
       
       assert.equal(result.logs[0].args._itemIndex, 0,"There should be one item index in there") ;
       const item=await itemManagerInstance.items(0);
     //console.log(item) ;
    assert.equal(item._identifier,itemName,"The item has a different identifier");

    });
});