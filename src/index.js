let commentsContainer = document.getElementById("commentsContainer")

let form = document.getElementById("identicon-form")
form.addEventListener("submit", handleSubmit)

let commentForm = document.getElementById("comment-form")
commentForm.addEventListener("submit", newComment)


function addComment(comment) {
  if(comment){
  let p = document.createElement("p")
  p.innerText = comment
  commentsContainer.appendChild(p)
  }
}

function updateComments(comments) {
  comments.map(function(c) {
    addComment(c)
  })
}


function handleSubmit(e) {
  e.preventDefault();
  let inputString = e.target[0].value
  let identicon = new Identicon(inputString);
  loadComments(inputString)

}

function loadComments(gravatar) {
  fetch(`http://localhost:3000/comments?gravatar=${gravatar}`)
    .then(resp => resp.json())
    .then(resp => {
      let comments = resp.map(comment => comment.content)
        
      updateComments(comments)
      
    }
  )
}


function newComment(e) {
 e.preventDefault();
 
  let comment = e.target[0].value
  let gravatar = document.getElementById("identicon-form")[0].value
  e.target[0].value=""
  fetch(`http://localhost:3000/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      content: comment,
      gravatar: gravatar
    })
  })

  addComment(comment)
}
