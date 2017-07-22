//Création de la classe Personnage
function Personnage(nom , spritePerso)
{
	// initialisation des attributs  par défauts 
	this.vie = 100 ; 
	this.vieMax = 100
	this.mana = 50 ; 
	this.manaMax = 100 ; 
	this.force = 10 ; 
	this.defense = 5 ; 
	this.nom = nom ;
	this.sprite = spritePerso ; 
	this.arme = undefined ; 
	this.nbDeplacementMax = 10 ; 
	this.nbDeplacement = 10 ;
	this.nbAction = 6 ; 
	this.nbActionMax = 6 ; 
	this.positionX = 0 ; 
	this.positionY = 0 ; 
	this.sonTour = false ; 
	
	// définition des méthodes
	this.recevoirDegats = function(puissance)
	{
		var pointEnleve = puissance / this.defense ; 
		console.log("le Personage " + this.nom + " a perdu " + pointEnleve + "HP") ;
		this.vie -= pointEnleve ; 
	}
	this.attaquer = function(cible)  // supprimer par d'interrer de procéder comme ça
	{
		cible.recevoirDegats(this.force) ; 
		console.log(this.nom + " attaque " + cible.nom + " !!!") ; 
	}
	this.moveTop = function()
	{
		if(this.nbDeplacement > 0)
		{
			
			//Action du deplacement
			var caseSuivante = map[this.positionX][this.positionY - 1] ; 
			if( this.positionY - 1 >= 0)
			{
				// Case vide on peut effectuer le deplacement
				if(actionCaseSuivante(caseSuivante))
				{	
					map[this.positionX][this.positionY] = undefined ; 
					this.positionY -= 1 ; 
					this.placementMap() ;
					this.nbDeplacement--;
					updateEcran() ; 
				}
			}
		}
		else
			console.log("plus de point de deplacement");
	}
	this.moveDown = function()
	{
		if(this.nbDeplacement > 0 )
		{
			//Action du deplacement
			var caseSuivante = map[this.positionX][this.positionY - 1] ; 
			if( this.positionY + 1 < 10)
			{
				// Case vide on peut effectuer le deplacement
				if(actionCaseSuivante(caseSuivante))
				{
					map[this.positionX][this.positionY] = undefined ; 
					this.positionY += 1 ; 
					this.placementMap() ;
					this.nbDeplacement--;
					updateEcran() ;
				}
			}
		}
		else
			console.log("plus de points de deplacement pour bouger ");
	}
	//Action de la case suivannte 
	function actionCaseSuivante(caseSuivante)
	{
		if (typeof caseSuivante != "undefined")
		{
			
			if(caseSuivante instanceof Personnage)
			{
				//Action si la case suivante est un personnage
				console.log("Imposible, un personnage occupe deja cette case") ; 
				return false ;
			}
			if(caseSuivante instanceof Arme)
			{
				// Récupération de l'arme par le personange
				this.arme = caseSuivante ; 
				console.log(this.nom + " a récupé " + this.arme.nom + " !") ;
				return true ;
			}
			if(caseSuivante instanceof Mur)
			{
				// Action si Mur bloque le passage
				console.log("deplacement imposible, un mur bloque le passage ");
				return false ; 
			}
		}
		else
		{
			// rien sur la case 
			return true ; 
		}
		
	}
	this.moveRight = function()
	{
		if(this.nbDeplacement > 0 )
		{
			//Action du deplacement
			var caseSuivante = map[this.positionX + 1][this.positionY] ; 
			if(this.positionX + 1 < 10)
			{
				if(actionCaseSuivante(caseSuivante))
				{
					// Case vide on peut effectuer le deplacement
					map[this.positionX][this.positionY] = undefined ; 
					this.positionX += 1 ; 
					this.placementMap() ;
					this.nbDeplacement--;
					updateEcran() ; 
				}
			}
		}
		else
			console.log("plus de point de mouvement ")  ;
	}
	this.moveLeft = function()
	{
		if(this.nbDeplacement > 0 )
		{
			//Action du deplacement
			var caseSuivante = map[this.positionX - 1][this.positionY] ; 
			if(this.positionX - 1 >= 0)
			{
				if(actionCaseSuivante(caseSuivante))
				{
					// Case vide on peut effectuer le deplacement
					map[this.positionX][this.positionY] = undefined ; 
					this.positionX -= 1 ; 
					this.placementMap() ;
					this.nbDeplacement--;
					updateEcran() ; 
				}
			}
		}
		else
			console.log("plus de points de deplacement ") ; 
	}
	this.placementMap = function()
	{
		map[this.positionX][this.positionY] = this ; 
	}
	this.finDuTour = function()
	{
		//On remet le nombre de deplacement et d'action 
		this.nbDeplacement = this.nbDeplacementMax ; 
		this.nbAction = this.nbActionMax  ; 
		this.sonTour = false ;
	}
	this.attaquerTop = function()
	{
		if(nbAction >= 1)
		{
			nbAction-- ; 
			// Verification de la case cible
			caseCible = map[this.positionX][this.positionY - 1]
			if(caseCible = typeof Personnage)
			{
				// c'est un personnage, ont peut attaquerTop
				this.attaque(caseCible) ;
			}
				
		}
	}
	//Action du construteur
	this.placementMap();
	
}