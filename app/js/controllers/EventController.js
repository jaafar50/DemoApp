'use strict';

eventsApp.controller('EventController',
	function EventController($scope) {
		//Let us create an Event
		$scope.sortorder='name'; // to filter the ng-repeat directive ordered by name. THE ORDER OF SESSIONS IS BY ALPHABETICAL ORDER... WE CANN ORDER BY NUMBER OF PARTICIPANTS...
		$scope.boolValue= true;
		$scope.mystyle = {}; // add the css you want
		$scope.buttonDisabled= true; // add <button class="btn" ng-disabled="buttonDisabled">
		$scope.myclass= ""; // define a blue class in app.css and call the class here and go to html and put ng-class myclass
		$scope.event= {

			name: 'Initiation au Parkour',
			date: '1497547800000',
			time: '10:30 am',
			location: {
				address: 'Jardins des Tuileries',
				city: "Paris",
				province: "France"
			},
			imageUrl: '/img/angularjs-logo.png',
			sessions:[
			{
				name: 'Introduction au Parkour',
				coach: 'Tarik Yacoubi',
				duration: '1 heure',
				level: 'débutant',
				price : 10,
				upVoteCount: 6,
				abstract : 'Le Parkour conjugue sport, réflexion, créativité et perception avec expérience et maturité personnelles. Le but recherché: surmonter efficacement des obstacles'
			},
			{
				name: 'Passement rapide',
				coach: 'Tarik Yacoubi',
				duration: '1 heure',
				price : 10,
				level: 'professionnel',
				upVoteCount: 2,
				abstract : 'La technique de franchissement la plus rapide pour les obstacles de moyenne hauteur est acquise au cours de cet exerice. Elle permet d’économiser des forces.'
			},
			{
				name: 'Passe-muraille',
				coach: 'Assane Thiam',
				duration: '1 heure',
				level: 'débutant',
				price : 8,
				upVoteCount: 1,
				abstract : 'Cet exercice entraîne le franchissement d’obstacles d’une certaine hauteur. La confiance en soi est ainsi renforcée.'
			},
			{
				name: 'Saut de précision',
				coach: 'Assane Thiam',
				duration: '1 heure',
				level: 'professionnel',
				price : 8,
				upVoteCount: 15,
				abstract : 'Un mouvement précis, un bon contrôle postural et de la concentration – trois aspects entraînés dans cet exercice – sont indispensables pour effectuer un tel saut.'
			},
			{
				name: 'Demi-tour',
				coach: 'Tarik Yacoubi',
				duration: '1 heure',
				level: 'débutant',
				price : 8,
				upVoteCount: 23,
				abstract : 'Cet exercice cumule deux difficultés techniques: passer par-dessus un obstacle et atterir en contrebas.'
			},
			{
				name: 'Réception en douceur',
				coach: 'Tarik Yacoubi',
				duration: '1 heure',
				level: 'débutant',
				price : 7,
				upVoteCount: 6,
				abstract : 'Cet exercice améliore la technique de réception afin de permettre un entraînement durable. L’objectif est de minimiser les risques sur la santé et de préparer les participants à soigner la réception dans d’autres disciplines sportives.'
			},
			{
				name: 'Reverse',
				coach: 'Assane Thiam',
				duration: '1 heure',
				level: 'professionnel',
				price : 8,
				upVoteCount: 10,
				abstract : 'Grâce au reverse, les pratiquants apprennent à poursuivre leur chemin de manière sûre et précise après une rotation. Cet exercice exige une bonne orientation.'
			},
			{
				name: 'Passement latéral',
				coach: 'Tarik Yacoubi',
				duration: '1 heure',
				price : 8,
				level: 'professionnel',
				upVoteCount: 3,
				abstract : 'Avec cet exercice, les traceurs acquièrent une des techniques les plus sûres pour franchir les murs et balustrades: le passement latéral.'
			}

			]

		}


		$scope.upVoteSession = function(session) {
			session.upVoteCount++;
		};
		$scope.downVoteSession = function(session) {
			session.upVoteCount--;
		};

	}	);