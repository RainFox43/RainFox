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
    
        {
      title: 'Apex Legends™',
      description: 'Apex Legends is the award-winning, free-to-play Hero Shooter from Respawn Entertainment. Master an ever-growing roster of legendary characters with powerful abilities, and experience strategic squad play and innovative gameplay in the next evolution of Hero Shooter and Battle Royale',
      steamLink: 'https://store.steampowered.com/app/1172470/Apex_Legends/'
    },

    {
      title: 'PUBG: BATTLEGROUNDS',
      description: 'Play PUBG: BATTLEGROUNDS for free. Land on strategic locations, loot weapons and supplies, and survive to become the last team standing across various, diverse Battlegrounds. Squad up and join the Battlegrounds for the original Battle Royale experience that only PUBG: BATTLEGROUNDS',
      steamLink: 'https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/'
    },

    {
      title: 'Destiny 2',
      description: 'Destiny 2 is an action MMO with a single evolving world that you and your friends can join anytime, anywhere, absolutely free.',
      steamLink: 'https://store.steampowered.com/app/1085660/Destiny_2/'
    },

    {
      title: 'Dota 2',
      description: 'Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. And no matter if its their 10th hour of play or 1,000th, theres always something new to discover. With regular updates that ensure a constant evolution of gameplay, features, and heroes, Dota 2 has taken on a life of its own.',
      steamLink: 'https://store.steampowered.com/app/570/Dota_2/'
    },

    {
      title: 'Warframe',
      description: 'Awaken as an unstoppable warrior and battle alongside your friends in this story-driven free-to-play online action game',
      steamLink: 'https://store.steampowered.com/app/230410/Warframe/'
    },

    {
      title: 'STAR WARS™: The Old Republic™',
      description: 'STAR WARS™: The Old Republic™ is a free-to-play MMORPG that puts you at the center of your own story-driven saga. Play as a Jedi, Sith, Bounty Hunter, or one of many other iconic STAR WARS roles in the galaxy far, far away over three thousand years before the classic films.',
      steamLink: 'https://store.steampowered.com/app/1286830/STAR_WARS_The_Old_Republic/'
    },

    {
      title: 'MARVEL SNAP',
      description: 'Assemble your MARVEL dream team from a super roster of your favorite heroes and villains. MARVEL SNAP is fast-paced, adrenaline-pumping, strategic card battler that puts you in control of it all - make your move.',
      steamLink: 'https://store.steampowered.com/app/1997040/MARVEL_SNAP/'
    },

    {
      title: 'Team Fortress 2',
      description: 'Nine distinct classes provide a broad range of tactical abilities and personalities. Constantly updated with new game modes, maps, equipment and, most importantly, hats!',
      steamLink: 'https://store.steampowered.com/app/440/Team_Fortress_2/'
    },

    {
      title: 'The Sims™ 4',
      description: 'Play with life and discover the possibilities. Unleash your imagination and create a world of Sims that’s wholly unique. Explore and customize every detail from Sims to homes–and much more.',
      steamLink: 'https://store.steampowered.com/app/1222670/The_Sims_4/'
    },

    {
      title: 'Minecraft',
      description: 'There are not so many good Minecraft launchers nowadays, and yet they exist TLauncher being one of them.',
      steamLink: 'https://tlauncher.org/en/'
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
  
