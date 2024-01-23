import formidable from 'formidable';
import fs from 'fs';

const { NEXT_PUBLIC_PINATA_API_KEY, NEXT_PUBLIC_PINATA_SECRET_API_KEY } = process.env;

const pinataSDK = require('@pinata/sdk');
const pinata = new pinataSDK(NEXT_PUBLIC_PINATA_API_KEY, NEXT_PUBLIC_PINATA_SECRET_API_KEY);

export const config = {
    api: {
        bodyParser: false,
    },
};

const image = async (req, res) => {
    const form = new formidable.IncomingForm();

    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        // Obtenha o objeto do arquivo que deseja copiar
        const arquivo = files.file;

        // Crie uma stream de leitura do arquivo original
        const leituraStream = fs.createReadStream(arquivo.filepath);

        // Manipuladores de eventos para finalizar a cópia do arquivo
        leituraStream.on('end', () => {
            console.log('Arquivo copiado com sucesso!');
        });

        leituraStream.on('error', (erro) => {
            console.error('Ocorreu um erro ao copiar o arquivo:', erro);
        });

        setTimeout(() => {
            // Upload da imagem para o pinata
            const nomeMax = arquivo.originalFilename.slice(0, 30);
            //const readableStreamForFile = fs.createReadStream(`./public/images/${arquivo.originalFilename}`)
            const options = {
                pinataMetadata: {
                    name: nomeMax,
                },
            };
            pinata
                .pinFileToIPFS(leituraStream, options)
                .then((result) => {
                    //handle results here
                    console.log(result);

                    //Emite o sucesso da chamada da api com um objeto contendo ipfs hash, pinsize, timestamp
                    res.status(200).json({ resultado: result });
                })
                .catch((err) => {
                    //handle error here
                    console.log(err);
                    res.status(500).json({ error: err });
                });
        }, 50);
    });
};

export default image;
