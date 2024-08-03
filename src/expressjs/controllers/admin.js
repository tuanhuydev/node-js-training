exports.index = async (req, res) => {
  try {
    return res.render('admin/index', { title: 'Admin', path: '/admin' });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
};
