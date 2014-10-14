var glob = require('glob');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index', {
      title: '首页',
      success: req.flash('success').toString(),
      error: req.flash('error').toString()
    });
  });

  app.post('/', function(req, res) {
    var sentence = req.body.sentence,
        color = req.body.color;
    if(sentence === '') {
      req.flash('error', '请输入弹幕哦_(:з」∠)_');
      return res.redirect('/');
    }
    else {
      req.flash('success', '发送成功咯~')
      return res.redirect('/');
    }
  });

  app.get('/wall', function(req, res) {

   glob('/Users/ET/desktop/commentwall-master/public/p_list/*.jpg', function(err, files) {
    var images = files.map(function(file) {
      return file.split('/')[6] + '/'+file.split('/')[7];
    });
    res.render('wall', {
      title: '弹幕页面',
      images: images
    });
   });

  });
}
