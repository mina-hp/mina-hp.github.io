window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY) > 0;
});

window.addEventListener("scroll", function () {
  var navbar = document.querySelector("header");

  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", function () {
  var navbar = document.querySelector("header");

  if (window.scrollY > 0) {
    navbar.classList.add("hover");
  } else {
    navbar.classList.remove("hover");
  }
});

const word = "Frontend Developer|";
const speed = 200;
let index = 0;
let isDeleting = false;

function typeEffect() {
  const textElement = document.getElementById("typing-effect");
  const currentWord = word.substring(0, index);

  if (!isDeleting) {
    textElement.textContent = currentWord;
    index++;

    if (index > word.length) {
      isDeleting = true;
      setTimeout(typeEffect, speed * 2);
    } else {
      setTimeout(typeEffect, speed);
    }
  } else {
    textElement.textContent = currentWord;
    index--;

    if (index === 0) {
      isDeleting = false;
      setTimeout(typeEffect, speed);
    } else {
      setTimeout(typeEffect, speed / 2);
    }
  }
}

typeEffect();

let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}
const reviews = [
  {
    id: 1,
    name: "Ellen Ullman",
    job: "American computer programmer and author",
    img: "assets/ellen.webp",
    text: " Programmers seem to be changing the world. It would be a relief, for them and for all of us, if they knew something about it. ",
  },
  {
    id: 2,
    name: "Kent Beck",
    job: "American software engineer",
    img: "assets/kent.jpeg ",
    text: "I am not a great programmer; I am just a good programmer with great habits.",
  },
  {
    id: 3,
    name: " Brian Kernighan",
    job: " professor of computer",
    img: "assets/brian.jpg",
    text: "Programming is learned by writing programs. ",
  },
  {
    id: 4,
    name: " Linus Torvalds",
    job: "Finnish software engineer",
    img: "assets/linus.webp",
    text: "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program. ",
  },
];
const userImag = document.getElementById("img1");
const userName = document.getElementById("name1");
const userJob = document.getElementById("job1");
const userReview = document.getElementById("description1");

let currentUser = 0;
const setSlideData = (userIndex) => {
  const user = reviews[userIndex];
  userImag.src = user.img;
  userName.textContent = user.name;
  userJob.textContent = user.job;
  userReview.textContent = user.text;
};
document.addEventListener("DOMContentLoaded", function () {
  setSlideData(0);
});
document.getElementById("next-btn1").addEventListener("click", function () {
  if (currentUser >= 0 && currentUser < reviews.length - 1) {
    currentUser++;
    setSlideData(currentUser);
  } else if (currentUser >= reviews.length - 1) {
    currentUser = 0;
    setSlideData(currentUser);
  }
});
document.getElementById("back-btn1").addEventListener("click", function () {
  if (currentUser > 0) {
    currentUser--;
    setSlideData(currentUser);
  } else {
    currentUser = reviews.length - 1;
    setSlideData(currentUser);
  }
});
