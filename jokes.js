const list_jokes = [
   " Why don't scientists trust atoms? Because they make up everything!",

"How do you organize a space party? You planet!",

"Why don't skeletons fight each other? They don't have the guts.",

"Parallel lines have so much in common. It's a shame they'll never meet.",

"Did you hear about the claustrophobic astronaut? He just needed a little space.",

"I told my wife she was drawing her eyebrows too high. She looked surprised.",

"What do you call a bear with no teeth? A gummy bear.",

"I used to play piano by ear, but now I use my hands.",

"Did you hear about the cheese factory that exploded? There was nothing left but de-brie.",

"Why did the scarecrow win an award? Because he was outstanding in his field.",

"How does a penguin build its house? Igloos it together!",

"I'm reading a book on anti-gravity. It's impossible to put down.",

"Why did the bicycle fall over? Because it was two-tired.",

"What did one wall say to the other wall? I'll meet you at the corner.",

"Why couldn't the leopard play hide and seek? Because he was always spotted.",

"I asked the librarian if they had books on paranoia. She whispered, They're right behind you.",

"Parallel lines have so much in common. It's a shame they'll never meet.",

"Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",

"What did one ocean say to the other ocean? Nothing, they just waved.",

"Why did the tomato turn red? Because it saw the salad dressing!",

"Why don't oysters donate to charity? Because they are shellfish!",

"I used to be a baker, but I couldn't make enough dough.",

"Why did the golfer bring two pairs of pants? In case he got a hole in one!",

"How do you make holy water? You boil the hell out of it.",

"Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",

"I told my wife she was drawing her eyebrows too high. She looked surprised.",

"What did the janitor say when he jumped out of the closet? Supplies! ",

"Did you hear about the guy who invented Lifesavers? He made a mint.",
]


const generator_bottom = document.getElementById("jokebtn");
const joke = document.querySelector(".list_joke");


generateRandomNumber = () => {
    return Math.floor(Math.random()*list_jokes.length);
}

jokebtn.addEventListener("click" , () => {
    joke.textContent = list_jokes[generateRandomNumber()];
})
