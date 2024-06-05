const quotes=[

{
    quote: "Não vemos as coisas como elas são, mas como nós somos.",    author: "Anaïs Nin" 
},
{
    quote: "A moral é a debilidade do cérebro.",
    author: "Arthur Rimbaud",
},
{
    quote: "O que realmente deixa um homem lisonjeado é o fato de você o considerar digno de adulação.",
    author: "Bernard Shaw",
},
{
    quote:"Não espero por oportunidades, crie você mesmo as suas.",
    author: "Henry Ford",
},
{
    quote:"Se expressarmos gratidão pelo que temos, teremos mais por que expressar gratidão.",
    author:"Desconhecido",
},
{
    quote:"Acorde todas as manhãs com um sorriso. Esta é mais uma oportunidade que você tem para ser feliz. Seja seu próprio motor de ignição. O dia de hoje jamais voltará .... Não o desperdice!!!",
    author:"Roberto Shinyashiki"
},
{
    quote:"Só há felicidade se não exigirmos nada do amanhã e aceitarmos do hoje, com gratidão, o que nos trouxer. A hora mágica chega sempre.",
    author:"Hermann Hesse",
},
{
    quote:"Quando seu coração está pleno de gratidão, qualquer porta aparentemente fechada pode ser uma abertura para uma bênção maior.",
    author:"Osho",
},
];

const quoteBtn = document.querySelector("#quoteBtn")
const quoteText = document.querySelector(".text")
const quoteAuthor = document.querySelector(".author")


function getQuote(){
    const index = Math.floor(Math.random() * quotes.length);

    quoteText.textContent = quotes[index].quote;
    quoteAuthor.textContent = quotes[index].author;
}

quoteBtn.addEventListener("click", getQuote);