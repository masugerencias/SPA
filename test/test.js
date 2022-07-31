const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");


async function example() {
    
    var nombre = "Davinia";
    var apellido = "de la Rosa"
    var email = "davinia@gmail.com"
    var contrasena = "1234"
    var username = "daviniaTB"

    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/registro");

    await driver.findElement(By.xpath('//*[@id="nombre"]')).sendKeys(nombre, Key.RETURN);

    await driver.findElement(By.xpath('//*[@id="apellido"]')).sendKeys(apellido, Key.RETURN);

    await driver.findElement(By.xpath('//*[@id="email"]')).sendKeys(email, Key.RETURN);

    await driver.findElement(By.xpath('//*[@id="contrasena"]')).sendKeys(contrasena, Key.RETURN);
    
    await driver.findElement(By.xpath('//*[@id="username"]')).sendKeys(username, Key.RETURN);




    await driver.findElement(By.xpath('//*[@id="boton"]')).click();

    //Cerramos el navegador
    //await driver.quit();
}

example();