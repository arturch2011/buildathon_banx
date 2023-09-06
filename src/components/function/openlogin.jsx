import OpenloginAdapter from '@web3auth/openlogin-adapter';

const openloginAdapter = new OpenloginAdapter({
    adapterSettings: {
        clientId, //Optional - Provide only if you haven't provided it in the Web3Auth Instantiation Code
        network: 'cyan', // Optional - Provide only if you haven't provided it in the Web3Auth Instantiation Code
        uxMode: 'popup',
        whiteLabel: {
            name: 'Your App Name',
            url: 'https://yourapp.com',
            logoLight: 'https://web3auth.io/images/w3a-L-Favicon-1.svg',
            logoDark: 'https://web3auth.io/images/w3a-D-Favicon-1.svg',
            defaultLanguage: 'en', // en, de, ja, ko, zh, es, fr, pt, nl
            dark: true, // whether to enable dark mode. defaultValue: false
            theme: {
                primary: '#000000',
            },
        },
    },
    privateKeyProvider,
});
web3auth.configureAdapter(openloginAdapter);
