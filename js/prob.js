const data = [
  {
    "id": "1",
    "code": "111",
    "name": "Триєдність стихій",
    "description": "Магічний коктейль, що поєднує енергії вогню, води й повітря.",
    "ful_description": "Цей напій об'єднує силу трьох основних стихій: палаючого вогню, прохолодної води й невловимого повітря. Його смак насичений, а післясмак залишає відчуття спокою й рівноваги. Ідеальний для тих, хто прагне гармонії у світі й у собі.",
    "price": "25 ☀️",
    "img": "111.jfif"
  },
  {
    "id": "2",
    "code": "112",
    "name": "Шепіт часу",
    "description": "Напій із нотками вічності, що відкриває двері в магічний вимір.",
    "ful_description": "Цей коктейль створений для тих, хто прагне відчути подих минулого й майбутнього. Солодкий, із легким присмаком терпкості, він викликає спогади про найтепліші моменти та надихає на нові звершення. Його магія розкривається поступово, огортаючи теплом і ясністю думок.",
    "price": "30 ☀️",
    "img": "112.jfif"
  },
  {
    "id": "3",
    "code": "113",
    "name": "Тінь зоряного неба",
    "description": "Темний і загадковий коктейль із нотками місячного сяйва.",
    "ful_description": "Цей напій занурює в атмосферу зоряного неба, де кожна зірка має свою історію. Його глибокий, майже оксамитовий смак із легкими фруктовими нотками нагадує нічний вітер. Він ідеально підходить для вечорів роздумів або мрій про незвідані світи.",
    "price": "35 ☀️",
    "img": "113.jfif"
  },
  {
    "id": "4",
    "code": "121",
    "name": "Крила фенікса",
    "description": "Напій із теплом і пристрастю, що пробуджує нові сили.",
    "ful_description": "Як фенікс відроджується з попелу, цей коктейль надихає на нові починання. Його смак глибокий і зігріваючий, а післясмак залишає відчуття потужної енергії. Ідеальний вибір для тих, хто хоче знайти в собі силу змінити світ або почати нову сторінку життя.",
    "price": "40 ☀️",
    "img": "121.jfif"
  },
  {
    "id": "5",
    "code": "122",
    "name": "Вічна ніч",
    "description": "Загадковий напій із холодними нотками ночі й глибин океану.",
    "ful_description": "Цей напій пробуджує найтемніші куточки магії, де сховані таємниці світу. Його смак освіжає й залишає післясмак легкого холоду, ніби ковток нічного повітря на березі океану. Ідеальний для тих, хто прагне досліджувати незвідане й загадкове.",
    "price": "35 ☀️",
    "img": "122.jfif"
  },
  {
    "id": "6",
    "code": "123",
    "name": "Поклик хаосу",
    "description": "Сильний напій із присмаком свободи та сили.",
    "ful_description": "Коктейль, що пробуджує внутрішню енергію, хаотичну й непередбачувану. Його смак насичений і багатогранний, нагадує бурю, що раптово налетіла. Він ідеально підходить для сміливців, які не бояться прийняти виклик долі.",
    "price": "45 ☀️",
    "img": "123.jfif"
  },
  {
    "id": "7",
    "code": "131",
    "name": "Сяйво місяця",
    "description": "Легкий напій із нотками квітів і магії нічного світла.",
    "ful_description": "Цей коктейль створений для тих, хто цінує спокій і красу ночі. Його аромат нагадує весняний сад під місячним світлом, а смак ніжний і освіжаючий. Ідеально підходить для медитативних моментів або тихих вечорів із книгою.",
    "price": "30 ☀️",
    "img": "131.jfif"
  },
  {
    "id": "8",
    "code": "132",
    "name": "Подих вічності",
    "description": "М'який напій, що залишає післясмак спокою й гармонії.",
    "ful_description": "Напій, що пробуджує відчуття зв’язку з вічністю. Його смак ніжний, із легкими фруктовими нотками, залишає відчуття гармонії та спокою. Ідеальний для тих, хто шукає магічну рівновагу в хаосі світу.",
    "price": "35 ☀️",
    "img": "132.jfif"
  },
  {
    "id": "9",
    "code": "133",
    "name": "Полум’я зірок",
    "description": "Напій із теплом і силою, наче яскраві зорі на нічному небі.",
    "ful_description": "Цей коктейль наповнений енергією далеких зірок. Його смак насичений і пряний, залишає відчуття внутрішнього тепла й піднесення. Напій чудово підходить для вечорів у компанії чи особливих подій, що надихають.",
    "price": "40 ☀️",
    "img": "133.jfif"
  },
  {
    "id": "10",
    "code": "211",
    "name": "Морське сяйво",
    "description": "Відтінки морської глибини і магії океану.",
    "ful_description": "Напій, що втілює в собі силу океану. Ніжний, але з глибоким післясмаком морської води, цей коктейль нагадає про безмежність і магічну енергію підводного світу.",
    "price": "40 ☀️",
    "img": "211.jfif"
  },
  {
    "id": "11",
    "code": "212",
    "name": "Скрижалі часу",
    "description": "Напій із магічним присмаком древніх міст і великих таємниць.",
    "ful_description": "Скрижалі часу поєднують смак історії, мудрості і потаємних знань. Він пізнаваний, але також має своєрідну глибину, що переносить у часи забутих цивілізацій.",
    "price": "45 ☀️",
    "img": "212.jfif"
  },
  {
    "id": "12",
    "code": "213",
    "name": "Магія світанку",
    "description": "Ніжний напій із нотами ранкової свіжості й чистоти.",
    "ful_description": "Цей коктейль надає відчуття легкості, що настає з першими променями сонця. Свіжий, легкий, з трохи цитрусовими нотками, він пробуджує всі почуття до нового дня.",
    "price": "30 ☀️",
    "img": "213.jfif"
  },
  {
    "id": "13",
    "code": "221",
    "name": "Далекі зорі",
    "description": "Коктейль, що приносить відчуття магії небесних просторах.",
    "ful_description": "Неповторний смак, що нагадує про далекі зірки й безкраї космоси. Після кожного ковтка залишається відчуття глибини й незвіданого простору.",
    "price": "50 ☀️",
    "img": "221.jfif"
  },
  {
    "id": "14",
    "code": "222",
    "name": "Еліксир єдності",
    "description": "Символ гармонії та балансу.",
    "ful_description": "Містичний напій, створений для найглибшого відчуття гармонії. Збалансований у всіх сенсах, він дарує відчуття абсолютного спокою та рівноваги.",
    "price": "50 ☀️",
    "img": "222.jfif"
  },
  {
    "id": "15",
    "code": "223",
    "name": "Танок вітру",
    "description": "Легкий і пронизливий напій із нотками свободи.",
    "ful_description": "Напій, що дає відчуття літа і легкості. Післясмак залишає відчуття свободи, ніби вітер несе тебе в невідомі простори.",
    "price": "45 ☀️",
    "img": "223.jfif"
  },
  {
    "id": "16",
    "code": "231",
    "name": "Зоряний пил",
    "description": "Тонкий і магічний напій, що дарує відчуття неземної краси.",
    "ful_description": "Цей коктейль розкривається в нотках ніжності і легкості, залишаючи після себе емоцію польоту серед зірок. Ідеально підходить для особливих моментів.",
    "price": "40 ☀️",
    "img": "231.jfif"
  },
  {
    "id": "17",
    "code": "232",
    "name": "Магія ночі",
    "description": "Темний і інтригуючий коктейль із пряним присмаком темної ночі.",
    "ful_description": "Цей напій розкривається у глибині ночі. Його смак захоплює таємницями і пряними нотками, залишаючи відчуття загадковості і пристрасті.",
    "price": "50 ☀️",
    "img": "232.jfif"
  },
  {
    "id": "18",
    "code": "233",
    "name": "Магічна сила",
    "description": "Напій, що дарує відчуття абсолютної сили і енергії.",
    "ful_description": "Цей напій наповнений енергією та магічною силою. Його смак палаючий і насичений, що дає відчуття сили і готовності до великих звершень.",
    "price": "60 ☀️",
    "img": "233.jfif"
  },
  {
    "id": "19",
    "code": "311",
    "name": "Легенда про драконів",
    "description": "Напій, що має силу стародавніх істот.",
    "ful_description": "Цей коктейль насичений містичною силою драконів. Його смак поєднує пряні і фруктові нотки, нагадуючи про епічні битви й древні легенди.",
    "price": "60 ☀️",
    "img": "311.jfif"
  },
  {
    "id": "20",
    "code": "312",
    "name": "Острів бажань",
    "description": "Коктейль, що переносить на острів спокою і миру.",
    "ful_description": "Цей напій відображає бажання й спокій на тропічному острові. Солодкий і освіжаючий, він переносить в атмосферу безтурботності.",
    "price": "55 ☀️",
    "img": "312.jfif"
  },
  {
    "id": "21",
    "code": "313",
    "name": "Джерело життя",
    "description": "Магія, що дарує відчуття відновлення та сили.",
    "ful_description": "Цей коктейль як джерело енергії та сили, що допомагає відновити баланс і життєву енергію. Його смак освіжає і дарує відчуття нового початку.",
    "price": "50 ☀️",
    "img": "313.jfif"
  },
  {
    "id": "22",
    "code": "321",
    "name": "Сон у нічній глушині",
    "description": "Магічний коктейль для відпочинку й релаксації.",
    "ful_description": "Цей напій приносить спокій і релаксацію. Смак дуже м'який, з нотками природних запахів і ароматів, що розслаблюють.",
    "price": "40 ☀️",
    "img": "321.jfif"
  },
  {
    "id": "23",
    "code": "322",
    "name": "Туманний ліс",
    "description": "Загадковий і містичний напій з глибокими нотами лісу.",
    "ful_description": "Цей напій переносить в глибину лісу, наповнену магією і туманами. Смачний, але з деякою інтригою в кожному ковтку.",
    "price": "45 ☀️",
    "img": "322.jfif"
  },
  {
    "id": "24",
    "code": "323",
    "name": "Чарівне полум’я",
    "description": "Напій, що створює атмосферу гармонії та спокою.",
    "ful_description": "Цей коктейль поєднує в собі магію вогню і спокій ночі. Його смак насичений і обволікаючий, даруючи відчуття тепла й умиротворення.",
    "price": "50 ☀️",
    "img": "323.jfif"
  },
  {
    "id": "25",
    "code": "331",
    "name": "Ключ до всесвіту",
    "description": "Коктейль для тих, хто прагне знайти своє місце у всесвіті.",
    "ful_description": "Цей напій пробуджує найглибші бажання й стремління. Його смак насичений і багатий, нагадує про нескінченність і потужні енергії.",
    "price": "60 ☀️ ",
    "img": "331.jfif"
  },
  {
    "id": "26",
    "code": "332",
    "name": "Часова порожнеча",
    "description": "Загадковий напій, що переносить у простір між часом.",
    "ful_description": "Цей напій дозволяє відчути себе поза часом. Його смак надає відчуття відсутності часу і спокою в одному ковтку.",
    "price": "60 ☀️",
    "img": "332.jfif"
  },
  {
    "id": "27",
    "code": "333",
    "name": "Магічна вершина",
    "description": "Найвищий ступінь досконалості в магії.",
    "ful_description": "Цей напій символізує досконалість і майстерність. Його смак насичений, багатий і незабутній, ідеальний для справжніх поціновувачів магії.",
    "price": "60 ☀️",
    "img": "333.jfif"
  }
]


