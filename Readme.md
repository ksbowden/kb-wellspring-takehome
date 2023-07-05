### Ken Bowden's Wellspring Take Home Assignment

Thanks for taking the time to review my submission! Working on this assignment was super fun. I appreciate the practicality of this assignment.

To run it:

```
// Install concurrently
npm install

/// Install deps for the client
cd client
npm install

// Install deps for the server
cd ../server
npm install

// Run the app!
cd ..
npm run start
```

Then open http://localhost:5173/

### Tooling decisions

I chose to use [Vite](https://vitejs.dev/) to build the React app. Vite uses a different (and much faster) build tool, and is a better tool than Create React App in my opinion.

For my component library, I chose [Chakra](https://chakra-ui.com/). I'm by no means an expert in Chakra (it's my second time using it), but I like the standard components it provides. Accessibility is key when building an app like Wellspring, and Chakra seems to do a great job making their components accessible.

### Design decisions

For the Patients view, I opted for a simple table that displays the full list of patients. If this were my full-time job, I would add a search bar at the top to filter the table. The table would also likely make use of infinite scroll and a paginated API.

In the Upcoming Visits card on the Home view, I slightly changed the Upcoming Visit component when "This week" is selected. For "Today" and "Tomorrow," it makes sense to display the time of the appointment. However, when viewing all the visits for the upcoming week, it makes more sense to display the date of the visit. I went ahead and made that change.

### What I did well

1. The code is well-organized. Components are small and simple.
2. There is no prop-drilling. The state of the application is held in a single, simple Context. Components subscribe to the context as needed.
3. I've made use of `useCallback` and `useEffect` to follow the best practices as closely as possible. This doesn't add much today, but could lead to strong performance if the app grows significantly.

### What I would change if I were to work on this professionally

1. It's not very mobile-friendly. I would change the styles to support responsiveness.
2. Chakra supports theming, which would work great for this app. It takes a lot of information that I didn't have (exact colors, fonts, etc.), so I opted to hard-code some of the colors. Theming would fix this.
3. I would add [routing](https://reactrouter.com/en/main). Clicking "Patients" in the Side Nav should navigate to /patients.
4. React context works fine for managing the state of this application, but I would prefer a more robust tool when building this app out further. I am an expert in Redux, but I prefer [Recoil](https://recoiljs.org/) these days.
5. I would add extensive unit tests. I am a big proponent of well-tested code. I prefer [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing my React components.
6. The `recent-patients` and `upcoming-visits` components are too similar. The shared code should be made into a new parent component.
7. Error handling. The server is all but guaranteed to respond successfully since it's running locally, but in real life we'd need error states and loading indicators.
