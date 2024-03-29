// document.addEventListener('DOMContentLoaded', function () {
//   const quoteElement = document.getElementById('quote');
//   const generateBtn = document.getElementById('generateBtn');
//   const saveBtn = document.getElementById('saveBtn');
//   const clearBtn = document.getElementById('clearBtn');
//   const quotesList = document.getElementById('quotesList');
//   const statusMessage = document.getElementById('statusMessage');
//   // Function to get a random Stoic quote
//   function getStoicQuote() {
//     const quotes = [
//       "The best revenge is to be unlike him who performed the injustice. - Marcus Aurelius",
//       "We suffer more often in imagination than in reality. - Seneca",
//       "The best revenge is to be unlike him who performed the injustice.",
// "We suffer more often in imagination than in reality.",
// "We should not, like sheep, follow the herd of creatures in front of us, making our way where others go, not where we ought to go.",
// "We are more often frightened than hurt; and we suffer more in imagination than in reality.",
// "Waste no more time arguing about what a good man should be. Be one.",
// "No man is free who is not master of himself.",
// "The key is to keep company only with people who uplift you, whose presence calls forth your best.",
// "He who fears death will never do anything worth of a man who is alive.",
// "If it is not right, do not do it; if it is not true, do not say it.",
// "You have power over your mind - not outside events. Realize this, and you will find strength.",
// "When you arise in the morning, think of what a precious privilege it is to be alive - to breathe, to think, to enjoy, to love.",
// "We are more often frightened than hurt; and we suffer more in imagination than in reality.",
// "Do not waste what remains of your life in speculating about your neighbors, unless with a view to some mutual benefit. To wonder what so-and-so is doing and why, or what he is saying, or thinking, or scheming -- in a word, anything that distracts you from fidelity to the ruler within you -- means a loss of opportunity for some other task.",
// "We suffer more often in imagination than in reality.",
// "You have power over your mind - not outside events. Realize this, and you will find strength.",
// "The best revenge is to be unlike him who performed the injustice.",
// "No man is free who is not master of himself.",
// "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
// "Man conquers the world by conquering himself.",
// "Nature does not demand belief; what it demands is sight.",
// "The object of life is not to be on the side of the majority, but to escape finding oneself in the ranks of the insane.",
// "The happiness of your life depends upon the quality of your thoughts.",
// "Other people's views and troubles can be contagious. Don't sabotage yourself by unwittingly adopting negative, unproductive attitudes through your associations with others.",
// "Whoever does wrong, wrongs himself; whoever does injustice, does it to himself, making himself evil.",
// "Your mind will take the shape of what you frequently hold in thought, for the human spirit is colored by such impressions.",
// "Your life is what your thoughts make it.",
// "Choose not to be harmed and you won't feel harmed. Don't feel harmed and you haven't been.",
// "It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.",
// "Stop wandering about! You aren't likely to read your own notebooks, or ancient histories, or the anthologies you've collected to enjoy in your old age. Get busy with life's purpose, toss aside empty hopes, get active in your own rescue—if you care for yourself at all—and do it while you can.",
// "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
// "Begin at once to live, and count each separate day as a separate life.",
// "Life is like a play: it's not the length, but the excellence of the acting that matters.",
// "The first rule is to keep an untroubled spirit. The second is to look things in the face and know them for what they are.",
// "What really frightens and dismays us is not external events themselves, but the way in which we think about them. It is not things that disturb us, but our interpretation of their significance.",
// "First learn the meaning of what you say, and then speak.",
// "A gem cannot be polished without friction, nor a man perfected without trials.",
// "Reject your sense of injury and the injury itself disappears.",
// "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.",
// "The best revenge is to be unlike him who performed the injustice.",
// "It is not that we have so little time but that we lose so much. ... The life we receive is not short but we make it so; we are not ill provided but use what we have wastefully.",
// "No person has the power to have everything they want, but it is in their power not to want what they don't have, and to cheerfully put to good use what they do have.",
// "Be tolerant with others and strict with yourself.",
// "Men are disturbed not by things that happen, but by their opinion of the things that happen.",
// "Man is affected not by events but by the view he takes of them.",
// "No thing great is created suddenly, any more than a bunch of grapes or a fig. If you tell me that you desire a fig. I answer you that there must be time. Let it first blossom, then bear fruit, then ripen.",
// "If you want to improve, be content to be thought foolish and stupid.",
// "Other people's views and troubles can be contagious. Don't sabotage yourself by unwittingly adopting negative, unproductive attitudes through your associations with others.",
// "We suffer more often in imagination than in reality.",
// "It's not what happens to you, but how you react to it that matters.",
// "Choose not to be harmed—and you won't feel harmed. Don't feel harmed—and you haven't been.",
// "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
// "Reject your sense of injury and the injury itself disappears.",
// "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
// "A gem cannot be polished without friction, nor a man perfected without trials.",
// "It is not that we have so little time but that we lose so much. ... The life we receive is not short but we make it so; we are not ill provided but use what we have wastefully.",
// "Men are disturbed not by things that happen, but by their opinion of the things that happen.",
// "Man is affected not by events but by the view he takes of them.",
// "No thing great is created suddenly, any more than a bunch of grapes or a fig. If you tell me that you desire a fig. I answer you that there must be time. Let it first blossom, then bear fruit, then ripen.",
// "Other people's views and troubles can be contagious. Don't sabotage yourself by unwittingly adopting negative, unproductive attitudes through your associations with others.",
// "We suffer more often in imagination than in reality.",
// "It's not what happens to you, but how you react to it that matters.",
// "Choose not to be harmed—and you won't feel harmed. Don't feel harmed—and you haven't been.",
// "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
// "Reject your sense of injury and the injury itself disappears.",
// "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
// "A gem cannot be polished without friction, nor a man perfected without trials.",
//       // Add more quotes
//     ];
//     return quotes[Math.floor(Math.random() * quotes.length)];
//   }
//   // Event listener for generating a new quote
//   generateBtn.addEventListener('click', function () {
//     const quote = getStoicQuote();
//     quoteElement.textContent = quote;
//   });
//   // Event listener for saving a quote
//   saveBtn.addEventListener('click', function () {
//     const quoteToSave = quoteElement.textContent;
//     let savedQuotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];
//     savedQuotes.push(quoteToSave);
//     localStorage.setItem('savedQuotes', JSON.stringify(savedQuotes));
//     statusMessage.textContent = 'Quote saved!';
//     setTimeout(() => {
//       statusMessage.textContent = '';
//     }, 3000);
//     displaySavedQuotes();
//   });
//   // Event listener for clearing all quotes
//   clearBtn.addEventListener('click', function () {
//     localStorage.removeItem('savedQuotes');
//     quotesList.innerHTML = '';
//   });
//   // Function to display saved quotes
//   function displaySavedQuotes() {
//     quotesList.innerHTML = '';
//     let savedQuotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];
//     savedQuotes.forEach(function (quote) {
//       const listItem = document.createElement('li');
//       listItem.textContent = quote;
//       quotesList.appendChild(listItem);
//     });
//   }
//   // Display saved quotes on popup load
//   displaySavedQuotes();
// });
document.addEventListener('DOMContentLoaded', function () {
  const quoteElement = document.getElementById('quote');
  const generateBtn = document.getElementById('generateBtn');
  const saveBtn = document.getElementById('saveBtn');
  const clearBtn = document.getElementById('clearBtn');
  const quotesList = document.getElementById('quotesList');
  const statusMessage = document.getElementById('statusMessage');

  // Function to get a random Stoic quote
  function getStoicQuote() {
    const quotes = [
      //  Certainly! Here are the Stoic quotes formatted as requested, with each quote and its author enclosed in a single set of quotation marks and separated by commas:
      "“The best revenge is to be unlike him who performed the injustice.” — Marcus Aurelius",
      "“We suffer more often in imagination than in reality.” — Seneca",
      "“We cannot choose our external circumstances, but we can always choose how we respond to them.” — Epictetus",
      "“The key is to keep company only with people who uplift you, whose presence calls forth your best.” — Epictetus",
      "“The whole future lies in uncertainty: live immediately.” — Seneca",
      "“If it is not right, do not do it. If it is not true, do not say it.” — Marcus Aurelius",
      "“Wealth consists not in having great possessions, but in having few wants.” — Epictetus",
      "“The happiness of your life depends upon the quality of your thoughts.” — Marcus Aurelius",
      "“Difficulty shows what men are.” — Epictetus",
      "“It is not the man who has too little, but the man who craves more, that is poor.” — Seneca",
      "“The only wealth which you will keep forever is the wealth you have given away.” — Marcus Aurelius",
      "“First say to yourself what you would be; and then do what you have to do.” — Epictetus",
      "“True happiness is... to enjoy the present, without anxious dependence upon the future.” — Seneca",
      "“The soul becomes dyed with the color of its thoughts.” — Marcus Aurelius",
      "“We should always be asking ourselves: 'Is this something that is, or is not, in my control?'” — Epictetus",
      "“Fate leads the willing and drags along the reluctant.” — Seneca",
      "“It is not the man who has too little that is poor, but the one who hankers after more.” — Seneca",
      "“No person has the power to have everything they want, but it is in their power not to want what they don't have, and to cheerfully put to good use what they do have.” — Seneca",
      "“The greatest obstacle to living is expectancy, which hangs upon tomorrow and loses today.” — Seneca",
      "“Your days are numbered. Use them to throw open the windows of your soul to the sun.” — Marcus Aurelius",
      "“Happiness and freedom begin with a clear understanding of one principle: some things are within our control, and some things are not.” — Epictetus",
      "“Man conquers the world by conquering himself.” — Zeno of Citium"
      // Add more quotes
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  // Event listener for generating a new quote
  generateBtn.addEventListener('click', function () {
    const quote = getStoicQuote();
    quoteElement.textContent = quote;
  });

  // Event listener for saving a quote
  saveBtn.addEventListener('click', function () {
    const quoteToSave = quoteElement.textContent;
    let savedQuotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];
    savedQuotes.push(quoteToSave);
    localStorage.setItem('savedQuotes', JSON.stringify(savedQuotes));

    statusMessage.textContent = 'Quote saved!';
    setTimeout(() => {
      statusMessage.textContent = '';
    }, 3000);

    displaySavedQuotes();
  });

  // Event listener for clearing all quotes
  clearBtn.addEventListener('click', function () {
    localStorage.removeItem('savedQuotes');
    quotesList.innerHTML = '';
  });

  // Function to display saved quotes
  function displaySavedQuotes() {
    quotesList.innerHTML = '';
    let savedQuotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];
    savedQuotes.forEach(function (quote) {
      const listItem = document.createElement('li');
      listItem.textContent = quote;
      quotesList.appendChild(listItem);
    });
  }

  // Display saved quotes on popup load
  displaySavedQuotes();
});
