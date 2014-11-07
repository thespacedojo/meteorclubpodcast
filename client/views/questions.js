var guestDetails = [
	{
		name: 'Sacha Greif',
		img: '/images/josh.png',
		url: 'http://google.com'
	}, 
	{
		name: 'Arunoda Susiripala',
		img: '/images/josh.png',
		url: 'http://google.com'
	}, 
	{
		name: 'Chris Mather',
		img: '/images/josh.png',
		url: 'http://google.com'
	},
	{
		name: 'Lorem Ipsum',
		img: '/images/josh.png',
		url: 'http://google.com'
	}
];

var videoDetails = [
	{
		featured: 1,
		month: 'Join us live on November 28th!',
		thumbnail: 'http://img.youtube.com/vi/VFgci7-xVc8/mqdefault.jpg',
		url: 'http://google.com',
		description: 'The next Meteor Q&A session will air live on November 28th at 6pm CST. Join Josh Owens and Chris Mathers as they talk about lorem ipsum dolor sit amet and answer your questions.'
	},
	{
		month: 'October 2014',
		thumbnail: 'http://img.youtube.com/vi/LqWbXQDXHC0/mqdefault.jpg',
		url: 'http://google.com',
		description: 'Special guest Arunoda Susiripala talks with Josh about lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione nemo, voluptates maiores, soluta deleniti minima at, inventore officiis in dolorem excepturi harum ducimus.'
	},
	{
		month: 'September 2014',
		thumbnail: 'http://img.youtube.com/vi/VFgci7-xVc8/mqdefault.jpg',
		url: 'http://google.com',
		description: 'Special guest Sacha Greif talks with Josh about lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione nemo, voluptates maiores, soluta deleniti minima at, inventore officiis in dolorem excepturi harum ducimus.'
	},
];

Template.questions.helpers({
	guests: guestDetails,
	videos: videoDetails
});