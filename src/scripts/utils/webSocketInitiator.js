const WebSocketInitiator = {
  init(url) {
    try {
      const webSocket = new WebSocket(url);

      webSocket.onmessage = message => this._onMessageHandler(message);

      webSocket.onerror = error => {
        console.log('WebSocket error:', error);
      };

      webSocket.onclose = () => {
        console.log('WebSocket connection closed');
      };
    } catch (error) {
      console.log('Failed to establish WebSocket connection:', error);
    }
  },

  _onMessageHandler(message) {
    try {
      const parsedData = JSON.parse(message.data);
      console.log(parsedData);
    } catch (error) {
      console.error('Error parsing WebSocket message:', error);
    }
  },
};

export default WebSocketInitiator;
