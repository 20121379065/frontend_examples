var count = 0
var connections = []


onconnect = function(msg) {
	console.log("connected")

	var port = msg.ports[0]
	connections[count] = port
    ++count



	port.postMessage({'msgText': "connected!"})

	port.onmessage = function(msg) {
		var i = 0
		for (; i!=connections.length; ++i) {
			connections[i].postMessage({
				msgText: "I love you, too. "
			})
		}
	}
}
