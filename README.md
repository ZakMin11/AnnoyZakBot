# AnnoyZakBot

A fun web application that lets users send text messages that gets converted to speech through speakers in the host's room.

## Description

Annoyzakbot is a simple Node.js web server that provides a user interface for sending text messages that are converted to speech using text-to-speech technology. Users can enter messages through a web interface, and the messages will be spoken out loud through the speakers connected to the server machine.

### Features

- Clean, responsive web interface with custom styling
- Text-to-speech conversion of user messages
- Message sanitization and formatting
- Character limit protection (100 characters)
- Custom font integration (Billibong)

## Prerequisites

- Node.js installed on your system
- npm (Node Package Manager)

## Required Dependencies

- `http` - Node.js built-in HTTP server module
- `say` - Text-to-speech module for Node.js
- `one-time` - One-time execution utility

## Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/annoyzakbot.git
```

2. Navigate to the project directory:
```bash
cd annoyzakbot
```

3. Install the required dependencies:
```bash
npm install say one-time
```

## Usage

1. Start the server:
```bash
node client.js
```

2. The server will start on port 1236 by default
3. Open a web browser and navigate to `http://localhost:1236`
4. Enter your message in the text field and click "Send it"
5. The message will be spoken through the server machine's speakers

## How It Works

1. **Server Setup**: The application creates an HTTP server using Node.js's built-in `http` module.

2. **Web Interface**: 
   - Serves a styled HTML page with a form for message input
   - Uses custom styling including a background image and the Billibong font
   - Implements responsive design elements

3. **Message Processing**:
   - Receives POST requests when messages are submitted
   - Sanitizes messages by:
     - Removing special characters
     - Converting URL-encoded characters to plain text
     - Replacing '+' with spaces
   - Enforces a 100-character limit on messages

4. **Text-to-Speech**:
   - Uses the `say` module to convert processed messages to speech
   - Outputs audio through the server's default audio device

## Security Considerations

- The application includes basic input sanitization
- Consider implementing rate limiting for production use
- Be cautious about running this on public networks without additional security measures

## Customization

You can modify the following aspects of the application:
- Port number (default: 1236)
- Character limit (default: 100)
- Web interface styling (CSS in the htmlScript variable)
- Voice settings through the `say` module configuration
