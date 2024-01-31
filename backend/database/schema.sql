-- Creation

-- User table
CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    profile_picture VARCHAR(500) DEFAULT 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
    registration_date DATETIME NOT NULL DEFAULT NOW()
);

-- Article table
CREATE TABLE article (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author VARCHAR(255) NOT NULL,
    source VARCHAR(255) NOT NULL,
    publication_date DATETIME NOT NULL DEFAULT NOW()
    
);

-- User_Article table
CREATE TABLE user_article (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    user_id INT,
    article_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (article_id) REFERENCES article(id)
);

-- Post table
CREATE TABLE post (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    creation_date DATETIME NOT NULL DEFAULT NOW(),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

-- Comment table
CREATE TABLE comment (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    content TEXT NOT NULL,
    creation_date DATETIME NOT NULL DEFAULT NOW(),
    user_id INT,
    post_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (post_id) REFERENCES post(id)
);

-- Insertion

INSERT INTO user (username, email, password, profile_picture) VALUES 
("Deach","AgricanLandry@jourrapide.com","phu8ufohT","https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"),
("Inking","AubertGaudreau@jourrapide.com","naekuc8Chei","https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Kurt&hairColor=SilverGray&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=UpDown&mouthType=Vomit&skinColor=DarkBrown"),
("Congs","AugusteDesMeaux@teleworm.us","ahPhadooy1nai","https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Kurt&hatColor=Black&facialHairType=BeardMedium&facialHairColor=Platinum&clotheType=ShirtVNeck&clotheColor=Blue03&eyeType=Side&eyebrowType=Default&mouthType=Disbelief&skinColor=DarkBrown"),
("Sombled","DexterLandry@armyspy.com","boigai0IePe6","https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Prescription02&hatColor=Blue03&hairColor=Blonde&facialHairType=MoustacheFancy&facialHairColor=Auburn&clotheType=ShirtScoopNeck&clotheColor=Gray01&eyeType=Surprised&eyebrowType=AngryNatural&mouthType=Concerned&skinColor=Pale"),
("Thenteavill","GranvilleLaforge@armyspy.com","ahjadael4E","https://avataaars.io/?avatarStyle=Circle&topType=LongHairDreads&accessoriesType=Blank&hairColor=BrownDark&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Red&eyeType=Squint&eyebrowType=UpDownNatural&mouthType=ScreamOpen&skinColor=Yellow"),
("Thaving00","BrigliadorRoyer@jourrapide.com","ohGiebeat8","https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Prescription01&hairColor=Black&facialHairType=Blank&facialHairColor=BlondeGolden&clotheType=ShirtVNeck&clotheColor=Gray02&eyeType=Hearts&eyebrowType=Default&mouthType=Eating&skinColor=Light"),
("Wasm","HarbinTrepanier@armyspy.com","ebahDaeD1ai","https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortRound&accessoriesType=Blank&hairColor=Brown&facialHairType=Blank&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray02&eyeType=WinkWacky&eyebrowType=SadConcerned&mouthType=Twinkle&skinColor=Pale"),
("Hadight","AgricanChauvet@dayrep.com","yoo9eSi1ve0","https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Prescription02&facialHairType=BeardLight&facialHairColor=Red&clotheType=ShirtCrewNeck&clotheColor=PastelBlue&eyeType=Wink&eyebrowType=FlatNatural&mouthType=Vomit&skinColor=Yellow"),
("Shersonect","OliverDesnoyer@teleworm.us","haemae5aeGh","https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesarSidePart&accessoriesType=Blank&hatColor=PastelRed&hairColor=Red&facialHairType=BeardMajestic&facialHairColor=Black&clotheType=Hoodie&clotheColor=Red&eyeType=Wink&eyebrowType=Default&mouthType=Smile&skinColor=Tanned"),
("Pundsovers","ArchaimbauLeroux@armyspy.com","EiQu8uzeeph","https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Round&hairColor=Blue&facialHairType=MoustacheMagnum&facialHairColor=BlondeGolden&clotheType=ShirtCrewNeck&clotheColor=PastelYellow&eyeType=Dizzy&eyebrowType=Default&mouthType=Smile&skinColor=Light");

INSERT INTO article (title, image, content, author, source) VALUES 
("Wall Street termine contrastée peu avant des résultats de la tech","https://s.france24.com/media/display/bbf61012-6cf6-11ee-902e-005056a90321/w:980/p:16x9/Part-GTY-1739117362-1-1-0.webp","La Bourse de New York a terminé sur une note contrastée mardi, le Nasdaq se repliant en attendant les résultats de mégacapitalisations de la technologie tombés après la clôture des échanges. L'indice Dow Jones a grappillé 0,35%, ce qui lui a permis d'atteindre un nouveau plus haut. Le Nasdaq, à forte coloration technologique, s'est replié de 0,76% et le S&P 500 de 0,06%, selon des résultats provisoires.","New York (AFP)","https://www.france24.com/fr/info-en-continu/20240130-wall-street-termine-contrast%C3%A9e-peu-avant-des-r%C3%A9sultats-de-la-tech"),
("Tech for Future 2024 : les 6 lauréats en Nouvelle-Aquitaine","https://www.frenchtechbordeaux.com/wp-content/uploads/2024/01/tech-for-future-2024-bordeaux.jpg","Organisé par La Tribune, le concours national Tech For Future récompense chaque année des startups à travers toute la France. Voici les six startups lauréates de l’étape Nouvelle-Aquitaine.
Tech For Future part à la recherche des startups qui répondront aux grands défis économiques, sociétaux et climatiques de la décennie à venir. A la clé : 100.000 euros d’espaces publicitaires, un portrait dans La Tribune, la possibilité de passer sur BFM Business, un an d’abonnement à France Digitale, un accès gratuit au France Digitale Day, et le prestige d’un prix national soutenu par l’ensemble de l’écosystème tech, qui a découvert depuis 12 ans de nombreuses pépites devenues des champions à l’image de Doctolib, Dataiku, Exotec, Leetchi ou ManoMano, entre autres.
Tech For Future a poursuivi le vendredi 26 janvier à Bordeaux son tour de France des innovations de demain. Le principe : couronner dans chaque territoire six startups, une par catégorie : Environnement & Energie, Industrie, Data & IA, Smart tech (innovations d’usage), Santé et Start (pépites en phase d’amorçage). 26 startups de la région Nouvelle-Aquitaine sont venues pitcher leur innovation devant un jury de professionnels.
Dans la catégorie Environnement & Energie, le jury a récompensé Manon Vaillant, la CEO et cofondatrice de Purenat.
Dans la catégorie Industrie du futur, le vainqueur est Benoît Trouvé, le CEO et cofondateur de Midipile.
Dans la catégorie Data & IA, le champion du jury est Daniel Negru, le CEO et cofondateur de Quanteec. 
Dans la catégorie Smart tech (innovations d’usage), la gagnante est Manon Loustau, la CEO de Libu.
Dans la catégorie Santé, le jury a primé Léonie Schröder, la présidente et cofondatrice de Huvy.
Dans la catégorie Start, le vainqueur est Auguste Minot, le cofondateur de FiltraLife. 
Les 6 startups auront l’opportunité de participer à la finale nationale au Grand Rex de Paris le 28 mars prochain à 19h, pour la cérémonie de remise des prix qui réunira l’ensemble de l’écosystème d’innovation français et européen.","La french tech Bordeaux","https://www.frenchtechbordeaux.com/tech-for-future-2024-les-6-laureats-en-nouvelle-aquitaine/"),
("Apple, Lenovo, Samsung… Top 3 des offres flash high-tech des soldes Auchan","https://media.ouest-france.fr/v1/pictures/MjAyNDAxMmQ3MWU3MjAxODZkN2Y1NTNiMjIyOTRhYWRiNjE4NzI?width=1260&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=0a1e5d02dcbce194d6abde7dd4685795a0e8a5270cf74bead9a248f4a6ebf9ac","La fin des soldes approche à grands pas. Il ne vous reste plus que quelques jours pour en profiter ! Mais les bons plans continuent d’arriver, notamment dans l’univers high-tech. On vous présente ici le top 3 des offres flash à saisir d’urgence sur le site de vente en ligne Auchan.
Les soldes d’hiver 2024 ont lieu du mercredi 10 janvier au mardi 6 février. 4 semaines durant lesquelles les bons plans affluent, en magasin comme sur les boutiques de vente en ligne. Comme les enseignes ont l’autorisation de vendre à perte, elles en profitent pour liquider leurs stocks, et ainsi faire de la place pour les nouvelles collections. Cet épisode promotionnel concerne tous les univers produits, de la mobilité urbaine à la mode, en passant par la maison, le gaming et les nouvelles technologies. Les rayons high-tech sont particulièrement plébiscités durant cet événement. Il faut dire que parfois, certains appareils de grandes marques peuvent apparaître à des prix parfois onéreux. Les soldes sont justement les meilleurs moments pour saisir ces articles de marques à moindre coût. Apple, Lenovo, Samsung et bien d’autres proposent des réductions sur leurs produits stars. Et certains sont en vente flash, notamment sur le site officiel d’Auchan.","Ouest-france","https://www.ouest-france.fr/shopping/soldes/apple-lenovo-samsung-top-3-des-offres-flash-high-tech-des-soldes-auchan-377740c0-bef6-11ee-8a7d-fa3ec2db0626"),
("App Store, Safari… Apple annonce des changements historiques sur iPhone","https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2024/01/iphone-ue-1024x576.jpg?avif=1&key=be1771ca","Pour se mettre en conformité avec le Digital Markets Act européen (DMA), Apple annonce plusieurs changements majeurs dans son écosystème applicatif. Comme prévu, les magasins d’applications alternatifs sont maintenant autorisés, alors que certaines applications par défaut, comme Safari et Apple Pay, sont désormais facultatives.
C’est un communiqué de presse historique. Le 25 janvier, Apple a publié sur sa newsroom un article intitulé « Apple annonce des changements pour iOS, Safari et l’App Store dans l’Union européenne ». Dans cet article assez long, Apple fait quelque chose de peu commun : il médit ses propres nouveautés. Les changements annoncés par Apple ne sont pas de son fait, puisqu’ils sont dictés par l’Union européenne. Apple ne manque pas de rappeler qu’elle n’est pas d’accord avec le DMA européen, en affirmant notamment que les nouveautés du jour « ouvrent la porte aux virus, à la fraude, à des arnaques et à du contenu illicite ». On est loin de l’habituel vocabulaire de l’incroyable et du révolutionnaire.","Nicolas Lellouche","https://www.numerama.com/tech/1617622-app-store-safari-apple-annonce-des-changements-historiques-sur-iphone.html"),
("IA et vie privée : un cocktail explosif ?","https://cdn.futura-sciences.com/cdn-cgi/image/width=1920,quality=50,format=auto/sources/images/chatbotdata.jpg","À l'occasion de la Journée nationale de la protection des données se pose la question des IA reposant sur les grands modèles de langage. Elles s’entraînent à partir des données saisies par les utilisateurs. Celles-ci sont parfois sensibles et confidentielles, mais l’IA ne sait pas faire le tri. Comment s'assurer qu'elles ne seront pas divulguées ?
Imaginez que des éléments de votre vie personnelle s'affichent dans une réponse d'un chatbot comme ChatGPT chez n'importe qui. C'est malheureusement possible car le modèle de langage s'enrichit de ce que ses utilisateurs saisissent. C'est notamment le cas pour les entreprises pour lesquelles des employés saisissent des données financières confidentielles ou des codes sources propriétaires sans se douter que le modèle va les ingurgiter et sans doute les ressortir à terme. D'ailleurs, des recherches montrent que le taux de fuite de données de ce type n'est pas anecdotique. Pour ChatGPT, il y aurait 158 incidents de ce type pour 10 000 utilisateurs par mois.
C'est pour cette raison que des réglementations commencent à émerger au sujet de la protection des données dans le cas des intelligences artificielles. En décembre, 2023 l'Union européenne s'est accordée pour mettre au point des règles harmonisées au sujet de l'intelligence artificielle. Elles prévoient une obligation de transparence et la publication d'une synthèse des données d'entraînement utilisées pour les modèles. Outre la réglementation qui reste de toute façon en décalage par rapport au rythme de l'innovation, il existe des solutions pour protéger les données et paradoxalement, c'est l'IA elle-même qui peut assurer cette tâche.","Sylvain Biget","https://www.futura-sciences.com/tech/actualites/intelligence-artificielle-ia-vie-privee-cocktail-explosif-111068/"),
("Free annonce sa Freebox Ultra (V9) : voici un résumé de toutes les nouveautés","https://images.frandroid.com/wp-content/uploads/2024/01/live-conference-free-19-56-screenshot-1200x675.jpg","L'attente est enfin terminée pour les aficionados de tech : Free a levé le voile sur la Freebox Ultra (V9). Après les succès de la Delta et de la Pop, les attentes étaient grandes.
On voit rarement un événement tech « made in France » créer autant de hype. Après la Delta en 2018 et la Pop en 2020, Free a finalement annoncé la Freebox Ultra. Avec plusieurs piques envoyées à ses concurrents, Xavier Niel a pris le temps d’évoquer tout ce qu’elle offre de nouveau.
Cette nouvelle box se distingue par plusieurs améliorations techniques notables :
-La technologie Fibre 10G permet désormais un débit symétrique de 8 Gbit/s aussi bien en téléchargement qu’en envoi.
-L’introduction du Wi-Fi 7, utilisant la bande 6 GHz et contrôlé par un processeur Qualcomm quad-core, offre des performances jusqu’à 6 Gbit/s, soit cinq fois plus rapide que le Wi-Fi 6 des précédentes Freebox.
-Au niveau des connectiques sur le Server, on trouve deux ports SFP (un pour la fibre et un 10G pour le réseau local) et quatre ports Ethernet 2.5G.
-Une nouveauté notable est l’ajout d’un emplacement M.2 pour un SSD NVMe, utile pour la fonction NAS.
Free a également introduit un nouveau répéteur Wi-Fi 7 au design rond, dans la lignée de la Freebox Pop. Ce répéteur maillé vise à améliorer la couverture Wi-Fi dans le domicile.
Côté écologie et durabilité, la Freebox Ultra consomme peu d’énergie, similaire à la Freebox Pop (9,9 W), et intègre un mode veille totale programmable permettant d’économiser jusqu’à 90 % d’énergie. La durée de vie est estimée à 10 ans minimum, avec une conception favorisant la réparabilité et un assemblage sans colle. Le mode « Éco Wi-Fi » adapte l’utilisation des bandes de fréquence selon les besoins.
L’offre inclut un Pocket Wi-Fi 4G avec 200 Go de data avant activation de la ligne, puis 50 Go/mois. Plusieurs services sont inclus : Disney+ avec publicités, Netflix avec publicités, Universal+, Canal+ en live, Amazon Prime Video, Cafeyn. D’ailleurs, la Freebox Ultra intègre l’ancien Player TV 4K sous Android TV.
Le tarif est fixé à 49,99 € par mois pendant un an, puis passe à 59,99 €. Une offre Freebox Ultra Essentiel est également disponible à 39,99 € par mois la première année, puis 49,99 €. Ce dernier n’inclut pas les services comme Netflix.","Ulrich Rozier","https://www.frandroid.com/marques/free/1925588_comment-suivre-la-conference-de-la-freebox-v9-de-free"),
("Zoom veut révolutionner les visioconférences sur Vision Pro","https://pic.clubic.com/v1/images/2187832/raw.webp?hash=ea44a5cf43c7f95a599289f6e0401bcf62ba3851","Alors que l'Apple Vision Pro sera commercialisé dès ce vendredi outre-Atlantique, Zoom a présenté sa nouvelle application dédiée. Objectif : «  rendre la collaboration hybride plus immersive » en offrant aux utilisateurs « un moyen innovant de se sentir plus proches des autres ».
Avec le Vision Pro, la marque à la pomme va signer sa première entrée sur un nouveau marché depuis l'Apple Watch en 2015. L'entreprise est très attendue sur ce nouveau terrain, bien que certains événements soient venus entacher la sortie de son nouveau fleuron. Par exemple, le casque de réalité mixte sera dépourvu des applications de streaming les plus populaires, à savoir Netflix, YouTube et Spotify. Le numéro 1 de la visioconférence, Zoom, a bel et bien répondu présent.
De nouvelles fonctionnalités pensées pour l'informatique spatiale
Profitant de ce format, Zoom a développé de nouvelles fonctionnalités inédites sur Vision Pro. Avec Personas, les utilisateurs pourront être représentés par un avatar « spatial authentique » d'eux-mêmes, réalisé à partir d'un scan de leur visage. Les autres participants à la réunion pourront ainsi voir leurs expressions faciales et les mouvements de leurs mains, comme s'ils se trouvaient devant eux. Apple a présenté une fonctionnalité similaire dans l'application FaceTime du Vision Pro.
L'application va exploiter la technologie d'informatique spatiale de l'appareil, lui permettant de se fondre dans l'environnement physique des utilisateurs tout en apparaissant comme une fenêtre flottante. Sa taille sera ajustable, « ce qui est idéal pour les utilisateurs qui veulent avoir l'impression d'être dans la même pièce que leurs collègues et leurs clients », précise la plateforme de visioconférence.
Zoom a également levé le voile sur des fonctionnalités qui seront déployées sur le Vision Pro au cours du printemps, notamment le partage de fichiers en 3D et les chats. Aussi, un nouvel outil offrira la possibilité d'épingler cinq participants à une réunion n'importe où dans l'espace virtuel, et de supprimer leur arrière-plan. Une manière de « se sentir davantage connectés » avec ces derniers, argumente la société.
Le Vision Pro, qui était en rupture de stock avant même sa date de lancement, va offrir de nouvelles possibilités dans de nombreux champs d'application. La visioconférence en fait évidemment partie, les fonctionnalités annoncées par Zoom ouvrant de nouveaux horizons dans le domaine.","Mathilde Rochefort","https://www.clubic.com/actualite-517423-zoom-veut-revolutionner-les-visioconferences-sur-vision-pro.html"),
("Amazon débute la diffusion de publicités sur Prime Video","https://cdn.lesnumeriques.com/optim/news/21/218161/59160c59-amazon-debute-la-diffusion-de-publicites-sur-prime-video__w800.webp","Depuis le 29 janvier 2024, des publicités sont diffusées sur Prime Video aux États-Unis. Pour y échapper, les utilisateurs doivent payer un supplément de quelques dollars.
La publicité continue de prendre place sur les plateformes de streaming vidéo. Après Disney+ ou encore Netflix, c’est au tour de Prime Video de se lancer. Annoncée en décembre dernier, la diffusion de contenus publicitaires sur le service de SVOD d’Amazon a débuté comme prévu ce lundi 29 janvier 2024.
Le Wall Street Journal apporte quelques précisions à ce sujet. Tout d’abord, on apprend que la société de Jeff Bezos considère que la quantité de publicité diffusée par heure est “significativement plus réduite que sur la télévision traditionnelle et que la plupart des autres services de diffusion en continu”.
Concrètement, Amazon propose une moyenne de deux à trois minutes de publicité par heure. Ces dernières apparaissent avant ou pendant le visionnage d’une série ou d’un film. Pour profiter de Prime Video comme au bon vieux temps, soit sans publicité, il faut payer un supplément à l’abonnement Prime de 2,99 $ par mois.
Bank of America (via Bloomberg) estime que le visionnage de vidéos publicitaires sur Prime Video permettrait à Amazon de récolter 3,2 milliards de dollars par an. À cela s'ajoute 1,6 milliard de dollars pour les abonnés souhaitant payer pour continuer à profiter d’une expérience sans publicité.
Pour le moment, Amazon n’a pas annoncé d’élargissement de cette politique à d’autres régions du monde. À noter, un rapport de NPA Conseil supposait en décembre dernier que les publicités arriveraient à partir du 10 avril 2024 en France.","Alexandre Scotti","https://www.lesnumeriques.com/cine-svod/amazon-debute-la-diffusion-de-publicites-sur-prime-video-n218161.html"),
("Spotify attend qu’Apple lui lâche la grappe pour lancer son app idéale","https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2024/01/spotify-ftr-header-1024x576.jpg?avif=1&key=507a2a74","Spotify a montré à quoi ressemblerait son application sur iOS si Apple était moins pénible. Le géant du streaming espère que tout va changer avec l’arrivée du règlement européen DMA. Ce n’est pas gagné : Apple est loin d’apprécier le DMA et pourrait contrarier Spotify avec d’autres bâtons dans les roues.
Le changement, c’est presque pour maintenant. Spotify trépigne visiblement d’impatience avant la mise en œuvre d’un tout nouveau règlement européen — le Digital Market Act (DMA). La preuve : l’entreprise de streaming audio a communiqué ce mercredi 24 janvier sur le futur de son application mobile, qui sera, selon elle, bien meilleure qu’aujourd’hui
À en croire le géant suédois de la musique en ligne, « si vous vivez dans l’Union européenne, vous êtes sur le point de découvrir un nouveau Spotify. Vous pourrez y voir tous les tarifs d’abonnement, les promotions et les offres, et même faire des achats, le tout de manière transparente dans l’application. »
Le DMA vise à juguler les plateformes par rapport à la concurrence. Il s’articule avec le Digital Services Act (DSA), qui couvre les pratiques internes de la plateforme.
Ce ne serait donc qu’une question de temps. En effet, le DMA doit entrer en application à partir du 6 mars 2024. Or, dans le cadre de ce nouveau texte, des obligations particulières s’imposent à certaines très grandes entreprises, considérées comme des « contrôleurs d’accès » (« gatekeepers »). En tout, six sociétés de ce genre ont été identifiées.","Julien Lausson","https://www.numerama.com/politique/1616308-spotify-attend-quapple-lui-lache-la-grappe-pour-lancer-son-app-ideale.html"),
("L’implant cérébral Neuralink a été posé sur un humain pour la première fois","https://cdn.futura-sciences.com/cdn-cgi/image/width=1920,quality=50,format=auto/sources/images/neuralink-pensee.jpeg","Malgré des controverses autour d’un taux de mortalité élevé chez les primates cobayes, l’implant cérébral de Neuralink vient d’être testé sur un humain. C’est Elon Musk qui l’a annoncé sur X.
Ça y est, les essais humains ont véritablement commencé chez Neuralink, l'entreprise américaine qui développe le fameux implant cérébral d'Elon Musk. Baptisé N1, cet implant de la taille d'une pièce de monnaie contient 1 024 électrodes pour enregistrer l'activité cérébrale et permettre de contrôler un ordinateur par la pensée. C'est le milliardaire lui-même qui a annoncé sur X (anciennement Twitter) la toute première implantation sur un humain.
« Le premier humain a reçu un implant de @Neuralink hier et se rétablit bien, a déclaré Elon Musk dans un tweet lundi soir. Les premiers résultats montrent une détection prometteuse des impulsions des neurones. »
L'identité du patient n'a pas été dévoilée, mais pour cette première série de tests, Neuralink avait lancé un appel à volontaires. Ceux-ci doivent avoir au moins 22 ans, et être quadriplégiques suite à un traumatisme de la moelle épinière ou la maladie de Charcot (sclérose latérale amyotrophique). Sont exclus tous ceux ayant déjà un implant comme un pacemaker, qui font des crises d'épilepsie, qui doivent passer une IRM ou encore qui reçoivent un traitement par stimulation magnétique transcrânienne. L'étude se déroulera principalement sur 18 mois, avec un suivi sur six ans.
Certains peuvent s'étonner du début des essais humains, alors qu'en 2022 une plainte avait été déposée car seuls 7 des 23 singes avaient survécu aux expériences. Le ministère américain des transports avait lancé une enquête l'année dernière suite à une alerte sur la contamination des implants par des pathogènes dangereux. Néanmoins, la FDA (Food and Drug Administration) a donné son feu vert au mois de mai dernier.","EDWARD BACK","https://www.futura-sciences.com/tech/actualites/technologie-implant-cerebral-neuralink-ete-pose-humain-premiere-fois-111142/"),
("Peugeot intègre ChatGPT à ses véhicules et étend la garantie du SUV électrique e-3008","https://cdn.lesnumeriques.com/optim/news/21/213144/27762585-peugeot-e-3008-est-il-equipe-pour-faire-de-l-ombre-au-tesla-model-y.webp","Peugeot annonce que ses véhicules, dont le nouveau e-3008, profiteront de ChatGPT. Le SUV électrique a également droit à une garantie étendue de 8 ans sous conditions.
ChatGPT s’invite dans nos voitures alors que la Volkswagen Golf intègre le chatbot à son habitacle. En France, Peugeot lui emboîte le pas en ajoutant l’intelligence artificielle d’OpenAI dans ses véhicules. C’est ce que Jérôme Micheron, directeur du produit de la marque, a dévoilé lors d’une téléconférence de presse.
'Nous allons introduire ChatGPT dans toutes les voitures, y compris le nouveau e-3008, et aussi les véhicules utilitaires petits et compacts' annonce Jérôme Micheron comme le rapporte Reuters. L’assistant vocal d’OpenAI répondra aux questions des utilisateurs et les aidera dans la navigation. Peugeot n’a pas donné plus de détails à propos de toutes les possibilités offertes par l’intelligence artificielle.
C’est le mercredi 31 janvier que ChatGPT arrive en version pilote dans 5 pays : la France, l’Allemagne, l’Italie, l’Espagne et l’Angleterre. Il s’agit d’un nouveau standard qui va s’étendre au fil de l’année 2024 selon Peugeot.
Le nouveau e-3008 aura également droit à une nouvelle garantie de 8 ans contre 2 actuellement. Peugeot a étendu cette garantie pour permettre aux automobilistes de passer plus sereinement à l’électrique. Malgré le bonus écologique, certains n’osent pas encore franchir le pas.
Cette garantie de 8 ans concerne les batteries, le moteur électrique, le chargeur, le groupe motopropulseur, les composants électriques principaux et mécaniques. Il faudra toutefois réaliser la révision d’entretien dans un réseau agréé tous les 2 deux ans ou tous les 25 000 kilomètres pour y avoir droit.","Nassim Chentouf","https://www.lesnumeriques.com/voiture/peugeot-integre-chatgpt-a-ses-vehicules-et-etend-la-garantie-du-suv-electrique-e-3008-n218160.html"),
("Pour la première fois, Xbox dépasse Windows chez Microsoft","https://images.frandroid.com/wp-content/uploads/2021/02/xbox-1200x675.jpg","Pour la première fois depuis le rachat d'Activision Blizzard, Microsoft a dévoilé ses résultats financiers. La firme est en très bonne santé, quelques jours après l'annonce de 1900 licenciements.
La succession d’événements chez Microsoft laisse un arrière-gout bien particulier. Seulement quelques jours après l’annonce de plus de 1900 licenciements chez Xbox, alors que l’on découvre l’étendue des dégâts jour après jour à travers de nombreux témoignages, Microsoft publie les résultats financiers du 2e trimestre de l’exercice 2024. Il correspond aux résultats d’octobre à décembre, soit la période des fêtes de fin d’année.
Sans surprise, la firme va toujours très bien. Celle qui a réussi à devenir l’entreprise la plus valorisée au monde a annoncé plus de 62 milliards de dollars de chiffre d’affaires pour un bénéfice net de 21,9 milliards de dollars. Il s’agit du premier trimestre depuis le rachat d’Activision Blizzard, finalisé le 13 octobre 2023. Puisque la firme avait réglé les 75,4 milliards de dollars du rachat principalement en cash, cela n’affecte pas les résultats négativement.
Forcément, quand on intègre le premier éditeur de jeux vidéo occidental à son écurie, les résultats sont au beau fixe. Ainsi, Xbox note une augmentation de 49% de son chiffre d’affaires, avec surtout une croissance de 61% des revenus liés aux contenus et aux abonnements (ventes de jeux, Xbox Game Pass, etc). Le rachat d’Activision Blizzard a contribué de 2 milliards de dollars au chiffre d’affaires de Xbox.
Résultat, la branche Xbox a réuni 7,11 milliards de dollars de revenu, soit plus que les 5,26 milliards de Windows. C’est la première fois que l’activité jeu vidéo de Microsoft dépasse l’activité Windows. C’est historique, le système d’exploitation n’est vraiment plus le joyau de la firme.
En revanche, la vente de consoles Xbox est toujours en berne. La firme note bien une croissance, mais elle est seulement de 3% alors que nous parlons de la période des fêtes de fin d’année propice à l’achat d’une console. D’autant plus que Microsoft a sérieusement baissé le prix de sa console aux États-Unis et en Europe pendant cette période. Il était ainsi possible de trouver la Xbox Series X à 400 euros au lieu de 550. Malgré ses efforts, Microsoft n’arrive tout simplement pas à tenir tête à Nintendo et Sony sur la vente de console.
Nous nous attardons beaucoup sur la branche « More Personnal Computing » qui est celle concernant le grand public avec Windows, Surface et Xbox, mais le reste du géant américain se porte bien et représente la majorité de ses revenus. Ainsi, la branche Azure a généré 26 milliards de chiffre d’affaires, tandis que la branche Microsoft 365 et LinkedIn a réuni 19,2 milliards de dollars.
Un excellent résultat qui restera définitivement amer, en particulier pour les personnes ayant perdu leurs emplois ces derniers jours.","Cassim Montilla","https://www.frandroid.com/marques/microsoft/1926904_pour-la-premiere-fois-xbox-depasse-windows-chez-microsoft"),
("Les performances du processeur Snapdragon 8 Gen 4 se dévoilent sur la toile, et elles sont prometteuses !","https://pic.clubic.com/v1/images/2187709/raw.webp?fit=max&width=1200&hash=4736bff6539aeb4b55f36f3b36ebebaa75e0b835","On savait déjà que le futur Snapdragon 8 Gen 4 de Qualcomm allait jouer dans la cour des grands, dépassant même l'Apple M2. Les premiers benchmarks à disposition et révèlent que celui-ci rivaliserait même avec la M3.
Succédant logiquement au Snapdragon 8 Gen 3, le Snapdragon 8 Gen 4 est forcément très attendu par les amateurs de smartphones Android haut de gamme. Un certain @negativeonehero a partagé les résultats de benchmark (Geekbench 6 et AnTuTu) du futur SoC de Qualcomm sur X.com et ceux-ci montrent une réelle progression par rapport à la génération précédente et viennent même titiller les performances des puces d'Apple. Les M2 et M3 ont-elles du souci à se faire ?
En single-core, le Snapdragon 8 Gen 4 atteint des sommets, puisqu'il a obtenu un très joli score de 2 845. En multi-core, il n'a pas à rougir non plus, puisque son score est de 10 628. Son prédécesseur, le Snapdragon 8 Gen 3 atteignait « seulement » 7 249 points installé dans le Galaxy S24 Ultra. Une très belle progression de 46 % en multi-core, et un score en mono-core également bien supérieur.
Une performance qui s'expliquerait en partie grâce à l'utilisation de performance cores de type Phoenix, sans user pour autant d'efficiency cores. La consommation d'énergie du SoC devrait donc logiquement être en hausse, mais tout de même compensée par la gravure en 3 nm « N3E » de Taiwan Semiconductor Manufacturing Company (TSMC). Un processus de fabrication de semi-conducteurs très avancé permettant de pousser les performances des puces électroniques toujours plus haut.
Résultat étonnant et très positif pour Qualcomm : le Gen 4 est quasiment aussi performant que la puce M3 d'Apple (voire image et légende ci-dessous), qui fait référence dans le domaine des SoC.
Même si ces excellentes performances indiquent que la concurrence entre les smartphones Android et ceux d'Apple, équipés de la série A, sera de plus en plus féroce ; quelques questions demeurent en suspens. Les scores très élevés en multi-core sur Geekbench ne font pas mention de la consommation électrique qui a permis de les atteindre.
Une autre zone d'ombre concerne le benchmark effectué sur AnTuTu. En effet, dans les résultats donnés par ce dernier, c'était le nom de code « Lahaina » qui était mentionné. Ce nom de code correspond normalement au Snapdragon 888 et non au Snapdragon 8 Gen 4, baptisé « Pakala ». Il est donc fortement possible que ces scores aient été arrangés, voire falsifiés. La prudence doit être de ce fait de mise quant à la véracité de ces résultats.
Sur le papier, le dernier SoC de Qualcomm apparaît comme une machine de guerre miniature, capable de rivaliser avec les meilleures puces d'Apple. Toutefois, étant donné que des incertitudes persistent quant à la validité de ces tests, il vaut mieux ne pas s'emballer pour le moment.","Camille Coirault","https://www.clubic.com/actualite-517327-les-performances-du-processeur-snapdragon-8-gen-4-se-devoilent-sur-la-toile-et-elles-sont-prometteuses.html"),
("Le design du Google Pixel 9 Pro s’annonce splendide","https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2024/01/pixel-9-pro-1024x576.jpg?avif=1&key=b23dbd0b","Fidèle à ses habitudes, le compte OnLeaks a publié des rendus 3D des futurs smartphones de Google plusieurs mois avant leur sortie. En 2024, le géant du web s’apprêterait à enfin renouveler le design de ses smartphones, après s’être montré très conservateur depuis 2021.
Si vous n’aimez pas la finition des smartphones Pixel 8, vous pourriez adorer celle des Pixel 9, attendus à l’automne 2024.
Depuis le Pixel 6 en 2021, Google propose presque le même smartphone tous les ans. Le produit s’améliore année après année, notamment avec un dos mat sur les derniers modèles, mais ses finitions restent identiques. Google propose toujours les mêmes bordures brillantes et arrondies, qui manquent de qualité par rapport à celles d’un iPhone ou d’un Galaxy S. C’est une des raisons qui nous ont amené à critiquer les derniers Pixel 8, qui peinent à justifier leurs hausses de prix.
Dans un article publié le 23 janvier, le site MySmartPrice, en partenariat avec le leaker OnLeaks, dévoile un premier aperçu des futurs Pixel 9 Pro. Comme tous les ans, OnLeaks se base sur des schémas d’usine pour modéliser en 3D des produits non annoncés. Le Pixel 9 Pro semble extrêmement prometteur.
Si Google continue dans cette direction, les Pixel 9 Pro pourraient introduire un vrai changement de design. Fini les bords arrondis, place à des bords plats et rectangulaires, comme chez Apple et Samsung. Le géant du web ferait aussi un effort notable au niveau des bordures d’écran, qui s’annoncent extrêmement fines. Enfin, l’imposant bloc rectangulaire du module caméra serait remplacé par un ovale en légère protubérance, qui laisserait du vide sur les côtés.
Y a-t-il une chance de ne pas avoir ce design en octobre ? Historiquement, OnLeaks a souvent été fiable. Puisqu’il se fournit auprès des usines et que les marques finalisent le design de leurs futurs appareils plusieurs mois en avance, il est rare qu’une mauvaise surprise intervienne. Bref, tout laisse penser que le futur Pixel 9 Pro sera bien un appareil au design transformé.","Nicolas Lellouche","https://www.numerama.com/tech/1615936-le-design-du-google-pixel-9-pro-sannonce-splendide.html");

INSERT INTO user_article (user_id, article_id) VALUES 
("1","1"),
("4","2"),
("9","3"),
("1","4"),
("3","5"),
("2","6"),
("5","7"),
("10","8"),
("8","9"),
("7","10"),
("6","11"),
("3","12"),
("6","13"),
("9","14");

INSERT INTO post (title, content, user_id) VALUES 
("Mise en place d'un paiement en ligne","Bonjour,
A vrai dire je m'arrache un peu les cheveux car je comprend pas la mise en place et fonctionnement...
J'ai un site pro que j'ai fait de mes petites mimines sous drupal 8. (je prévois d'ailleurs de le migrer sous 9 plus tard)
J'ai dans l'idée de pouvoir proposer à mes clients la possibilité de payer leur facture d'intervention directement sur mon site web, la majorité étant actuellement pas chèque et on sait tous que tôt ou tard çà va sauter.
J'ai regardé plusieurs sites, genre paypal, sumup, stripe pour réaliser celà et là je bloque un peu sur la mise en place.
Dans la pratique, j'ai une BDD mysql qui possède toute les factures en temps réels impayés. Je voudrai pouvoir faire une page ou on rentre un numéro de facture et un email (pour le récipissé de paiement), qui interrogerait ma BDD pour trouver la facture en question, que çà renvoie des infos pour le paiement et que ces infos soit envoyé sur la gateway sumup stripe ou je ne sais quoi.
Après le paiement, ma BDD serait mis à jour sur l'état du paiement de cette facture.
Paypal ca doit être jouable mais, çà peut rebuter un client de voir paypal s'afficher quand on veut payer en CB.
Sumup, j'ai rien trouvé pour drupal et le support français bof
Stripe, ca a l'air pas mal mais pas compris comment on implémente çà
Si quelqu'un a déjà eu affaire à çà ou pourrait me donner une piste pour démarrer car je me sens un peu perdu là :(
merci :)","10"),
("Wordpress lent : que faire ?","Salut les techs,
J'héberge tous mes sites wordpress chez OVH sur des hébergements mutualisés (offre 'perso' et 'pro' quand il y a un woocommerce).
Je trouve que les sites sont souvent lent à charger.
Je précise que tous les sites sont construits de la même façon :
- Wordpress
- Thème Avada
- WProcket 
- Images optimisées avec Imagify
- Les plugins inutilisés sont supprimés

Je commence à me demander d'où pourrait bien venir le problème :
- De l'hébergement OVH ?
- De Wordpress (thème, code, ... ?)
- De quelque chose que je ferai systématiquement mal ?

Est-ce que quelqu'un a déjà eu ce genre de problème et aurait trouvé une solution ?
Si ça ne saute aux yeux de personne, j'aimerai engager quelqu'un de plus qualifié que moi en wordpress / hébergement pour une courte mission d'audit afin de trouver le problème.
Merci de m'avoir lu :)","9"),
("configuration d'un bon pc de bureau non gamer","Bonjour à tous
Je souhaiterais remplacer mon pc portable par un pc de burau, assez rapide mais non gamer avec une bonne vitesse et un bon stockage
Que me conseilleriez vous ?
Budget entre 500 et 800€
Merc","4"),
("Le meilleur VPN","Bonjour! Quel est le meilleur VPN du marché? Je parle des fournisseurs VPN qui sont payants, parce que les VPN gratuits, ils auront forcément quelque chose à cacher. J'ai rencontré NordVPN sur leur stand à la Geek's Live, j'ai lu beaucoup des avis sur ce fournisseur et il me plait beaucoup. Y a-t-il parmi vous qqn qui pourrait me dire si c'est vraiment le meilleur?","3"),
("Cryptomonnaies : révolution financière ou bulle spéculative","Décryptons l'univers complexe des cryptomonnaies.
Ce sujet explore la controverse autour de ces actifs numériques : sont-ils la force motrice d'une révolution financière ou simplement une bulle spéculative ?
En détaillant les arguments pour et contre, engagez-vous dans cette conversation pour partager vos perspectives sur l'avenir financier des cryptomonnaies.
L'évolution économique ou la perspective d'une bulle, qu'en pensez-vous ? ","5"),
("Création d'un jeux en réseau","Hello world ! 
J'ai comme projet la création d'un jeux en ligne dont je ne peut pas donner de détails trop approfondis... Alors oui je suis parano mais mon idée n'existe pas (enfin pas à ma connaissance en tout cas) mais je préfère garder les détails croustillants pour moi et mon binôme avec qui nous allons surement collaborer.
Le jeux fonctionnera comme suit : 
les joueurs peuvent se connecter à un serveur et jouer, ce serveur sera dans un premier temps hébergé par moi même puis, si le jeux sors un jour des cartons, devra être héberger sur des serveurs dédiés (comme les serveurs Counter Strike par exemple).
Ce que je souhaite donc savoir, c'est par ou commencer pour créer un jeux qui aura, au début, une map et des fonctionnalités uniques. Tout les serveurs serons exactement les mêmes sauf les joueurs bien entendu.
J'ai l'intention de me servir de l'Unreal Engine 5 pour créer ce jeux, ce moteur est gratuit, il a beaucoup de ressources à dispositions et me semble 'facile' d'utilisation.
Comme vous l'avez sans doutes deviné, je m'y connais déjà un petit peu en développement/level design/game design etc... Certes peu être pas assez pour créer un jeux de toutes pièces mais tant pis j'apprendrais.
Inutile de me rappeler qu'un jeux ça ce développe pas en un claquement de doigts et bla et bla et bla, ça je le sais déjà.
Pour résumer : 
Je souhaite donc savoir comment je pourrais procéder pour créer un jeux identique sur plusieurs serveurs différent (même map, même PNJ, etc) afin de le rendre ensuite disponible aux communautés de joueurs qui souhaiterais par exemple lancer leur(s) serveur(s).
Est-ce que l'UE5 me permettra de mettre en place ce genre de jeux ? Est-ce que la création de ce jeux exclusivement multijoueur (aucun intérêt en solo) peut se réaliser comme un jeux solo au départ et donc devenir multijoueur ensuite ? Est-ce que la création d'un jeux only multi et solo sont ils semblables ? Voici mes questions !
Pour info, le jeux n'est encore qu'a l'état d'embryon dans ma tête et sur quelques blocs notes sur le PC, je n'ai pas la prétention de dire que dans 5 ans mon jeux sera le meilleur du monde bien au contraire.
Comme indiqué, inutile de me rabâcher que créer un jeux c'est complexe etc, car je sais déjà tout ça :)
Merci d'avance a ceux qui prendrons le temps de me répondre ! ","1"),
("Usb-C","Bonjour,
Je suis perdu sur la norme Usb-C.
Je voudrais savoir quel port Usb-C est nécessaire pour raccorder le PC sur un Dock - station d'accueil pour Pc portable - et 2 écrans en HDMI.
Modèle de dock dans ce genre
USB C Docking Station HUB USB C Dual Displayport et Port HDMI, USB 3.1, USB C 3.1, USB 2.0, PD 100W, Ethernet Gigabit, SD/TF, Audio&Mic, Dock USB C 12 in 1 pour MacBook pour MacBook Dell XPS HP Lenovo
J'ai vu un pc avec ce port USB-C 3.2 Gen 1 (support data transfer only); est ce compatible ?
Merci d'avance","2"),
("Excel","Bonjour,
Je suis actuellement le cours Perfectionnement Excel et je rencontre un problème tout bête sur la fonction MOIS : quand je l'applique suivant le cours (ie : =MOIS(F2) ou =MOIS(clic sur F2)), je n'ai en retour que 'janv.-00' sur toute la colonne.
Pourtant Excel sait que 'févr-21' correspond à '01/02/2021', il le met dans la barre de formule.
Merci de me faire part de vos idées, j'ai parcouru plein de forums sur le Net et rien ne semble correspondre.","6"),
("pas possible d'écrire su VS Code","Hello,
dans vscode que j'ai installé y'a pas longtemps, les paramétrages sont tous par défaut, je ne peux par taper directement dans mes fichiers, il faut que tape d'abord pleins de fois sur mon clavier pour activer le fait de pouvoir taper du texte.
C'ets comme dans vim ou on doit d'abord activer le mode insertion...
Help, please.","8"),
("Installation de Epic games code erreur 2503","J'ai un problème quand je veux installer epic games laucher je ne peux pas car ça me mets code erreur 2503 et 2502. 

J'ai fais toute les mises à jour , je ne sais pas trop ceux qui va pas si vous pouvez m'aider.","6");

INSERT INTO comment (content, user_id, post_id) VALUES 
("Salut !
C’est tout à fait possible en utilisant l’API de PayPal par exemple.
Concernant Stripe je pense aussi (même si je n’ai jamais mis les mains dedans).
Pour Sumup, il ne me semble pas que cela soit possible.
Par contre, je te recommanderais de te rapprocher de l’éditeur de ton logiciel de facturation qui aura sans doute travailler sur une page de paiement en ligne avec une meilleure intégration.","1","1"),
("Bonjour,
Une fois mise sous le tapis son utilisation dans des commerces illicites qui pourtant eux-mêmes sont assis sur des valeurs réelles, par opposition à une monnaie réelle une cryptomonnaie ne repose sur aucun actif matériel ou structure étatique qui vient en garantir la valeur, elle est donc par définition spéculative.","2","5"),
("Merci,
tout doit être dans le budget
Je souhaite un pc assez rapide pour faire essentiellement de la bureautique
J'ai internet fibre avec wifi6
uine carte graphique classique sera suffisante
Ce qui m'inquiéte, c'est quel processeur et quelle mémoire
Est-ce que ma réponse te convient
Bonne journée","4","3"),
("Salut :)
J'avoue, c'est un peu le bordel, cette norme USB-C mais pour rester sur ton exemple : le PC dispose d'une prise USB-C 3.2 Gen1 (5Gbps) qui ne transporte que les données mais pas de la fonction Power Delivery qui permet d'alimenter un autre appareil (PC portable, dock, etc.).
Il faudra donc utiliser un dock auto-alimenter... ça semble être le cas de celui dont tu parles du fait du PD 100W mais il aurait fallu nous donner ses marque et modèle exactes pour le confirmer.","5","7"),
("Hello,
Question du coup si en ouvrant un fichier tu tape i est ce que tu peux écrire après. Et si tu fais Echap est que tu ne peux plus ecrire la lettre k par exemple ?
Si oui alors tu as le plugin vim d'installer mais c'est bizarre qu'il le soit par défaut.","6","9"),
("Bonjour,
Je suis bloquée exactement au même endroit et pour les mêmes raisons, est-ce que tu as trouvé la solution ?","7","8"),
("bah le principe de ses offres, c'est du mutualisé.
du coup les ressources sont partagés entre tous les sites sur le serveur.
du coup je te dirais de partir sur un serveur dédié (ou un VPS) ou d'essayer leur offre performance
https://www.ovhcloud.com/fr/web-hosting/performance-offer/","8","2"),
("Bonjour,
Le spécialiste du VPN est d'accord avec toi, https://fr.vpnmentor.com/","9","4"),
("Bonjour,
Je fais moi même ma facturation, je ne suis pas dépendant d'un logiciel spécialisé.
J'ai mes scripts qui tourne qui font les backups, les imports en BDD des factures etc....
Donc je suis totalement autonome.","10","1"),
("'Les indépendants qui ont publié leurs jeux sur Steam par exemple ont commencé (sauf talent mais rare) par des copies de vieux jeux (Tetris, PoP, etc.), puis ont créé leurs mini-jeux avant de s'attaquer à un jeu plus conséquent.'
C'est un peu ce que je projetais de faire en effet, me référer à des jeux ressemblant à ce que je voudrais faire pour l'adapter ensuite.
1/ Quand je parle de détails que je ne peu donner c'est côté gameplay. Les musiques serons inexistante car jeux en multi ou le son est important, les graphismes ressemblerons à du Half Life par exemple. Etant seul a créer mon jeux je n'aurais pas de choix que de tout faire seul, même si cela me prend des années tant pis. Je pensais surtout commencer petit pour ensuite améliorer le jeux 'final'.
2/ Je vois pas le rapport avec l'âge ici m'enfin. je sais qu'un jeux est complexe à créer car j'ai pas 0 connaissance tant en informatique qu'en développement qu'en 3D, qu'en graphisme, etc. J'ai beaucoup trainé sur internet dans ma vie pour savoir que créer un jeux c'est pas comme créer un site internet ;)
3/ Et oui je me répète, même si ça me prends 10 ans à créer mon jeux tant pis. Je serais le GD, le graphiste, l'hébergeur, le codeur, point.
4/ Connais pas Godot mais j'ai déjà commencer à toucher à UE5 et l'interface et les ressources disponibles me suffisent et me comblent.
Conclusion : J'ai déjà beaucoup de ressources (hé oui mon poste ici n'est pas le début de mes recherches hein...) j'ai commencé UE5 y'a 3 semaines et je fait déjà de belles choses dessus, fonctionnelles ou pas pour le moment je me débrouille bien. Les domaines qui me plaisent sont simple, FPS et RPG, donc mon jeux sera .. un FPS RPG, dingue.
Pas bête le bénévolat, j'y penserais quand j'aurais avancé et acquéris de bonnes bases.
Merci en tout cas, je jette un œil sur le lien que tu as mis même si j'ai pas l'impression d'être très concerné a première vue.
@+","1","6"),
("Merci pour le retour, voici le produit envisagé

https://www.amazon.fr/Docking-Station-Displayport-Ethernet-Gigabit/dp/B0BCFCJ4RN

Donc en clair je n'ai qu'a alimenter la station d'accueil en ensuite raccorder l'usb c du dock sur l'usb c du PC
et tout sera géré en même temps sur ce seul port (alim du pc, connexion internet et partage des écrans).
Quels sot les connectiques usb C sur le PC qu'il faut éviter ?
Quelqu’un a t il un lien qui explique ce qu'il faut savoir sur l'usb C de manière claire.","2","7"),
("Précise ce qui doit être inclus dans le budget, les options de communication, etc . . .","3","3"),
("Bonjour,
J'ai un problème quand je veux installer epic games laucher je ne peux pas car ça me mets code erreur 2503 et 2502. 
J'ai fais toute les mises à jour , je ne sais pas trop ceux qui va pas si vous pouvez m'aider.
Merci d'avance et bonne journée","6","10"),
("Bonjour, j'en ai essayé plusieurs mais je ne sais toujours pas lequel est le meilleur. Je prends toujours un VPN pour un mois et j'ai déjà changé 3 programmes différents.","7","4"),
("Salut, j'ai trouvé la solution : j'avais installé vim et c'est ça qui bloquait l'édition des fichiers car par defaut vscode etait forcé en mode Consultation et pas Edition.
J'avais parametré vim pour qu'il ouvre trjs en mode edition et là c'etait ok, et après j'ai simplement désinstallé cette app dont je ne me servais plus;
Merci pour ton commentaire quand même.","8","9"),
("Les indépendants qui ont publié leurs jeux sur Steam par exemple ont commencé (sauf talent mais rare) par des copies de vieux jeux (Tetris, PoP, etc.), puis ont créé leurs mini-jeux avant de s'attaquer à un jeu plus conséquent.
Dommage que je ne retrouve plus le site dont un article démontait certains arguments de débutants.
1/ un jeux en ligne dont je ne peut pas donner de détails trop approfondis : déjà, tu parles là, de scénario, de gameplay, des graphismes, de l'audio, ... ? Rien que là, tu pars mal. Aucun être-humain ne sort un GTA ou CS ou autres. Il y a une équipe pour le GP, une pour les graphismes, etc. Donc, le mieux c'est que tu consacres, disons, 50 heures pour chaque domaine. Tu conserves le domaine qui t'aura le plus fait kiffer.
2/ par ou commencer pour créer un jeux' puis 'inutile de me rabâcher que créer un jeux c'est complexe etc, car je sais déjà tout ça. Complètement antinomique, soit tu es immature de par ton jeune âge (j'espère) ou de par ton âge plus avancé (aïe), parce que si tu as réussi à savoir que la créa c'est complexe tu sais forcément par où commencer.
3/ je m'y connais déjà un petit peu en développement/level design/game design etc... Certes peu être pas assez pour créer un jeux de toutes pièces mais tant pis j'apprendrais. Lire point 1/
4/ me servir de l'Unreal Engine 5 Bon choix. Tu as aussi Godot qui est moins connu mais fonctionne de paire avec Blender 3D et est dispo sur Windows, MacOS et Linux. UE 5 n'est pas dispo sur Linux. Mais, UE 5 c'est très bien quand même.
En conclusion, créer un jeu c'est un marathon qui se mesure en années voire décennies si on est seul, complètement débutant et qu'on a une vie à côté. Collecte les infos pour débuter (les sites, les vidéos, etc.), débute 30 minutes à 1h par jour si tu peux, sinon, 2h le week-end. Varie les domaines du jeu vidéo pour savoir lesquels te plaisent le plus et le moins.
De plus, je te conseille, après l'apprentissage des bases, de proposer tes services bénévolement pour compléter un projet dont l'auteur aura déjà un port-folio.
Par exemple, tu dis être bon GD. Tu vois un groupe qui veut faire un jeu mais il manque le GD. Tu te proposes, et en contre-partie, tu demandes de l'aide personnes compétentes dans les autres spécialités","10","6"),
("Merci, justement, j'aimerai ne pas essayer en étant aiguillé directement par quelqu'un de plus expert que moi dans le domaine :)
Aussi et même si ce n'est pas exclus, je préfèrerai passer par un autre hébergement mutualisé plutôt que par un VPS que je devrai gérer moi même :)","9","2");