const aries = document.querySelector(".main__aries");
const ariesModal = document.querySelector(".main__modal--aries");
const ariesMainModal = document.querySelector(".main__modal--aries");

const taurus = document.querySelector(".main__taurus");
const taurusModal = document.querySelector(".main__modal--taurus");
const taurusMainModal = document.querySelector(".main__modal--taurus");

const gemini = document.querySelector(".main__gemini");
const geminiModal = document.querySelector(".main__modal--gemini");
const geminiMainModal = document.querySelector(".main__modal--gemini");

const cancer = document.querySelector(".main__cancer");
const cancerModal = document.querySelector(".main__modal--cancer");
const cancerMainModal = document.querySelector(".main__modal--cancer");

const leo = document.querySelector(".main__leo");
const leoModal = document.querySelector(".main__modal--leo");
const leoMainModal = document.querySelector(".main__modal--leo");

const virgo = document.querySelector(".main__virgo");
const virgoModal = document.querySelector(".main__modal--virgo");
const virgoMainModal = document.querySelector(".main__modal--virgo");

const libra = document.querySelector(".main__libra");
const libraModal = document.querySelector(".main__modal--libra");
const libraMainModal = document.querySelector(".main__modal--libra");

const scorpio = document.querySelector(".main__scorpio");
const scorpioModal = document.querySelector(".main__modal--scorpio");
const scorpioMainModal = document.querySelector(".main__modal--scorpio");

const sagittarius = document.querySelector(".main__sagittarius");
const sagittariusModal = document.querySelector(".main__modal--sagittarius");
const sagittariusMainModal = document.querySelector(
  ".main__modal--sagittarius"
);

const capricorn = document.querySelector(".main__capricorn");
const capricornModal = document.querySelector(".main__modal--capricorn");
const capricornMainModal = document.querySelector(".main__modal--capricorn");

const aquarius = document.querySelector(".main__aquarius");
const aquariusModal = document.querySelector(".main__modal--aquarius");
const aquariusMainModal = document.querySelector(".main__modal--aquarius");

const pisces = document.querySelector(".main__pisces");
const piscesModal = document.querySelector(".main__modal--pisces");
const piscesMainModal = document.querySelector(".main__modal--pisces");

function addModalInfo(zodiac, horoscope, mostCompatable, luckyNum) {
  return `
            <div class="main__modal-container">
              <div class="main__modal-header">
                <h2>${zodiac}</h2>
              </div>
              <div class="main__modal-body">
                <h3>Today's Horoscope</h3>
                <p class="main__horoscope">
                  ${horoscope}
                </p>
                <p class="main__compatibility">
                  <span>Compatible with:</span> ${mostCompatable}
                </p>
                <p class="main__lucky"><span>Lucky Number:</span> ${luckyNum}</p>
              </div>
            </div>
          `;
}

function closeModal() {
  const modals = document.querySelectorAll(".main__modal.active");
  modals.forEach((modal) => {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
}

// function closeModal() {
//   const modals = document.querySelector(".main__modal.active");
//   modals.classList.remove("active");
//   overlay.classList.remove("active");
// }

aries.addEventListener("click", function () {
  const newAries = addModalInfo(
    "Aries",
    "api string goes here",
    "most compatable goes here",
    "lucky num"
  );
  ariesMainModal.innerHTML = newAries;
  ariesModal.classList.toggle("active");
  overlay.classList.toggle("active");
});

taurus.addEventListener("click", function () {
  const newTaurus = addModalInfo(
    "Taurus",
    "api string goes here",
    "most compatable goes here",
    "lucky num"
  );
  taurusMainModal.innerHTML = newTaurus;
  taurusModal.classList.toggle("active");
  overlay.classList.toggle("active");
});

gemini.addEventListener("click", function () {
  const newGemini = addModalInfo(
    "Gemini",
    "api string goes here",
    "most compatable goes here",
    "lucky num"
  );
  geminiMainModal.innerHTML = newGemini;
  geminiModal.classList.toggle("active");
  overlay.classList.toggle("active");
});

cancer.addEventListener("click", function () {
  const newCancer = addModalInfo(
    "Cancer",
    "api string goes here",
    "most compatable goes here",
    "lucky num"
  );
  cancerMainModal.innerHTML = newCancer;
  cancerModal.classList.toggle("active");
  overlay.classList.toggle("active");
});

leo.addEventListener("click", function () {
  const newLeo = addModalInfo(
    "Leo",
    "api string goes here",
    "most compatable goes here",
    "lucky num"
  );
  leoMainModal.innerHTML = newLeo;
  leoModal.classList.toggle("active");
  overlay.classList.toggle("active");
});

virgo.addEventListener("click", function () {
  const newVirgo = addModalInfo(
    "Virgo",
    "api string goes here",
    "most compatable goes here",
    "lucky num"
  );
  virgoMainModal.innerHTML = newVirgo;
  virgoModal.classList.toggle("active");
  overlay.classList.toggle("active");
});

libra.addEventListener("click", function () {
  const newLibra = addModalInfo(
    "Libra",
    "api string goes here",
    "most compatable goes here",
    "lucky num"
  );
  libraMainModal.innerHTML = newLibra;
  libraModal.classList.toggle("active");
  overlay.classList.toggle("active");
});

scorpio.addEventListener("click", function () {
  const newScorpio = addModalInfo(
    "Scorpio",
    "api string goes here",
    "most compatable goes here",
    "lucky num"
  );
  scorpioMainModal.innerHTML = newScorpio;
  scorpioModal.classList.toggle("active");
  overlay.classList.toggle("active");
});

sagittarius.addEventListener("click", function () {
  const newSagittarius = addModalInfo(
    "Sagittarius",
    "api string goes here",
    "most compatable goes here",
    "lucky num"
  );
  sagittariusMainModal.innerHTML = newSagittarius;
  sagittariusModal.classList.toggle("active");
  overlay.classList.toggle("active");
});

capricorn.addEventListener("click", function () {
  const newCapricorn = addModalInfo(
    "Capricorn",
    "api string goes here",
    "most compatable goes here",
    "lucky num"
  );
  capricornMainModal.innerHTML = newCapricorn;
  capricornModal.classList.toggle("active");
  overlay.classList.toggle("active");
});

aquarius.addEventListener("click", function () {
  const newAquarius = addModalInfo(
    "Aquarius",
    "api string goes here",
    "most compatable goes here",
    "lucky num"
  );
  aquariusMainModal.innerHTML = newAquarius;
  aquariusModal.classList.toggle("active");
  overlay.classList.toggle("active");
});

pisces.addEventListener("click", function () {
  const newPisces = addModalInfo(
    "Pisces",
    "api string goes here",
    "most compatable goes here",
    "lucky num"
  );
  piscesMainModal.innerHTML = newPisces;
  piscesModal.classList.toggle("active");
  overlay.classList.toggle("active");
});

// const closeBtn = document.getElementById("close-button");
// const overlay = document.getElementById("overlay");

// closeBtn.addEventListener("click", function () {
//   closeModal();
// });

overlay.addEventListener("click", function () {
  closeModal();
});

{
  /* <i id="close-button" class="far fa-times-circle close-button"></i> */
}
