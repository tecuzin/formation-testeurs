export default class DataProvider {

    constructor(environment) {

        if (environment == "test") {
            this.adresses = require('./selectors.json')
        }
    }

    connect_db() {
        throw new Error('To be implemented later!');
    };

}