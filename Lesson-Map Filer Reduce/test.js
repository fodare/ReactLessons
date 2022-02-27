import emojipedia from "./emojipedia.js";

var description = emojipedia.map((emoji) => emoji.meaning.substring(0, 100));
console.log(description);
