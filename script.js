const giftBox = document.getElementById("giftBox");
const giftStage = document.getElementById("giftStage");
const giftHint = document.getElementById("giftHint");
const celebrationLayer = document.getElementById("celebrationLayer");
const audio = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");
const musicText = document.getElementById("musicText");
const musicLabel = document.getElementById("musicLabel");
audio.volume = 0.12;

let giftOpened = false;

// Se uma foto não carregar, mantém visível o cartão de orientação.
document.querySelectorAll(".photo-frame img").forEach((img) => {
  img.addEventListener("error", () => {
    img.style.display = "none";
  });
});

function openGift() {
  if (giftOpened) return;
  giftOpened = true;
  giftBox.classList.add("open");
  giftStage.classList.add("open");
  giftHint.textContent = "";
  launchGiftCelebration();
  // A música começa após uma ação explícita da visitante, respeitando as regras do navegador.
  audio.play().then(() => updateMusicButton(true)).catch(() => {
    musicLabel.textContent = "Toque em Música para ouvir";
  });
}

giftBox.addEventListener("click", openGift);
giftBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openGift();
  }
});

function launchCelebration() {
  const colors = ["#cf83db", "#f06d9a", "#f5b84b", "#7bcfc0", "#9875df", "#ffffff"];
  for (let i = 0; i < 65; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.setProperty("--x", `${(Math.random() - 0.5) * 680}px`);
    piece.style.setProperty("--y", `${(Math.random() - 0.8) * 560}px`);
    piece.style.animationDelay = `${Math.random() * 0.45}s`;
    celebrationLayer.appendChild(piece);
    setTimeout(() => piece.remove(), 3000);
  }
}

function launchGiftCelebration() {
  launchCelebration();
  const balloonColors = ["#ef77a7", "#9872dc", "#f3b73f", "#71c9c2", "#f26f91", "#b787e8", "#ffcc76"];
  for (let i = 0; i < 16; i++) {
    const balloon = document.createElement("span");
    balloon.className = "falling-balloon";
    balloon.style.left = `${3 + Math.random() * 94}%`;
    balloon.style.setProperty("--balloon-color", balloonColors[i % balloonColors.length]);
    balloon.style.setProperty("--fall-time", `${4.5 + Math.random() * 2.5}s`);
    balloon.style.setProperty("--drift", `${(Math.random() - 0.5) * 180}px`);
    balloon.style.animationDelay = `${Math.random() * 1.6}s`;
    celebrationLayer.appendChild(balloon);
    setTimeout(() => balloon.remove(), 8500);
  }
  const flowerColors = ["#8f55c9", "#b365d4", "#d472b8", "#7850bd", "#ed91c4"];
  const flowers = ["🪻", "✿", "🌸", "💜"];
  for (let i = 0; i < 18; i++) {
    const flower = document.createElement("span");
    flower.className = "falling-flower";
    flower.textContent = flowers[i % flowers.length];
    flower.style.color = flowerColors[i % flowerColors.length];
    flower.style.left = `${2 + Math.random() * 96}%`;
    flower.style.animationDelay = `${Math.random() * 1.9}s`;
    flower.style.setProperty("--drift", `${(Math.random() - 0.5) * 190}px`);
    flower.style.setProperty("--fall-time", `${4.5 + Math.random() * 2.5}s`);
    celebrationLayer.appendChild(flower);
    setTimeout(() => flower.remove(), 8500);
  }
  for (let i = 0; i < 14; i++) {
    const rose = document.createElement("span");
    rose.className = "falling-rose";
    rose.textContent = "🌹";
    rose.style.left = `${4 + Math.random() * 92}%`;
    rose.style.animationDelay = `${Math.random() * 1.9}s`;
    rose.style.setProperty("--drift", `${(Math.random() - 0.5) * 150}px`);
    rose.style.setProperty("--fall-time", `${4.5 + Math.random() * 2.5}s`);
    celebrationLayer.appendChild(rose);
    setTimeout(() => rose.remove(), 8500);
  }
}

