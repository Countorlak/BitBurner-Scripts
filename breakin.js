/** @param {NS} ns */
export async function main(ns) {

//	Version 1.0.0
//	Break in to target server and set up for take over.
	
	const target = ns.args[0];


	function setupNewServer(){
		if(ns.getServerMaxRam(target) > 0){
			ns.scp("maint.js", target, "home");
			ns.write("serverRecruits.txt", target + "\n", "a");
			ns.write("servers.txt", target + "\n", "a");
		} else {
			ns.write("servers.txt", target + "\n", "a");
		}
	}
	

//	Start
	if(ns.serverExists(target)){
		if (!ns.hasRootAccess(target)){
			let ports = ns.getServerNumPortsRequired(target);
			switch(ports){
				case 0:
					await ns.nuke(target);
					break;
				case 1:
					await ns.brutessh(target);
					await ns.nuke(target);
					break;
				case 2: 
					await ns.relaysmtp(target);
					await ns.brutessh(target);
					await ns.nuke(target);
					break;
				case 3:
					await ns.httpworm(target);
					await ns.relaysmtp(target);
					await ns.brutessh(target);
					await ns.nuke(target);
					break;
				case 4:
					await ns.sqlinject(target);
					await ns.httpworm(target);
					await ns.relaysmtp(target);
					await ns.brutessh(target);
					await ns.nuke(target);
					break;
				case 5:
					await ns.ftpcrack(target);
					await ns.sqlinject(target);
					await ns.httpworm(target);
					await ns.relaysmtp(target);
					await ns.brutessh(target);
					await ns.nuke(target);
					break;
				default:
					await ns.nuke(target);
					break;
			}
			setupNewServer();
		} else {ns.tprint("Root access already on server: ", target.toLocaleString());}
		
	} else {ns.tprint("Server does not exist: ", target.toLocaleString());}
}