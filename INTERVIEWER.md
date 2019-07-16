# Interviewer README

## Setup

### If you have not run this interview before
```bash
$ git clone git@github.com:learn-co-curriculum/instructor-candidate-debugging-challenge-frontend.git
$ npm i -g json-server
```

### If you have run this interview before
```bash
# (inside the repo)
$ git reset --hard HEAD
```

### Open application and run server
In one console, run the following commands:
```bash
$ cd instructor-candidate-debugging-challenge-frontend
$ open index.html
$ json-server --watch db.json
```

In the browser, generate a gravatar with the text "flatiron" first since the database is already seeded with comments for this phrase.

## Interview steps

All coding for this interview will happen in the index.js file. No other file needs to be changed, but candidates may be interested in what is in the other files. If candidates ask to view those files or to change methods in those files, tell them that those files work and have been tested and move on. If they're curious about what the code in those files does, you can demonstrate them in the console.

### 1. The page refreshes when I try to add a comment

#### Problem

> I'm building an app that allows a user to type in a phrase and get a pixelated image generated for it. Once an image is generated, the user should be able to add a comment to it and the comment should render below the image. The problem that I'm running into is that I can't seem to submit the comment form for the image. The code to create the image and the code to add a comment works, but the comment form always refreshes the page.

Demonstrate the issue by going to the browser and filling out a comment for the "flatiron" phrase. There should be prefilled comments there already, and when you try to add a new comment, the page should refresh. Note for yourself the addition of the "?" to the end of the URL. The page is not only refreshing, but the form is being submitted instead of being stopped by JavaScript.

Stick to this problem first before solving others.

#### Changes

These changes can be implemented in different orders and candidates can get pretty stuck on either part of this problem. Be sure to ask questions that get them to ask questions about what might be happening in the code. It's okay to move along the interview if this whole section is taking longer than 10 minutes.

The goal is to get the form to submit without the page refreshing. One of the first issues identified might be that the `newComment` event listener is being added to the wrong form. Instead of attaching it to `commentForm`, it's currently being attached to `form`.

```js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
  const commentForm = document.getElementById("comment-form")
  commentForm.addEventListener("submit", newComment)          // updated line; form > commentForm
})
```

After just making this one change, the page should still refresh. In order to prevent he page from refreshing, you will need to prevent the default form submission; using `event.preventDefault()` does the trick in the event handler.

```js
function newComment(e) {
  e.preventDefault()                                         // added line

  // ...
}
```

#### Check

Refresh the page, put "flatiron" in the image/gravatar input box and click "Generate". Once the image is generated, type some text into the comment input box and click "Submit". The page should not refresh. The comment won't be correctly added yet; that's the next step.

### 2. The comment text is not showing up in the list of comments

#### Problem

> Now that I can get the page to stop refreshing, I want to get the text from the input box onto the page. Right now, it keeps saying "undefined" instead of the actual text that the user types in.

#### Changes

This problem can be solved in a variety of ways. Right now, the event target is the form instead of the input and so the value will always be undefined.

The easiest way to solve it is to reference the other (correctly) working event listener. Candidates can use that as a hint to get the current event listener working correctly. Candidates can also do other things (give the input an id, use a query selector) to find the input and get the value from it.

```js
function newComment(e) {
  e.preventDefault()
  comment = e.target[0].value
  // comment = e.target.querySelector('input').value
  // comment = e.target.querySelector('input[type="text"]').value
  // comment = e.target.querySelector('#custom-id').value

  // ...
}
```

#### Check

Refresh the page, put "flatiron" in the image/gravatar input box and click "Generate". Once the image is generated, type some text into the comment input box and click "Submit". The page should not refresh. The comment text should show up in the comments list.

### 3. Comment input box doesn't clear on submission of comment form

#### Problem

> Okay, I've almost got everything hooked up correctly now. The only thing I need to finish is that the comment input box doesn't clear whenever I submit the form.

#### Changes

Again, a variety of ways to solve this problem. One is to reset the entire comment form once you don't need the comment input value anymore. Another solution is to just reset the value of the input itself.

```js
function newComment(e) {
  e.preventDefault()
  comment = e.target[0].value

  // ...

  e.target.reset()
  // e.target[0].value = ''
}

```

#### Check

Refresh the page, put "flatiron" in the image/gravatar input box and click "Generate". Once the image is generated, type some text into the comment input box and click "Submit". The page should not refresh. The comment text should show up in the comments list. The comment input box should be empty.
