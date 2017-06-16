const settings = Meteor.settings.google;
console.log(settings);
if (settings) {
  ServiceConfiguration.configurations.remove({
    service: 'google'
  });

  ServiceConfiguration.configurations.insert({
    service: 'google',
    clientId: settings.clientId,
    secret: settings.secret
  });
}
