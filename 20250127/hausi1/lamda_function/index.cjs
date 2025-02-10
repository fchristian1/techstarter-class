const axios = require('axios');

exports.handler = async (event) => {
    console.log('Event received:', event);

    try {
        const POSTBODY = event;
        const ENV = process.env.ENV_VAR;

        if (!POSTBODY.name) {
            console.error("Parameter 'name' fehlt");
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Parameter 'name' fehlt" }),
            };
        }

        const url = "https://api.github.com";
        const resApi = await axios.get(url);

        const response = {
            statusCode: 200,
            body: JSON.stringify({
                message: `Hello, ${POSTBODY.name}`,
                url: url,
                data: resApi.data,
                env: ENV,
                postbody: POSTBODY
            }),
        };

        console.log('Response:', response);
        return response;
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal Server Error", error: error.message }),
        };
    }
};