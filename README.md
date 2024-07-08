# Letter Leap - Alphabet Learning Web Application

![Letter Leap Logo](client/logo/Letter%20Leap%20Logo.png)

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Contributing](#contributing)
- [Blog post](#blog-post)
- [License](#license)
- [Authors](#authors)

## About

Letter Leap is an educational web application designed to assist toddlers and young children in learning the alphabet in an engaging and interactive way. The inspiration for creating this application came from our own experiences as parents trying to find effective and enjoyable learning tools for our children. Balancing work, study, and parenting responsibilities, we realized the importance of making learning fun and accessible.

Our journey with Letter Leap was filled with challenges and learning experiences. From grappling with unfamiliar technologies to debugging persistent compile errors, each hurdle was a stepping stone toward a better understanding of front-end development. We started from scratch multiple times, but each iteration brought us closer to a product we are proud of. 

## Features

- **Learn Alphabet**: Interactive pages for each letter including phonics sounds, example words, and tracing activities.
- **Games**: Fun and educational games such as matching games, letter hunt, and puzzles (All of which will be added at a later stage, this still at MVP).
- **Progress Tracking**: Track children's learning progress with badges and stars for completed activities.
- **Settings**: Audio controls, language options, and user profile management for personalized learning experiences.

![Letter Leap screenshot](screenshots/learn-b.png)


## Technologies Used

- **Front-End**: HTML5, CSS3, JavaScript (Vanilla)
- **Back-End**: Node.js, Express.js
- **Database**: MongoDB (using Mongoose)
- **Other Tools**: Git, GitHub, npm

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm (Node Package Manager)
- MongoDB (if using a local database)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/letter-leap.git
   cd letter-leap

   ```

2. **Install dependencies**:

   ```bash
   npm install

   ```

3. **Configuration**

   - Create a .env file in the root directory.
   - Add your MongoDB URI:

   ```bash
   MONGODB_URI=your_mongodb_connection_string

   ```

4. **Running the Application**

- [Letter Leap Demo](https://nomcebo1992.github.io/Letter_Leap/client/index.html)

## Usage

- Upon launching the application, users are greeted with a welcome screen and can navigate through different sections using the navigation menu.
- Select a letter from the "Learn Alphabet" section to explore interactive pages with phonics sounds, example words, and tracing activities.
- Play games under the "Games" section to reinforce letter learning through engaging activities.
- Track progress in the "Progress" section where badges and stars indicate completion of activities.
- Customize audio settings and language preferences in the "Settings" section for a personalized learning experience.

## Contributing

- Fork it (https://github.com/your-username/letter-leap/fork)
- Create your feature branch (git checkout -b feature/your-feature)
- Commit your changes (git commit -am 'Add some feature')
- Push to the branch (git push origin feature/your-feature)
- Create a new Pull Request

## Blog Post
- Tholoana Manyane blog post: https://www.linkedin.com/posts/activity-7215758093870112768-xauZ/?utm_source=share&utm_medium=member_desktop
- Nomcebo Mbambo blog post: https://www.linkedin.com/posts/nomcebo-mbambo-862112318_the-purpose-of-the-project-was-for-it-to-activity-7215848706581893120-H001?utm_source=share&utm_medium=member_android

## License

This project is licensed under the MIT License.

## Authors

Tholoana Manyane | Nomcebo Mbambo
