// Instantiate (duplicate) Enemy and children at GO(n+1) using GO counter

var source : GameObject;
  
function Next () {
	var objCounter : int = 1;
	var next : String = "Enemy" + ((objCounter+1).ToString());
	var emptyObj = GameObject.Find(next);
	var pos : Vector3 = emptyObj.transform.position;
	Debug.Log(pos);
	//var instance = Instantiate(source, pos ,transform.rotation);
	
	//Just move the dang thing?  Maybe it'll happen fast enough that the player
	//will think they destroyed it?  >_>;
	this.transform.position = pos;
	
	objCounter ++;
}
