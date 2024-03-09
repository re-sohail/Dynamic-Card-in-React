# Dynamic Card Generator in React

### Overview

This project creates a dynamic card generator in React, allowing you to use a single card component multiple times by fetching dynamic data from a JSON source. The `Card.jsx` component renders cards based on the dynamic data received, and the `App.jsx` file utilizes the `Card` component to display the generated cards.

### Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Folder Structure](#folder-structure)
4. [Dependencies](#dependencies)
5. [How it Works](#how-it-works)
6. [Contributing](#contributing)
7. [License](#license)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/re-sohail/Dynamic-Card-in-React
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Run the application:

   ```bash
   npm start
   ```

2. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the dynamic card generator.

### Folder Structure

- `src/`
  - `Components/`
    - `ListPoint/`
      - `Card.jsx`: The main card component that renders dynamic data from `Data.jsx` file.
  - `Data/`
    - `Data.jsx`: File containing dynamic data for the cards.
  - `App.jsx`: The main application file that utilizes the `Card` component.

### Dependencies

- React
- SCSS (for styling)

### How it Works

1. The `Card.jsx` component imports dynamic data from the `Data.jsx` file using the `Data` module.

2. The component utilizes the `map()` method to iterate over the data and generate a card for each item in the `Data.jsx` file array.

3. The `App.jsx` file imports and utilizes the `Card` component, rendering it within the main application.

### Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

### License

This project is licensed under the [MIT License](LICENSE).
