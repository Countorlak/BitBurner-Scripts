/** @param {NS} ns */
export async function main(ns) {

// Version 1.0.0
// Deploy specified file to list of servers in servers.txt.
// Usage: ./deployMaint.js file-name


	const file = ns.args[0];
	const serverArray = tokenize();


	function eachServer(srv){
		if(ns.getServerMaxRam(srv) > 0 && ns.hasRootAccess(srv)){
			ns.scp(file, srv);
		} else {ns.tprint(srv)}
	}

	// Read file and create a token per line.
	function tokenize(){
		let contents = ns.read("serverRecruits.txt");
		let tokens = contents.split("\n");
		return tokens;
	}


//	Start
	serverArray.forEach(element => eachServer(element));	
}