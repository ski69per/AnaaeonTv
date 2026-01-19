// Barbie AnaaeonTV - Netflix Style ✨

const movies = [
  
  // ============================================
  // PRINCESS MOVIES
  // ============================================
  {
    id: '1cEnQjwUFCncHwqjxbZsgs7WhmFhEBcxL', // Rapunzel
    title: 'Barbie as Rapunzel',
    poster: 'images/rapunzel.jpeg',
    category: 'Princess Movies',
    description: 'Barbie stars as Rapunzel in this magical tale of a girl with long, beautiful hair locked in a tower.',
    year: 2002
  },
  {
    id: '1YbfIwFi35ZeBnOBTm4P4lMOyvnmxtTMX', // Princess and the Pauper
    title: 'Barbie as the Princess and the Pauper',
    poster: 'images/princess-pauper.jpeg',
    category: 'Princess Movies',
    description: 'A princess and a pauper who look identical switch places and discover true friendship.',
    year: 2004
  },
  {
    id: '199iQelgc6o1Zn4_5XtCmSDLKnyUzYuc5', // Island Princess
    title: 'Barbie as the Island Princess',
    poster: 'images/island-princess.jpeg',
    category: 'Princess Movies',
    description: 'Barbie plays a girl shipwrecked on an island who befriends animals and discovers her true identity.',
    year: 2007
  },
  {
    id: '16ndq5lzwA2Y7TVUCAp3n-WLkJtzaBUUv', // Secret Door
    title: 'Barbie and the Secret Door',
    poster: 'images/secret-door.jpeg',
    category: 'Princess Movies',
    description: 'Princess Alexa discovers a secret door in her garden that leads to a magical land.',
    year: 2014
  },

  // ============================================
  // FAIRYTOPIA SERIES
  // ============================================
  {
    id: '1BH3SWFTUgPafHEZ2DCccXikCKQYYEWdE', // Fairytopia
    title: 'Barbie Fairytopia',
    poster: 'images/fairytopia.jpeg',
    category: 'Fairytopia',
    description: 'Elina, a wingless fairy, goes on an adventure to save Fairytopia from an evil enchantress.',
    year: 2005
  },
  {
    id: '1WHmi8NBXEufPzU4RFfVfwVoK000ZyO-6', // Mermaidia Part 1
    title: 'Barbie Fairytopia: Mermaidia (Part 1)',
    poster: 'images/mermaidia.jpeg',
    category: 'Fairytopia',
    description: 'Elina travels underwater to Mermaidia to save her friend and the mermaids.',
    year: 2006
  },
  {
    id: '1JoUHQ3QxGDdmtQup5FgWpV_N00eclYkC', // Mermaidia Part 2
    title: 'Barbie Fairytopia: Mermaidia (Part 2)',
    poster: 'images/mermaidia.jpeg',
    category: 'Fairytopia',
    description: 'Elina travels underwater to Mermaidia to save her friend and the mermaids. (Continuation)',
    year: 2006
  },
  {
    id: '13cZmBEQi9DWuEsWY68Wa69Q3HdoLlKSA', // Magic of the Rainbow
    title: 'Barbie Fairytopia: Magic of the Rainbow',
    poster: 'images/magic-rainbow.jpeg',
    category: 'Fairytopia',
    description: 'Elina learns to create the First Rainbow of Spring while facing new challenges.',
    year: 2007
  },

  // ============================================
  // MAGICAL ADVENTURES
  // ============================================
  {
    id: '1IEX9JOHNVNjPhWIqBFsBjr-3DPp9p_Xy', // Magic of Pegasus
    title: 'Barbie and the Magic of Pegasus',
    poster: 'images/pegasus.jpeg',
    category: 'Magical Adventures',
    description: 'Princess Annika must defeat an evil wizard with the help of a magnificent winged horse.',
    year: 2005
  },
  {
    id: '1Djwx5P-0Ow2U_aSJviHiItASy7se8n_T', // Diamond Castle
    title: 'Barbie and the Diamond Castle',
    poster: 'images/diamond-castle.jpeg',
    category: 'Magical Adventures',
    description: 'Two best friends discover a magical mirror and embark on a journey to save the Diamond Castle.',
    year: 2008
  },
  {
    id: '12cW1ADnjfoHWT8HhNbAGzoI0U89Yg-rr', // Fairy Secret
    title: 'Barbie: A Fairy Secret',
    poster: 'images/fairy-secret.jpeg',
    category: 'Magical Adventures',
    description: 'Barbie discovers that her friends are secretly fairies and must help rescue her boyfriend.',
    year: 2011
  },
  {
    id: '1Dd0eytbqsEFDAUkpM2sBHHHCgxzTkDBa', // Dolphin Magic
    title: 'Barbie: Dolphin Magic',
    poster: 'images/dolphin-magic.jpeg',
    category: 'Magical Adventures',
    description: 'Barbie and her sisters discover mysterious dolphins with magical powers.',
    year: 2017
  },

  // ============================================
  // ADVENTURE STORIES
  // ============================================
  {
    id: '1v_zMQ0MkbwKUCEYYD4dBWKNBaS5o4ScP', // Three Musketeers Part 1
    title: 'Barbie and the Three Musketeers (Part 1)',
    poster: 'images/three-musketeers.jpeg',
    category: 'Adventure',
    description: 'Barbie dreams of becoming a Musketeer and joins three other girls on an adventure in Paris.',
    year: 2009
  },
  {
    id: '1iYMyO8oMp9b3zoudj4HFw9IZp9DmeXoP', // Three Musketeers Part 2
    title: 'Barbie and the Three Musketeers (Part 2)',
    poster: 'images/three-musketeers.jpeg',
    category: 'Adventure',
    description: 'Barbie dreams of becoming a Musketeer and joins three other girls on an adventure in Paris. (Continuation)',
    year: 2009
  },
  {
    id: '1wC35RqQ7KzC3ul4q8mY-h5Q4fKwxF-9O', // Barbie and Her Sisters in a Pony Tale
    title: 'Barbie and Her Sisters in a Pony Tale',
    poster: 'images/pony-tale.jpeg',
    category: 'Adventure',
    description: 'Barbie and her sisters spend their vacation at a horse academy in the Swiss Alps.',
    year: 2013
  },
  {
    id: '1VKyEzCfOl_CDrXZNCm4WqNo30sU44y1q', // Barbie and Stacie to the Rescue
    title: 'Barbie and Stacie to the Rescue',
    poster: 'images/stacie-rescue.jpeg',
    category: 'Adventure',
    description: 'Stacie gets the spotlight in this exciting rescue adventure with her sister Barbie.',
    year: 2024
  },

  // ============================================
  // FASHION & MODERN STORIES
  // ============================================
  {
    id: '1GRXsbIV4zi-2MJIBZMB8WDzNsV9DzOUN', // Fashion Fairytale Part 1
    title: 'Barbie: A Fashion Fairytale (Part 1)',
    poster: 'images/fashion-fairytale.jpeg',
    category: 'Fashion & Modern',
    description: 'Barbie travels to Paris to help her Aunt save her fashion house with the help of magical fairies.',
    year: 2010
  },
  {
    id: '1jXUGWDmyjzYCjpnx6NaF47Tibw9ZcvNp', // Fashion Fairytale Part 2
    title: 'Barbie: A Fashion Fairytale (Part 2)',
    poster: 'images/fashion-fairytale.jpeg',
    category: 'Fashion & Modern',
    description: 'Barbie travels to Paris to help her Aunt save her fashion house with the help of magical fairies. (Continuation)',
    year: 2010
  },
  {
    id: '1HhYzenWHPsrPB4o7tbD-gXcDkUTtEukb', // Big City Big Dreams
    title: 'Barbie: Big City Big Dreams',
    poster: 'images/big-city-dreams.jpeg',
    category: 'Fashion & Modern',
    description: 'Barbie travels to New York City to attend a summer performing arts program.',
    year: 2021
  },

  // ============================================
  // HOLIDAY & FAMILY
  // ============================================
  {
    id: '11IszPjEL5_vXnVxDb5houB2m2uvWkITR', // Perfect Christmas
    title: 'Barbie: A Perfect Christmas',
    poster: 'images/perfect-christmas.jpeg',
    category: 'Holiday & Family',
    description: 'Barbie and her sisters have their Christmas vacation plans changed unexpectedly.',
    year: 2011
  },
  {
    id: '1myme8XrPB3700_mERb8JkS4rSi3ENdK8', // Chelsea Lost Birthday
    title: 'Barbie: Chelsea and the Lost Birthday',
    poster: 'images/chelsea-birthday.jpeg',
    category: 'Holiday & Family',
    description: 'Chelsea travels to a magical jungle to find her missing birthday.',
    year: 2021
  }
];

