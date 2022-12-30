/** @param {NS} ns */
export async function main(ns) {

//	Version 1.0.0
//	Uses other servers to target sites for manipulating that stock.
//	Handles it's own external servers.


	const target = ns.args[0];
	const externalServers = [];
	const js_hack = "stockHack.js";
	const js_grow = "stockGrow.js";


	function cpFile(file, srv){
		ns.scp(file, srv);
	}

	function deployServers(){
		if(externalServers.length > 0){
			externalServers.forEach(element => cpFile(js_grow, element));
			externalServers.forEach(element => cpFile(js_hack, element));
		} else {ns.tprint("No external servers set.")}
	}

	// TODO Find stock?
	// TODO Track stock.
	// TODO Trade stock!
	// TODO Cleanup/Interrupt/onExit?
	// TODO Track target server!
	// TODO Track external servers.
}