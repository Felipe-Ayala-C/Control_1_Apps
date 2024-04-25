

const fs = require('fs');
const path = require('path');

// Obtener la ruta al archivo JSON 'products.json'
const dataFilePath = path.join(__dirname, '../../routes/data/', 'incidents.json');


let car = []

// Función para leer el archivo JSON y devolver los datos
const readJsonFile = () => {
    try {
        if (fs.existsSync(dataFilePath)) {
            const jsonData = fs.readFileSync(dataFilePath, 'utf-8');
            return JSON.parse(jsonData);
        } else {
            console.error('El archivo JSON no existe en la ruta especificada:', dataFilePath);
            return [];
        }
    } catch (error) {
        console.error('Error al leer el archivo JSON:', error);
        return [];
    }
};

// Función para escribir datos en el archivo JSON
const writeJsonFile = (data) => {
    try {
        const jsonData = JSON.stringify(data, null, 2);
        fs.writeFileSync(dataFilePath, jsonData, 'utf-8');
        console.log('Datos escritos correctamente en el archivo JSON:', dataFilePath);
    } catch (error) {
        console.error('Error al escribir en el archivo JSON:', error);
    }
};

// Exportar las funciones de acciones
module.exports = {
    readJsonFile,
    writeJsonFile,
};
