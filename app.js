// const puppeteer = require('puppeteer');
// const {LOGIN, PASSWORD} = require('./config/mySecrets');
//
// (async () => {
//     const browser = await puppeteer.launch({headless: false});
//     const page = await browser.newPage();
//     try {
//         await page.goto('https://github.com/login');
//
//         await page.type('#login_field', LOGIN);
//         await page.type('#password', 'PASSWORD');
//
//         await Promise.all([
//             page.waitForNavigation(),
//             page.click('.btn.btn-primary.btn-block')
//         ]);
//
//         await page.screenshot({path: 'screen.png'});
//
//         await browser.close();
//     } catch (e) {
//         console.log(e);
//     }
// })();

const puppeteer = require('puppeteer');
const {LOGIN, PASSWORD} = require('./config/mySecrets');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    try {
        await page.goto('http://localhost:5000');

        await page.click('#btnCreateFormVisible');

        await page.type('#userName', 'Volodymyr');
        await page.type('#userSurname', 'Zelenskiy');
        await page.type('#userEmail', 'prezik@gmail.com');
        await page.type('#userPhone', '77-777-77-77');

        await page.click('#btnCreateUser');

        await page.screenshot({path: 'screen.png'});

        await browser.close();
    } catch (e) {
        console.log(e);
    }
})();