// LocalStorage helpers
const storage = {
  getProgress: (id) => {
    const data = JSON.parse(localStorage.getItem('watchProgress') || '{}');
    return data[id] || 0;
  },
  setProgress: (id, progress) => {
    const data = JSON.parse(localStorage.getItem('watchProgress') || '{}');
    data[id] = progress;
    localStorage.setItem('watchProgress', JSON.stringify(data));
  },
  getFavorites: () => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  },
  toggleFavorite: (id) => {
    const favorites = storage.getFavorites();
    const index = favorites.indexOf(id);
    if (index > -1) {
      favorites.splice(index, 1);
    } else {
      favorites.push(id);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    return index === -1; // return true if added
  },
  isFavorite: (id) => {
    return storage.getFavorites().includes(id);
  },
  getTheme: () => {
    return localStorage.getItem('theme') || 'light';
  },
  setTheme: (theme) => {
    localStorage.setItem('theme', theme);
  }
};

const searchInput = document.getElementById('headerSearch');
const movieRows = document.getElementById('movieRows');
const modal = document.getElementById('modal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const playerIframe = document.getElementById('playerIframe');
const modalTitle = document.getElementById('modalTitle');
const heroBanner = document.getElementById('heroBanner');
const heroTitle = document.getElementById('heroTitle');
const heroDescription = document.getElementById('heroDescription');
const heroPlay = document.getElementById('heroPlay');
const heroInfo = document.getElementById('heroInfo');

let allMovies = movies.slice();
let filteredMovies = movies.slice();
let currentMovie = null;
let progressInterval = null;
let autoplayTimeout = null;

function drivePreviewUrl(fileId){
  return `https://drive.google.com/file/d/${encodeURIComponent(fileId)}/preview`;
}

function createCard(movie){
  const el = document.createElement('div');
  el.className = 'card';
  el.setAttribute('data-file-id', movie.id);
  
  const progress = storage.getProgress(movie.id);
  const isFav = storage.isFavorite(movie.id);

  el.innerHTML = `
    <img loading="lazy" class="poster" src="${movie.poster}" alt="${movie.title} poster" />
    ${progress > 0 ? `<div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>` : ''}
    <button class="favorite-btn ${isFav ? 'active' : ''}" aria-label="Add to favorites" data-movie-id="${movie.id}">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    </button>
    <div class="card-hover-details">
      <div class="hover-title">${escapeHtml(movie.title)}</div>
      <div class="hover-description">${escapeHtml(movie.description || 'No description')}</div>
      <button class="hover-play-btn" data-movie-id="${movie.id}">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        Play
      </button>
    </div>
    <div class="card-body">
      <div class="title">${escapeHtml(movie.title)}</div>
    </div>
  `;
  
  // Favorite button handler
  const favBtn = el.querySelector('.favorite-btn');
  favBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isNowFav = storage.toggleFavorite(movie.id);
    favBtn.classList.toggle('active', isNowFav);
    const svg = favBtn.querySelector('svg');
    svg.setAttribute('fill', isNowFav ? 'currentColor' : 'none');
    renderRows(filteredMovies);
  });
  
  // Play button in hover
  const playBtn = el.querySelector('.hover-play-btn');
  playBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    openModal(movie);
  });
  
  // Click card to play
  el.addEventListener('click', () => openModal(movie));
  
  return el;
}

