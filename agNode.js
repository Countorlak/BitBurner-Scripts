/** @param {NS} ns */
export async function main(ns) {

//	Version 0.0.0
//	Aggressive hacknet node maintainer.
//	Uses most or all money to keep the hacknet up to date.

	let funds = ns.getPlayer().money;
	let nodeCount = ns.hacknet.numNodes();
	let lvlCost = ns.hacknet.getLevelUpgradeCost();
	let ramCost = ns.hacknet.getRamUpgradeCost();
	let coreCost = ns.hacknet.getCoreUpgradeCost();
	let nodeCost = ns.hacknet.getPurchaseNodeCost();

	
}