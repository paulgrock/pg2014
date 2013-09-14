var articles = [
  {
    id: 1,
    title: "First Article",
    author: "Paul",
    published_at: new Date(),
    content: "My First Article"
  },
  {
    id: 2,
    title: "Article 2",
    author: "Paul",
    published_at: new Date(),
    content: "The second article"
  }
]


/*
 * GET blog index page.
 */

exports.index = function(req, res){
  res.render('blog/index', {
    title: 'paulgrock.com | blog',
    articles: articles
  });
};

/*
 * GET post show page.
 */

exports.post = function(req, res){
  res.render('index', {
    title: 'paulgrock.com'
  });
};
