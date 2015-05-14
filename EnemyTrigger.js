// Char stops moving forward when enemy is triggered

function OnTriggerEnter2D (other: Collider2D) {
	//Debug.Log("Triggered stop");
	GameObject.FindWithTag("Player").GetComponent("CharMover2").Stop();
	
	//Asplode?
	//Or blink and destroy...
	//GameObject.FindWithTag("EnemySprite").GetComponent("SpriteBlink").Blink();
	GameObject.FindWithTag("Pewpew").GetComponent("explode").StartExplode();
	yield WaitForSeconds(1.5);
	
	
	//GameObject.FindWithTag("Player").GetComponent("DupEnemy").Next();
	GameObject.FindWithTag("Enemy").GetComponent("DupEnemy").Next();
	//GameObject.Destroy(gameObject);
	
	GameObject.FindWithTag("Player").GetComponent("CharMover2").isMoving = true;
}
