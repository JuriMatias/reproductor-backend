let Vimeo = require('vimeo').Vimeo;
let client = new Vimeo("c5bae41cc8502a049bbad016a6bf2c9561fd9378", "Yzx3n4s3g2C+HZTomoowT3UHP37pmrXl+pqGnVw5KQxbDIeSDObZQwvsGigXxL8uGwbtzSH702hTrleym/AIUJXqMjqXXjSSvn7K7SIpz/q+LzJJXFrBkbCvngZ3KVMq", "f7a5101ce44b9cd525548678abe72652");

client.request({
  method: 'GET',
  path: '/tutorial'
}, function (error, body, status_code, headers) {
  if (error) {
    console.log(error);
  }

  console.log(body);
});




let file_name = "{path_to_a_video_on_the_file_system}"
client.upload(
  file_name,
  {
    'name': 'Untitled',
    'description': 'The description goes here.'
  },
  function (uri) {
    console.log('Your video URI is: ' + uri);
  },
  function (bytes_uploaded, bytes_total) {
    var percentage = (bytes_uploaded / bytes_total * 100).toFixed(2)
    console.log(bytes_uploaded, bytes_total, percentage + '%')
  },
  function (error) {
    console.log('Failed because: ' + error)
  }
)