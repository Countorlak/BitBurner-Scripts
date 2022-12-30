/** @param {NS} ns */
export async function main(ns) {

// Version 1.0.0
// Buy a server with specified name.
// Usage: ./buysrv.js server-name

	const name = ns.args[0];
	const size = 1048576;
	let funds = ns.getPlayer().money;

	if(funds > ns.getPurchasedServerCost(size)){
		ns.purchaseServer(name, size);
		ns.tprint("Bought server ", name);
	} else {ns.tprint("Not enough funds to buy server: ", name);}
}