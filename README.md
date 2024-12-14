# React JS Learning Journey

This repository documents my progress and experiments while learning React.js:

1. **Created a basic React app using the **Vite bundler** for a fast development experience:**

    - Commands used:
        ```bash
        npm create vite@latest
        npm install
        npm run dev
        ```

2. **Built a mini version of React to understand how it works behind the scenes:**

    - Used plain HTML and JavaScript to create custom methods.
    - Injected the script into an HTML page to simulate React functionality.

3. **Learned how the `useState` hook works by creating a simple counter application:**

    - Added two buttons to increase and decrease a value.
    - Implemented logic to ensure the value stays within the range of 0 to 20.

4. **Explored how to pass props to components and render them dynamically:**

    - Embedded Tailwind CSS into the project for styling.
    - Followed Tailwind's documentation under **Framework Guides > Vite** for integration.

5. **Created a mini background color changer project:**

    - Used an array of colors and the `.map()` function to generate buttons dynamically.
    - Clicking a button updates the background color of the page.

6. **Built a Password Generator Application:**

    - Learned how to use `useState`, `useRef`, `useEffect`, and `useCallback` hooks to manage and optimize state and side effects.
    - Created a function to dynamically generate random passwords based on user preferences (length, numbers, special characters).
    - Used the `useRef` hook to interact with the DOM for copying the generated password to the clipboard.
    - Added an interactive slider to adjust the password length and checkboxes to toggle the inclusion of numbers and special characters.
    - Improved UI using Tailwind CSS, focusing on responsiveness and styling.

7. **Currency Conversion App:**

    - Built a currency conversion app using React.js, where the base currency is Euro (EUR).
    - Learned how to fetch and display real-time exchange rates from an API - API code is commented, using the hardcoded response object from the API so that it can work temporarily.
    - Used reusable components for handling input fields and currency selection.
    - Implemented logic for currency conversion and added a swap button for easy currency switching.
    - Managed state with `useState` and used `useEffect` to fetch data on component load.
    - Styled the app using **Tailwind CSS** for responsiveness and a clean UI.
    - Also got a little help from ChatGPT.

8. **Learn "Lifting State Up" concept properly:**
    -  **Lifting State Up** refers to moving the shared state to the closest common ancestor of components that need to access or modify it. This ensures a unidirectional data flow:
    -   **Data flows down**: Parent passes the state or data to its children through props.
    -   **Updates flow up**: Children communicate updates back to the parent via callback functions.

This document reflects my ongoing progress in React.js. Feedback and suggestions are welcome to enhance my learning experience. 😊
