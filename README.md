# Finance Tracker Web App

## Description

The Finance Tracker Web App is a simple application that allows users to track their financial transactions. Users can add new transactions and view their transaction history.

This project consists of both a frontend React.js application and a backend FastAPI application. The frontend communicates with the backend to perform CRUD (Create, Read, Update, Delete) operations on financial transactions.

## Features

- Add new financial transactions with details such as amount, category, description, income/expenses, and date.
- View a list of transactions with filtering and pagination options.
- User-friendly interface with real-time updates.
- Cross-Origin Resource Sharing (CORS) support for frontend-backend communication.
- Database integration using SQLAlchemy.

## Technologies Used

- **Frontend**: React.js, Axios for HTTP requests.
- **Backend**: FastAPI, SQLAlchemy for database interaction.
- **Database**: SQLite.
- **Styling**: Tailwind CSS for styling the frontend.
- **Deployment**: [Netlify](https://finance-tracker-fastapi-react.netlify.app/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [Python](https://www.python.org/) installed on your machine.
- [Git](https://git-scm.com/) for cloning the repository.

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/destroyer-art/fastapi-react-app.git
   ```

2. Change to the project directory:

   ```shell
   cd fastapi-react-app
   ```

3. Create virtual enviroment with Python:

   ```zsh
   python -m venv venv
   ```

4. Install frontend dependencies:

   ```zsh
   cd React
   pnpm install
   ```
5. Install backend dependencies:

   ```zsh
   cd ../FastAPI
   pip install -r requirements.txt
   ```

### Usage

1. Start the backend FastAPI server:
   
   ```zsh
   cd FastAPI
   uvicorn main:app --reload
   ```

2. Start the frontend development server:

   ```zsh
   cd React
   npm run dev
   ```
