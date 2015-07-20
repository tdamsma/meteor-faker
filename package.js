Package.describe({
    summary: "Faker.js packaged for Meteor. Generate massive amounts of fake data",
    name: "digilord:faker",
    version: "1.0.5",
    git: "https://github.com/digilord/meteor-faker.git"
});

Npm.depends({"faker": "3.0.0"});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
  api.use('coffeescript');
  api.add_files('faker.coffee', 'server');

  api.export('faker');
});
