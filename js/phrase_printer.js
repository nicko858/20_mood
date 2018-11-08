$(document).ready(function() {
  var Phrases = [
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
      },

    ];



  $(function() {
    var random_phrase = Phrases[Math.floor(Math.random() * Phrases.length)];

      if (random_phrase['signature'] !=  null) {
        document.getElementById('phrase').innerText = random_phrase['phrase'];
        document.getElementById('signature').innerText = random_phrase['signature'];
      } else {
        document.getElementById('phrase').innerText = random_phrase['phrase'];
      }
  });


});