function Arme(nom, spriteArme)
{
	// Les Attributs
	this.sprite = spriteArme
	this.nom = nom ; 
	this.nbMunitions = 20 ;
	this.nbMunitionsMax = 20 ; 
	
	// Les Methodes 
	this.utilise = function()
	{
		if(this.nbMunitions > 0)
		{
			this.nbMunitions-- ; 
			// Action de l'arme 
			console.log("Utilisation de l'arme ") ;
		}
		else
		{
			console.log("L'arme n'a plus de munitions ");
		}
	}
}