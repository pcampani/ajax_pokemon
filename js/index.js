$(document).ready(function(){
	var promise = $.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151");
	promise.done(function(data){
		data.results.forEach(pokemon => {
			var pokemon = $.get(pokemon.url);
			pokemon.done(function(poke){
				$(".pokemon").append(`<img src="${poke.sprites.front_default}">`);
			})
		})
	})
})