exports.get404 = (req, res) => {
  return res.render('404', {
    title: '404 Not Found',
  });
};
