inFirst = 0;

function AddIngre(IngrediantName, IngrediantImage, IngrediantCalories) {
  if (IngrediantName == "") {
    alert("Insert ingrediant name");
    document.getElementById("IngrediantCalories").value = "";
    document.getElementById("IngrediantImage").value = "";
    document.getElementById("IngrediantName").value = "";
    return;
  } else if (IngrediantCalories == "") {
    alert("Ingrediant Calories not enter");
    document.getElementById("IngrediantCalories").value = "";
    document.getElementById("IngrediantImage").value = "";
    document.getElementById("IngrediantName").value = "";
    return;
  } else {
    alert(IngrediantName + " " + IngrediantImage + " " + IngrediantCalories);
    id = Number(arrIng.length) + 1;
    console.log(typeof arrIng.length);
    p6 = new Ingrediant(
      id,
      IngrediantName,
      IngrediantImage,
      IngrediantCalories
    );
    arrIng.push(p6);
  }
  ReRendDish();
}

function RendIngOp() {
  str = `
  <div>
  <input id="IngrediantName" type="text" placeholder="Ingredient Name" />
</div>
<div>
  <input
    id="IngrediantImage"
    type="text"
    placeholder="Ingredient Image"
  />
</div>
<div >
  <input
    id="IngrediantCalories"
    type="number"
    placeholder="Ingrediant Calories"
  />
</div>
<div class="btnDiv">



<a href="#" class="btnAd btn-lg" onClick="AddIngre(document.getElementById('IngrediantName').value,document.getElementById('IngrediantImage').value,document.getElementById('IngrediantCalories').value)">Add ingredients</a>
</div>`;
  document.getElementById("btnRend").innerHTML = str;
}

function RendDishOp() {
  str = `
    <div >
    <input id="DishName" type="text" placeholder="Dish Name" />
  </div>
  <div >
    <input
      id="DishTime"
      type="number"
      placeholder="Dish Time cook"
    />
  </div>
  <div >
    <input
      id="DishCookingMethod"
      type="text"
      placeholder="CookingMethod"
    />
  </div>
  <div >
  <input
    id="DishImage"
    type="text"
    placeholder="Dish Image"
  />
</div>
    `;

  str += `<div>`;
  str += `<div class="row">`;
  for (val in arrIng) {
    str += `<div class="indreg col-6 col-md-4 col-lg-3" >`;
    str += `<div><input value=${arrIng[val].Id} id=${arrIng[val].id} type="checkbox" ></input></div>`;
    str += `<div class="dishes">`;
    str += `<br><p>Name: ${arrIng[val].name}</p><br>`;
    str += `<img src="${arrIng[val].image}" class="img-fluid"><br>`;
    str += `<p class="cal">Calories: ${arrIng[val].calories}</p><br>`;
    str += `</div></div>`;
  }
  str += `</div>`;

  str += `<div class="btnDiv">



  <a href="#" class="btnAd btn-lg" onclick="AddDish(document.getElementById('DishName').value,document.getElementById('DishTime').value,document.getElementById('DishCookingMethod').value,document.getElementById('DishImage').value)">Add Dish</a>
  </div>`;

  str += `</div>`;

  document.getElementById("btnRend").innerHTML = str;
  ReRendDish();
}

function AddDish(DishName, DishTime, DishCookingMethod, DishImage) {
  document.getElementById("soundIn").play();

  if (DishName == "") {
    alert("Insert dish name");
    document.getElementById("DishName").value = "";
    document.getElementById("DishTime").value = "";
    document.getElementById("DishCookingMethod").value = "";
    document.getElementById("DishImage").value = "";
    return;
  } else if (DishCookingMethod == "") {
    alert("Dish cock time not enter");
    document.getElementById("DishName").value = "";
    document.getElementById("DishTime").value = "";
    document.getElementById("DishCookingMethod").value = "";
    document.getElementById("DishImage").value = "";
    return;
  } else {
    d3 = new DishRecipe(
      DishName,
      checkEven(),
      DishTime,
      DishCookingMethod,
      DishImage
    );

    dishArray.push(d3);
  }
  ReRendDish();
}

function ReRendDish() {
  str = `<H2><u>Recepis</u></H2><br>
  <div class="row dishRow">`;
  num = 0;

  for (val in dishArray) {
    str += `<div class="Dishs col-12 col-md-4 col-lg-3" >`;
    str += `<div class="dishes">`;
    str += `<br><p>Name: ${dishArray[val].name}</p><br>`;
    str += `<img src="${dishArray[val].image}" class="img-fluid">`;
    str += `<p >Cock method: ${dishArray[val].cookingMethod}</p>`;
    str += `<p>Time cock: ${dishArray[val].time}</p>`;
    str += `<p>Total Calories: ${dishArray[val].totalCalories()}</p>`;
    str += `<button id="myBtn${num}" onClick="OpenModal(${val})"> Show ingredients </button>
    <div id="myModal${num}" class="modal">
          <div class="modal-content">
        <span class="close">&times;</span>
        <div id="modalDiv${num}"></div>
      </div>
    
    </div>`;
    str += `</div></div>`;
    num++;
  }
  str += `</div>`;
  str += `    <div class="soundDiv">
<audio id="soundIn" controls>
  <source
    src="WhatsApp Ptt 2022-11-02 at 19.06.53.ogg"
    type="audio/mpeg"
  />
</audio>
</div>`;

  document.getElementById("DishesRend").innerHTML = str;
}

