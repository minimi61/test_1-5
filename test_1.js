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
  let h3Tag = document.createElement('h3');
  h3Tag.textContent = '1번문제'
  document.body.appendChild(h3Tag);
  
  let result; 
  for (let i = 0; i < data.length; i++) {
    result = new recipe(data[i])
    let divTag = document.createElement('div');
    divTag.innerHTML ="breadType : " + result.breadType + '</br>' +
      "recipe</br>" +
      "flour : " + result.flour +"</br>" +
      "water : " + result.water + "</br>" + 
      result.breadType + " : " + result[result.breadType] + '</br></br>';
  
     document.body.appendChild(divTag);
  }
}

test1()
