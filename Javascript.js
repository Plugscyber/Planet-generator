function generate() {
  function planet() {
    //This makes the planet name
    //I know they are not all consonants
    let consonant = [];
    for (let i = 0; i < 3; i++) {
      //make 3 'consonants'
      let cNum = Math.floor(Math.random() * (31 - 1) + 1);
      switch (cNum) {
        case 1:
          consonant.push("a");
          break;
        case 2:
          consonant.push("b");
          break;
        case 3:
          consonant.push("c");
          break;
        case 4:
          consonant.push("ch");
          break;
        case 5:
          consonant.push("d");
          break;
        case 6:
          consonant.push("e");
          break;
        case 7:
          consonant.push("f");
          break;
        case 8:
          consonant.push("g");
          break;
        case 9:
          consonant.push("gh");
          break;
        case 10:
          consonant.push("h");
          break;
        case 11:
          consonant.push("i");
          break;
        case 12:
          consonant.push("j");
          break;
        case 13:
          consonant.push("k");
          break;
        case 14:
          consonant.push("l");
          break;
        case 15:
          consonant.push("m");
          break;
        case 16:
          consonant.push("n");
          break;
        case 17:
          consonant.push("o");
          break;
        case 18:
          consonant.push("p");
          break;
        case 19:
          consonant.push("q");
          break;
        case 20:
          consonant.push("r");
          break;
        case 21:
          consonant.push("s");
          break;
        case 22:
          consonant.push("sh");
          break;
        case 23:
          consonant.push("t");
          break;
        case 24:
          consonant.push("th");
          break;
        case 25:
          consonant.push("u");
          break;
        case 26:
          consonant.push("v");
          break;
        case 27:
          consonant.push("w");
          break;
        case 28:
          consonant.push("x");
          break;
        case 29:
          consonant.push("y");
          break;
        case 30:
          consonant.push("z");
      }
    }
    //and I know they're not all vowels.
    //but I can't be bothered to rename.
    let vNum = Math.floor(Math.random() * (11 - 1) + 1);
    //make one 'vowel'
    switch (vNum) {
      case 1:
        vowel = "ar";
        break;
      case 2:
        vowel = "e";
        break;
      case 3:
        vowel = "i";
        break;
      case 4:
        vowel = "o";
        break;
      case 5:
        vowel = "ur";
        break;
      case 6:
        vowel = "oo";
        break;
      case 7:
        vowel = "ai";
        break;
      case 8:
        vowel = "ie";
        break;
      case 9:
        vowel = "ea";
        break;
      case 10:
        vowel = "ee";
        break;
    }
    //put together the 'consonants' and 'vowel' into a planet name
    let result = consonant[0] + vowel + consonant[1] + consonant[2];
    //then capitalise the first letter
    let capsResult = result.charAt(0).toUpperCase() + result.slice(1);
    document.getElementById("name").innerHTML =
      "Your planet's name is " + capsResult + ".";
    return capsResult;
  }
  //store the function value of planet name in the name variable for later use.
  var name = planet();

  //moon generation.
  function moonNum() {
    let numM = Math.floor(Math.random() * (4 - 1) + 1);
    const numTable = {
      1: " has one moon.",
      2: " has two moons.",
      3: " has three moons."
    };
    let numD = Math.floor(Math.random() * (5 - 1) + 1);
    const detailTable = {
      1: " has a ring around it.",
      2: " has large craters.",
      3: " supports life.",
      4: " has its own orbiting object."
    };
    if (numM == 1) {
      document.getElementById("moon").innerHTML =
        name + numTable[numM] + " The moon " + detailTable[numD];
    } else {
      document.getElementById("moon").innerHTML =
        name + numTable[numM] + " One of the moons " + detailTable[numD];
    }
  }
  moonNum();
  //generates a planet climate
  function climate() {
    let num = Math.floor(Math.random() * (6 - 1) + 1);
    const climateTable = {
      1: "cold; the air is frigid and inhospitable.",
      2: "cool; the landscape is covered in a layer of snow.",
      3: "mild; the weather is temperate and landscape lush.",
      4: "warm; the landscape is dominated by desert and savannah.",
      5: "hot; the planet bakes in extreme heat."
    };
    document.getElementById("temp").innerHTML =
      name + "'s climate is " + climateTable[num];
    return num;
  }

  var temp = climate();
  //generates water based off climate
  function water() {
    const waterTable = {
      1: "'s water is all frozen as ice.",
      2: " has glaciers that feed its rivers.",
      3: " has lakes, rivers and oceans.",
      4: " has sparse fresh water.",
      5: " is too hot for liquid water."
    };
    document.getElementById("water").innerHTML =
      name + " has" + waterTable[temp];
    return temp;
  }

  var aqua = water();

  function plants() {
    //generates plants if climate is right
    let numC = Math.floor(Math.random() * (10 - 1) + 1);
    const colorTable = {
      1: " green",
      2: " red",
      3: " blue",
      4: " black",
      5: " grey",
      6: " yellow",
      7: " purple",
      8: " orange",
      9: " pink"
    };
    let numT = Math.floor(Math.random() * (6 - 1) + 1);
    const typeTable = {
      1: " mushrooms",
      2: " leafy trees",
      3: " living crystals",
      4: " bacterial colonies",
      5: " succulents"
    };
    let numD = Math.floor(Math.random() * (8 - 1) + 1);
    const detailTable = {
      1: " glow due to bioluminescence.",
      2: " are rough to the touch.",
      3: " are smooth to the touch.",
      4: " smell pungent.",
      5: " are covered with spines.",
      6: " are coated with slime.",
      7: " have beautiful flowers."
    };
    let numE = Math.floor(Math.random() * (8 - 1) + 1);
    const extraTable = {
      1: " have medicinal properties.",
      2: " are poisonous to humans.",
      3: " can be burned as fuel.",
      4: " are edible and taste delicious.",
      5: " are edible and taste disgusting.",
      6: " can be used to make a " + colorTable[numC] + " dye.",
      7: " are hallucinogenic."
    };
    //can't get lookup table to work here but this could be neater
    if (aqua == 1) {
      document.getElementById("flora").innerHTML =
        name + " is too cold for flora. Nothing lives here.";
    } else if (aqua == 2) {
      document.getElementById("flora").innerHTML =
        name +
        " has flora adapted to its cold climate, such as its " +
        colorTable[numC] +
        typeTable[numT] +
        ". They " +
        detailTable[numD] +
        " These  " +
        typeTable[numT] +
        extraTable[numE];
    } else if (aqua == 3) {
      document.getElementById("flora").innerHTML =
        name +
        " has abundant flora, such as its " +
        colorTable[numC] +
        typeTable[numT] +
        ". They " +
        detailTable[numD] +
        " These  " +
        typeTable[numT] +
        extraTable[numE];
    } else if (aqua == 4) {
      document.getElementById("flora").innerHTML =
        name +
        " has flora adapted to its hot climate, such as its " +
        colorTable[numC] +
        typeTable[numT] +
        ". They " +
        detailTable[numD] +
        " These  " +
        typeTable[numT] +
        extraTable[numE];
    } else if (aqua == 5) {
      document.getElementById("flora").innerHTML =
        name + " is too hot for flora. Nothing lives here.";
    }
  }
  plants();
  //extra details
  function extra() {
    let num = Math.floor(Math.random() * (8 - 1) + 1);
    const extraTable = {
      1: "are the ruins of a pre-space civilisation.",
      2: "are tall spires made of an unknown metal.",
      3: "are many craters from past meteorite impacts.",
      4: "are volcanos that periodically erupt.",
      5: "is a crashed space freighter. Its distress signal faded away long ago.",
      6: "are deep caves and caverns.",
      7: "is rumoured to be the treasure hoard of a fearsome space pirate."
    };
    document.getElementById("extra").innerHTML =
      "On " + name + " there " + extraTable[num];
  }
  extra();
}
function gen() {
  generate();
}