// Функція для зміни значення лічильника
function changeValue(inputId, delta) {
  const input = document.getElementById(inputId);
  let currentValue = parseInt(input.value);
  currentValue += delta;

  if (currentValue < 1) currentValue = 3;
  if (currentValue > 3) currentValue = 1;

  input.value = currentValue;
}

window.onload = function () {
  // Перевіряємо, чи є вже значення в localStorage, якщо ні — ініціалізуємо
  if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
  }
  document.getElementById("counter").innerText = localStorage.getItem('counter');

  // Запуск інтервалу для додавання 5 сонечок кожні 20 секунд
  setInterval(addSonechka, 20000);
};

// Функція для додавання 5 сонечок до лічильника
function addSonechka() {
  let currentValue = parseInt(localStorage.getItem('counter') || '0'); // Отримуємо поточний баланс
  currentValue += 5; // Додаємо 5 сонечок
  localStorage.setItem('counter', currentValue.toString()); // Оновлюємо значення в localStorage
  updateCounterDisplay(); // Оновлюємо відображення на сторінці
}
// Оновлення значення лічильника на сторінці
function updateCounterDisplay() {
  const counterElement = document.getElementById("counter");
  if (counterElement) {
    counterElement.innerText = localStorage.getItem('counter');
  } else {
    console.error('Елемент #counter не знайдено на сторінці.');
  }
}


