const quotes = [
    { person: "Albert Einstein", quote: "Imagination is more important than knowledge." },
    { person: "Mahatma Gandhi", quote: "Be the change that you wish to see in the world." },
    { person: "Martin Luther King Jr.", quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that." },
    { person: "Steve Jobs", quote: "Your time is limited, don't waste it living someone else's life." },
    { person: "Nelson Mandela", quote: "It always seems impossible until it's done." },
    { person: "Maya Angelou", quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." },
    { person: "Oscar Wilde", quote: "Be yourself; everyone else is already taken." },
    { person: "Elon Musk", quote: "When something is important enough, you do it even if the odds are not in your favor." },
    { person: "Malala Yousafzai", quote: "We realize the importance of our voices only when we are silenced." },
    { person: "Mark Twain", quote: "The two most important days in your life are the day you are born and the day you find out why." }
  ];
  
const min = 0;
const max = quotes.length -1;

let button = document.querySelector('#button');


let generateQuote = ()=>{
    let num = (Math.random() * (max-min)) + min;
    num = Math.floor(num);
    document.querySelector('#quote').innerHTML = quotes[num].quote;
    document.querySelector('#person').innerHTML = quotes[num].person;
};

button.addEventListener('click', generateQuote);