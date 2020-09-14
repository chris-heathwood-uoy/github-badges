const { yodaFunction } = require('./yoda.js');

describe('yoda', () => {
    it('should format operations appropriately', async () => {
        const text = await yodaFunction(true);

        expect(text).toEqual('there is no try');
    });
});
