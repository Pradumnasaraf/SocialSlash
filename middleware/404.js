const notFound = function (req, res) {
    res.status(404).end('Not Found');
};

module.exports = notFound