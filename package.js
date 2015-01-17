Package.describe({
    summary: "Faker.js packaged for Meteor. Generate massive amounts of fake data",
    name: "digilord:faker",
    version: "1.0.2",
    git: "https://github.com/digilord/meteor-faker.git"
});

Npm.depends({"faker": "2.1.2"});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
});