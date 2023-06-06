// Example game data
const games = [
    { 
      title: 'Counter-Strike: Global Offensive',
      description: 'Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).',
      steamLink: 'https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/'
    },
    { 
      title: 'Poppy Playtime',
      description: 'You must stay alive in this horror/puzzle adventure. Try to survive the vengeful toys waiting for you in the abandoned toy factory. Use your GrabPack to hack electrical circuits or nab anything from afar. Explore the mysterious facility... and dont get caught.',
      steamLink: 'https://store.steampowered.com/app/1721470/Poppy_Playtime/'
    },
    // Add more game objects as needed
  ];
  
  // Function to generate game content dynamically
  function generateGameContent(gameData) {
    const contentSection = document.getElementById('content');
    contentSection.innerHTML = '';
  
    gameData.forEach((game) => {
      const gameElement = document.createElement('div');
      gameElement.classList.add('game');
      gameElement.innerHTML = `
        <h2>${game.title}</h2>
        <p>${game.description}</p>
        <a href="${game.steamLink}" target="_blank">Download for Free</a>
      `;
      contentSection.appendChild(gameElement);
    });
  }
  
  // Function to perform search
  function searchGames() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredGames = games.filter((game) => {
      const title = game.title.toLowerCase();
      const description = game.description.toLowerCase();
      return title.includes(searchTerm) || description.includes(searchTerm);
    });
  
    generateGameContent(filteredGames);
  }
  
  // Example usage: generate initial game content
  generateGameContent(games);
  