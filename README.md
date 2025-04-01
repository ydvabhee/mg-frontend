# React Memory Game 🧠

A classic memory matching card game built with React, Vite, and styled with Tailwind CSS. Test your memory and find all the pairs!

![Memory Game Demo Video](link/to/your/screenshot.png) 

## ✨ Features

* Classic card matching gameplay
* Responsive design using Tailwind CSS
* Fast development experience powered by Vite
* Tracks number of moves/attempts  
* Timer  
* Score
 

## 🛠️ Technologies Used

* **Frontend:** React
* **Build Tool:** Vite
* **Styling:** Tailwind CSS
* **Package Manager:** npm (or yarn)
* **Version Control:** Git

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

* **Node.js**  
* **npm** 
* **Git**  

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ydvabhee/mg-frontend.git

    ```

2.  **Navigate to the project directory:**
    ```bash
    cd mg-frontend
  
    ```

3.  **Create the environment file:**
Create a file named `.env` in the root of your project directory. This file stores environment-specific variables like API endpoints.

* Paste the following line into your `.env` file:

    ```dotenv
    VITE_SERVER_BASE_URL=<your_backend_url>/api/v1
    ```

* **Important:** Replace `<your_backend_url>` with the actual base URL where your backend server is running (e.g., `http://localhost:5000` or a deployed URL)

  Backend Repo : https://github.com/ydvabhee/mg-backend


4.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using yarn:
    ```bash
    yarn install 
    ```

5.  **Run the development server:**
    Using npm:
    ```bash
    npm run dev
    ```
    Or using yarn:
    ```bash
    yarn dev
    ```

6.  **Open your browser:**
    The application should now be running. Open your web browser and navigate to the local address provided in your terminal (usually `http://localhost:5173` or similar).

## 🎮 How to Play

1.  Click on any card to reveal its image.
2.  Click on a second card to try and find a match.
3.  If the cards match, they will disapear.
4.  If they don't match, they will flip back over after a short delay.
5.  Continue flipping cards until all pairs have been matched.


## 🏗️ Building for Production

To create an optimized production build of the application:

Using npm:
```bash
npm run build
```

Or using yarn:
```bash
yarn build
```
This command will generate a dist folder containing the static assets for deployment.