// Основна функція для змішування коктейлю вручну
function mix() {
  const input1 = document.getElementById("zillia1").value;
  const input2 = document.getElementById("zillia2").value;
  const input3 = document.getElementById("zillia3").value;
  const code = input1 + input2 + input3;

  if (canAffordCocktail(code)) {
    animateImages(code);
    deductSonechka(code);  // Віднімаємо сонечка після успішного замовлення
  } else {
    alert("Недостатньо ☀️ для замовлення цього коктейлю!");
  }
}

// Функція для випадкового змішування коктейлю
function mixRandom() {
  const digits = ['1', '2', '3'];
  const input1 = digits[Math.floor(Math.random() * digits.length)];
  const input2 = digits[Math.floor(Math.random() * digits.length)];
  const input3 = digits[Math.floor(Math.random() * digits.length)];

  document.getElementById("zillia1").value = input1;
  document.getElementById("zillia2").value = input2;
  document.getElementById("zillia3").value = input3;

  const code = input1 + input2 + input3;

  if (canAffordCocktail(code)) {
    animateImages(code);
    deductSonechka(code);  // Віднімаємо сонечка після успішного замовлення
  } else {
    alert("Недостатньо ☀️ для замовлення цього коктейлю!");
  }
}

// Функція для перевірки достатньої кількості сонечок
function canAffordCocktail(code) {
  const cocktail = data.find(item => item.code === code);
  if (cocktail) {
    const price = parseInt(cocktail.price.replace(' ☀️', '')); // Витягуємо ціну
    const currentValue = parseInt(localStorage.getItem('counter') || '0'); // Отримуємо поточний баланс
    return currentValue >= price; // Перевіряємо баланс
  }
  return false;
}

