function updateGravatar(identicon) {
  for(let column = 0; column < 5; column++) {
    for(let row = 0; row < 5; row++) {
      if (identicon.positions[column][row]) {
        document.getElementById(`${row}-${column}`).style.backgroundColor = identicon.colorString
      } else {
        document.getElementById(`${row}-${column}`).style.backgroundColor = "rgba(0, 0, 0, 0)";
      }
    }
  }
}

function updateComments(comments) {
  comments.map(function(c) {
    addComment(c)
  })
}

function addComment(comment) {
  container = document.getElementById("commentsContainer")
  let p = document.createElement("p")

  p.innerText = comment
  container.appendChild(p)
}
