class Identicon {
  // make use of the md5.array method, which is in scope because we required it in our index.html
  constructor(inputString) {
    if (inputString == "") {
      this.positions = new Array(5)
      for (let column = 0; column < 5; column++) {
        this.positions[column] = new Array(5).fill(false);
      }
    } else {
      const hashedArr = md5.array(inputString)
      this.colorString = `rgb(${hashedArr[0]}, ${hashedArr[1]}, ${hashedArr[2]})`
      this.positions = new Array(5);

      for (let column = 0; column < 5; column++) {
        if (column > 2) {
          this.positions[column] = this.positions[5-(column+1)]
        } else {
          this.positions[column] = new Array(5);
          for (let row = 0; row < 5; row++) {
            this.positions[column][row] = (hashedArr[(column*5)+row] % 2 == 0)
          }
        }
      }
    }

    this.updateDOM()
  }

  updateDOM() {
    for(let column = 0; column < 5; column++) {
      for(let row = 0; row < 5; row++) {
        if (this.positions[column][row]) {
          document.getElementById(`${row}-${column}`).style.backgroundColor = this.colorString
        } else {
          document.getElementById(`${row}-${column}`).style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
      }
    }
  }
}
