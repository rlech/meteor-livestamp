Package.describe({
  name:"rlech:livestamp",
  summary: "jQuery plugin providing auto-updating timeago text to your timestamped HTML elements using Moment.js",
  version: "1.0.0",
  git: "https://github.com/rlech/meteor-livestamp.git"
});


Package.onUse(function (api, where) {
  api.versionsFrom("METEOR@0.9.0");

  api.use(['templating', 'underscore', 'jeeeyul:moment-with-langs@2.10.6'], 'client');

  api.export('livestamp');

  api.addFiles(['lib/livestamp/livestamp.min.js', 'export-livestamp.js', 'helpers.js'], 'client');
});
