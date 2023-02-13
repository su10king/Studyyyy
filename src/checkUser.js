public class checkUser {
    const dataCheckToken = require('../config/keys/dataCheckToken.json');

const auth = {
        checkUser(req, res, next) {
            // console.log('checkUser');
            // read the token from cookie
            if ((env === 'ote' || env === 'local') && req.query.tokenPass) {
                req.token = {
                        exp: 1637202992,
                        user_id: 1,
                        username: 'admin@imqa.io',
                        email: 'admin@imqa.io',
                        nickname: '관리자',
                        is_superuser: 0,
                        user_tz: 9,
                        iat: 1636598192,
                        iss: 'mpm.imqa.io',
                        sub: 'mpm',
      };
                return next();
            }

    const token = req.cookies[credentials.cookie.session];
            // token does not exist

            if (!token) {
      const error = new Error('not logged in');
                error.status = 401;
                return next(error);
            }
}
