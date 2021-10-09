pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";


contract EthmsTemplates is Ownable {
  uint256 public templateIndex;
  mapping (uint => string[9]) public _templates; 
  mapping (uint => uint) public templatePrices; 

  function addNewTemplate(string[9] memory templateContent, uint price) public onlyOwner returns (uint){
    _templates[templateIndex] = templateContent;
    templatePrices[templateIndex] = price;

    templateIndex += 1;
    return templateIndex;
  }

  function getTemplate(uint256 templateId)  public view returns (string memory) {
    string[9] memory _templateContent = _templates[templateId];

    string memory output = string(abi.encodePacked(
      _templateContent[0], 
      _templateContent[1],
      _templateContent[2],
      _templateContent[3],
      _templateContent[4],
      _templateContent[5],
      _templateContent[6],
      _templateContent[7],
      _templateContent[8]
      ));
        
    return output;
  }

  function getTemplatePrice(uint256 templateId)  public view returns (uint) {
    return templatePrices[templateId];
  }

  function constructSVG(uint256 templateId, string[8] memory _textMessage) public view returns (string memory) {
      string[9] memory _templateContent = _templates[templateId];
      string memory output = string(abi.encodePacked(
             _templateContent[0],
              _textMessage[0], 
               _templateContent[1],
              _textMessage[1],
               _templateContent[2],
              _textMessage[2],
               _templateContent[3],
              _textMessage[3]
      ));

      {
        output = string(abi.encodePacked(
              output,
               _templateContent[4],
              _textMessage[4],
               _templateContent[5],
              _textMessage[5],
               _templateContent[6],
              _textMessage[6],
               _templateContent[7],
              _textMessage[7],
              _templateContent[8]
      ));
      }
           return output;
    }
  

}