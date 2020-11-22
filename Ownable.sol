pragma solidity ^0.6.0;
import "./ItemManager.sol" ;
import "./Item.sol";
contract Ownable {
    address public _owner ;
    constructor()internal {
        _owner=msg.sender;
    }
    
    
    //Throws if called by any account other than the _owner
    
    modifier onlyOwner(){
        require(isOwner(),"Ownable : caller is not the owner") ;
        _;
    }
    
    //returns true if caller is the owner
    
    function isOwner()public view returns (bool){
        return (msg.sender==_owner) ;
    }
}