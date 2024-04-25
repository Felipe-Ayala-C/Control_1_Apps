
import { readJsonFile, writeJsonFile }  from '../actions/car_plates.js'


exports.addEvent = async (ctx) => {
    try {
        const requestData = ctx.request.body;
        const products = readJsonFile(); // Call the function to read the JSON file
        // Check if products is an array before pushing (optional but recommended)
        const dataArray = Array.from(products);
        if ( (!requestData.hasOwnProperty("context") || !requestData.hasOwnProperty("metadata") || !requestData.hasOwnProperty("timestamp")) ){
            const mes_error = { "status": "NOK", "error_message":"One or more attributes did no came on the request"};
            ctx.status = 400;
            ctx.body = (mes_error);
        }else{
            const newProduct = {
            event_id: dataArray.lenght + 1,
            context: requestData.context,
            metadata: requestData.metadata,
            timestamp: requestData.timestamp
        };
        dataArray.push(newProduct);
        writeJsonFile(dataArray); // Assuming writeJsonFile writes the array

        ctx.status = 201;
        ctx.body = { message: 'Evento agregado correctamente', product: newProduct };
        };
        
    } catch (error) {
        console.error('Error al agregar un nuevo evento:', error);
        ctx.status = 500;
        ctx.body = { error: 'Error al agregar un nuevo evento' };
    }
};
  

exports.getEvents = async (ctx) => {
    try {
        const products = readJsonFile();
        ctx.body = products;
    } catch (error) {
        console.error('Error al obtener los eventos:', error);
        ctx.status = 500;
        ctx.body = { error: 'Error al obtener los eventos' };
    }
};
