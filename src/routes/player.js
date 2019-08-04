import { Router } from 'express';

const router = Router();

/*router.get('/', async (req, res) => {
  const players = await req.context.models.player.findAll();
  return res.send(players);
});*/
router.get('/rusher', async (req, res) => {
  const players = await req.context.models.Rushing.findAll();
  return res.send(players);
});
router.get('/passer', async (req, res) => {
  const players = await req.context.models.Passing.findAll();
  return res.send(players);
});
router.get('/receiver', async (req, res) => {
  const players = await req.context.models.Receiving.findAll();
  return res.send(players);
});
router.get('/rusher/:playerName', async (req, res) => {
  let player = req.params.playerName;
  const theRusher = await req.context.models.Rushing.findOne(
    {
    where: {
      player : player
    }}
  );
  
  return res.send(theRusher);
});
router.get('/passer/:playerName', async (req, res) => {
  let player = req.params.playerName;
  const thePasser = await req.context.models.Passing.findOne(
    {
    where: {
      player : player
    }}
  );
  
  return res.send(thePasser);
});
router.get('/receiver/:playerName', async (req, res) => {
  let player = req.params.playerName;
  const theRec = await req.context.models.Receiving.findOne(
    {
    where: {
      player : player
    }}
  );
  
  return res.send(theRec);
});

export default router;
