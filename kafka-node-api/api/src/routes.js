import { Router } from 'express';

const routes = Router();

routes.post('/certifications', async (req, res) => {
  const messageX = {
    user: { id: 1, name: 'Gab' },
    course: 'Kafka with Node.js',
    grade: 5,
  }

  await req.producer.send({
    topic: 'issue-certificate',
    messages: [
      { 
        value: JSON.stringify(messageX),
      },
    ]
  })

  return res.json({ ok: "true" });
});

export default routes;