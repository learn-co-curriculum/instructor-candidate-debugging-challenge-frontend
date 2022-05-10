# JavaScript Debugging Challenge

If you are giving the interview, you can find instructions in [INTERVIEWER.md](INTERVIEWER.md).

## Learning Goals

* DOM manipulation
* DOM events
* Promises
* XHR/fetch requests

## Introduction

This challenge has you building out an application
with prebuilt HTML and some started code. You have access to an `Identicon`
class which creates a unique gravatar on the DOM based on a phrase. You
also have a json file which serves as your database for comments
associated with the gravatars and its your job to fetch the comments for a
gravatar and allow users to submit new comments for them as well.

This challenge has no tests associated with it so be sure to test your code
in the browser as you go!

## Deliverables

1. As a user, I can create a gravatar based on a phrase
2. As a user, I can add a comment to the gravatar
3. As a user, I can add another comment without refreshing the page

## Getting Started

To start, clone down this repo and make sure JSON server is installed:

```sh
git clone git@github.com:learn-co-curriculum/instructor-candidate-debugging-challenge-frontend.git
npm i -g json-server
```

In one console, run the following commands:

```sh
cd instructor-candidate-debugging-challenge-frontend
open index.html
json-server --watch db.json
```

All coding for this challenge will happen in the `src/index.js` file. No other
files need to be changed, but you may be interested in what is in the other
files.

## Generate the Gravatar

When a user submits the form for the first input, we want it to generate a
gravatar on the page. You can achieve this with the following code, making sure
to add the appropriate inputString (for example `"flatiron"`):

```js
new Identicon(inputString)
```

## Render Comments

When a user generates a gravatar, in addition to showing it on the page, the user
should also see all comments associated with the gravatar. You can do this by
making a fetch GET request to:

```js
`http://localhost:3000/comments?gravatar=${gravatar}`
```

Once you get the comments, iterate through them and render them to the comments
container.

## Posting Comments

When a user submits the second form, that comment ought to post to the local
server. You can do this by making a fetch POST request to:

```js
`http://localhost:3000/comments`
```

For the request, use these headers:

```js
{
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}
```

Additionally, the new comment should render as the last comment in the comments
container for that gravatar.

## Checking the Code in the Browser

We should check our changes to index.js in the browser. Remember to use
`console.log` and the `debugger` liberally in order to check your assumptions
when fixing bugs!
