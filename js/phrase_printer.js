var Jokes = [
        {
            "phrase": "Кукурузные хлопья - теперь без асбеста!",
            "signature": "©Неизвестный маркетолог"
        },
        {
            "phrase": "Собираюсь жить вечно, пока всё идёт нормально"
        },
        {
            "phrase": "Вывеска над кафе — '\u003cМы открылись\u003e'. Что-то не так. Где же '\u003c/Мы открылись\u003e'?"
        },
        {
            "phrase": "Если ты будешь усердно работать по 8 часов в день, то обязательно станешь боссом и начнешь работать по 12"
        },
        {
            "phrase": "Жизнь - как коробка шоколадных конфет, никогла не знаешь какая попадется.",
            "signature": "©Мама Фореста Гампа"
        },
        {
            "phrase": "Господи! Если ты сейчас наблюдаешь за нами, то, пожалуйста, отвернись на минутку!",
            "signature": "©Ковбой Мальборо"
        },
        {
            "phrase": "Ты поможешь мне, а я за это приму помощь от тебя",
            "signature": "©Гомер Симпсон"
        },
        {
            "phrase": "Мне нравится быть тут, с тобой. Ты единственная, кого ненавидят больше, чем меня.",
            "signature": "©Декстер"
        },
        {
            "phrase": "Все, я богат. Пока, неудачники, я вас всегда ненавидел!",
            "signature": "©Футурама"
        },
        {
            "phrase": "— Извините, я опоздал.\n" +
                    "— Что случилось?\n" +
                    "— Да ничего, я просто не хотел приходить.",
            "signature": "©Шелдон Купер"
        },
        {
            "phrase": "Вообще-то я не религиозный человек, но если ты есть там наверху, спаси меня, Супермен!",
            "signature": "©Гомер Симпсон"
        }

    ];


function PrintJokes(JokesCount) {
    var row = document.createElement("div");
    var past_jokes = [];
    if (JokesCount > Jokes.length) {
        JokesCount = Jokes.length;
    }
    for (var Joke = 0; Joke < JokesCount; Joke++) {
      var random_joke = Jokes[Math.floor(Math.random() * Jokes.length)];
          column = document.createElement("div");
          title = document.createElement("div");
          h4 = document.createElement("h4");
          text = document.createElement("div");
          span = document.createElement("span");
     if (past_jokes.some(function(o){return o['phrase'] === random_joke['phrase'];})) {
         Joke--;
         continue;
     }
      row.className = "row"    
      column.className = "col-lg-4 col-md-4 col-sm-4 col-xs-12 joke";
      row.appendChild(column);      
      text.className = "text";
      title.className = "title";
      span.textContent = random_joke['signature'];
      h4.textContent = random_joke['phrase'];
      title.appendChild(h4);
      text.appendChild(span);
      column.appendChild(title);
      column.appendChild(text);
      (document.getElementById('JokesContainer')).appendChild(row);
      past_jokes.push({
            phrase: random_joke['phrase'],
            signature: random_joke['signature']
      });
  }}


$(document).ready(function () {
    PrintJokes(9);

});