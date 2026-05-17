let data = {};

function add() {
  let c = cat.value;
  let a = amt.value;

  if (!c || a <= 0) return;

  data[c] = (data[c] || 0) + Number(a);

  list.innerHTML = "";

  for (let item of Object.entries(data).sort((a,b)=>b[1]-a[1])) {
    list.innerHTML += `<li>${item[0]}: $${item[1]}</li>`;
  }
}