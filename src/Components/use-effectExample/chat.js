const createConnection = (serverURL, roomID) => {
  return {
    connect() {
      console.log(`connecting to room id ${roomID} and URL ${serverURL}`);
    },
    disconnect() {
      console.log(`disconnected from room id ${roomID} and URL ${serverURL}`);
    },
  };
};

export default createConnection;
