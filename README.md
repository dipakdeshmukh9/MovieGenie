# Netflix GPT

- create React App
- configured tailwindCSS
- Header
- Routing Of app
- Login form
- SignUp form
- form validation
- useRef Hooks
- firebase setup
- deploying our app to production
- create signup user account 
- Implement Sign In user API
- implement Redux Store With UserSlice
- implement Sign out
- update profile 
- BugFix : Sign up user displayName and profile picture update
- BugFix : if the user is not looged in redirect /Browse to login page and vice-versa
- Unsubscibed to the onAuthStateChanged callback
- Add hardcoded values to the constants file
- Regiter TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with movies Data
- Planning for MainContauiner & secondary container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Yotube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome
- Build Secondary component
- build movie list
- build Movie Card
- TMDB Image CDN URL
- Made the Browsre page amazing with Tailwind CSS
- usePopularMovies Custom hook
- GPT Search Page
- GPT Search Bar
- (BONUS) Multi-language Feature in our App
- Get Open AI Api Key 
- Gpt Search API Call
- fetched gptMoviesSuggestions from TMDB
- created gptSlice added data
- Resused Movie List component to make movie suggestion container
- Memoization
- Added .env file
- Adding .env file to gitignore
- Made our Site Responsive





# features
- Login/SignPage
  - Sign In / Log In form 
  - Redirect to Browse Page 
 
- Browse (after authentication)
   - Header
   - main movie
     - trailer in background
     - title & Description 
     - movieSuggestions
       - MovieList * N 
- NetflixGPT
  - search bar 
  - movie Suggestions
  # Netflix GPT Project in Namaste React Web Series By Akshay Saini

