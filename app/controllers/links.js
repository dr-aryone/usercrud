var Link = require('mongoose').model('Link');

exports.getAllLinks = function (req, res, next) {
  Link
    .find({})
    .populate('submittedBy')
    .exec(function (err, links) {
      if (err) return next(err);
      return res.json(links);
    });
};

exports.createLink = function (req, res, next) {
  var link = new Link(req.body);

  link.save(function (err) {
    if (err) return next(err);

    Link.populate(link, { path: 'submittedBy', model: 'User' }, function (err, link) {
      return res.json(link);
    });
  });
};

exports.deleteLink = function (req, res, next) {
  Link.remove({ _id: req.link._id }, function (err) {
    if (err) return next(err);
    return res.status(200).json({ message: 'Link has been deleted' });
  });
};

exports.linkParam = function (req, res, next, id) {
  var query = Link.findById(id);

  query.exec(function (err, link) {
    if (err) return next(err);
    if (!link) { return next(new Error('Can\'t find link')); }

    req.link = link;

    return next();
  });
};
