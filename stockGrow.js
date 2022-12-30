/** @param {NS} ns */
export async function main(ns) {

//	Version 1.0.0
//	Crude script to be deployed by autoStocks.js

	const srv = ns.args[0];

	while(true){
		await ns.grow(srv, {stock=true});
	}
}