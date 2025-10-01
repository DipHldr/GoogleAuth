# Passport.js Google Authentication Demo

  

A simple demonstration project showcasing user authentication via a "Log in with Google" strategy using Passport.js in a Node.js and Express application.

## \#\# Features

  * User login using a Google account (OAuth 2.0).
  * Secure session management using `express-session`.
  * Protected profile route accessible only to authenticated users.
  * Simple and clean UI to demonstrate the authentication flow.

-----

## \#\# Technologies Used

  * **Backend**: Node.js, Express.js
  * **Authentication**: Passport.js (`passport`, `passport-google-oauth20`)
  * **Session Management**: `express-session`
  * **Environment Variables**: `dotenv`
  * **Templating Engine**: EJS (or specify your own, e.g., Handlebars, Pug)

-----

## \#\# Setup and Installation

Follow these steps to get the project running on your local machine.

### \#\#\# Prerequisites

  * Node.js (v18 or later recommended)
  * npm
  * A Google account to set up OAuth credentials.

### \#\#\# 1. Get Google OAuth Credentials

Before you can run the app, you need to get a **Client ID** and **Client Secret** from the Google Cloud Platform.

1.  Go to the [Google Cloud Console](https://console.cloud.google.com/).
2.  Create a new project.
3.  Navigate to **APIs & Services** \> **Credentials**.
4.  Click **Create Credentials** \> **OAuth client ID**.
5.  Select **Web application** as the application type.
6.  Under **Authorized JavaScript origins**, add `http://localhost:3000`.
7.  Under **Authorized redirect URIs**, add `http://localhost:3000/auth/google/callback`.
8.  Click **Create**. Copy your **Client ID** and **Client Secret** and save them securely.

### \#\#\# 2. Local Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Create a `.env` file:**
    Create a file named `.env` in the root of the project and add the following variables.

    ```env
    GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
    GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET
    SESSION_SECRET=a_random_string_for_session_security
    CALLBACK_URL=http://localhost:3000/auth/google/callback
    ```

4.  **Run the application:**

    ```bash
    npm start
    ```

    The application should now be running on `http://localhost:3000`.

-----

## \#\# Usage

1.  Open your browser and navigate to `http://localhost:3000`.
2.  Click the "Log in with Google" button.
3.  You will be redirected to the Google authentication screen. Log in with your Google account.
4.  After successful authentication, you will be redirected back to the application's profile page, where you'll see your basic profile information.
5.  Click the "Logout" button to end your session.

## \#\# License

This project is licensed under the MIT License. See the `LICENSE` file for details.
