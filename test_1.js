const data = [
  {
    "breadType": "cream",
    "recipe": {
      "flour": 100,
      "water": 100,
      "cream": 200
    }
  },
  {
    "breadType": "sugar",
    "recipe": {
      "flour": 100,
      "water": 50,
      "sugar": 200
    }
  },
  {
    "breadType": "butter",
    "recipe": {
      "flour": 100,
      "water": 100,
      "butter": 50
    }
  }
]

function recipe(obj) {
  this.breadType = obj["breadType"];
  this.flour = obj["recipe"].flour;
  this.water = obj["recipe"].water;
  this[this.breadType] = obj["recipe"][this.breadType]
}

function test1() {
  let result; 
  for (let i = 0; i < data.length; i++) {
    result = new recipe(data[i])
    document.write("breadType : " + result.breadType + "</br>" +
      "recipe</br>" +
      "flour : " + result.flour +"</br>" +
      "water : " + result.water + "</br>" + 
      result.breadType + " : " + result[result.breadType] + '</br></br>');
  }
}

test1()
