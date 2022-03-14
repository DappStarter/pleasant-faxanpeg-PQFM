require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remain slow journey arena orchard slogan'; 
let testAccounts = [
"0x79f53557f127a4ef167164b5c37c0fb94e607bfe08be901b87895079140d9f4d",
"0xa2265062d8199dc3fba06a5b439f4579f320f897b286acfd9db85ac9bf0d9879",
"0x27e73ebbbea7e2939a833381ab6e8a2385695b2dd4e372475227afc86baff4ea",
"0x8c789f081693aae66d53d10f3045015692588017a8a9e00c87619c406a828e81",
"0xc56a5933d6f85ffe72b43fe5796ad3b3ee58e6ef743a0d4d677286c82b01ec5d",
"0xeef6a0d702f99ccc6df90fcf2a2461b3b0bde668ba435c4ce6ddfb9566397288",
"0x1b6d793a5102c6fb8816196e8ad300510375e2b1b5930a3761b998a5508bad91",
"0x993c052739926f7be3c03e232e0b78e7e5cae908837de114e3c62a3f4fa53cf5",
"0xae3cf0a91225cf9d03f31699761cff14cdc2c4e0b5cd304dd525d711826cc479",
"0xef547e3665078e1d5e7012da2e223f0b885f78206ec552b8574a0a4a7faf7513"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


