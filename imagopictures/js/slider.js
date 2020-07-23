//Initialisation des différents sliders. 
$(document).ready(function(){
let s  = new slider ("#galerie");
let s2 = new slider ("#galerie2");
let s3 = new slider ("#galerie3");
let s4 = new slider ("#galerie4");
});

let slider = function (id){
	let self = this;
	this.div = $(id);
	this.slider = this.div.find(".slider");
	this.largeurCache = this.div.width();
	this.largeur = 0;
	
	this.div.find("iframe").each(function(){
		self.largeur += $(this).width();
		self.largeur += parseInt($(this).css("padding-left"));
		self.largeur += parseInt($(this).css("padding-right"));
		self.largeur += parseInt($(this).css("margin-left"));
		self.largeur += parseInt($(this).css("margin-right"));
	});

		this.prec = this.div.find(".prec");
		this.suiv = this.div.find(".suiv");
// Vidéos centrée au clique précédent ou suivant. 
		this.saut = this.largeurCache/1.1;
// Nombre de décalage possible d'un vidéo à l'autre.
// On ajoute '-1' annuler le dernier décalage
		this.nbEtapes = Math.ceil(this.largeur/this.saut - this.largeurCache/this.saut -1);
		this.courant = 0;
			
// Fonction du bouton suivant.
			this.suiv.click(function(){
				if(self.courant <= self.nbEtapes){
				self.courant++;
				self.slider.animate({
					left:-self.courant * self.saut
				},1000);
				}
			})
// Fonction du bouton précédent.
			this.prec.click(function(){
				if(self.courant > 0){
				self.courant--;
				self.slider.animate({
					left:-self.courant * self.saut
				},1000);
				}
			})
}