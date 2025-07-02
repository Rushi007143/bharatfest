import type { Festival } from '@/types';

export const festivals: Festival[] = [
  {
    id: 'diwali',
    name: 'Diwali',
    description: 'The festival of lights, celebrating the victory of light over darkness.',
    longDescription: 'Diwali, the festival of lights, is one of India\'s most significant festivals. It symbolizes the spiritual "victory of light over darkness, good over evil, and knowledge over ignorance." Homes are decorated with lamps and rangoli, and families gather for feasts and to exchange gifts.',
    region: 'North',
    date: new Date(new Date().getFullYear(), 10, 1), // November
    image: 'https://placehold.co/600x400',
    dataAiHint: 'lights festival',
    events: [
      { name: 'Lakshmi Puja', time: '7:00 PM', description: 'A prayer to the goddess of wealth, Lakshmi.' },
      { name: 'Community Fireworks', time: '9:00 PM', description: 'A spectacular display of fireworks.' },
      { name: 'Grand Feast', time: '8:00 PM', description: 'A traditional Diwali feast with sweets and savory dishes.' },
    ],
  },
  {
    id: 'holi',
    name: 'Holi',
    description: 'The festival of colors, celebrating the arrival of spring and love.',
    longDescription: 'Holi is a vibrant Hindu festival that celebrates the arrival of spring, the end of winter, and the blossoming of love. It is best known for the playful throwing of colored powders and water, which fills the streets with a kaleidoscope of colors.',
    region: 'North',
    date: new Date(new Date().getFullYear(), 2, 25), // March
    image: 'https://placehold.co/600x400',
    dataAiHint: 'color festival',
    events: [
      { name: 'Holika Dahan', time: 'Eve of Holi', description: 'A bonfire ritual symbolizing the victory of good over evil.' },
      { name: 'Rangwali Holi', time: 'Morning', description: 'The main event with colors, water guns, and music.' },
      { name: 'Holi Procession', time: 'Afternoon', description: 'A festive parade with music and dancing.' },
    ],
  },
  {
    id: 'durga-puja',
    name: 'Durga Puja',
    description: 'A ten-day festival honoring the goddess Durga.',
    longDescription: 'Durga Puja is a major Hindu festival originating in the Indian subcontinent which reveres and pays homage to the Hindu goddess Durga for her victory over Mahishasur. It is particularly popular in West Bengal.',
    region: 'East',
    date: new Date(new Date().getFullYear(), 9, 9), // October
    image: 'https://placehold.co/600x400',
    dataAiHint: 'goddess worship',
    events: [
      { name: 'Pandal Hopping', time: 'All Day', description: 'Visiting ornate temporary structures called pandals.' },
      { name: 'Cultural Performances', time: 'Evening', description: 'Traditional music and dance performances.' },
      { name: 'Immersion Ceremony', time: 'Final Day', description: 'The immersion of Durga idols in the river.' },
    ],
  },
  {
    id: 'pongal',
    name: 'Pongal',
    description: 'A harvest festival celebrated in Southern India, primarily by Tamils.',
    longDescription: 'Pongal is a multi-day harvest festival of South India, particularly in the Tamil community. It is observed at the start of the month Tai according to the Tamil solar calendar, and this is typically about January 14. It is dedicated to the Hindu sun god, the Surya, and corresponds to Makar Sankranti.',
    region: 'South',
    date: new Date(new Date().getFullYear(), 0, 14), // January
    image: 'https://placehold.co/600x400',
    dataAiHint: 'harvest festival',
    events: [
      { name: 'Bhogi', time: 'Day 1', description: 'Discarding old belongings and celebrating new beginnings.' },
      { name: 'Surya Pongal', time: 'Day 2', description: 'Offering of pongal dish to the Sun God.' },
      { name: 'Mattu Pongal', time: 'Day 3', description: 'Honoring cattle for their work in the fields.' },
    ],
  },
  {
    id: 'onam',
    name: 'Onam',
    description: 'A harvest festival of Kerala that marks the homecoming of King Mahabali.',
    longDescription: 'Onam is an annual harvest festival celebrated in the Indian state of Kerala. A major annual event for Keralites, it is the official festival of the state and includes a spectrum of cultural events.',
    region: 'South',
    date: new Date(new Date().getFullYear(), 7, 15), // August
    image: 'https://placehold.co/600x400',
    dataAiHint: 'flower carpet',
    events: [
      { name: 'Pookalam Contest', time: 'Morning', description: 'Competition of creating intricate flower carpets.' },
      { name: 'Onam Sadhya', time: 'Lunchtime', description: 'A grand feast served on a banana leaf.' },
      { name: 'Vallamkali Boat Race', time: 'Afternoon', description: 'The famous snake boat race.' },
    ],
  },
  {
    id: 'ganesh-chaturthi',
    name: 'Ganesh Chaturthi',
    description: 'Festival celebrating the birth of the elephant-headed god Ganesha.',
    longDescription: 'Ganesh Chaturthi is a Hindu festival celebrating the arrival of Ganesh to earth from Kailash Parvat with his mother Goddess Parvati/Gauri. The festival is marked with the installation of Ganesh clay idols privately in homes, or publicly on elaborate pandals.',
    region: 'West',
    date: new Date(new Date().getFullYear(), 8, 7), // September
    image: 'https://placehold.co/600x400',
    dataAiHint: 'elephant god',
    events: [
      { name: 'Pranapratishhtha', time: 'Morning', description: 'The installation of the Ganesh idol.' },
      { name: 'Daily Aarti', time: 'Morning & Evening', description: 'Daily prayers and offerings to Lord Ganesha.' },
      { name: 'Visarjan', time: 'Final Day', description: 'Immersion of the idol in a body of water.' },
    ],
  },
];
