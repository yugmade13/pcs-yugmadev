import { News } from '@/type';

const news: News[] = [
  {
    avatar: '/images/pic-1.jpg',
    user: 'Ana Riswati',
    date: Date.now().toLocaleString(),
    title: 'Ngoding yuk!',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore molestias, optio! Ab, architecto atque dignissimos dolores ex itaque porro quasi quibusdam ratione rem? Animi, dignissimos fuga inventore nemo nisi voluptatibus.'
  },
  {
    avatar: '/images/pic-2.jpg',
    user: 'Nirwana',
    date: Date.now().toLocaleString(),
    title: 'Kerja yuk!',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore molestias, optio! Ab, architecto atque dignissimos dolores ex itaque porro quasi quibusdam ratione rem? Animi, dignissimos fuga inventore nemo nisi voluptatibus.'
  },
  {
    avatar: '/images/pic-3.jpg',
    user: 'Purwanto Telo',
    date: Date.now().toLocaleString(),
    title: 'Leren sek lek!',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore molestias, optio! Ab, architecto atque dignissimos dolores ex itaque porro quasi quibusdam ratione rem? Animi, dignissimos fuga inventore nemo nisi voluptatibus.'
  }
];

export default news;