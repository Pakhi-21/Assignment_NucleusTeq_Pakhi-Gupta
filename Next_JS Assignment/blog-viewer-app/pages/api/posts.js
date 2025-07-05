export default function handler(req, res) {
 
  const posts=[
  {
    "id": 1,
    "title": "The Indus Valley Civilization",
    "content": "One of the world's oldest urban civilizations, flourishing around 2500 BCE in modern-day Pakistan and northwest India. Known for advanced city planning, drainage systems, and trade networks."
  },
  {
    "id": 2,
    "title": "The Maurya Empire and Ashoka the Great",
    "content": "Founded in 321 BCE by Chandragupta Maurya, the Mauryan Empire reached its height under Emperor Ashoka, who later embraced Buddhism and spread its values across Asia."
  },
  {
    "id": 3,
    "title": "The Gupta Golden Age",
    "content": "Spanning the 4th to 6th centuries CE, the Gupta Empire is known for immense progress in science, mathematics, literature, and art, marking a classical period in Indian history."
  },
  {
    "id": 4,
    "title": "The Arrival of Islam in India",
    "content": "Islam entered India in the 7th century through trade and later through invasions, leading to the establishment of several Sultanates and eventually the Mughal Empire."
  },
  {
    "id": 5,
    "title": "The Mughal Empire",
    "content": "Founded in 1526 by Babur, the Mughals brought centralized administration, monumental architecture like the Taj Mahal, and a blend of Persian and Indian cultures."
  },
  {
    "id": 6,
    "title": "The Maratha Confederacy",
    "content": "Emerging in the 17th century under Shivaji Maharaj, the Marathas challenged Mughal dominance and established a strong regional presence across western and central India."
  }
  
];

 
  res.status(200).json(posts);
}