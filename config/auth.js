module.exports = {
    secret: process.env.AUTH_SECRET || "abcd",
    expires: process.env.AUTH_EXPIRES || "1h",
    saltRount: process.env.AUTH_SALTROUND || 10,
    secretRefresh: "1234",
    expiresRefresh: "8h"
}