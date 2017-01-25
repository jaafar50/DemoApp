'use strict';

eventsApp.controller('EventController',
	function EventController($scope) {
		//Let us create an Event
		$scope.event= {

			name: 'Initiation au Parkour',
			date: '01/06/2017',
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
				upVoteCount: 0,
				abstract : 'Le Parkour conjugue sport, réflexion, créativité et perception avec expérience et maturité personnelles. Le but recherché: surmonter efficacement des obstacles'
			},
			{
				name: 'Passement rapide',
				coach: 'Tarik Yacoubi',
				duration: '1 heure',
				level: 'débutant',
				upVoteCount: 0,
				abstract : 'La technique de franchissement la plus rapide pour les obstacles de moyenne hauteur est acquise au cours de cet exerice. Elle permet d’économiser des forces.'
			},
			{
				name: 'Passe-muraille',
				coach: 'Tarik Yacoubi',
				duration: '1 heure',
				level: 'débutant',
				upVoteCount: 0,
				abstract : 'Cet exercice entraîne le franchissement d’obstacles d’une certaine hauteur. La confiance en soi est ainsi renforcée.'
			},
			{
				name: 'Saut de précision',
				coach: 'Tarik Yacoubi',
				duration: '1 heure',
				level: 'débutant',
				upVoteCount: 0,
				abstract : 'Un mouvement précis, un bon contrôle postural et de la concentration – trois aspects entraînés dans cet exercice – sont indispensables pour effectuer un tel saut.'
			},
			{
				name: 'Demi-tour',
				coach: 'Tarik Yacoubi',
				duration: '1 heure',
				level: 'débutant',
				upVoteCount: 0,
				abstract : 'Cet exercice cumule deux difficultés techniques: passer par-dessus un obstacle et atterir en contrebas.'
			},
			{
				name: 'Réception en douceur',
				coach: 'Tarik Yacoubi',
				duration: '1 heure',
				level: 'débutant',
				upVoteCount: 0,
				abstract : 'Cet exercice améliore la technique de réception afin de permettre un entraînement durable. L’objectif est de minimiser les risques sur la santé et de préparer les participants à soigner la réception dans d’autres disciplines sportives.'
			},
			{
				name: 'Reverse',
				coach: 'Tarik Yacoubi',
				duration: '1 heure',
				level: 'débutant',
				upVoteCount: 0,
				abstract : 'Grâce au reverse, les pratiquants apprennent à poursuivre leur chemin de manière sûre et précise après une rotation. Cet exercice exige une bonne orientation.'
			},
			{
				name: 'Passement latéral',
				coach: 'Tarik Yacoubi',
				duration: '1 heure',
				level: 'débutant',
				upVoteCount: 0,
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