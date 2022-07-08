/*
 * /auth/invalidateToken
 * /auth/keepAlive
 *
 * Tests
 *
 */
pm.test("Status code is 204", () => {
    pm.expect(pm.response.code).to.eql(204);

    pm.test("Set and clear environment variables", () => {
        pm.environment.set('username', '');
        pm.environment.set('password', '');
        pm.environment.set('token', '');
    });
});

pm.test("Status code is 401", () => {
    pm.expect(pm.response.code).to.eql(401);

    pm.test("Set and clear environment variables", () => {
        pm.environment.set('username', '');
        pm.environment.set('password', '');
        pm.environment.set('token', '');
    });
});
