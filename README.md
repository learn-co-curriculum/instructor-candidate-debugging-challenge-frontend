# Instructor Candidate Debugging Challenge

The goal of this challenge is to imitate a student/teacher interaction for an instructor candidate. The setting is as follows: the "student" brings some code they are working on to the "instructor", who will go through various errors to help the student achieve some desired functionality. In this case, the student is trying to implement a `POST` request on an api (instructions for running the server can be found below) which loads comments for the student's pre-existing [Gravatar Generator](https://github.com/learn-co-curriculum/js-gravatar-creator).

The idea is that we can simultaneously assess a candidate's debugging skills and their ability to be patient with students and give thorough, precise explanations.

You can find a fully functional version of the app in the `solution` branch. However, we want the candidate to go through the following steps, fixing each bug to help the student create a functional comment form. We expect every interview to be different, so your mileage may vary.

The challenge has the following bugs:

1. New comment handler is set on the wrong form
  - **important note:** because the `newComment` handler is attached to the wrong form, creating a new gravatar will create comments that are undefined. Use `flatiron` as your sample gravatar as it already has comments seeded in the db. The sample comments should be appended to the `#comments-container` div.
2. Student forgets `event.preventDefault()` in the `newComment` handler, causing the form to `POST`
3. Student doesn't get input value correctly in the `newComment` handler
4. Student uses result of fetch improperly
5. Student doesn't clear comment container when loading new comments

---

### Running the Server

- This project uses a package called [`json-server`](https://github.com/typicode/json-server) that relies on a `db.json` file to fake a RESTful JSON api

To install and run the server:

`$ npm i -g json-server`

`$ json-server --watch db.json`
