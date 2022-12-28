/** @param {NS} ns */
export async function main(ns) {

// Version 1.0.1
// Use this file like: ./maint.js server-name -t #
// Will take 1 arg for targeted server then maintain hacks, weakenings, and grow at optimal levels.

	while(true){
		let srv = ns.args[0];
		let srvSec = ns.getServerSecurityLevel(srv);
		const srvSecMin = ns.getServerMinSecurityLevel(srv);
		let srvFunds = ns.getServerMoneyAvailable(srv);
		const srvFundsMax = ns.getServerMaxMoney(srv);

		while(srvSec > srvSecMin + 1){
			await ns.weaken(srv);
		}

		while(srvFunds < srvFundsMax * 0.9){
			await ns.grow(srv);
		}

		await ns.hack(srv);
	}
}
