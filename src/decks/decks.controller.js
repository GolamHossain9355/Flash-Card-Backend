const service = require("./decks.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
  const { _embed } = req.query;
  if (_embed === "cards") {
    const data = await service.listWithCardsEmbedded();
    return res.status(200).json({ data });
  }
  const data = await service.list();
  res.status(200).json({ data });
}

async function create(req, res, next) {
  const data = await service.create(req.body.data);
  return res.status(201).json({ data });
}

async function read(req, res, next) {
  const { deckId } = req.params;
  const data = await service.read(deckId);
  res.status(200).json({ data });
}

async function update(req, res, next) {
  const { deckId } = req.params;
  const data = await service.update(req.body.data, deckId)
  res.status(200).json({ data })
}

async function destroy(req, res, next) {
  await service.delete(req.params.deckId);
  res.sendStatus(204);
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  create: [asyncErrorBoundary(create)],
  read: [asyncErrorBoundary(read)],
  update: [asyncErrorBoundary(update)],
  delete: [asyncErrorBoundary(destroy)],
};
