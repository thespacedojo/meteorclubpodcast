Episodes.remove({});
if (Episodes.find().count() === 0) {

  Episodes.insert({
    spotlight: 1,
    title: "Episode 42: Node Forking Edition",
    date: 'December 5, 2014',
    description: "Join Josh Owens and special guest co-host Chris Nelson as they talk about all the Meteor news this week, including Node Forking, the Post-1.0 Meteor Roadmap, top mistakes Meteor devs make, data from scraping a bunch of Meteor apps, and Meteor + Polymer."
  });

  Episodes.insert({
    title: "Episode 41: The Polymer discussions",
    date: 'November 21, 2014',
    description: "Join Josh Owens and Ry Walker for all the meteor.js news fit to talk about this week."
  });

  Episodes.insert({
    title: "Episode 40: Worldwide Meteor Day",
    date: 'November 14, 2014',
    description: "Join Josh and Greg as they talk about all the Meteor.js news that happen over the last *two weeks* since travel and Meteor Day got in the way of our regular episode."
  });

  Episodes.insert({
    title: "Episode 39: Meteor 1.0!",
    date: 'October 31, 2014',
    description: "Join Josh Owens and Ry Walker as they talk about Meteor turning 1, a meteor boilerplate, Velocity 1.0 rc1, Prerender.io package, and animated mobile route transitions with Iron Router and Ratchet."
  });

  Episodes.insert({
    title: "Episode 38: Lorem ipsum dolor",
    date: 'October 27, 2014',
    description: "Join Josh Owens and special guest co-host Chris Nelson as they talk about all the Meteor news this week, including Node Forking, the Post-1.0 Meteor Roadmap, top mistakes Meteor devs make, data from scraping a bunch of Meteor apps, and Meteor + Polymer."
  });

  Episodes.insert({
    title: "Episode 37: Lorem ipsum dolor sit amet draco",
    date: 'October 17, 2014',
    description: "Join Josh Owens and Ry Walker, along with special guest Dean Radcliff, as they talk about the latest Meteor.js news this week, including Meteor Security 101, Meteor 0.9.4, and Meteor Day."
  });
}