/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	API_USERSUBMISSIONSAPI_GRAPHQLAPIIDOUTPUT
	API_USERSUBMISSIONSAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_USERSUBMISSIONSAPI_GRAPHQLAPIKEYOUTPUT
	DYNAMODB_TABLE_NAME
Amplify Params - DO NOT EDIT */

// /**
//  * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
//  */
// exports.handler = async (event) => {
//     console.log(`EVENT: ${JSON.stringify(event)}`);
//     return {
//         statusCode: 200,
//     //  Uncomment below to enable CORS requests
//     //  headers: {
//     //      "Access-Control-Allow-Origin": "*",
//     //      "Access-Control-Allow-Headers": "*"
//     //  },
//         body: JSON.stringify('Hello from Lambda!'),
//     };
// };


const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.DYNAMODB_TABLE_NAME;

exports.handler = async (event) => {

    if (!event.arguments || !event.arguments.input || typeof event.arguments.input !== 'object') {
        return { statusCode: 400, error: "Input is missing or incorrectly structured." };
    }

    // Extract submission details from the GraphQL input
    const { firstName, lastName } = event.arguments.input;

    console.log(firstName, lastName);
    console.log(firstName.toLowerCase());


    if (firstName.toLowerCase() === 'michael') {
        // Construct an error response compatible with GraphQL
        return { statusCode: 400, error: "First name 'Michael' is not allowed." };
    }

    console.log('PASSED');


    const item = {
        id: AWS.util.uuid.v4(),
        firstName,
        lastName,
        // Include timestamps if required by your application logic
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };

    console.log('TABLE BELOW');

    console.log(process.env.DYNAMODB_TABLE_NAME);

    console.log(item);

    const params = {
        TableName: tableName,
        Item: item,
    };

    try {
        await dynamoDB.put(params).promise();
        // Return the new item in a structure expected by the GraphQL mutation
        return { data: { createSubmission: item } };
    } catch (err) {
        console.error('DynamoDB Error:', err);
        return { statusCode: 500, error: 'Failed to add submission to the database.' };
    }
};

