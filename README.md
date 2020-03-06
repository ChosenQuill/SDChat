# SDChat

I started SDChat as a small mobile messaging experiment. It pairs an Expo and React Native frontend with an Express server that receives messages over WebSockets.

**Partially complete**

## Project layout

- `frontend/` contains the mobile views, navigation, and message client.
- `Backend/` contains the HTTP and WebSocket entry point.

Start the backend with the checked-in dependency lockfile.

```sh
cd Backend
npm ci
npm start
```

The mobile app was built with Expo SDK 36. Run it with an environment that supports that SDK, with the frontend WebSocket URL set to the host running the backend.