[![GitHub Repository](https://img.shields.io/badge/GitHub%20Repo-Netflix%20GPT-green)](https://github.com/rajatrawal/netflix-gpt)
[![Firebase Deployment](https://img.shields.io/badge/Live-Demo)](https://netflixgpt-a347f.web.app/browse)

[![React](https://img.shields.io/badge/React-Frontend-blue)](https://reactjs.org/)
[![TMDB](https://img.shields.io/badge/TMDB-Movie%20Data-blue)](https://www.themoviedb.org/)
[![Firebase](https://img.shields.io/badge/Firebase-Authentication%20%26%20Hosting-blue)](https://firebase.google.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-Movie%20Recommendation-blue)](https://beta.openai.com/)

🎬 Welcome to Netflix GPT, a Netflix clone that provides users with a familiar interface to browse movies. The application is integrated with TMDB to fetch movie details and with Firebase for authentication. Users can watch trailers on YouTube by clicking on a movie. Additionally, there's a section for specialized movie suggestions, where users can enter their OpenAI key to get personalized movie recommendations.


## About This Project

Netflix GPT offers a seamless movie browsing experience with the following features:

1. **TMDB Integration**: Fetches movie details from The Movie Database (TMDB).

2. **YouTube Trailers**: Watch movie trailers on YouTube with a single click.

3. **Firebase Authentication**: Secure user authentication powered by Firebase.

4. **OpenAI Movie Recommendations**: Enter your OpenAI key for personalized movie suggestions.

## Preview of Project
![Capture](https://github.com/rajatrawal/netflix-gpt/assets/72153827/c575eee1-5c7b-4c4e-a866-b64b25ffa5e2)

## Usage

1. Explore the live demo of Netflix GPT [here](https://netflixgpt-a347f.web.app/browse).

2. Sign in using Firebase authentication to unlock personalized features.

3. Browse movies, watch trailers, and discover new recommendations.

4. In the specialized movie suggestions section, enter your OpenAI key to get personalized movie recommendations.

## Installation

To run this project locally for development purposes, follow these steps:

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/rajatrawal/netflix-gpt.git
   ```

2. Navigate to the project directory:

   ```shell
   cd netflix-gpt
   ```

3. Install dependencies:

   ```shell
   npm install
   ```

4. Create a Firebase project and set up authentication.

5. Configure Firebase in your project by adding your Firebase config details in `src/firebase.js`.

6. Start the development server:

   ```shell
   npm start
   ```

7. Open your web browser and explore the project locally at [http://localhost:3000/](http://localhost:3000/).

## Tech Stack

- **React**: Frontend framework for building user interfaces.
- **TMDB**: Movie database for fetching movie details.
- **Firebase**: Authentication and hosting platform.
- **OpenAI**: Movie recommendation engine.

## Specialized Movie Suggestions

To enable specialized movie suggestions, obtain your OpenAI key and enter it in the designated section of the application.



## Contribute

If you'd like to contribute to this project, have suggestions for improvement, or wish to add more features, please feel free to submit issues or pull requests on [GitHub](https://github.com/rajatrawal/netflix-gpt). Your contributions are valued! 🚀

Thank you for exploring Netflix GPT. We hope it enhances your movie-watching experience! 🍿
# Netflix GPT Project in Namaste React Web Series By Akshay Saini

[![GitHub Repository](https://img.shields.io/badge/GitHub%20Repo-Netflix%20GPT-green)](https://github.com/rajatrawal/netflix-gpt)
[![Firebase Deployment](https://img.shields.io/badge/Live-Demo)](https://netflixgpt-a347f.web.app/browse)

[![React](https://img.shields.io/badge/React-Frontend-blue)](https://reactjs.org/)
[![TMDB](https://img.shields.io/badge/TMDB-Movie%20Data-blue)](https://www.themoviedb.org/)
[![Firebase](https://img.shields.io/badge/Firebase-Authentication%20%26%20Hosting-blue)](https://firebase.google.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-Movie%20Recommendation-blue)](https://beta.openai.com/)

🎬 Welcome to Netflix GPT, a Netflix clone that provides users with a familiar interface to browse movies. The application is integrated with TMDB to fetch movie details and with Firebase for authentication. Users can watch trailers on YouTube by clicking on a movie. Additionally, there's a section for specialized movie suggestions, where users can enter their OpenAI key to get personalized movie recommendations.


## About This Project

Netflix GPT offers a seamless movie browsing experience with the following features:

1. **TMDB Integration**: Fetches movie details from The Movie Database (TMDB).

2. **YouTube Trailers**: Watch movie trailers on YouTube with a single click.

3. **Firebase Authentication**: Secure user authentication powered by Firebase.

4. **OpenAI Movie Recommendations**: Enter your OpenAI key for personalized movie suggestions.

## Preview of Project
![Capture](https://github.com/rajatrawal/netflix-gpt/assets/72153827/c575eee1-5c7b-4c4e-a866-b64b25ffa5e2)

## Usage

1. Explore the live demo of Netflix GPT [here](https://netflixgpt-a347f.web.app/browse).

2. Sign in using Firebase authentication to unlock personalized features.

3. Browse movies, watch trailers, and discover new recommendations.

4. In the specialized movie suggestions section, enter your OpenAI key to get personalized movie recommendations.

## Installation

To run this project locally for development purposes, follow these steps:

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/rajatrawal/netflix-gpt.git
   ```

2. Navigate to the project directory:

   ```shell
   cd netflix-gpt
   ```

3. Install dependencies:

   ```shell
   npm install
   ```

4. Create a Firebase project and set up authentication.

5. Configure Firebase in your project by adding your Firebase config details in `src/firebase.js`.

6. Start the development server:

   ```shell
   npm start
   ```

7. Open your web browser and explore the project locally at [http://localhost:3000/](http://localhost:3000/).

## Tech Stack

- **React**: Frontend framework for building user interfaces.
- **TMDB**: Movie database for fetching movie details.
- **Firebase**: Authentication and hosting platform.
- **OpenAI**: Movie recommendation engine.

## Specialized Movie Suggestions

To enable specialized movie suggestions, obtain your OpenAI key and enter it in the designated section of the application.



## Contribute

If you'd like to contribute to this project, have suggestions for improvement, or wish to add more features, please feel free to submit issues or pull requests on [GitHub](https://github.com/rajatrawal/netflix-gpt). Your contributions are valued! 🚀

Thank you for exploring Netflix GPT. We hope it enhances your movie-watching experience! 🍿
