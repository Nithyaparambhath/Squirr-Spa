const reviews = [
    {
      id: 1,
      name: "Christopher Riley",
      job: "CEO-Founder @Createne.in",
      img:
        "images/t1.png",
      text:
        "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took. ",
    },
    {
      id: 2,
      name: "Christopher Riley 2",
      job: "CEO-Founder @Createne.in 2",
      img:
        "images/t1.png",
      text:
        "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took.",
    },
    
  ];
  // select items
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener("click", function () {
    console.log("hello");
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });