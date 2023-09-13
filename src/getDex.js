import axios from 'axios';

async function getDexList(chainId) {
    try {
        const response = await axios.get(`https://open-api.openocean.finance/v3/${chainId}/dexList`);
        const dexList = response.data;

        console.log('DEX List:', dexList);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Example usage:
const chainId = 1;

getDexList(chainId);
