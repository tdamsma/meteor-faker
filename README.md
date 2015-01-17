meteor-faker
============

faker.js packaged for Meteor. Generate massive amounts of fake data

faker Documentation: https://github.com/Marak/faker.js

### Installation
     
 Install faker
 
     meteor add digilord:faker

### Meteor Usage (server only)
When using faker on the server you need to add the `Npm.require(...)` line.

	// Create in 25 fake users.
	var faker = Npm.require('faker');
	// If the user count ever falls below 25 this code will
	// make sure that you ALWAYS have 25 fresh users to
	// do with what you will. Be sure to place this
	// in your Meteor.startup or a Tracker.deps block
	if(Meteor.users.find().count() < 25){
	  _.each(_.range(25), function(){
	    var randomEmail = faker.Internet.email();
	    var randomName = faker.Name.findName();
	    var userName = faker.Internet.userName();
	    Accounts.createUser({
	      username: userName,
	      profile: {
	        name: randomName,
	      },
	      email: randomEmail,
	      password: 'password'
	    });
	  });
	}

---
## License

### This Package
The MIT License (MIT)

Copyright &copy; 2015 D. Allen Morrigan

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

###faker.js
https://github.com/Marak/faker.js/blob/master/MIT-LICENSE.txt

## Donating
By donating you are supporting this package and its developer so that he may continue to bring you updates to this and other software he maintains.

[![Support us via Gittip][gittip-badge]][digilord]

[gittip-badge]: https://rawgithub.com/digilord/gittip-badge/master/dist/gittip.png
[digilord]: https://www.gittip.com/digilord/

[![endorse](https://api.coderwall.com/digilord/endorsecount.png)](https://coderwall.com/digilord)


