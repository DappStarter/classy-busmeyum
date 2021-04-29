require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name raise still horror grace slight forget gesture'; 
let testAccounts = [
"0x7dc9dd1abc3d6e008823aad68a1298315e39aae2d2b455e567a4fd3b9bad28c6",
"0xf154370a437574809f4facc5e3f22371123c83cdc8bab23e7b6bcb1696becf99",
"0x88b40d28572a119a32bf71fe83562a76c3169201bba45d7a11c417ef120080e1",
"0x475f16e37fb4bfa23ed52ce5c784b634598786066ee1f72f4ea6c6c91ff2f64c",
"0x3602186551141ffb08316a3445724d267cf7e521b4f7f87708a74f7e96780da9",
"0x46bc73420435cacd579c5da8cd67834e8d36503082c583eb8f4424405195307a",
"0x280af58267a35e822e37ba0fcbbf844381527d379de8a7223de35e43121d5e6a",
"0x229414d763dc574e1234cd1fc4da6496b1d71f95edea462154bc19a76b2eb415",
"0x26b3525bbc99891458b5c8192f5fd0146e20cee7bb0c09f975e122719ae08e77",
"0xdfe3dc1db6f163acdab14214f2812f730db7826a11a6a8aab845c81805e36b56"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
