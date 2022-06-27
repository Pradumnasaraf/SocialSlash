const notFound = function (req, res) {
    res.status(404).end('Endpoint Not Found!!!');
};

module.exports = notFound