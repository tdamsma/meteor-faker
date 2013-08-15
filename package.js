Package.describe({
    summary: "Faker.js packaged for Meteor. Generate massive amounts of fake data"
});

Npm.depends({Faker: "0.5.11"});

Package.on_use(function (api) {
    api.add_files('.npm/package/node_modules/Faker/MinFaker.js', 'client');
});