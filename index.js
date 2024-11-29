import HuffmanService from './src/services/HuffmanService.js';
import HuffmanDecoder from './src/services/HuffmanDescompresorService.js';

const huffmanService = new HuffmanService();
const huffmanDecoderService = new HuffmanDecoder();

// Rutas de los archivos
const inputFilePath = './archivo.txt';         // Archivo de entrada para compresión
const compressedFilePath = './archivo.huf';    // Archivo comprimido
const metadataFilePath = './metadata.json';    // Metadatos
const decompressedFilePath = './archivo_decodificado.txt';  // Archivo descomprimido

const main = async () => {
    try {
        // Comprimir el archivo
        console.log('Comenzando la compresión...');
        await huffmanService.comprimirArchivo(inputFilePath, compressedFilePath, metadataFilePath);
        console.log('Compresión completada.');

        // Descomprimir el archivo
        console.log('Comenzando la descompresión...');
        await huffmanDecoderService.descomprimirArchivo(compressedFilePath, decompressedFilePath, metadataFilePath);
        console.log('Descompresión completada.');
    } catch (error) {
        console.error('Error en el proceso:', error);
    }
};

main();
