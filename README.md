# Rocket League Items Database

A full-stack web application that provides a comprehensive database of all items in the video game Rocket League. This app allows users to browse, filter, and access detailed information on every item available in the game, utilizing a modern tech stack for seamless data retrieval and a responsive user interface.

## Features

- **Complete Database**: Contains detailed data on over 100,000 Rocket League items.
- **Web Scraper**: Python-based web scraper to gather item data from an existing website.
- **Data Cleaning and Storage**: Data is formatted and cleaned, then stored in a Ruby on Rails integrated SQLite relational database.
- **API Integration**: Ruby on Rails API serves item data to the client app, enabling real-time access.
- **User-Friendly Client**: A React client app provides a responsive and interactive interface with various filtering options.

## Tech Stack

- **Backend**: Ruby on Rails, SQLite
- **Frontend**: React
- **Web Scraping**: Python (requests, BeautifulSoup)

## Prerequisites

Before you start, ensure you have the following installed on your system:

- **Python**: Version 3.6 or higher. You can download it from the [official Python website](https://www.python.org/downloads/).
- **Ruby on Rails**: Version 6.0 or higher. Follow the instructions on the [Ruby on Rails installation guide](https://guides.rubyonrails.org/getting_started.html).
  - Ensure that Ruby (version 2.7 or higher) and the `bundler` gem are also installed.
- **Node.js**: Version 14 or higher. You can download it from the [official Node.js website](https://nodejs.org/).

## Installation

To get started with the Rocket League Items Database app, follow these steps:
    ```

1. **Install Python dependencies**:

    Make sure you have Python installed, then run this from the home directory:

    ```bash
    pip install -r requirements.txt
    ```

    The `requirements.txt` file includes the following Python libraries:
    - `requests`
    - `BeautifulSoup4`

1. **Install backend dependencies**:
    ```bash
    cd app
    bundle install
    ```

2. **Run the web scrapers modules if needed** to gather item data:
    
    NOTE: The repository has the current Rocket League items as of 04/2023
    ```bash
    cd web_scraper
    ```
    Run the scripts to obtain the latest information

3. **Set up the database**:
    ```bash
    rails db:create
    rails db:migrate
    ```

4. **Start the Rails API server**:
    ```bash
    cd app
    rails server
    ```
    The API will be available at `http://localhost:3000`.

5. **Install frontend dependencies**:
    ```bash
    cd ../rlitemsclient
    npm install
    ```

6. **Start the React client**:
    ```bash
    npm start
    ```

## Usage

- Visit `http://localhost:3001/RLDataAPI` to access the Rocket League Items Database.
- Use the search and filter options to find specific items based on various criteria.

## Contact

For questions or support, please contact [Dylan Carver](mailto:dylancarver14@gmail.com).

---

**Enjoy using the Rocket League Items Database!**
