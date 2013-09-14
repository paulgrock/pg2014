

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
    title: 'paulgrock.com',
    helpers: {
      navLink: function (val) {
        console.log(val);
        return val === 'home'?  '': val;
      }
    }
  });
};
