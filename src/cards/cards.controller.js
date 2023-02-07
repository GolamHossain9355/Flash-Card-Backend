const service = require("./cards.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
  const data = await service.list();
  res.status(200).json({ data });
}

async function create(req, res, next) {
  const data = await service.create(req.body.data);
  res.status(200).json({ data });
}

async function read(req, res, next) {
  const { cardId } = req.params;
  const data = await service.read(cardId);
  res.status(200).json({ data });
}

async function update(req, res, next) {
  const { cardId } = req.params;
  const data = await service.update(req.body.data, cardId);
  res.status(200).json({ data });
}

async function destroy(req, res, next) {
  const { cardId } = req.params;
  await service.delete(cardId);
  res.sendStatus(204);
}

module.exports = {
  list: asyncErrorBoundary(list),
  create: asyncErrorBoundary(create),
  read: asyncErrorBoundary(read),
  update: asyncErrorBoundary(update),
  delete: asyncErrorBoundary(destroy),
};