function groupByCategory(movieList){
  const categories = {};
  movieList.forEach(movie => {
    const cat = movie.category || 'Uncategorized';
    if(!categories[cat]) categories[cat] = [];
    categories[cat].push(movie);
  });
  return categories;
}

function renderRows(movieList){
  const skeleton = document.getElementById('loadingSkeleton');
  
  // Show skeleton briefly
  if(skeleton){
    skeleton.style.display = 'block';
  }
  
  // Simulate loading delay for smooth transition
  setTimeout(() => {
    movieRows.innerHTML = '';
    
    if(!movieList.length){
      movieRows.innerHTML = `<div style="color:#9d7a8f;padding:40px;text-align:center;font-size:1.1rem">✨ No fabulous movies found ✨</div>`;
      return;
    }

    // Continue Watching Row
    const continueWatching = movieList.filter(m => {
      const progress = storage.getProgress(m.id);
      return progress > 0 && progress < 95;
    });
    
    if(continueWatching.length > 0){
      createRow('Continue Watching', continueWatching);
    }
    
    // My List Row
    const favorites = storage.getFavorites();
    const myList = movieList.filter(m => favorites.includes(m.id));
    
    if(myList.length > 0){
      createRow('My List', myList);
    }
    
    // Category Rows
    const grouped = groupByCategory(movieList);
    Object.keys(grouped).forEach(category => {
      createRow(category, grouped[category]);
    });
    
    // Hide skeleton after content is rendered
    if(skeleton){
      skeleton.style.display = 'none';
    }
  }, 300);
}

