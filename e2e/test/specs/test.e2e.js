const {browser ,expect, $ } = require('@wdio/globals')

describe('Flutter Application Test', () => {
    it('it should increment', async () => {
        const button =  await browser.flutterByValueKey$('increment');
        await button.click();
        const text = await browser.flutterByValueKey$('counter');
        console.log('XXXXXXXXXXXXXXXX', await text.getText());
        if(await text.getText() === '1'){
            console.log('Test Passed');
        }
    })
})

