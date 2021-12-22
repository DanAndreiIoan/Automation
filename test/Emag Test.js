describe('eMag.ro', () => {
    it('should load home page', async () => {
        await browser.url('http://emag.ro');
         browser.pause(3000)
         browser.maximizeWindow()
         browser.pause(3000)
       
    });

    it ('should open resigilate page', async () => {
        const resigilateButton = await $('[title = "Resigilate"]');
      
        await resigilateButton.click();
      
        await expect(browser).toHaveTitle('Produse resigilate - eMAG.ro');
    })


})