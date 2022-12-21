/** @param {NS} ns */
export async function main(ns) {

// Use this file like: ./maint.js server-name -t #
// Will take 1 arg for targeted server then maintain hacks, weakenings, and grow at optimal levels.

	while(true){
		const srv = ns.args[0];
		const srvSec = ns.getServerSecurityLevel(srv);
		const srvSecMin = ns.getServerMinSecurityLevel(srv);
		const srvFunds = ns.getServerMoneyAvailable(srv);
		const srvFundsMax = ns.getServerMaxMoney(srv);

		while(srvSec > srvSecMin + 1){
			await ns.weaken(srv)
		}

		while(srvFunds < srvFundsMax * 0.9){
			await ns.grow(srv)
		}

		await ns.hack(srv);
	}
}
