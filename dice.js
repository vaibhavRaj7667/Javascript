function rolldice() {
  const numofdice = document.getElementById("number").value;
  const diceresult = document.getElementById("diceresult");
  const value = [];

  for (let i = 0; i < numofdice; i++) {
    const values = Math.floor(Math.random() * 6) + 1;
    value.push(values);
  }

  diceresult.textContent = `dice is ${value.join(", ")}`;
}
