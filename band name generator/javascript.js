var names = [
	'purple hickies',
	'textbook closet case',
	'nodding off',
	'acclamation point',
	'ambivalent acceptance',
	'unreliable marketing',
	'snark marks',
	'asterism',
	'self reliant voyeurism',
	'unbearable tragedy',
	'liminal deficiency',
	'terminal velocity',
	'pocket squanchers',
	'subtextual vengeance',
	'partial sedation',
	'soup factory',
	'percontation',
	'demonstration patience',
	'democratic demolition',
	'techno signature',
	'the delusions',
	'an open letter',
	'starlight reborn',
	'goldilocks zone',
	'ball pit wonders',
	'subliminal frequencies',
	'not this again',
	'same time next week',
	'interrobang',
	'chunks of everything',
	'immoral modification',
	'transient episodes',
	'chaotic violation',
	'piss kink bees',
	'the thistles',
	'rioters looters and thugs',
	'dead genders',
	'miss chex mix',
	'whole grain demon king',
	'regardless of explanation',
	'unexcused absences',
	'groin vault',
	'tail chaser',
	'glandular candle',
	'gifted kid burnout',
	'cunty attitudes',
	'auntie motel',
	'conventional complaining',
	'one person picnic',
	'basement pet',
	'rival finger',
	'these must see tears',
	'boogerfelt',
	'parasocial brainrot',
	'brainsmushers',
	'electro poptropica',
	'anywhy',
	'pretty soon',
	'mass destruction',
	'widespread panic',
	'hyperfixation penguin',
	'sulfur and skankery',
	'juice bag jar',
	'justified slaughter',
	'certified cruelty',
	'wreckage unclaimed',
	'coat hanger distortions',
	'resting bitch face',
	'giggle dirt',
	'traggotry',
	'nokia volcano',
	'the revolving doors',
	'flammable liquids',
	'clinical certainty',
	'virtual eternity'
	]

function newName() {
	var randomNumber = Math.floor(Math.random() * (names.length)); 
document.getElementById('nameDisplay').innerHTML = names[randomNumber];
}