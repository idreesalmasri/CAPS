'use strict';
const eventEmitter = require('../lib/events')
let order = {
    store: '1-206-flowers',
    orderId: '99223554-ec37-4689-a932-0e5f97a6ce76',
    customer: 'Charlotte Trantow',
    address: 'irbid'
}
describe('Test events', () => {
    let consoleSpy;

    beforeAll(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });
    afterAll(() =>{
        consoleSpy.mockRestore();
    })
    
    it('pickup event ', async () => {
        eventEmitter.emit('pickup', order);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });
    it('delieverd event ', async () => {
        eventEmitter.emit('delieverd', order);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });
    it('in transit event ', async () => {
        eventEmitter.emit('in-transit', order);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });
})
