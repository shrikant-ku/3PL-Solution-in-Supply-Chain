

/*artifacts.require() method will tell tuffle which contract would like to interact via the given method 
and it will return abstarction that will be further required in later deployemnt.*/
var ItemManager = artifacts.require("./ItemManager.sol");
module.exports = function(deployer) {
  deployer.deploy(ItemManager);
  
};
/* here module.exports export a function that will accept a depolyer object, and this deployer object is this main interface for staging 
  depolyment and proding clear syntex as well as help in saving artifacts fo rlater deployment.*/