// Функція для віднімання сонечок після замовлення коктейлю
function deductSonechka(code) {
  const cocktail = data.find(item => item.code === code);
  if (cocktail) {
    const price = parseInt(cocktail.price.replace(' ☀️', '')); // Витягуємо ціну коктейлю
    let currentValue = parseInt(localStorage.getItem('counter') || '0');

    currentValue -= price;  // Віднімаємо ціну від поточного балансу
    localStorage.setItem('counter', currentValue);  // Оновлюємо баланс у localStorage
    document.getElementById("counter").innerText = currentValue;  // Оновлюємо відображення балансу
  }
}

// Функція для анімації зміни зображень
function animateImages(targetCode) {
  const imageElement = document.getElementById("display-image");
  let currentIndex = 0;
  let speed = 10;
  let slowdownStart = 15;

  const frames = 27;
  const images = [];
  const digits = ['1', '2', '3'];

  for (let i = 0; i < digits.length; i++) {
    for (let j = 0; j < digits.length; j++) {
      for (let k = 0; k < digits.length; k++) {
        images.push(`img/${digits[i]}${digits[j]}${digits[k]}.jfif`);
      }
    }
  }

  const targetIndex = images.indexOf(`img/${targetCode}.jfif`);

  function updateImage() {
    imageElement.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % frames;

    if (slowdownStart > 0) {
      slowdownStart--;
      speed += 10;
    } else if (currentIndex === targetIndex) {
      imageElement.src = images[currentIndex];
      choosecoctail(targetCode);
      return;
    }
    setTimeout(updateImage, speed);
  }
  updateImage();
}

// Функція для вибору коктейлю та оновлення інформації на сторінці
function choosecoctail(code) {
  document.getElementById("name").innerText = "Коктейль";
  document.getElementById("description").innerText = "Опис";
  document.getElementById("full_description").innerText = "Детальний Опис";
  document.getElementById("price").innerText = "Ціна";

  data.forEach((element) => {
    if (element.code == code) {
      document.getElementById("name").innerText = element.name;
      document.getElementById("description").innerText = element.description;
      document.getElementById("full_description").innerText = element.ful_description;
      document.getElementById("price").innerText = element.price;

      const imageElement = document.getElementById("display-image");
      imageElement.src = `img/${element.img}`;
    }
  });
}


