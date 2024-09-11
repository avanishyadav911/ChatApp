
# ChatApp

A real-time chat application built using the **MERN** stack (MongoDB, Express, React, Node.js) and **Socket.io** for real-time communication.

## Features

- Real-time messaging with **Socket.io**
- User authentication (Sign up, Login, JWT token-based authentication)
- Private one-on-one chat
- Group chat functionality
- Online/offline user status tracking
- Persistent chat history using **MongoDB**
- Responsive UI built with **React** and **Tailwind CSS**
- Secure communication (Password hashing with **bcrypt**)
- Error handling and notifications using **React Toast**

## Tech Stack

### Frontend:
- **React.js**: User Interface
- **Tailwind CSS**: Styling
- **Socket.io-client**: Real-time communication

### Backend:
- **Node.js**: Server-side environment
- **Express.js**: Backend framework
- **Socket.io**: WebSocket implementation for real-time messaging
- **MongoDB**: NoSQL database to store user data and chat history
- **Mongoose**: MongoDB object modeling for Node.js
- **JWT**: Authentication and Authorization

## Getting Started

### Prerequisites
Before running the application, make sure you have:

- **Node.js** installed
- **MongoDB** set up locally or a cloud-based MongoDB instance
- **npm** or **yarn** as a package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/chatapp-mern-socketio.git
   cd chatapp-mern-socketio
   ```

2. **Install dependencies for both client and server:**

   **Backend:**
   ```bash
   cd server
   npm install
   ```

   **Frontend:**
   ```bash
   cd client
   npm install
   ```

3. **Create environment variables:**

   In the `server` directory, create a `.env` file and add the following variables:

   ```bash
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   SOCKET_PORT=your_socket_port (optional)
   ```

4. **Run MongoDB (if using local MongoDB):**
   ```bash
   mongod
   ```

5. **Run the backend:**
   ```bash
   npm start
   ```

6. **Run the frontend:**
   ```bash
   cd ../client
   npm start
   ```

7. **Access the app in your browser:**
   Navigate to `http://localhost:3000`

## Usage

1. **Sign up** for an account or **log in** with an existing account.
2. **Start a conversation** by searching for users or joining a chat room.
3. Messages will be delivered in **real-time** with active users being displayed.
4. **Private messaging** or group chats can be initiated.
5. **Notifications** appear for new messages, and the UI reflects real-time updates with online/offline statuses.

## Project Structure

```bash
|-- client/
    |-- src/
        |-- components/   # React components
        |-- pages/        # Application pages (Login, Signup, Chat)
        |-- services/     # API calls
        |-- socket/       # Socket.io logic
        |-- App.js        # Main entry point for React app
    |-- public/           # Static assets
|-- server/
    |-- controllers/      # Route controllers
    |-- models/           # MongoDB models (User, Message)
    |-- routes/           # Express routes (auth, chat)
    |-- socket/           # Socket.io logic for handling chat events
    |-- app.js            # Express app setup
|-- README.md
```

## API Endpoints

### User Routes

- **POST** `/api/user/signup` - Create a new user account
- **POST** `/api/user/login` - Authenticate a user

### Chat Routes

- **POST** `/api/chat/send` - Send a message to a user or group
- **GET** `/api/chat/history` - Get chat history

## WebSocket Events

- `connect`: Establishes a connection with the server
- `message`: Sends and receives messages in real-time
- `disconnect`: Handles user disconnection

## Screenshots

### Login Page
![Login Page](path_to_screenshot)

### Chat Interface
![Chat Interface](path_to_screenshot)

## Future Enhancements

- **File sharing:** Allow users to send images, files, and other media
- **Typing indicator:** Show when another user is typing
- **Push notifications:** Real-time mobile notifications for new messages
- **Profile management:** Allow users to update their profile pictures and statuses

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for suggestions and improvements.

## License

This project is licensed under the **MIT License**.

---

Feel free to customize the template to fit your project specifics and include any additional features you've implemented.
