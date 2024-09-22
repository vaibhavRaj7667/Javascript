const data = [
  {
    id: 1,
    Name: "vaibhav kumar",
    job: "web scraper",
    img: "https://i.pinimg.com/564x/1a/7c/44/1a7c447e8cd520f05b7357b5a5181dc8.jpg",
    bioo: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    Name: "Rohan kapri",
    job: "CA",
    img: "https://i.pinimg.com/736x/ce/bb/66/cebb66578abead0af0892a96f2000185.jpg",
    bioo: "I'm Withcer meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 3,
    Name: "Rohan kumari",
    job: "IPS",
    img: "https://i.pinimg.com/736x/8e/10/13/8e101302c628e975ac3e8d2e8e3ba0aa.jpg",
    bioo: "I'm Withcer meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 4,
    Name: "priya",
    job: "HR",
    img: "https://i.pinimg.com/564x/c4/ce/f1/c4cef168c322d2f9b310effc421f06e5.jpg",
    bioo: "I'm Withcer meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
];

const Image = document.getElementById("profile-img");
const job_title = document.getElementById("job-title");
const Name = document.getElementById("Name");
const text = document.getElementById("bio");

const nextbtn = document.querySelector(".nextbtn");
const prevbtn = document.querySelector(".prevbtn");
const surpriseBtn = document.querySelector(".surprise-btn");

let currentIndex = 0;

function person(index) {
  const Data = data[index];
  Image.src = Data.img;
  job_title.textContent = Data.job;
  Name.textContent = Data.Name;
  text.textContent = Data.bioo;
}

person(currentIndex);

nextbtn.addEventListener("click", function () {
  currentIndex++;
  if (currentIndex >= data.length) {
    currentIndex = 0; // Wrap around
  }
  person(currentIndex);
});

prevbtn.addEventListener("click", function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = data.length - 1; // Wrap around
  }
  person(currentIndex);
});

surpriseBtn.addEventListener("click", function () {
  let randomIndex = Math.floor(Math.random() * data.length);
  person(randomIndex);
});
