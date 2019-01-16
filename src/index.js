function handleSubmit(e) {
  e.preventDefault();
  inputString = e.target[0].value
  identicon = new Identicon(inputString);
  updateGravatar(identicon)
  loadComments(inputString)
}

function loadComments(gravatar) {
  fetch(`http://localhost:3000/comments?gravatar=${gravatar}`)
    .then(resp => resp.json())
    .then(resp => {
      comments = resp.map(comment => comment.content)
      updateComments(comments)
    })
}

function newComment(e) {
  e.preventDefault()
  comment = e.target[0].value
  gravatar = document.getElementById("identicon-form")[0].value

  fetch(`http://localhost:3000/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      content: comment,
      gravatar: gravatar
    })
  })

  addComment(comment)
  e.target.reset()
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
  const commentForm = document.getElementById("comment-form")
  commentForm.addEventListener("submit", newComment)
})
