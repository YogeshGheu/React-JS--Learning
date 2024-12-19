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

    - **Lifting State Up** refers to moving the shared state to the closest common ancestor of components that need to access or modify it. This ensures a unidirectional data flow:
    - **Data flows down**: Parent passes the state or data to its children through props.
    - **Updates flow up**: Children communicate updates back to the parent via callback functions.

9. **React Router DOM**

    - Learned how to use **React Router DOM**, a third-party library, for implementing client-side routing in React applications.
    - Installed React Router using the command:
        ```bash
        npm install react-router-dom
        ```
    - Explored how routing works in React, enabling navigation without full page reloads.
    - Learned the differences between `Link` and `NavLink` compared to the traditional `<a>` tag.
    - Implemented layouts to organize and integrate various components seamlessly.
    - Used `useParams` to extract parameters from the URL and utilize them within the layout.
    - Discovered how React Router's loader functionality works to fetch or preload data before rendering a page, improving user experience by initiating data loading when a link is hovered over.
    - Created a component to fetch data from the GitHub API, displaying my followers and profile picture dynamically.

10. **Learn Context API in React**

    - Learned how to create a context using `React.createContext()`.
    - Understood how to define the **Provider**, pass variables into it, and wrap the app with the Provider.
    - Explored how to add and apply variable values inside the context.
    - Learned how to fetch variable values from the context and update them when needed.
    - In the **10_ContextAPI_1** folder, I learned the fundamentals of how the context system works by replacing props with context to manage a counter value.
    - In the **10_ContextAPI_2** folder, I implemented the basic concept of defining the overall setup and using it with a simple login button. I also explored a different approach by defining the Provider separately.
    - In the **10_ContextAPI_3** folder, I created a card that switches between **light** and **dark** themes using a button. The button updates the state in the context. Additionally, I applied some **Tailwind CSS** configurations for styling.

11. **TODO App using Context API and Local Storage**

    - Built a **TODO App** using the Context API to manage state efficiently.
    - The context holds all the todos and their respective functions: `todos`, `addTodo`, `updateTodo`, `deleteTodo`, and `toggleComplete`.
    - Exported the **`useTodo`** hook (which uses `useContext(TodoContext)`) and the **`TodoProvider`** (`TodoContext.Provider`) from the same context file for easier access and reusability.
    - Integrated **localStorage** using `localStorage.setItem` and `localStorage.getItem` to persist todos across page refreshes.

12. **Redux-Toolkit**

    - To set up Redux Toolkit and React-Redux, run the following commands:
        ```bash
        npm install @reduxjs/toolkit react-redux
        ```
    - Define someSlice using `createSlice` from `@reduxjs/toolkit`. This helps manage a slice of state. It takes the following parameters:

        - `name`: A unique name for the slice. This name helps identify the slice in the Redux store.
        - `initialState`: The default state for this slice. This represents the initial state when the store is first loaded or reset.
        - `reducers`: An object defining functions to update the state. 
        - Each reducer function will receive:
            - `state`: The current state of the slice.
            - `actions`: An object containing the `payload` (the data passed with the action).

        - Each reducer modifies the `state`, not the `initialState`. For example, in the `addItem` reducer, you can update the state like this:

            ````js
            state.push(action.payload);

    - Export the actions and reducer:

        - Export actions using:

        ```javascript
        export const { action1, action2, ... } = someSlice.actions;
        ```

        - Export the reducer as the default:

        ```javascript
        export default someSlice.reducer;
        ```

    - Use `configureStore` from `@reduxjs/toolkit` to create the store and provide the reducer as an object:
        ```javascript
        const store = configureStore({
        	reducer: {
        		nameOfTheReducer: defaultExportedReducerFromSomeSlice,
        	},
        });
        ```
    - Finally, export the store as the default export:

        ```javascript
        export default store;
        ```

    - Import the default exported store in `Main.jsx` and wrap `<App />` with `react-redux.Provider`. Pass the store as a prop to the `Provider`:

        ```javascript
        <Provider store={store}>
        <App />
        </Provider>,
        ```

    - We can use the store in any component by importing `{ useSelector, useDispatch }` from `'react-redux'`.
        - First, import the actions like `{ action1, action2, ... }` from `someSlice`.
        - Use `useSelector((state) => state.nameOfTheReducer.value)` to access the state from the Redux store.
        - Use `const dispatch = useDispatch();` to dispatch actions and update the state, e.g., `dispatch(action1())`.

This document reflects my ongoing progress in React.js. Feedback and suggestions are welcome to enhance my learning experience. 😊
````
