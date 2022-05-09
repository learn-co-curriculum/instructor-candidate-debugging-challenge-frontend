let commentsContainer = document.getElementById("commentsContainer")

let form = document.getElementById("identicon-form")
form.addEventListener("submit", handleSubmit)

let commentForm = document.getElementById("comment-form")
form.addEventListener("submit", newComment)


function addComment(comment) {
  let p = document.createElement("p")
  p.innerText = comment
  commentsContainer.appendChild(p)
}

function updateComments(comments) {
  comments.map(function(c) {
    addComment(c)
  })
}


function handleSubmit(e) {
  e.preventDefault();
  inputString = e.target[0].value
  identicon = new Identicon(inputString);
  loadComments(inputString)
}

function loadComments(gravatar) {
  fetch(`http://localhost:3000/comments?gravatar=${gravatar}`)
    .then(resp => resp.json())
    .then(resp => {
      comments = resp.map(comment => comment.content)
      updateComments(comments)
    }
  )
}


function newComment(e) {
  // WHY ISN'T THIS WORKING???
  const comment = e.target.value
  const gravatar = document.getElementById("identicon-form")[0].value

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
}