function createRow(title, movies){
  const row = document.createElement('div');
  row.className = 'movie-row';
  
  const titleEl = document.createElement('h2');
  titleEl.className = 'row-title';
  titleEl.textContent = title;
  
  const slider = document.createElement('div');
  slider.className = 'row-slider';
  
  movies.forEach(movie => {
    slider.appendChild(createCard(movie));
  });
  
  row.appendChild(titleEl);
  row.appendChild(slider);
  movieRows.appendChild(row);
}

function setupHero(){
  if(!movies.length) return;
  
  const featured = movies[0];
  heroTitle.textContent = featured.title;
  heroDescription.textContent = `Watch ${featured.title} and more fabulous movies`;
  heroBanner.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('${featured.poster}')`;
  
  heroPlay.addEventListener('click', () => openModal(featured));
  heroInfo.addEventListener('click', () => openModal(featured));
}

function openModal(movie){
  currentMovie = movie;
  modal.setAttribute('aria-hidden', 'false');
  modalTitle.textContent = movie.title;
  
  // Add movie description and controls
  const modalDesc = document.getElementById('modalDescription');
  const autoplayToggle = document.getElementById('autoplayToggle');
  if(modalDesc) modalDesc.textContent = movie.description || '';
  
  playerIframe.src = drivePreviewUrl(movie.id);
  document.body.classList.add('modal-open');
  modalClose.focus();
  
  // Start progress tracking (simulate - every 10 seconds add 10%)
  let currentProgress = storage.getProgress(movie.id);
  progressInterval = setInterval(() => {
    currentProgress += 10;
    if(currentProgress >= 100) {
      currentProgress = 100;
      clearInterval(progressInterval);
      
      // Autoplay next movie if enabled
      if(autoplayToggle && autoplayToggle.checked){
        scheduleAutoplay(movie);
      }
    }
    storage.setProgress(movie.id, currentProgress);
  }, 10000);
}

function scheduleAutoplay(currentMovie){
  // Find next movie in same category
  const sameCat = allMovies.filter(m => m.category === currentMovie.category);
  const currentIndex = sameCat.findIndex(m => m.id === currentMovie.id);
  const nextMovie = sameCat[currentIndex + 1] || sameCat[0];
  
  if(nextMovie && nextMovie.id !== currentMovie.id){
    // Show "Playing next in 5 seconds" message
    const autoplayMsg = document.getElementById('autoplayMessage');
    if(autoplayMsg){
      autoplayMsg.style.display = 'block';
      autoplayMsg.querySelector('.next-title').textContent = nextMovie.title;
    }
    
    autoplayTimeout = setTimeout(() => {
      closeModal();
      setTimeout(() => openModal(nextMovie), 500);
    }, 5000);
  }
}

function closeModal(){
  modal.setAttribute('aria-hidden', 'true');
  playerIframe.src = '';
  document.body.classList.remove('modal-open');
  currentMovie = null;
  
  // Clear intervals
  if(progressInterval) clearInterval(progressInterval);
  if(autoplayTimeout) clearTimeout(autoplayTimeout);
  
  // Hide autoplay message
  const autoplayMsg = document.getElementById('autoplayMessage');
  if(autoplayMsg) autoplayMsg.style.display = 'none';
  
  // Refresh rows to update progress bars
  renderRows(filteredMovies);
}

function escapeHtml(text){
  return String(text).replace(/[&<>"']/g, function(s){
    return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"})[s];
  });
}

function filterMovies(q){
  const term = q.trim().toLowerCase();
  if(!term) return allMovies.slice();
  return allMovies.filter(m => 
    m.title.toLowerCase().includes(term) || 
    m.category.toLowerCase().includes(term) ||
    (m.description && m.description.toLowerCase().includes(term))
  );
}

searchInput.addEventListener('input', (e) => {
  const query = e.target.value;
  filteredMovies = filterMovies(query);
  renderRows(filteredMovies);
  
  // Show suggestions
  showSearchSuggestions(query);
});

// Search suggestions
const suggestionsBox = document.getElementById('searchSuggestions');

function showSearchSuggestions(query) {
  const term = query.trim().toLowerCase();
  
  if (!term || term.length < 2) {
    suggestionsBox.classList.remove('show');
    return;
  }
  
  const matches = allMovies.filter(m => 
    m.title.toLowerCase().includes(term)
  ).slice(0, 5); // Show max 5 suggestions
  
  if (matches.length === 0) {
    suggestionsBox.classList.remove('show');
    return;
  }
  
  suggestionsBox.innerHTML = matches.map(movie => `
    <div class="suggestion-item" data-movie-id="${movie.id}">
      <img src="${movie.poster}" alt="${movie.title}" class="suggestion-poster" />
      <div class="suggestion-text">
        <div class="suggestion-title">${escapeHtml(movie.title)}</div>
        <div class="suggestion-category">${escapeHtml(movie.category)}</div>
      </div>
    </div>
  `).join('');
  
  suggestionsBox.classList.add('show');
  
  // Add click handlers to suggestions
  suggestionsBox.querySelectorAll('.suggestion-item').forEach(item => {
    item.addEventListener('click', () => {
      const movieId = item.getAttribute('data-movie-id');
      const movie = allMovies.find(m => m.id === movieId);
      if (movie) {
        openModal(movie);
        suggestionsBox.classList.remove('show');
        searchInput.value = '';
      }
    });
  });
}

// Close suggestions when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.header-search')) {
    suggestionsBox.classList.remove('show');
  }
});

// Category navigation links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const category = e.target.textContent;
    
    // Filter movies by category
    filteredMovies = allMovies.filter(m => m.category === category);
    
    // Scroll to movie rows
    const movieRows = document.getElementById('movieRows');
    movieRows.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Render filtered movies
    renderRows(filteredMovies);
    
    // Clear search input
    searchInput.value = '';
    
    // Add active state to clicked link
    navLinks.forEach(l => l.classList.remove('active'));
    e.target.classList.add('active');
  });
});

modalBackdrop.addEventListener('click', closeModal);
modalClose.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal();
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const themeTooltip = document.getElementById('themeTooltip');

if(themeToggle){
  const currentTheme = storage.getTheme();
  document.body.setAttribute('data-theme', currentTheme);
  themeToggle.checked = currentTheme === 'dark';
  
  themeToggle.addEventListener('change', (e) => {
    const theme = e.target.checked ? 'dark' : 'light';
    document.body.setAttribute('data-theme', theme);
    storage.setTheme(theme);
    
    // Hide tooltip once user interacts
    if(themeTooltip){
      themeTooltip.classList.remove('show');
      localStorage.setItem('themeTooltipSeen', 'true');
    }
  });
  
  // Show tooltip for first-time visitors
  const tooltipSeen = localStorage.getItem('themeTooltipSeen');
  if(!tooltipSeen && themeTooltip){
    setTimeout(() => {
      themeTooltip.classList.add('show');
      
      // Auto-hide after 5 seconds
      setTimeout(() => {
        themeTooltip.classList.remove('show');
        localStorage.setItem('themeTooltipSeen', 'true');
      }, 5000);
    }, 1000); // Show after 1 second delay
  }
}

// Cancel autoplay button
const cancelAutoplay = document.getElementById('cancelAutoplay');
if(cancelAutoplay){
  cancelAutoplay.addEventListener('click', () => {
    if(autoplayTimeout) clearTimeout(autoplayTimeout);
    const autoplayMsg = document.getElementById('autoplayMessage');
    if(autoplayMsg) autoplayMsg.style.display = 'none';
  });
}

// Initialize
setupHero();
renderRows(allMovies);
