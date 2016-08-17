require('es6-promise').polyfill();
require('isomorphic-fetch');

/*
*	Api Call Example.
*/

export const fetchTracks = text =>
fetch(`https://api.spotify.com/v1/search?q=${text}&type=track`)
	.then(res => res.json())
	.then(({ tracks }) => tracks)
	.then(({ items }) => items);