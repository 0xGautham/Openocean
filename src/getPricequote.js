import axios from 'axios';
import chalk from 'chalk';

// Define the API request data
let data = '';

// Configure the API request
let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://open-api.openocean.finance/v3/1/quote?inTokenAddress=0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2&outTokenAddress=0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48&amount=1&gasPrice=25&slippage=1',
    headers: {
        'Cookie': '__cflb=0H28v9KzzEdj11imvL2rdb9wNdY43F5YoZp9emmxxUV'
    },
    data: data
};

// Make the API request and handle the response
axios.request(config)
    .then((response) => {
        console.log(chalk.green('API Response:'));
        console.log(JSON.stringify(response.data, null, 2));
    })
    .catch((error) => {
        console.error(chalk.red('Error:'));
        console.error(error);
    });
