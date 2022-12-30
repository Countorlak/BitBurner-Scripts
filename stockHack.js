/** @param {NS} ns */
export async function main(ns) {

//	Version 1.0.0
//	Crude hack program meant for deployment by autoStocks.js

	const srv = ns.args[0];

	while(true){
		await ns.hack(srv, {stock=true});
	}

}