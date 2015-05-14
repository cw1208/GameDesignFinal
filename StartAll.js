// Input logic upon player starting game
function Start () {
	// Old Move() call
	//GetComponent("CharMover").Move();
	
	// Call EyeRoll script to roll the eyeball sprite/avatar
	GameObject.FindWithTag("PlayerSprite").GetComponent("EyeRoll").Rolling();
	GameObject.FindWithTag("EnemySprite").GetComponent("IdleBob").Bobbing();
	//Debug.Log("Start");
	
}

function Update() {
	GetComponent("CharMover2").Move();
	//Call collider/trigger behavior...somewhere else...
	}
