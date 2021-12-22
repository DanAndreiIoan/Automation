describe ('libris.ro', async () => {

    it ('Should have the correct title', async () => {
     
     browser.url('https://www.libris.ro/');

    await expect(browser).toHaveTitle('Librarie online - Carti, Jocuri, Muzica');
})
    it ('Account page should load', async () => {

    await browser.url ('https://www.libris.ro/');


    browser.maximizeWindow()
    
    const accountButton = await $('//body/section[1]/section[4]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[7]/div[1]/div[3]/div[1]/a[1]/img[1]');

    accountButton.click();

    browser.url('https://www.libris.ro/');

    await expect(browser).toHaveUrlContaining('https://www.libris.ro/auth.jsp');


    })
    it ('Insert incorrect user name and password', async() =>{

        const userNameField = await $('#date-inregistrare-user');

        const passwordField = await $('[name="password"]');

        await userNameField.setValue('andrei267@yahoo.com');
       
        await passwordField.setValue('Libris');
       
        const loginAccount = await $('/html/body/main/div/section[1]/div/section[2]/div/section[2]/form/div[3]');

        loginAccount.click();

        await browser.pause(5000)
        
        await expect(browser).toHaveUrlContaining('https://www.libris.ro/auth/login.jsp?error=Utilizator+sau+parola+incorecte!');
    })
    it ('Insert correct user name and password', async() =>{

        const accountButton2 =await $('//header/div[3]/div[1]/div[3]/ul[1]/li[1]/a[1]/img[1]')

        await accountButton2.click();

        const userNameField = await $('#date-inregistrare-user');

        const passwordField = await $('[name="password"]');

        await userNameField.setValue('andrei2673@yahoo.com');
       
        await passwordField.setValue('Libris2');
       
        const loginAccount = await $('/html/body/main/div/section[1]/div/section[2]/div/section[2]/form/div[3]');

        loginAccount.click();

        await browser.pause(3000)
        
        await expect(browser).toHaveUrlContaining('https://www.libris.ro');
    })

    it ('Looking for a certain book and add to wishlist', async ()=>{

        const searchField = await $('//*[@id="autoComplete"]');

        const searchButton = await $('//*[@id="autoCompleteButton"]');

        await searchField.setValue('Ganduri catre sine insusi');
      
        await  searchButton.click();

        await browser.pause(3000);

        const addToWishlist = await $('/html/body/main/div/section[3]/div/div[2]/section[2]/div/ul/li[1]/div/div[3]/div/a/img')

        await addToWishlist.click();
       
        await browser.pause(3000);
       })

       it ('View my wishlist', async()=>{

        const wishlist = await $ ('.header-nav-wishlist-item a');
  
        await wishlist.click();
  
        await browser.pause(3000);
    })

       it ('Right product in wishlist', async ()=>{

        const product = await $ ('/html/body/main/section[2]/div/section[2]/div/section/section/ul/li/div/a/img');

        await product.click();
        
        await browser.pause(3000);

        await expect(browser).toHaveTitle('Ganduri catre sine insusi - Marcus Aurelius - Libris');


        
       })
})

