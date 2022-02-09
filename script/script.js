'use strict';

const books = document.querySelector('.books'),
      book = books.querySelectorAll('.book'),
      adv = document.querySelector('.adv');

const fixTitle = function(title, typo, str) {
   return title.replace(typo, str);
};

const restoreOrder = function() {
   for (let i = 0; i < book.length; i++) {
      let bookTitle = book[i].querySelector('h2 > a'),
            bookOrder = bookTitle.textContent.trim()[6];

      if (+bookOrder === 1) {
         books.prepend(book[i]);
      }
      if (+bookOrder === book.length) {
         books.append(book[i]);
      }
      if (+bookOrder === 3) {
         bookTitle.textContent = fixTitle(bookTitle.textContent.trim(), 'Пропопипы', 'Прототипы');
         book[i].after(book[i - 1]);
      }

      if (+bookOrder === 2 || +bookOrder === 5 ||+bookOrder === 6) {
         const list = book[i].querySelector('ul'),
               li = list.querySelectorAll('li');

         if (+bookOrder === 2) {
            li[9].after(li[2]);
            li[4].after(li[8]);
            li[3].after(li[6]);
            li[5].prepend(li[4]);
         }

         if (+bookOrder === 5) {
            li[1].after(li[9]);
            li[7].after(li[5]);
            li[4].after(li[2]);
         }

         if (+bookOrder === 6) {
            const newLi = document.createElement('li');

            newLi.textContent = 'Глава 8: За пределами ES6';
            li[8].after(newLi);
         }
      }
   }
};

const replaceImage = function(url) {
   url = 'url(' + url + ')';
   document.body.style.backgroundImage = url;
};

const removeElem = function(elem) {
   elem.remove();
};

restoreOrder();
replaceImage('image/you-dont-know-js.jpg');

removeElem(adv);