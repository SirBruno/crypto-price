const axios = require('axios');

module.exports = {
    do(req, res) {

        setTimeout(() => {
            axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
                params: {
                    start: 1,
                    limit: 21,
                    convert: 'USD'
                },
                headers: {
                    'X-CMC_PRO_API_KEY': 'd48cb6f8-b956-4022-ab5a-1234b33beb50'
                }
            }).then(response => {
                res.send(response.data);
            });
        }, 3000);

    }
}