document.getElementById("goToGift").addEventListener("click", () => {
  document.getElementById("presente").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("seeMemories").addEventListener("click", () => {
  document.getElementById("lembrancas").scrollIntoView({ behavior: "smooth" });
});

const reunionVisual = document.getElementById("reunionVisual");
const reunionButton = document.getElementById("reunionButton");
const reunionStatus = document.getElementById("reunionStatus");
reunionButton.addEventListener("click", () => {
  const together = reunionVisual.classList.toggle("is-together");
  reunionButton.setAttribute("aria-pressed", String(together));
  reunionButton.innerHTML = together
    ? "Recomeçar nosso encontro <span>↺</span>"
    : "Aproximar nossos corações <span>♥</span>";
  reunionStatus.textContent = together
    ? "Marco e Nalanda estão a caminho um do outro…"
    : "Toque para encurtar a distância por um instante.";
  if (together) {
    window.setTimeout(() => {
      if (reunionVisual.classList.contains("is-together")) {
        reunionStatus.textContent = "No fim, o carinho sempre encontra o caminho de volta. 💜";
      }
    }, 1450);
  }
});

function updateMusicButton(isPlaying) {
  musicText.textContent = isPlaying ? "Pausar" : "Música";
  musicButton.setAttribute("aria-label", isPlaying ? "Pausar música" : "Tocar música");
  musicLabel.textContent = isPlaying ? "Tocando Coisa Linda" : "Coisa Linda";
}
musicButton.addEventListener("click", async () => {
  if (audio.paused) {
    try { await audio.play(); updateMusicButton(true); }
    catch { musicLabel.textContent = "Não foi possível carregar a música"; }
  } else {
    audio.pause();
    updateMusicButton(false);
  }
});
const letters = {
  birthday: {
    eyebrow: "UMA CARTA PARA O SEU DIA",
    title: "Querida Nalanda,",
    body: `Hoje é o seu dia, e eu queria encontrar uma forma especial de te lembrar o quanto você é importante para mim.

Antes de tudo, desejo que este novo ciclo seja cheio de saúde, paz, conquistas e momentos que façam seus olhos brilharem. Que você tenha coragem para correr atrás dos seus sonhos, leveza para aproveitar as pequenas coisas e muitos motivos para sorrir.

Eu admiro tantas coisas em você: seu jeito, sua essência, sua maneira de tornar meus dias especiais. Espero que hoje você se sinta amada, celebrada e lembrada — porque você merece tudo isso e muito mais.

Mesmo estando longe neste momento, queria poder estar aí, te abraçar bem forte, olhar nos seus olhos e dizer pessoalmente: Feliz Aniversário, Meu Amor.

Que a vida seja gentil com você. E que eu possa continuar ao seu lado, acompanhando suas vitórias, seus sonhos e cada nova fase.

Feliz Aniversário, Amor da minha vida. Você é muito especial para mim.`,
  },
  us: {
    eyebrow: "UM PEDACINHO DA NOSSA HISTÓRIA",
    title: "Meu amor,",
    body: `Às vezes penso em como é curioso: estamos em países diferentes, separados por tantos quilômetros, mas você consegue estar presente em tantos momentos do meu dia.

A distância não é a parte mais fácil da nossa história. Existem abraços que ficam para depois, beijos que viram saudade e momentos em que tudo o que eu queria era estar pertinho de você. Mas, mesmo assim, há algo muito bonito em nós: continuamos escolhendo cuidar do que sentimos.

Quero viver muitos outros capítulos ao seu lado. Quero criar novas lembranças, conhecer lugares com você, rir de coisas bobas, comemorar suas conquistas e estar presente também nos dias difíceis.

Que este presente seja um lembrete de que, mesmo daqui do Chile, existe alguém pensando em você, torcendo por você e contando os dias para transformar a distância em abraço.

Nossa história ainda tem muitas páginas em branco. Mal posso esperar para preenchê-las com você.

Eu Te Amo Minha Nalandinha. Feliz Aniversário 24, Minha Namorada.`,
  }
};

const modal = document.getElementById("letterModal");
const letterTitle = document.getElementById("letterTitle");
const letterEyebrow = document.getElementById("letterEyebrow");
const letterBody = document.getElementById("letterBody");

document.querySelectorAll("[data-letter]").forEach((button) => {
  button.addEventListener("click", () => {
    const letter = letters[button.dataset.letter];
    letterEyebrow.textContent = letter.eyebrow;
    letterTitle.textContent = letter.title;
    letterBody.textContent = letter.body;
    modal.classList.add("visible");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    document.getElementById("closeModal").focus();
  });
});

function closeLetter() {
  modal.classList.remove("visible");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
document.getElementById("closeModal").addEventListener("click", closeLetter);
modal.addEventListener("click", (event) => {
  if (event.target.dataset.close) closeLetter();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("visible")) closeLetter();
});

// Tocar uma vela alterna entre acesa e apagada.
document.querySelectorAll(".flame").forEach((flame) => {
  flame.addEventListener("click", () => {
    const isOff = flame.classList.toggle("off");
    flame.textContent = isOff ? "✧" : "♨";
    flame.setAttribute("aria-label", isOff ? "Acender vela" : "Apagar vela");
    if ([...document.querySelectorAll(".flame")].every(item => item.classList.contains("off"))) {
      launchCandleCelebration();
    }
  });
});

function launchCandleCelebration() {
  const layer = document.getElementById("candleCelebration");
  const cake = document.querySelector(".cake-wrap").getBoundingClientRect();
  const layerRect = layer.getBoundingClientRect();
  const symbols = ["✦", "♡", "✨", "♥"];
  const colors = ["#e8ac75", "#cf91b8", "#a88ac8", "#f1c9df"];
  for (let i = 0; i < 30; i++) {
    const sparkle = document.createElement("span");
    const angle = Math.random() * Math.PI * 2;
    const distance = 50 + Math.random() * 150;
    sparkle.className = "candle-sparkle";
    sparkle.textContent = symbols[i % symbols.length];
    sparkle.style.left = `${cake.left - layerRect.left + cake.width / 2}px`;
    sparkle.style.top = `${cake.top - layerRect.top + cake.height * 0.2}px`;
    sparkle.style.color = colors[i % colors.length];
    sparkle.style.setProperty("--sparkle-x", `${Math.cos(angle) * distance}px`);
    sparkle.style.setProperty("--sparkle-y", `${Math.sin(angle) * distance - 50}px`);
    sparkle.style.animationDelay = `${Math.random() * 0.35}s`;
    layer.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1900);
  }
}

const photoLightbox = document.getElementById("photoLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
let photoTrigger = null;

document.querySelectorAll(".photo-frame").forEach((frame) => {
  frame.addEventListener("click", () => {
    const image = frame.querySelector("img");
    if (!image || !image.naturalWidth) return;
    photoTrigger = frame;
    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = frame.closest(".photo-card").querySelector("figcaption").textContent;
    photoLightbox.classList.add("visible");
    photoLightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    document.getElementById("closePhoto").focus();
  });
});

function closePhotoLightbox() {
  photoLightbox.classList.remove("visible");
  photoLightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  document.body.style.overflow = "";
  photoTrigger?.focus();
}
document.getElementById("closePhoto").addEventListener("click", closePhotoLightbox);
photoLightbox.addEventListener("click", (event) => {
  if (event.target.dataset.photoClose) closePhotoLightbox();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && photoLightbox.classList.contains("visible")) closePhotoLightbox();
});

document.getElementById("replayButton").addEventListener("click", () => {
  giftOpened = false;
  giftBox.classList.remove("open");
  giftStage.classList.remove("open");
  document.querySelectorAll(".flame").forEach(flame => {
    flame.classList.remove("off");
    flame.textContent = "♨";
    flame.setAttribute("aria-label", "Apagar vela");
  });
  document.getElementById("inicio").scrollIntoView({ behavior: "smooth" });
});