function checkEven() {
  IngrediantArrayForDish = [];
  for (let i = 0; i < arrIng.length; i++) {
    if (document.getElementById(i + 1).checked) {
      IngrediantArrayForDish.push(arrIng[i]);
    }
  }
  return IngrediantArrayForDish;
}

class Ingrediant {
  constructor(id, name, image, calories) {
    //id - is a local variable
    this.id = id; //this.id - is a class field
    this.name = name;
    this.image = image;
    this.calories = calories;
  }

  Render() {
    // class methods
    return `name: ${this.name}  <br><img src= ${this.image} alt="image" class="img-responsive"><br>Calories: ${this.calories}`;
  }
}
p1 = new Ingrediant(
  1,
  "Tomato ",
  "https://i5.walmartimages.ca/images/Enlarge/008/475/6000190008475.jpg",
  12
);
p2 = new Ingrediant(
  2,
  "Egg-Plant",
  "https://vitamedica.com/wellness-blog/wp-content/uploads/2010/09/Eggplant.jpg",
  46
);
p3 = new Ingrediant(
  3,
  "Pepper",
  "https://i5.walmartimages.com/asr/7be94a8e-9a5d-4f87-842f-5fe4084138ba.c95d36e140f5e0d492ca632b42e4543c.jpeg",
  41
);

p4 = new Ingrediant(
  4,
  "Rice",
  "https://static.theprint.in/wp-content/uploads/2021/10/Basmati_Rice_India_raw.jpg",
  120
);

p5 = new Ingrediant(
  5,
  "Pasta",
  "https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-2-600x900.jpg",
  150
);

arrIng = [p1, p2, p3, p4, p5];
arrDish = [];
class DishRecipe {
  constructor(name, ingredients, time, cookingMethod, image) {
    //id - is a local variable
    this.name = name; //this.id - is a class field
    this.ingredients = ingredients;
    this.time = time;
    this.cookingMethod = cookingMethod;
    this.image = image;
  }

  Render() {
    // class methods
    return `name: ${this.name}  <br><img src= ${this.image} alt="image" class="img-responsive"><br>Calories: ${this.calories}`;
  }

  totalCalories() {
    let totCal = 0;
    for (let cal in this.ingredients) {
      totCal += Number(this.ingredients[cal].calories);
    }
    return totCal;
  }

  getIngredients() {
    let strIng = "";
    for (let i = 0; i < this.ingredients.length; i++) {
      strIng += `<br> ${this.ingredients[i].name}`;
    }
    return strIng;
  }
}

ingArray = [p1, p2, p5];
ingArrayw = [p2, p5];

d1 = new DishRecipe(
  "Pasta Bulunz",
  ingArray,
  "20",
  "stove",
  "https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
);

d2 = new DishRecipe(
  "salad",
  ingArrayw,
  "11",
  "cut",
  "https://aromatlv.com/wp-content/uploads/2021/03/%D7%A1%D7%9C%D7%98-%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99.jpg"
);

dishArray = [d1, d2];

function OpenModal(modIng) {
  var modal = document.getElementById(`myModal${modIng}`);
  // Get the button that opens the modal
  modal.style.display = "block";

  var btn = document.getElementById(`myBtn${modIng}`);

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[modIng];

  // When the user clicks on the button, open the modal

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  sts = GetDishIngre(modIng);
  document.getElementById(`modalDiv${modIng}`).innerHTML = sts;
}

function GetDishIngre(Modingredients) {
  str = `<div>`;
  str += `<div class="row">`;
  for (i = 0; i < dishArray[Modingredients].ingredients.length; i++) {
    str += `<div class="indregIn col-6 col-md-4 col-lg-3" >`;
    str += `<div class="dishesIn">`;
    str += `<p>Name:<br>${dishArray[Modingredients].ingredients[i].name}</p>`;
    str += `<img src="${dishArray[Modingredients].ingredients[i].image}" class="img-fluid"><br>`;
    str += `<br><p class="calIn">Calories:${dishArray[Modingredients].ingredients[i].calories}</p>`;
    str += `</div></div>`;
  }
  str += `</div></div>`;
  return str;
}
