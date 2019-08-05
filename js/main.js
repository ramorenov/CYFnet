const products = document.querySelector(".grid-container");
const orderItems = document.querySelector(".order-container");
const datos = [
  {
    id: "f4e927ae-acd5-469a-b36e-371f16755802",
    image: "https://robohash.org/scale.png?size=300x300",
    name: "Danfind",
    price: 90747,
    quantity: 500,
    size: "M",
    status: "started"
  },
  {
    id: "42b3d47c-9f41-4ccd-b914-8b35ffd4365f",
    image: "https://robohash.org/thin.png?size=300x300",
    name: "Onto-quo",
    price: 42106,
    quantity: 73,
    size: "3XL",
    status: "cancelled"
  },
  {
    id: "dcf9c9a9-8389-4b58-b4e6-d252264808df",
    image: "https://robohash.org/design.png?size=300x300",
    name: "Tamlight",
    price: 88334,
    quantity: 585,
    size: "2XL",
    status: "in-progress"
  },
  {
    id: "c8bc79dd-d664-4e06-8b5c-13075bb3dd0e",
    image: "https://robohash.org/death.png?size=300x300",
    name: "Greenstatstock",
    price: 48527,
    quantity: 619,
    size: "XS",
    status: "completed"
  },
  {
    id: "22bdd38e-2fdf-4015-a453-feb02e158c0d",
    image: "https://robohash.org/dad.png?size=300x300",
    name: "True-don",
    price: 43240,
    quantity: 967,
    size: "2XS",
    status: "started"
  },
  {
    id: "f49a3148-6fb1-4fbb-a163-0b2ba7e41e53",
    image: "https://robohash.org/original.png?size=300x300",
    name: "Stim-mat",
    price: 27234,
    quantity: 59,
    size: "XL",
    status: "cancelled"
  },
  {
    id: "5ddce6fa-7193-4cef-a08b-997b9c6c32cd",
    image: "https://robohash.org/log.png?size=300x300",
    name: "Dinglambam",
    price: 17522,
    quantity: 458,
    size: "3XL",
    status: "completed"
  },
  {
    id: "be35bc16-808b-44d8-9e74-4d64b357bceb",
    image: "https://robohash.org/qui.png?size=300x300",
    name: "Quotehothold",
    price: 65614,
    quantity: 185,
    size: "M",
    status: "in-progress"
  }
];

const prom = Promise.resolve(datos);
let order = [];
let total = 0;
// fetch("https://app.fakejson.com/q", {
//   method: "post",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     token: "oBnzdo7RVLm0AiuXnIIwXw",
//     data: {
//       _repeat: 50,
//       id: "cryptoUUID",
//       image: "personAvatar",
//       name: "productName",
//       price: "numberInt|0,100000",
//       quantity: "numberInt",
//       size: "productSize",
//       status: "productOrderStatus"
//     }
//   })
// });

const createDiv = (obj, index) => {
  const div = document.createElement("DIV");
  div.className = "grid-item";
  const btn = document.createElement("button");
  btn.classname = "add-btn";
  btn.type = "button";
  btn.innerText = "add";
  btn.addEventListener("click", () => {
    obj.order = Number(document.getElementById(`cant_${index}`).value);
    order.push(obj);
    orderItems.innerHTML = ""; // limpia la orden antes de agregar un nuevo item
    renderOrder(order); // llama la funcion que genera el html de la orden.
  });

  div.innerHTML = `<img src= ${obj.image}>
        <hr>
        <label> Name: ${obj.name} </label>
        <hr>
        <label> Price: ${obj.price} </label>
        <hr>
        <label> Size: ${obj.size} </label>
        <hr>
        <label>quantity</label>
        <input id= "cant_${index}" type="number" min="0" max=${obj.quantity}>`;
  div.appendChild(btn);

  return div;
};

function renderData(promise) {
  promise
    // .then(r => r.json())
    .then(objs => {
      const elmts2 = objs
        .map(createDiv)
        .forEach(div => products.appendChild(div));
    });
}

const createOrder = (obj, index) => {
  const div2 = document.createElement("DIV");
  div2.className = "order-item";
  div2.innerHTML = `
        <label> ${index + 1}</label>
        <img class="imagen" src= ${obj.image}>
        <label> ${obj.name} </label>
        <label> $ ${obj.price} </label>
        <label> ${obj.order} </label>
        <label> $ ${obj.order * obj.price} </label>
        `;
  return div2;
};

function renderOrder(items) {
  console.log(order);
  items.map(createOrder).forEach(div => orderItems.appendChild(div));
}
renderData(prom);
// renderOrder(order);
