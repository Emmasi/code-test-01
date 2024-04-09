## How to run

  This application requires node 20+

  To install - `npm install`

  To start - `npm run dev`

  To run test - `npm test`
  
## Approach
I started by reading the requirements to understand the task and plan how I should set the bounderies.

First, I searched for a suitable API that does not require an API key but meets the requirements, such as including an image. I also chose a simpler design to be able to stay within a reasonable time frame.

## Challenges
A challenge was to handle and distinguish different error messages that the server returns in a good way.

## Potential improvements


Some improvements that can be made are:

- Creating tests for error and loading scenarios.

- Adding end-to-end tests.

- Building an error boundary component to handle general errors that may occur would have been an improvement.

- Improving the UI to prevent accidentally double-clicking on the new profile button.

- Using the Pokemon GraphQL API to limit the fetched data that is sent back. Currently, only a small amount of the information returned is being utilized.
