import Kafka from 'node-rdkafka';
import eventType from '../events/eventType.js';

const stream = Kafka.Producer.createWriteStream({
  'metadata.broker.list': 'localhost:9092'
},  {}, { topic: 'test' });

const getRandomAnimal = () => {
  const animals = ['DOG', 'CAT'];
  return animals[Math.floor(Math.random() * animals.length)];
};

const getRandomNoise = (animal) => {
  if (animal === 'CAT') {
    const noises = ['purr', 'meow', 'mew'];
    return noises[Math.floor(Math.random() * noises.length)];
  } else {
    const noises = ['woof', 'bark!', 'grrr'];
    return noises[Math.floor(Math.random() * noises.length)];
  }
};

const queueMessage = () => {
  const category = getRandomAnimal();
  const noise = getRandomNoise(category);
  const event = { category, noise };
  const success = stream.write(eventType.toBuffer(event));

  if (success) {
    console.log('message wrote successfully to stream');
  } else {
    console.log('something went wrong....');
  }
};

setInterval(() => {
  queueMessage();
}, 3000);
