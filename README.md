# pomodoro-clock
A [Pomodoro](https://en.wikipedia.org/wiki/Pomodoro_Technique) timer that can be set to various intervals for deep, focused work and increased productivity.

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
