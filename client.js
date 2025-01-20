const say = require('say');
//const Say = require('say').Say;
//const say = require('/var/www/annoyzak/node_modules/say');
//const say = new Say('mac');
//const say = require('../');
var server = require('http');
const port = 1236;

var htmlScript = '<!DOCTYPE html>'+
'<html>'+
'<body>'+
'<style>'+
'    @font-face {'+
'        font-family: "billibong";'+
'        src: url("billibong.woff");'+
'    }'+
'    p {'+
'        color: orange;'+
'        text-align: center;'+
'        font-size: 25px;'+
'        font-family: monospace'+
'    }'+
'    p1 {'+
'        color: orange;'+
'        font-size: 15px;'+
'        font-family: monospace;'+
'        text-align: center;'+
'    }'+
'    '+
'    h1 {'+
'        color: orange;'+
'        text-align: center;'+
'        text-decoration:none;'+
'        font-family: billibong;'+
'        font-size: 75px;'+
'    }'+
'    label {'+
'        text-align: center;'+
'        align-content: center;'+
'        align-items: center;'+
'        align-self: center;'+
'        color: orange;'+
'        font-family: billibong;'+
'        font-size: 45px;'+
'    }'+
'    #subButton {'+
'        width: 25em;'+
'    }'+
'    '+
'    body {'+
'        background-image: url("data:image/jpeg;base64,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");'+
'        background-size:cover;'+
'    }'+
'    '+
'    </style>'+
' '+
'<h1>Annoyzakbot</h1>'+
''+
'<p>Send a meesage to a speaker in zak\'s room</p>'+
'<center>'+
'    <p1>~quarantine vibes~</p1>'+
'    <form action="localhost" method="POST">'+
'        <label for="msg">Message:</label>'+
'        <input type="textArea" id="msg" name="msg" size="75" maxlength="100" max="100"><br><br>'+
'        <input type="submit" id="subButton" value="Send it">'+
'    </form>'+
'</center>'+
'    '+
''+
'</body>'+
'</html>';
	


say.speak("Welcome to the server");

function handler(req, res) {
	if(req.method == 'POST'){
	console.log("post request recieved");
	req.on('data',function(chuck) {
		var message = chuck.toString();
		//console.log(message);
        
        //message = message.substring(0, message.indexOf("&sig="));
        //message = message.toLowerCase();
        message = message.replace("msg=", "");
        while (message.indexOf("+") > -1) {
                message = message.replace("+", " ");
            }
        while (message.indexOf("%27") > -1) {
                message = message.replace("%27", "");
            }
        while (message.indexOf("%2C") > -1) {
                message = message.replace("%2C", ",");
            }
        while (message.indexOf("%92") > -1) {
                message = message.replace("%92", "'");
            }
        while (message.indexOf("%21") > -1) {
                message = message.replace("%21", "!");
            }
        while (message.indexOf("%3F") > -1) {
                message = message.replace("%3F", "?");
            }
        say.speak(message);
        console.log("New Message: " + message);
        //say.speak("done");
	});
}
	else {
		res.setHeader('Content-Type', 'text/html');
		res.writeHead(200);
		res.end(htmlScript);
	}
}

server.createServer(handler).listen(port,function(err){
	if(err) {
		console.log('error starting server');
	}else {
		console.log('server is working');
	};
});
