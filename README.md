# Simple Weather App

This is a university project by [Student Name] [Student Surname] (ID: [Student ID]).

## Get Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the app**

   ```bash
   npx expo start
   ```

   Or use if you cannot see app on your Phone

   ```bash
   npx expo start --tunnel
   ```

3. **Register for an API key**  
   Go to [Visual Crossing](https://visualcrossing.com/) to create an account and get your API key. Place your API key in `/script/api.js` like this:  
   `const API_KEY = "Your API Key";`

4. **Check for dependency issues**  
   Run the following command before building your app:

   ```bash
   npx expo doctor
   ```

5. **Sign Up for Expo**  
   Go to [Expo](https://expo.dev/) and sign up for an account.

6. **Build the app**

   ```bash
   eas build
   ```

   If you do not install eas before:

   ```bash
   npm install -g eas-cli
   ```

7. **Build for Android platform**
   ```bash
   eas build -p android
   ```

In the output, you'll find options to open the app in a:

- [Development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction/).

## Resources

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Requirements

Here is [`REQUIREMENTS.md`](github.com) file for a detailed list of requirements from the professor, including which requirements have been implemented in the project.
