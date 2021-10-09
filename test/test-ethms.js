const { expect } = require("chai");
const { ethers } = require("hardhat");

const { testPhrases } = require('../secrets.json');


describe("Ethms", function () {
  it("Should return the tokenURI properly", async function () {

    // const HASHES_TEST = '0x3eE600caEE6AA11180ab38E3FFE7D3d4F49f45D0';

    const HashesContract = await ethers.getContractFactory("HashesTest");
    const hashesDeployTx = await HashesContract.deploy();
    const HashesLive = await hashesDeployTx.deployed();

    // const HashesLive = await HashesContract.attach(HASHES_TEST);

    let hashesArray = [];
    testPhrases.forEach(phrase => {
      hashesArray.push(
        HashesLive.supportsInterface(3670,"0xe77ac608CE5C4D5B32A24C039b1b985455A7F088", phrase)
      )
    });

    // testPhrases.forEach(phrase => {
    //   const hashesResult = await HashesLive.supportsInterface(3670,"0xe77ac608CE5C4D5B32A24C039b1b985455A7F088",phrase);

    //   console.log("*** hashes result - ", hashesResult);
    // });

    // for await (const hash of hashesArray) {
    //   console.log("*** new - ", hash);
    // }
    
    let finalResult = true;
    let count = 10000;

    let hash;
    while (finalResult) {

      hash = await HashesLive.supportsInterface(3674,"0xe77ac608CE5C4D5B32A24C039b1b985455A7F088", count.toString())

      // console.log("** hash -- ", count, "  - ", hash, " ** ", hash.substr(2, 6));

      if (hash.substr(-4) === "1111" && hash.substr(2,4) === "0000") {
        finalResult = false;
      }

      count++;
    }

    console.log("*** final result - ", count, hash);








    // const ETHMS_TEMPLATES_ADDR = '0x4010200CF87Dd28E15299BFD199C9783921bBfbe';
    
    // // const EthmsTemplates = await ethers.getContractFactory("EthmsTemplates");
    // // const ethmsTemplates = await EthmsTemplates.deploy();
    // // const ethTemplateContract = await ethmsTemplates.deployed();

    // // // expect(await greeter.greet()).to.equal("Hello, world!");

    // // const newTemplateTx = await ethmsTemplates.addNewTemplate(
    // //   ["<svg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'><style>.b2{fill:#000;font-family:serif;font-size:13px}</style><rect width='100%' height='100%' fill='#FDF9E7'/><g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g transform='translate(-8 -4)'><text font-family='Helvetica-Bold, Helvetica' font-size='12' font-weight='bold' fill='#DF6C6C'><tspan x='180' y='247'>EthMS.com</tspan></text><circle fill='#000' cx='228' cy='19' r='4'/><path d='M228 23c-1.494 9.676 3.564 17.81 5.698 18.998 1.423.791 2.224-.67 2.404-4.386' stroke='#A7C764'/><path d='M226.534 15c-.951-3.75-1.303-6.18-1.055-7.291.617-2.772 3.392-3.388 4.305-2.83.925.567 4.149 2.407 3.9 4.967-.095.985-1.395 2.703-3.9 5.154' fill='#EFD95D'/><path d='M234.934 22.244c-2.224-3.514-3.213-5.826-2.965-6.936.618-2.772 5.92-1.394 6.832-.836.523.32.74.622.987 1.1.19.37.495.759.387 1.873-.096.985-1.304 2.54-3.625 4.666a4.85 4.85 0 0 0-.789-.025c-.183.015-.459.068-.827.158Z' fill='#EFD95D' transform='rotate(82 236.065 17.939)'/><path d='M231.563 29.865c-1.738-3.07-2.502-5.068-2.292-5.998.523-2.32 2.872-2.835 3.645-2.368.784.474 3.513 2.014 3.303 4.157-.08.825-1.46 2.327-4.14 4.508l-.516-.3Z' fill='#EFD95D' transform='rotate(126 232.734 25.753)'/><path d='M220.341 31.038c-1.71-3.643-2.44-6.02-2.192-7.13.617-2.772 3.392-3.387 4.305-2.83.926.567 4.149 2.407 3.9 4.967-.095.986-1.567 2.718-4.415 5.197l-1.598-.204Z' fill='#EFD95D' transform='rotate(-151 222.235 26.067)'/><path d='M218.027 19.757c-1.616-3.368-2.3-5.607-2.053-6.718.617-2.772 3.392-3.387 4.305-2.83.926.567 4.149 2.408 3.9 4.967-.095.986-1.57 2.596-4.426 4.83a2.752 2.752 0 0 0-.735-.235c-.216-.032-.546-.036-.99-.014Z' fill='#EFD95D' transform='rotate(-73 220.059 15.014)'/><circle fill='#000' cx='21' cy='217' r='4'/><path d='M21 221c.36 1.37.255 2.554.36 3.763.105 1.222-.126 2.304-.36 3.508-.305 1.572-3.61 11.439-4.925 12.358-1.145.801-2.314-.18-3.506-2.941' stroke='#A7C764'/><path d='M19.534 213c-.951-3.75-1.303-6.18-1.055-7.291.617-2.772 3.392-3.388 4.305-2.83.925.567 4.149 2.407 3.9 4.967-.095.985-1.395 2.703-3.9 5.154' fill='#EFD95D'/><path d='M27.934 220.244c-2.224-3.514-3.213-5.826-2.965-6.936.618-2.772 5.92-1.394 6.832-.836.523.32.74.622.987 1.1.19.37.495.759.387 1.873-.096.985-1.304 2.54-3.625 4.666a4.85 4.85 0 0 0-.789-.025c-.183.015-.459.068-.827.158Z' fill='#EFD95D' transform='rotate(82 29.065 215.939)'/><path d='M24.563 227.865c-1.738-3.07-2.502-5.068-2.292-5.998.523-2.32 2.872-2.835 3.645-2.368.784.474 3.513 2.014 3.303 4.157-.08.825-1.46 2.327-4.14 4.508l-.516-.3Z' fill='#EFD95D' transform='rotate(126 25.734 223.753)'/><path d='M13.341 229.038c-1.71-3.643-2.44-6.02-2.192-7.13.617-2.772 3.392-3.387 4.305-2.83.926.567 4.149 2.407 3.9 4.967-.095.986-1.567 2.718-4.415 5.197l-1.598-.204Z' fill='#EFD95D' transform='rotate(-151 15.235 224.067)'/><path d='M11.027 217.757c-1.616-3.368-2.3-5.607-2.053-6.718.617-2.772 3.392-3.387 4.305-2.83.926.567 4.149 2.408 3.9 4.967-.095.986-1.57 2.596-4.426 4.83a2.752 2.752 0 0 0-.735-.235c-.216-.032-.546-.036-.99-.014Z' fill='#EFD95D' transform='rotate(-73 13.059 213.014)'/></g></g><text x='15' y='60' class='b2'>","</text><text x='15' y='80' class='b2'>","</text><text x='15' y='100' class='b2'>","</text><text x='15' y='120' class='b2'>","</text><text x='15' y='140' class='b2'>","</text><text x='15' y='160' class='b2'>","</text><text x='15' y='180' class='b2'>","</text><text x='15' y='200' class='b2'>","</text></svg>"],
    // //   100000
    // // );

    // // console.log("**** - ", ethTemplateContract.address);

    // // // wait until the transaction is mined
    // // await newTemplateTx.wait();

    // // expect(await greeter.greet()).to.equal("Hola, mundo!");

    // const Ethms = await ethers.getContractFactory("Ethms");
    // // const ethms = await Ethms.deploy(ethTemplateContract.address);
    // const ethms = await Ethms.deploy(ETHMS_TEMPLATES_ADDR);
    // await ethms.deployed();

    // let contractbalance = await ethms.contractBalance();

    // console.log("** Balance", contractbalance);

    // const mintNewTokenTx = await ethms.mint(["Some small","test","","","","","",""], 0, "0x7c52DEcAF0bE5537E5655fD4bbFA40DeA6dd127a", {
    //   value: 100000
    // });

    // await mintNewTokenTx.wait();

    // const tokenURI = await ethms.tokenURI(1);
    // console.log("*** tokenURI - ", tokenURI);

    // contractbalance = await ethms.contractBalance();
    // console.log("** Balance", contractbalance.toNumber());

  });
});