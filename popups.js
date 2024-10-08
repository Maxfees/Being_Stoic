document.addEventListener('DOMContentLoaded', function () {
  const quoteElement = document.getElementById('quote');
  const generateBtn = document.getElementById('generateBtn');
  const saveBtn = document.getElementById('saveBtn');
  const clearBtn = document.getElementById('clearBtn');
  const quotesList = document.getElementById('quotesList');
  const statusMessage = document.getElementById('statusMessage');

  function getStoicQuote() {
    const proxyUrl = 'https://api.allorigins.win/get?url=';
    const targetUrl = encodeURIComponent('https://stoic.tekloon.net/stoic-quote');
    const cacheBuster = `&cacheBuster=${new Date().getTime()}`;

    fetch(proxyUrl + targetUrl + cacheBuster)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const parsedData = JSON.parse(data.contents);
        console.log('Fetched quote:', parsedData); // Log the fetched data
        quoteElement.textContent = `${parsedData.data.quote} - ${parsedData.data.author}`;
      })
      .catch(error => {
        console.error('Error:', error);
        statusMessage.textContent = 'Failed to fetch quote.';
        setTimeout(() => statusMessage.textContent = '', 2000);
      });
  }

  // Event listener for generating a new quote
  generateBtn.addEventListener('click', function () {
    console.log('Generate button clicked'); // Log button click
    getStoicQuote();
  });

  // Event listener for saving a quote
  saveBtn.addEventListener('click', function () {
    let savedQuotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];
    let currentQuote = quoteElement.textContent;

    if (!savedQuotes.includes(currentQuote) && currentQuote) {
      savedQuotes.push(currentQuote);
      localStorage.setItem('savedQuotes', JSON.stringify(savedQuotes));
      displaySavedQuotes();
      statusMessage.textContent = 'Quote saved.';
    } else {
      statusMessage.textContent = 'Quote already saved or empty.';
    }
    setTimeout(() => statusMessage.textContent = '', 2000);
  });

  // Event listener for clearing all quotes
  clearBtn.addEventListener('click', function () {
    localStorage.removeItem('savedQuotes');
    quotesList.innerHTML = '';
    statusMessage.textContent = 'All quotes cleared.';
    setTimeout(() => statusMessage.textContent = '', 2000);
  });

  // Function to display saved quotes
  function displaySavedQuotes() {
    quotesList.innerHTML = '';
    let savedQuotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];
    savedQuotes.forEach(function (quote, index) {
      const listItem = document.createElement('li');
      listItem.textContent = quote;

      const clearButton = document.createElement('button');
      clearButton.textContent = 'Clear';
      clearButton.className = 'clear-button';
      clearButton.style.opacity = '0';

      listItem.addEventListener('mouseover', function () {
        clearButton.style.opacity = '1';
      });

      listItem.addEventListener('mouseout', function () {
        clearButton.style.opacity = '0';
      });

      clearButton.style.color = 'black';
      clearButton.style.backgroundColor = 'white';
      clearButton.style.border = '1px solid black';
      clearButton.style.padding = '5px';

      clearButton.addEventListener('click', function () {
        savedQuotes.splice(index, 1);
        localStorage.setItem('savedQuotes', JSON.stringify(savedQuotes));
        displaySavedQuotes();
      });

      listItem.appendChild(clearButton);
      quotesList.appendChild(listItem);
    });
  }

  // Display saved quotes on popup load
  displaySavedQuotes();
});
// document.addEventListener('DOMContentLoaded', function () {
//   const quoteElement = document.getElementById('quote');
//   const generateBtn = document.getElementById('generateBtn');
//   const saveBtn = document.getElementById('saveBtn');
//   const clearBtn = document.getElementById('clearBtn');
//   const quotesList = document.getElementById('quotesList');
//   const statusMessage = document.getElementById('statusMessage');

//   function getStoicQuote() {
//     fetch('https://stoic.tekloon.net/stoic-quote')
//       .then(response => response.json())
//       .then(data => {
//         // console.log(data.quote);
//         quoteElement.textContent = `${data.quote} - ${data.author}`;
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }

//   // Event listener for generating a new quote
//   generateBtn.addEventListener('click', function () {
//     getStoicQuote();
//   });
// // Event listener for saving a quote
// saveBtn.addEventListener('click', function () {
//     let savedQuotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];
//     let currentQuote = quoteElement.textContent;
    
//     if (!savedQuotes.includes(currentQuote)) {
//       savedQuotes.push(currentQuote);
//       localStorage.setItem('savedQuotes', JSON.stringify(savedQuotes));
//       displaySavedQuotes();
//     } else {
//       statusMessage.textContent = 'Quote already saved.';
//       setTimeout(() => statusMessage.textContent = '', 2000); // Clear message after 2 seconds
//     }
//   });


// // Event listener for clearing all quotes
//   clearBtn.addEventListener('click', function () {
//     localStorage.removeItem('savedQuotes');
//     quotesList.innerHTML = '';
//   });  

//   // Function to display saved quotes
//   function displaySavedQuotes() {
//     quotesList.innerHTML = '';
//     let savedQuotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];
//     savedQuotes.forEach(function (quote, index) {
//       const listItem = document.createElement('li');
//       listItem.textContent = quote;

//       const clearButton = document.createElement('button');
//       clearButton.textContent = 'Clear';
//       clearButton.className = 'clear-button';
//     //   clearButton.style.backgroundImage = 'url("cleras.png")';
//     //   clearButton.style.backgroundSize = 'cover';
//       clearButton.style.opacity = '0';
      
//       listItem.addEventListener('mouseover', function () {
//         clearButton.style.opacity = '1';
//       });
      
//       listItem.addEventListener('mouseout', function () {
//         clearButton.style.opacity = '0';
//       });        
//       clearButton.style.color = 'black';
//       clearButton.style.backgroundColor = 'white';
//       clearButton.style.border = '1px solid black';
//       clearButton.style.padding = '5px';
//     //   clearButton.style.borderRadius = '20%'; // Makes the button round
//     //   clearButton.style.width = '20px'; // Sets the width of the button
//     //   clearButton.style.height = '20px'; // Sets the height of the button
//       clearButton.addEventListener('click', function () {
//         savedQuotes.splice(index, 1);
//         localStorage.setItem('savedQuotes', JSON.stringify(savedQuotes));
//         displaySavedQuotes();
//       });

//       listItem.appendChild(clearButton);
//       quotesList.appendChild(listItem);
//     });
//   }

//   // Display saved quotes on popup load
//   displaySavedQuotes();
// });
