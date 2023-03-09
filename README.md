# pomodoro-clock
An aesthetic [Pomodoro](https://en.wikipedia.org/wiki/Pomodoro_Technique) timer that can be set to various intervals for deep, focused work and increased productivity.

[Live Demo](https://mfarabi-pomodoro-clock.vercel.app)

![Live Demo](https://github.com/MFarabi619/pomodoro-clock/blob/main/src/assets/Project%20image.png?raw=true)

## Project Goals and requirements:
- Utilize [glassmorphism](https://hype4.academy/tools/glassmorphism-generator).
- The timer must have a modifiable focus interval and rest interval.
- The background should be a smooth, aesthetic gradient.
- The app must be fully-responsive down to 320 px of viewport width.

## Project Architecture:
- Use Figma to wireframe the design.
- Use React with vanilla JS.
- Use Vite to create the app boilerplate.
- Deploy on Vercel. 

## HTML structure:
- Wrapper div for the clock as a whole for easy re-sizing.
- Container div for clock screen.

## Learning Log:
- Glassmorphism patterns and fundamentals.
- Using near-black instead of black and near-white instead of white for a better UI experience.
- 'Scale' is a flexbox property.🤦‍♂️
- Using vmin instead of vw or vh.
- Prevented break and session length values from dropping below 0 using 'Math.max'
- Using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- Inline CSS in React does not include the dash. So background-color would be backgroundColor. [Styling React Using CSS](https://www.w3schools.com/react/react_css.asp)
- Playing audio files using the '.play()' function.
- Utilizing useEffect hook in this [context](https://javascript.plainenglish.io/create-a-pomodoro-timer-with-react-and-javascript-dead941b1fec) to get change timer from session to break. 
- Utlizing the [setTimeout](https://upmostly.com/tutorials/settimeout-in-react-components-using-hooks) function to delay an action.


## Future Improvements:
- Use the approach linked in [context](https://javascript.plainenglish.io/create-a-pomodoro-timer-with-react-and-javascript-dead941b1fec) instead to run the timer as it is far simpler. The current approach is meant for earlier versions of React. 
- Combine the play and pause buttons. 
