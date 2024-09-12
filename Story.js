export let newStory = [
  // 0
  {
    header: "Ved døren",
    description:
      "Du står ved døren. Det er højslys dag og der er summen af biler i det fjerne.",
    choices: [
      { text: "Du kan banke på?", nextState: 1 },
      { text: "Begynd at synge", nextState: 2 },
    ],
    imgUrl: "./images/shoe.webp",
  },
  // 1
  {
    header: "Hej Hanne",
    description:
      "Du banker på. Hanne åbner og byder dig velkommen indenfor. Inde i stuen taler i om vind og vejr.",
    choices: [
      { text: "Vil du gerne invitere hende på museum", nextState: 3 },
      { text: "Vil du invitere hende til markræs", nextState: 4 },
    ],
    imgUrl: "./images/fish.jpg",
  },
  // 2
  {
    header: "Synger",
    description:
      "Du begynder at synge. Naboen åbner vinduet og beder dig om at holde kæft. Du får kastet en sko i hovedet og fåret blåt mærke. Vil du banke på døren (1) eller gå hjem (2)",
    choices: [1, 5],
    imgUrl:
      "https://bonenenbiet.nl/wp-content/uploads/2020/05/Canva-falafel-on-lettuce-with-tzatziki-sauce-close-up-horizontal-scaled.jpg",
  },
  // 3
  {
    header: "Fedt med museum",
    description: "Hanne er vild med idéen om museum.",
    choices: [-1],
    imgUrl: "fish.jpg",
  },
  // 4
  {
    header: "Not So Nice :(",
    description: "Hanne er ikke udelt begejstret for markræs",
    choices: [-1],
    imgUrl: "fish.jpg",
  },
  // 5
  {
    header: "Øst, vest ...",
    description: "Du er gået hjem",
    choices: [-1],
    imgUrl: "fish.jpg",
  },
];
