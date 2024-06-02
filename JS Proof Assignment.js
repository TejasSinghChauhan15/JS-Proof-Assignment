//Create a variable to hold your NFTs.
const myNFTs = [];
//THis function will create an NFT object using the provided metadata.
//And store it in the 'myNFTs' array. 
function mintNFT(_name, _background, _accessories) {
    const NFTnew = {
        "NFT Name": _name,
        "NFT Background": _background,
        "NFT Accessories": _accessories,
    };
    myNFTs.push(NFTnew);
    console.log("Newly Minted:"+_name);
}
//List all NFTs Metadata.
function listNFTs () {
    for (let i=0;i<myNFTs.length;i++) {
        console.log (myNFTs [i]);
    }
}
//Get the total number of minted NFTs.
function getTotalSupply() {
    return myNFTs.length;
}
//Call the functions
mintNFT ("Cat", "Beach", "Headphones");
listNFTs();
console.log(`Total NFTs Minted: ${getTotalSupply()}`);
