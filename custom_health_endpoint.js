module.exports = [
  {
    path: '/healthz',
    method: 'GET',
    handler: (req, res) => res.status(200).send('OK'),
    config: { auth: false }
  }
];
