self.addEventListener('fetch', function(event) {
    console.log('-------------------------');
    console.log(event.request.url);
  });