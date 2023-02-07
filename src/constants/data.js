import images from './images';

const wines = [
  {
    title: 'Chapel Shiraz',
    price: '$56',
    tags: 'DE | Bottle',
  },
  {
    title: 'Catena Dio Malbee',
    price: '$59',
    tags: 'ES | Bottle',
  },
  {
    title: 'Vieille Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pinot Noir',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'House Pinot Grigio',
    price: '$11',
    tags: 'DE | Glass',
  },
];

const meals = [
  {
    title: 'Geraucherte Forelle',
    price: '$23',
    tags: 'Smoked trout | Horseradish cream | Rye bread | Haus salat'
  },
  {
    title: "Branntweinschnitzel",
    price: '$23',
    tags: 'Breaded cutlet | Brandy-cream sauce | Local chicken or pork',
  },
  {
    title: 'Schweinshaxe',
    price: '$36',
    tags: 'Crispy pork shank | Pork jus | Spatzle | Sauerkraut',
  },
  {
    title: 'Sauerbraten',
    price: '$25',
    tags: 'Marinated beef pot roast | Ginger snap gravy | Red cabbage | Potato dumpling',
  },
  {
    title: 'Gebratner Lachs',
    price: '$26',
    tags: 'Seared salmon in butter and white wine | Caper sauce | Dill',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Michelin Restaurant Guide,2023',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Kölner Stadt-Anzeiger, 2023',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'James Beard, 2023',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'James Beard, 2023',
  },
];

export default { wines, meals, awards };
