/** @param {NS} ns */
export async function main(ns) {

// Version 1.0.0
// Deploy specified file to list of servers in servers.txt.
// Usage: ./deploy.js file-name


	const file = ns.args[0];
	const serverArray = tokenize();


	function eachServer(srv){
		if(ns.serverExists(srv)){
			ns.scp(file, srv);
		}
	}

	// Read file and create a token per line.
	function tokenize(){
		let contents = ns.read("servers.txt");
		let tokens = contents.split("\n");
		return tokens;
	}


	serverArray.forEach(element => eachServer(element));	
}