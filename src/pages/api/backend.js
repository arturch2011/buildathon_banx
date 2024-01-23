const fs = require('fs');

const { NEXT_PUBLIC_PINATA_API_KEY, NEXT_PUBLIC_PINATA_SECRET_API_KEY } = process.env;

const pinataSDK = require('@pinata/sdk');
const pinata = new pinataSDK(NEXT_PUBLIC_PINATA_API_KEY, NEXT_PUBLIC_PINATA_SECRET_API_KEY);

const api = async (req, res) => {
    const obj = {
        description: 'Soulbond NFT criated to facilitate credit',
        image: `https://tomato-secure-lobster-753.mypinata.cloud/ipfs/${req.body.img}`,
        name: `Banx-${req.body.nome}`,
        attributes: [
            {
                display_type: 'string',
                trait_type: 'Person',
                value: `${req.body.nome}`,
            },

            {
                display_type: 'string',
                trait_type: 'Address',
                value: `${req.body.endereco}`,
            },

            {
                display_type: 'string',
                trait_type: 'CPF',
                value: `${req.body.CPF}`,
            },
            {
                display_type: 'string',
                trait_type: 'Birth',
                value: `${req.body.nascimento}`,
            },
            {
                display_type: 'string',
                trait_type: 'Nationality',
                value: `${req.body.nacionalidade}`,
            },
            {
                display_type: 'string',
                trait_type: 'Income',
                value: `${req.body.rend}`,
            },
            {
                display_type: 'string',
                trait_type: 'Gender',
                value: `${req.body.genero}`,
            },
            {
                display_type: 'string',
                trait_type: 'Civil',
                value: `${req.body.estadoCiv}`,
            },
            {
                display_type: 'string',
                trait_type: 'Profession',
                value: `${req.body.proficao}`,
            },
            {
                display_type: 'string',
                trait_type: 'Patrimony',
                value: `${req.body.patrimonio}`,
            },
        ],
    };
    const json = JSON.stringify(obj);
    const caminhoArquivo = './public/meta.json';
    fs.writeFileSync(caminhoArquivo, json, 'utf-8');

    const options = {
        pinataMetadata: {
            name: `Banx-Person-${req.body.nome}`,
        },
    };

    const leituraStream = fs.createReadStream(caminhoArquivo);

    leituraStream.on('end', () => {
        console.log('Arquivo copiado com sucesso!');
    });
    leituraStream.on('error', (erro) => {
        console.error('Ocorreu um erro ao copiar o arquivo:', erro);
    });

    pinata
        .pinFileToIPFS(leituraStream, options)
        .then((result) => {
            console.log(result);
            res.status(200).json({ resultado: result });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};

export default api;
