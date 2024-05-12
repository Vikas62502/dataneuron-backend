import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Data Neuron Task 2 API Documentation',
            version: '1.0.0',
            description: 'Data Neuron Task 2 API Documentation',
        },
    },
    apis: [
        'src/controllers/*.ts',
    ],
};

const specs = swaggerJsdoc(options);

export default specs;
