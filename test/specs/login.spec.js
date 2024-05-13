import { $, driver, expect } from '@wdio/globals'

describe('Fitur checkout barang', () => {
    it('user membuka halaman login', async () => {
        await $('~View menu').click()
        await driver.pause(500)

        //scroll ke bawah
        await driver
            .action('pointer')
            .move({y: 850, x: 250})
            .down()
            .pause(100)
            .move({y:500, x:250, duration:200})
            .up()
            .perform()

        // await $('android=new UiSelector().text("Log In")').click()
        await $('//*[@text="Log In"]').click()

        const loginPageTitle = await $('id=com.saucelabs.mydemoapp.android:id/loginTV')
        await expect(loginPageTitle).toHaveText('Login')
    })

    it('user login dengan menggunakan username dan password valid', async () => {
        await $('id=com.saucelabs.mydemoapp.android:id/nameET').setValue('bod@example.com')
        await $('id=com.saucelabs.mydemoapp.android:id/passwordET').setValue('10203040')
        await $('id=com.saucelabs.mydemoapp.android:id/loginBtn').click()

        const productPageTitle = await $('id=com.saucelabs.mydemoapp.android:id/productTV')
        await expect(productPageTitle).toHaveText('Products')

    })

    it('user membuka halaman katalog', async () => {
        await $('~View menu').click()
        await driver.pause(500)

        // await $('android=new UiSelector().text("Log In")').click()
        await $('//*[@text="Catalog"]').click()

        const productPageTitle = await $('id=com.saucelabs.mydemoapp.android:id/productTV')
        await expect(productPageTitle).toHaveText('Products')
    })

    it('user klik produk', async () => {

        // await $('//*[@text="Sauce Labs Backpack"]').click()
        await $('~Sauce Labs Backpack').click()

        //scroll ke bawah
        await driver
            .action('pointer')
            .move({y: 829, x: 545})
            .down()
            .pause(100)
            .move({y:317, x:537, duration:200})
            .up()
            .perform()

        await $('//android.widget.Button[@content-desc="Tap to add product to cart"]').click()


        const pricePageTitle = await $('id=com.saucelabs.mydemoapp.android:id/priceTV')
        const noPageTitle = await $('id=com.saucelabs.mydemoapp.android:id/noTV')

        await expect(pricePageTitle).toHaveText('$ 29.99')
        await expect(noPageTitle).toHaveText('1')

        const cartPageTitle = await $('id=com.saucelabs.mydemoapp.android:id/cartRL')
        await expect(cartPageTitle).toHaveText('')
    })

    it('user klik keranjang', async () => {
        await $('~View cart').click()

        await $('//*[@text="Proceed To Checkout"]').click()

        // const productPageTitle = await $('id=com.saucelabs.mydemoapp.android:id/productTV')
        // const itemsPageTitle = await $('id=com.saucelabs.mydemoapp.android:id/itemsTV')
        // const pricePageTitle = await $('id=com.saucelabs.mydemoapp.android:id/totalPriceTV')

        // await expect(productPageTitle).toHaveText('My Cart')
        // await expect(itemsPageTitle).toHaveText('1 Items')
        // await expect(pricePageTitle).toHaveText('$ 29.99')

        const proceedPageTitle = await $('id=com.saucelabs.mydemoapp.android:id/loginTV')
        await expect(proceedPageTitle).toHaveText('Login')
    })

    it('user login dengan email dan password valid', async () => {
        await $('id=com.saucelabs.mydemoapp.android:id/nameET').setValue('bod@example.com')
        await $('id=com.saucelabs.mydemoapp.android:id/passwordET').setValue('10203040')

        await $('~Tap to login with given credentials').click()

        const checkoutPageTitle = await $('id=com.saucelabs.mydemoapp.android:id/checkoutTitleTV')
        await expect(checkoutPageTitle).toHaveText('Checkout')
    })

    it('user mengisi data diri valid', async () => {
        
        //scroll ke bawah
        await driver
            .action('pointer')
            .move({y: 856, x: 343})
            .down()
            .pause(100)
            .move({y:398, x:856, duration:200})
            .up()
            .perform()

        await $('id=com.saucelabs.mydemoapp.android:id/fullNameET').setValue('andin')
        await $('id=com.saucelabs.mydemoapp.android:id/address1ET').setValue('buah batu')
        await $('id=com.saucelabs.mydemoapp.android:id/cityET').setValue('bandung')
        await $('id=com.saucelabs.mydemoapp.android:id/stateET').setValue('jawa barat')
        await $('id=com.saucelabs.mydemoapp.android:id/zipET').setValue('40244')
        await $('id=com.saucelabs.mydemoapp.android:id/countryET').setValue('indonesia')

        await $('~Saves user info for checkout').click()

        const paymentPageTitle = await $('id=com.saucelabs.mydemoapp.android:id/enterPaymentMethodTV')
        await expect(paymentPageTitle).toHaveText('Enter a payment method')

    })

    it('user mengisi data credit card valid', async () => {

        await $('id=com.saucelabs.mydemoapp.android:id/nameET').setValue('andin')
        await $('id=com.saucelabs.mydemoapp.android:id/cardNumberET').setValue('12345678910')
        await $('id=com.saucelabs.mydemoapp.android:id/expirationDateET').setValue('03/25')
        await $('id=com.saucelabs.mydemoapp.android:id/securityCodeET').setValue('123')

        await driver
            .action('pointer')
            .move({y: 875, x: 383})
            .down()
            .pause(100)
            .move({y:358, x:380, duration:200})
            .up()
            .perform()

        await $('//android.widget.Button[@content-desc="Saves payment info and launches screen to review checkout data"]').click()

        const reviewOrderPageTitle = await $('id=com.saucelabs.mydemoapp.android:id/enterShippingAddressTV')
        await expect(reviewOrderPageTitle).toHaveText('Review your order')

    })

    it('user mereview order item', async () => {

        await driver
            .action('pointer')
            .move({y: 891, x: 356})
            .down()
            .pause(100)
            .move({y:288, x:356, duration:200})
            .up()
            .perform()

        const namePageTitle = await $('id=com.saucelabs.mydemoapp.android:id/fullNameTV')
        const addressPageTitle = await $('id=com.saucelabs.mydemoapp.android:id/addressTV')
        const cityPageTitle = await $('id=com.saucelabs.mydemoapp.android:id/cityTV')
        const countryPageTitle = await $('id=com.saucelabs.mydemoapp.android:id/countryTV')

        const itemNumberPageTitle = await $('id=com.saucelabs.mydemoapp.android:id/itemNumberTV')
        const amountPageTitle = await $('id=com.saucelabs.mydemoapp.android:id/totalAmountTV')

        await expect(namePageTitle).toHaveText('andin')
        await expect(addressPageTitle).toHaveText('buah batu')
        await expect(cityPageTitle).toHaveText('bandung, jawa barat')
        await expect(countryPageTitle).toHaveText('indonesia, 40244')

        await expect(itemNumberPageTitle).toHaveText('1 Items')
        await expect(amountPageTitle).toHaveText('$ 35.98')

        await $('~Completes the process of checkout').click()

        const completeCheckoutPageTitle = await $('id=com.saucelabs.mydemoapp.android:id/completeTV')
        await expect(completeCheckoutPageTitle).toHaveText('Checkout Complete')
        
    })

    it('user berhasil checkout barang dan kembali ke halaman katalog', async () => {
        
        const completeCheckoutPageTitle = await $('id=com.saucelabs.mydemoapp.android:id/completeTV')

        await expect(completeCheckoutPageTitle).toHaveText('Checkout Complete')

        await $('//android.widget.Button[@content-desc="Tap to open catalog"]').click()
        
        const productPageTitle = await $('id=com.saucelabs.mydemoapp.android:id/productTV')
        await expect(productPageTitle).toHaveText('Products')
    })

})