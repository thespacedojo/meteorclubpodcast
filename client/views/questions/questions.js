// array for special guests
var guestDetails = [
	{
		name: 'Sacha Greif',
		img: '/images/sacha.png',
		url: 'http://sachagreif.com'
	}, 
	{
		name: 'Arunoda Susiripala',
		img: '/images/arunoda.png',
		url: 'http://meteorhacks.com'
	}, 
	{
		name: 'Chris Mather',
		img: '/images/chrismather.png',
		url: 'http://eventedmind.com'
	},
	{
		name: 'Lorem Ipsum',
		img: '/images/josh.png',
		url: 'http://google.com'
	}
];

// array for video archive details
var videoDetails = [
	{
		upcoming: 1,
		month: 'November 2014',
		thumbnail: 'http://img.youtube.com/vi/VFgci7-xVc8/mqdefault.jpg',
		url: '/transcript',
		description: 'The next Meteor Q&A session will air live November 28th at 6pm CST. Join Josh Owens and Chris Mathers as they talk about lorem ipsum dolor sit amet and answer your questions.'
	},
	{
		month: 'October 2014',
		thumbnail: 'http://img.youtube.com/vi/LqWbXQDXHC0/mqdefault.jpg',
		url: '/transcript',
		description: 'Special guest Arunoda Susiripala talks with Josh about lorem draco dormiens nunquam titillandus ipsum dolor sit amet, consectetur adipisicing elit. Ratione nemo, voluptates maiores, soluta deleniti minima at, inventore officiis in dolorem excepturi harum ducimus.'
	},
	{
		month: 'September 2014',
		thumbnail: 'http://img.youtube.com/vi/VFgci7-xVc8/mqdefault.jpg',
		url: '/transcript',
		description: 'Special guest Sacha Greif talks with Josh about lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione nemo, voluptates maiores, soluta deleniti minima at, inventore officiis in dolorem excepturi harum ducimus.'
	},
];

Template.questions.helpers({
	guests: guestDetails,
	videos: videoDetails
});

Template.transcript.events({
	'click .goBack': function() {
		window.history.back();
	}
});