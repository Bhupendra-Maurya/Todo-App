![image](https://github.com/user-attachments/assets/3e0527c0-cbc1-4fa0-8a31-2f37b7a72a26)


**In this project, we’ve built a to-do list application using React with TypeScript. Here’s a brief overview of what we've accomplished:**

1. **Components**:
   - **AddTodo**: Allows users to add new to-do items.
   - **TodoItem**: Displays individual to-do items with options to mark them as completed or delete them.
   - **TodoList**: Renders a list of to-dos and applies filters.
   - **FilterTodo**: Provides buttons to filter the to-do list by status (All, Active, Completed).
   - **ClearCompleted**: Offers a button to remove all completed to-do items.

2. **Context Management**:
   - **TodosContext** and **TodosProvider**: Manage the global state for to-dos, including adding, deleting, toggling completion status, and filtering.

3. **Custom Hook**:
   - **useTodos**: Provides a convenient way to access and interact with the to-do context.

4. **Local Storage**:
   - Implemented functionality to store and retrieve the to-do list from local storage, ensuring persistence across page reloads.

5. **Folder Structure**:
   - Organized the project into folders for components, context, and hooks, keeping the code modular and maintainable.


# Context
In the `context` folder, we are managing the context and provider for the Todo application using React's Context API. Here's a breakdown of what each file does:

### `TodosContext.ts`

1. **Purpose**: 
   - Defines and exports the context for the Todo application.
   - Provides a way for components to access the context's value without passing props through every level of the component tree.

2. **What It Contains**:
   - **Context Creation**: Uses `createContext` to create a new context object.
   - **Type Definition**: Defines an interface (`TodosContextType`) for the context value, which includes `todos`, `addTodo`, `deleteTodo`, `filter`, `setFilter`, `toggleTodo`, and `clearCompleted`.
   - **Default Value**: Provides a default value of `undefined` to the context. This is useful for type checking and ensuring that components using the context are within a provider.

### `TodosProvider.tsx`

1. **Purpose**:
   - Acts as the context provider component.
   - Manages the state and business logic related to Todos and provides this data and functions to the rest of the application via the context.

2. **What It Contains**:
   - **State Management**: Uses React's `useState` to manage the Todos and filter state.
   - **Side Effects**: Uses `useEffect` to handle loading and saving Todos to `localStorage`. This ensures that the state persists across page reloads.
   - **Functions**: Defines functions for adding, deleting, toggling, and clearing Todos. These functions update the state and `localStorage`.
   - **Context Provider**: Wraps its children with the `TodosContext.Provider` and passes the state and functions as the value.

# Hooks
The `hooks` folder in your project is where you keep custom React hooks. Custom hooks are a way to encapsulate and reuse logic across different components in a React application. Here’s what’s typically done in this folder:


#### `useTodos.ts`

In your specific case, the `useTodos` custom hook is used to encapsulate the logic for accessing and manipulating the todos context. Here’s a breakdown:

1. **Accessing Context**: The hook uses `useContext` to access the `TodosContext`. This allows the components using this hook to get the context values and functions without having to call `useContext` directly in each component.

2. **Error Handling**: The hook checks if the context is `undefined`. If it is, it throws an error. This ensures that the hook is only used within a `TodosProvider`, where the context is properly provided.

3. **Returning Context Values**: The hook returns the context value, which includes functions and state related to todos (e.g., `todos`, `addTodo`, `deleteTodo`, `toggleTodo`, `setFilter`, `clearCompleted`). This allows components to access and use these values easily.

# Components
In the `components` folder, you're organizing the React components used in your application. Each component represents a distinct part of the user interface. Here's a breakdown of what each file does:

1. **`AddTodo.tsx`**:
   - **Purpose**: Manages the input and submission of new to-do items.
   - **Functionality**: Contains a form with an input field for the user to type a new to-do and a submit button to add it to the list.

2. **`TodoItem.tsx`**:
   - **Purpose**: Represents a single to-do item in the list.
   - **Functionality**: Displays the text of the to-do item and provides buttons to toggle its completion status and to delete it.

3. **`TodoList.tsx`**:
   - **Purpose**: Renders the list of to-do items.
   - **Functionality**: Iterates through the list of to-dos and displays each item using the `TodoItem` component. It also applies any filters (like "All", "Active", "Completed") to the list.

4. **`FilterTodo.tsx`**:
   - **Purpose**: Provides filter options for the to-do list.
   - **Functionality**: Contains buttons to filter the displayed to-dos based on their completion status (All, Active, Completed). It allows users to switch between different views of the to-do list.

5. **`ClearCompleted.tsx`**:
   - **Purpose**: Allows the user to clear all completed to-do items.
   - **Functionality**: Includes a button that, when clicked, removes all to-do items marked as completed from the list.


### Setup and Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Bhupendra-Maurya/Todo-App
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd Todo-App
   ```

3. **Install Dependencies:**
   Use `npm` or `yarn` to install the project's dependencies. If you're using `npm`, run:
   ```bash
   npm install
   ```
   Or if you're using `yarn`, run:
   ```bash
   yarn install
   ```

4. **Start the Development Server:**
   To run the development server and view the application in your browser, use:
   ```bash
   npm run dev 
   ```
   Or if you're using `yarn`, use:
   ```bash
   yarn start
   ```

5. **Open the Application:**
   Open your web browser and go to `http://localhost:5173` (or the port specified in your configuration) to see the running application.
