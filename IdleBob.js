// Game Object bobs gently up and down continuously
// Output logic

function Bobbing () {
	//Debug.Log("Bobbing");
	while (true){
		// Bob up
		// U was hard coded, so values make no sense now
		for (var u : float = 6.4; u<7; u+=0.01) {
			transform.position.y += 0.01; 
			yield; }
		// Bob down
		for (var d : float = 7; d>6.4; d-=0.01) {
			transform.position.y -= 0.01; 
			yield; }
			}
}
