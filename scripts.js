let array = [];

const add = () => {
  array = document.querySelector("#item").value.split(",");
  console.log(array);

  document.querySelector("#listItens").innerHTML = array;
  document.querySelector("#button2").style.display = "block";
  document.querySelector("inserted").innerHTML = "Itens inseridos";
  return array;
};

const randomize = () => {
  const size = array.length;
  const random = Math.floor(Math.random() * size);
  console.log(random);
  document.querySelector("#result").innerHTML =
    "O item vencedor é " + array[random];
  document.querySelector("#inserted").style.display = "none";
  document.querySelector("#listItens").style.display = "none";
  document.querySelector("#button2").style.display = "none";
};
