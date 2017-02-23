const UserProxy = require('../../proxy').User;
const Models    = require('../../models');
const UserModel = Models.User;

exports.loginByUserName = function (req, res, next) {
  const {name, pwd} = req.body;
  UserModel.findOne({name}, 'pwd', (err, doc) => {
    switch (true) {
      case !!err:
        console.log(err)
        break
      case !doc:
        res.send({state: 0, msg: '账号不存在'})
        break
      case doc.pwd === pwd:
        res.send({state: 1, msg: '登陆成功'})
        break
      case doc.pwd !== pwd:
        res.send({state: 2, msg: '密码错误'})
        break
      default :
        res.send({state: 3, msg: '未知错误'})
    }
  })
}
