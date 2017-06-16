const settings = Meteor.settings.google;
console.log(settings);
if (settings) {
  ServiceConfiguration.configurations.remove({
    service: 'google'
  });

  ServiceConfiguration.configurations.insert({
    service: 'google',
    clientId: "117054743738-hqs7vkc1o7vn0aji6ehimkd4br3ff32a.apps.googleusercontent.com",
    secret: "CguNZYjsNEWT_rgOlZndJYtS"
  });
}
