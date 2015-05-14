var isMoving : boolean = true;  //Must always be checked at start?

// Character automatically moves right, stops moving when it collides with an enemy
// Game logic.  Separate from input logic because the player gave input in StartAll script
function Move () {
	//Debug.Log(GameObject.position.x);
	// Move avatar forward constantly
	
	// Call in Update()
	if (isMoving == true) {
		//Debug.Log("Moving");
		transform.position.x += 0.05;
		}
	else {
		Stop();
		}
}

// Necessary?
function Stop() {
	//transform.position.x += 0;
	
	//Set moving=false
	isMoving=false;
	
	//Debug.Log("Not Moving...");
}
