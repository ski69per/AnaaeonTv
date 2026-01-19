/**
 * BARBIE ANAEONTV - MOVIES DATA TEMPLATE
 * 
 * INSTRUCTIONS:
 * 1. Open your Google Drive folder: https://drive.google.com/drive/folders/1O10LWVWsvIgJEpBaFO-r9YhW6314xzOE
 * 2. For each movie below, click on it to open the video player
 * 3. Right-click the video and select "Open in new tab" OR click the "Pop out" button
 * 4. Copy the FILE_ID from the URL (the part between /d/ and /view or /preview)
 *    Example: https://drive.google.com/file/d/1a2B3c4D5e6F7g8H9/view
 *    Copy only: 1a2B3c4D5e6F7g8H9
 * 5. Paste the FILE_ID in the quotes below
 * 6. Add descriptions if you want (optional)
 * 7. Once done, copy this entire movies array and replace the one in js/script.js
 */

const movies = [
  
  // ============================================
  // PRINCESS MOVIES
  // ============================================
  {
    id: '1cEnQjwUFCncHwqjxbZsgs7WhmFhEBcxL', // Rapunzel
    title: 'Barbie as Rapunzel',
    poster: 'images/rapunzel.jpg', // Add poster image later or use placeholder
    category: 'Princess Movies',
    description: 'Barbie stars as Rapunzel in this magical tale of a girl with long, beautiful hair locked in a tower.',
    year: 2002
  },
  {
    id: '1YbfIwFi35ZeBnOBTm4P4lMOyvnmxtTMX', // Princess and the Pauper
    title: 'Barbie as the Princess and the Pauper',
    poster: 'images/princess-pauper.jpg',
    category: 'Princess Movies',
    description: 'A princess and a pauper who look identical switch places and discover true friendship.',
    year: 2004
  },
  {
    id: '199iQelgc6o1Zn4_5XtCmSDLKnyUzYuc5', // Island Princess
    title: 'Barbie as the Island Princess',
    poster: 'images/island-princess.jpg',
    category: 'Princess Movies',
    description: 'Barbie plays a girl shipwrecked on an island who befriends animals and discovers her true identity.',
    year: 2007
  },
  {
    id: '16ndq5lzwA2Y7TVUCAp3n-WLkJtzaBUUv', // Secret Door
    title: 'Barbie and the Secret Door',
    poster: 'images/secret-door.jpg',
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
    poster: 'images/fairytopia.jpg',
    category: 'Fairytopia',
    description: 'Elina, a wingless fairy, goes on an adventure to save Fairytopia from an evil enchantress.',
    year: 2005
  },
  {
    id: '1WHmi8NBXEufPzU4RFfVfwVoK000ZyO-6', // Mermaidia Part 1
    title: 'Barbie Fairytopia: Mermaidia (Part 1)',
    poster: 'images/mermaidia.jpg',
    category: 'Fairytopia',
    description: 'Elina travels underwater to Mermaidia to save her friend and the mermaids.',
    year: 2006
  },
  {
    id: '1JoUHQ3QxGDdmtQup5FgWpV_N00eclYkC', // Mermaidia Part 2
    title: 'Barbie Fairytopia: Mermaidia (Part 2)',
    poster: 'images/mermaidia.jpg',
    category: 'Fairytopia',
    description: 'Elina travels underwater to Mermaidia to save her friend and the mermaids. (Continuation)',
    year: 2006
  },
  {
    id: '13cZmBEQi9DWuEsWY68Wa69Q3HdoLlKSA', // Magic of the Rainbow
    title: 'Barbie Fairytopia: Magic of the Rainbow',
    poster: 'images/magic-rainbow.jpg',
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
    poster: 'images/pegasus.jpg',
    category: 'Magical Adventures',
    description: 'Princess Annika must defeat an evil wizard with the help of a magnificent winged horse.',
    year: 2005
  },
  {
    id: '1Djwx5P-0Ow2U_aSJviHiItASy7se8n_T', // Diamond Castle
    title: 'Barbie and the Diamond Castle',
    poster: 'images/diamond-castle.jpg',
    category: 'Magical Adventures',
    description: 'Two best friends discover a magical mirror and embark on a journey to save the Diamond Castle.',
    year: 2008
  },
  {
    id: '12cW1ADnjfoHWT8HhNbAGzoI0U89Yg-rr', // Fairy Secret
    title: 'Barbie: A Fairy Secret',
    poster: 'images/fairy-secret.jpg',
    category: 'Magical Adventures',
    description: 'Barbie discovers that her friends are secretly fairies and must help rescue her boyfriend.',
    year: 2011
  },
  {
    id: '1Dd0eytbqsEFDAUkpM2sBHHHCgxzTkDBa', // Dolphin Magic
    title: 'Barbie: Dolphin Magic',
    poster: 'images/dolphin-magic.jpg',
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
    poster: 'images/three-musketeers.jpg',
    category: 'Adventure',
    description: 'Barbie dreams of becoming a Musketeer and joins three other girls on an adventure in Paris.',
    year: 2009
  },
  {
    id: '1iYMyO8oMp9b3zoudj4HFw9IZp9DmeXoP', // Three Musketeers Part 2
    title: 'Barbie and the Three Musketeers (Part 2)',
    poster: 'images/three-musketeers.jpg',
    category: 'Adventure',
    description: 'Barbie dreams of becoming a Musketeer and joins three other girls on an adventure in Paris. (Continuation)',
    year: 2009
  },
  {
    id: '1M7nXwbdaq3DxkiYFPfoK6dzDUYdOC7vP', // Barbie and Her Sisters in a Pony Tale
    title: 'Barbie and Her Sisters in a Pony Tale',
    poster: 'images/pony-tale.jpg',
    category: 'Adventure',
    description: 'Barbie and her sisters spend their vacation at a horse academy in the Swiss Alps.',
    year: 2013
  },
  {
    id: '1VKyEzCfOl_CDrXZNCm4WqNo30sU44y1q', // Barbie and Stacie to the Rescue
    title: 'Barbie and Stacie to the Rescue',
    poster: 'images/stacie-rescue.jpg',
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
    poster: 'images/fashion-fairytale.jpg',
    category: 'Fashion & Modern',
    description: 'Barbie travels to Paris to help her Aunt save her fashion house with the help of magical fairies.',
    year: 2010
  },
  {
    id: '1jXUGWDmyjzYCjpnx6NaF47Tibw9ZcvNp', // Fashion Fairytale Part 2
    title: 'Barbie: A Fashion Fairytale (Part 2)',
    poster: 'images/fashion-fairytale.jpg',
    category: 'Fashion & Modern',
    description: 'Barbie travels to Paris to help her Aunt save her fashion house with the help of magical fairies. (Continuation)',
    year: 2010
  },
  {
    id: '1HhYzenWHPsrPB4o7tbD-gXcDkUTtEukb', // Big City Big Dreams
    title: 'Barbie: Big City Big Dreams',
    poster: 'images/big-city-dreams.jpg',
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
    poster: 'images/perfect-christmas.jpg',
    category: 'Holiday & Family',
    description: 'Barbie and her sisters have their Christmas vacation plans changed unexpectedly.',
    year: 2011
  },
  {
    id: '1myme8XrPB3700_mERb8JkS4rSi3ENdK8', // Chelsea Lost Birthday
    title: 'Barbie: Chelsea and the Lost Birthday',
    poster: 'images/chelsea-birthday.jpg',
    category: 'Holiday & Family',
    description: 'Chelsea travels to a magical jungle to find her missing birthday.',
    year: 2021
  }

  // ============================================
  // ADD MORE MOVIES HERE IF YOU HAVE THEM
  // ============================================
  // {
  //   id: '',
  //   title: '',
  //   poster: '',
  //   category: '',
  //   description: '',
  //   year: 
  // }
];

/**
 * QUICK TIP: To find poster images, you can:
 * 1. Search Google Images for "barbie [movie name] poster"
 * 2. Use The Movie Database (themoviedb.org)
 * 3. Use IMDB (imdb.com)
 * 4. Download and save to the images/ folder
 * 5. Or just use placeholder URLs for now: https://via.placeholder.com/300x450/F4C2D7/FFFFFF?text=Movie+Title
 */
