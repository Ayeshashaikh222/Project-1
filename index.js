
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


const quotes = [
{quote: '"The only thing we have to fear is fear itself."',
 person: 'Franklin D. Roosevelt'
},
{quote: '"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."',
 person: 'Ralph Waldo Emerson'
},
{quote: '"The only way to do great work is to love what you do."',
 person: 'Steve Jobs'
},
{quote: '"In three words I can sum up everything I \'ve learned about life: it goes on."' ,
 person: 'Robert Frost'
},
{quote: '"The future belongs to those who believe in the beauty of their dreams."',
 person: 'Eleanor Roosevelt'
},
{quote: '"The only limit to our realization of tomorrow will be our doubts of today."',
 person: 'Franklin D. Roosevelt'
},
{quote: '"Two things are infinite: the universe and human stupidity; and I \'m not sure about the universe."',
 person: 'Albert Einstein'
},
{quote: '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
 person: 'Nelson Mandela'
},
{quote: '"To be yourself is all that you can do."',
 person: 'Chris Cornell'
},];


btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);
    
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})

