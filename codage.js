// Chargement des images 
var imagePerso1 = new Image();
imagePerso1.src = "imagePerso1.jpg" ; 


var imagePerso2 = new Image();
imagePerso2.src = "pas encore d'image " ;

var imageMur = new Image();
imageMur.src = "lien_du_mur"  ;

// Récupération du Canvas 
var canvas = document.getElementById("canvas") ; 
var context = canvas.getContext("2d");

// Les var constante



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
//création de la classe Armes 
function Arme(nom, spriteArme)
{
	// Les Attributs
	this.sprite = spriteArme
	this.nom = nom ; 
	this.nbMunitions = 20 ; 
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
var systemJeu = 
{
	largeurCellule : canvas.width / 10 , 
	hauteurCellule : canvas.height / 10 
};
//Création de la maps par tableau a 2 Dimension 
var map = [] ; 
for (var i = 0 ; i < 10 ; i++)
{
	map.push([]);
	for(var j = 0 ;  j < 10 ; j++)
	{
		map[i].push(undefined);
	}
}
// Dessine le Damier du jeu
function dessineDamier()
{
	var largeur = canvas.width ; 
	var hauteur = canvas.height ;
	context.lineWidth = "1" ; 
	context.strokeStyle = "gold" ;
	
	var espaceLargeur = 50 ; 
	var espaceHauteur = 50 ; 
	
	// Dessine les trait Vertical 
	for(var i = 1; i < 10 ; i++)
	{
		context.moveTo( i * espaceLargeur , 0 );
		context.lineTo( i * espaceLargeur , canvas.height );
		context.stroke() ;
	}
	for(var i = 1; i < 10 ; i++)
	{
		context.moveTo(0 , i * espaceHauteur);
		context.lineTo( canvas.width , i * espaceHauteur) 
		context.stroke() ; 
	}
	
	/*context.moveTo(10 , 0) ;
	context.lineTo(10 , 20) ; 
	context.moveTo(0, 0);
	context.stroke();*/
}
function dessineElementDamier()
{
	for(var i = 0 ; i < 10 ; i++)
	{
		for(var j = 0 ; j < 10 ; j++)
		{
			if(map[i][j] != undefined)
			{
				// Cellune non vide, on peut dessiner le contenu
				context.drawImage(map[i][j].sprite , systemJeu.largeurCellule * i , systemJeu.hauteurCellule * j , systemJeu.largeurCellule, systemJeu.hauteurCellule)
			}
		}
	}
}
function updateEcran()
{
	context.fillStyle = "white" ; 
	context.fillRect(0, 0 , canvas.width, canvas.height);
	dessineDamier();
	dessineElementDamier();
}
// Creation des personalbar 
var arthur = new Personnage("Arthur" , imagePerso1) ; 

// TEST
map[2][5] = new Arme("Pistolet F22" , imagePerso1) ; 

updateEcran(); 








