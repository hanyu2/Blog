process.env.ROOT_URL = 'http://blog.han-yu.me:3000';

ServiceConfiguration.configurations.remove({
  service: 'google'
});

ServiceConfiguration.configurations.insert({
  service: 'google',
  clientId: "117054743738-hqs7vkc1o7vn0aji6ehimkd4br3ff32a.apps.googleusercontent.com",
  secret: "CguNZYjsNEWT_rgOlZndJYtS"
});
