/*
 * /auth/tokens
 *
 * Tests
 *
 */

pm.test("Status code is 200", () => {
    pm.expect(pm.response.code).to.eql(200);

    pm.test("The response has all properties", () => {
        const jsonData = pm.response.json();
        pm.expect(jsonData).to.be.an('object');
        pm.expect(jsonData).to.have.all.keys('token', 'expires');
        pm.expect(jsonData.token).to.be.a('string');
        pm.expect(jsonData.expires).to.be.a('number');
    });

    pm.test("Set and clear environment variables", () => {
        pm.environment.set('username', '');
        pm.environment.set('password', '');
        pm.environment.set('token', pm.response.json().token);
    });
});


