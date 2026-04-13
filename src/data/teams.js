// ============================================================
// teams.js — Comprehensive sports data for autocomplete
// Exports: teamsBySport, leaguesBySport, countriesBySport
// ============================================================

export const teamsBySport = {

  // ──────────────────────────────────────────────
  // FOOTBALL (SOCCER)
  // ──────────────────────────────────────────────
  football: [
    // England – Premier League
    "Arsenal", "Aston Villa", "Bournemouth", "Brentford", "Brighton & Hove Albion",
    "Chelsea", "Crystal Palace", "Everton", "Fulham", "Ipswich Town",
    "Leicester City", "Liverpool", "Manchester City", "Manchester United",
    "Newcastle United", "Nottingham Forest", "Southampton", "Tottenham Hotspur",
    "West Ham United", "Wolverhampton Wanderers",

    // England – Championship
    "Blackburn Rovers", "Bristol City", "Burnley", "Cardiff City", "Coventry City",
    "Derby County", "Hull City", "Leeds United", "Luton Town", "Middlesbrough",
    "Millwall", "Norwich City", "Oxford United", "Plymouth Argyle", "Portsmouth",
    "Preston North End", "Queens Park Rangers", "Sheffield United", "Sheffield Wednesday",
    "Stoke City", "Sunderland", "Swansea City", "Watford", "West Bromwich Albion",

    // England – League One
    "Barnsley", "Birmingham City", "Blackpool", "Bolton Wanderers", "Bristol Rovers",
    "Burton Albion", "Cambridge United", "Charlton Athletic", "Cheltenham Town",
    "Exeter City", "Huddersfield Town", "Leyton Orient", "Lincoln City",
    "Northampton Town", "Peterborough United", "Reading", "Rotherham United",
    "Shrewsbury Town", "Stevenage", "Stockport County", "Wigan Athletic", "Wrexham",

    // England – League Two
    "AFC Wimbledon", "Accrington Stanley", "Bradford City", "Carlisle United",
    "Colchester United", "Crawley Town", "Crewe Alexandra", "Doncaster Rovers",
    "Fleetwood Town", "Gillingham", "Grimsby Town", "Harrogate Town",
    "MK Dons", "Mansfield Town", "Morecambe", "Newport County",
    "Notts County", "Port Vale", "Salford City", "Swindon Town",
    "Tranmere Rovers", "Walsall", "Wimbledon",

    // Spain – La Liga
    "Athletic Club", "Atletico Madrid", "Barcelona", "Celta Vigo", "Espanyol",
    "Getafe", "Girona", "Granada", "Las Palmas", "Leganes",
    "Mallorca", "Osasuna", "Rayo Vallecano", "Real Betis", "Real Madrid",
    "Real Sociedad", "Real Valladolid", "Sevilla", "Valencia", "Villarreal",

    // Spain – La Liga 2
    "Almeria", "Burgos CF", "Cartagena", "Castellon", "Eldense",
    "Ferrol", "Huesca", "Levante", "Mirandes", "Oviedo",
    "Racing Santander", "Sabadell", "Sporting Gijon", "Tenerife", "Zaragoza",

    // Germany – Bundesliga
    "Bayer Leverkusen", "Bayern Munich", "Borussia Dortmund", "Borussia Monchengladbach",
    "Eintracht Frankfurt", "FC Augsburg", "FC Heidenheim", "FC St. Pauli",
    "Freiburg", "Hoffenheim", "Holstein Kiel", "Mainz 05",
    "RB Leipzig", "Union Berlin", "VfB Stuttgart", "VfL Bochum",
    "VfL Wolfsburg", "Werder Bremen",

    // Germany – 2. Bundesliga
    "Darmstadt 98", "Eintracht Braunschweig", "Fortuna Dusseldorf", "Greuther Furth",
    "Hamburg SV", "Hannover 96", "Hertha BSC", "Jahn Regensburg",
    "Kaiserslautern", "Karlsruher SC", "Magdeburg", "Nurnberg",
    "Paderborn", "Preussen Munster", "Schalke 04", "SpVgg Greuther Furth",

    // Germany – 3. Liga
    "Arminia Bielefeld", "Dynamo Dresden", "Energie Cottbus", "Erzgebirge Aue",
    "FC Ingolstadt", "FC Saarbrucken", "FC Viktoria Koln", "Hallescher FC",
    "MSV Duisburg", "Rot-Weiss Essen", "SV Waldhof Mannheim", "TSV 1860 Munich",
    "VfB Stuttgart II", "Wehen Wiesbaden",

    // Italy – Serie A
    "AC Milan", "AS Roma", "Atalanta", "Bologna", "Cagliari",
    "Como", "Empoli", "Fiorentina", "Genoa", "Hellas Verona",
    "Inter Milan", "Juventus", "Lazio", "Lecce", "Monza",
    "Napoli", "Parma", "Torino", "Udinese", "Venezia",

    // Italy – Serie B
    "Bari", "Brescia", "Catanzaro", "Cesena", "Cittadella",
    "Cosenza", "Cremonese", "Frosinone", "Juve Stabia", "Mantova",
    "Modena", "Palermo", "Pisa", "Reggiana", "Salernitana",
    "Sampdoria", "Sassuolo", "Spezia", "Sudtirol",

    // France – Ligue 1
    "AS Monaco", "Angers", "Auxerre", "Brest", "Lens",
    "Lille", "Lyon", "Marseille", "Montpellier", "Nantes",
    "Nice", "Paris Saint-Germain", "Reims", "Rennes", "Saint-Etienne",
    "Strasbourg", "Toulouse",

    // France – Ligue 2
    "Amiens", "Caen", "Clermont Foot", "Dunkerque", "Grenoble",
    "Guingamp", "Laval", "Le Havre", "Metz", "Niort",
    "Paris FC", "Pau FC", "Quevilly-Rouen", "Red Star", "Rodez",
    "Saint-Malo", "Troyes", "Valenciennes",

    // Netherlands – Eredivisie
    "AZ Alkmaar", "Ajax", "Almere City", "FC Groningen", "FC Twente",
    "FC Utrecht", "Feyenoord", "Fortuna Sittard", "Go Ahead Eagles",
    "Heerenveen", "Heracles Almelo", "NAC Breda", "NEC Nijmegen",
    "PSV Eindhoven", "PEC Zwolle", "RKC Waalwijk", "Sparta Rotterdam",
    "Willem II",

    // Netherlands – Eerste Divisie
    "ADO Den Haag", "Almeria", "De Graafschap", "Dordrecht", "Eindhoven",
    "FC Den Bosch", "FC Emmen", "FC Volendam", "Jong Ajax", "Jong AZ",
    "Jong PSV", "Jong Utrecht", "MVV Maastricht", "Roda JC", "Telstar",
    "TOP Oss", "VVV-Venlo",

    // Portugal – Primeira Liga
    "Arouca", "Benfica", "Boavista", "Braga", "Casa Pia",
    "Estoril", "Estrela Amadora", "Famalicao", "Farense", "Gil Vicente",
    "Moreirense", "Nacional", "Porto", "Rio Ave", "Santa Clara",
    "Sporting CP", "Vitoria Guimaraes",

    // Portugal – Liga Portugal 2
    "AVS", "Academica", "Academico Viseu", "Alverca", "Chaves",
    "Desp. Chaves", "FC Vizela", "Feirense", "Leixoes", "Mafra",
    "Maritimo", "Oliveirense", "Penafiel", "Tondela", "Varzim",

    // Turkey – Super Lig
    "Adana Demirspor", "Alanyaspor", "Antalyaspor", "Basaksehir", "Besiktas",
    "Bodrum FK", "Eyupspor", "Fenerbahce", "Galatasaray", "Gaziantep FK",
    "Hatayspor", "Kasimpasa", "Kayserispor", "Konyaspor", "Rizespor",
    "Samsunspor", "Sivasspor", "Trabzonspor",

    // Turkey – TFF First League
    "Adanaspor", "Altay", "Altinordu", "Bandirmaspor", "Boluspor",
    "Buyuksehir Belediye Erzurumspor", "Denizlispor", "Genclerbirligi",
    "Giresunspor", "Ittifak Holding Konyaspor", "Manisa FK", "Pendikspor",
    "Sakaryaspor", "Umraniyespor",

    // Scotland – Premiership
    "Aberdeen", "Celtic", "Dundee", "Dundee United", "Heart of Midlothian",
    "Hibernian", "Kilmarnock", "Motherwell", "Rangers", "Ross County",
    "St Johnstone", "St Mirren",

    // Scotland – Championship
    "Airdrieonians", "Arbroath", "Ayr United", "Dunfermline Athletic",
    "Falkirk", "Greenock Morton", "Hamilton Academical", "Inverness CT",
    "Partick Thistle", "Queen's Park", "Raith Rovers",

    // Belgium – Pro League
    "Anderlecht", "Beerschot", "Club Brugge", "Cercle Brugge", "Charleroi",
    "Gent", "Genk", "KV Kortrijk", "KV Mechelen", "KV Oostende",
    "Lierse Kempenzonen", "OH Leuven", "RWD Molenbeek", "Sint-Truiden",
    "Standard Liege", "Union Saint-Gilloise", "Westerlo",

    // Belgium – First Amateur
    "Beerschot AC", "Dender", "Lommel United", "Patro Eisden", "RFC Seraing",
    "Roeselare", "SK Beveren", "Virton",

    // Africa – Egyptian Premier League
    "Al Ahly", "Al Masry", "Al Mokawloon", "Ceramica Cleopatra", "El Gouna",
    "Enppi", "Future FC", "Ismaily", "National Bank of Egypt", "Pyramids FC",
    "Smouha", "Zamalek",

    // Africa – Nigerian Premier League
    "Enyimba", "Heartland FC", "Kano Pillars", "Lobi Stars", "Nasarawa United",
    "Plateau United", "Rangers International", "Rivers United", "Shooting Stars",
    "Sunshine Stars",

    // Africa – Ghana Premier League
    "Accra Hearts of Oak", "Aduana Stars", "Asante Kotoko", "Berekum Chelsea",
    "Dreams FC", "Karela United", "Legon Cities", "Medeama SC",
    "Real Tamale United", "Samartex",

    // Africa – South African PSL
    "AmaZulu", "Cape Town City", "Cape Town Spurs", "Chippa United",
    "Golden Arrows", "Kaizer Chiefs", "Mamelodi Sundowns", "Maritzburg United",
    "Orlando Pirates", "Polokwane City", "Richards Bay", "Royal AM",
    "Sekhukhune United", "Stellenbosch FC", "Supersport United", "TS Galaxy",

    // Africa – Algerian Ligue Pro
    "Belouizdad", "ES Setif", "MC Alger", "MC Oran", "Mouloudia Oran",
    "NA Hussein Dey", "USM Alger", "USM Bel Abbes",

    // Africa – Tunisian Ligue 1
    "CA Bizertin", "Club Africain", "CS Sfaxien", "Espérance Sportive de Tunis",
    "Etoile du Sahel", "JS Kairouan", "US Monastir", "US Tataouine",

    // Africa – Kenyan Premier League
    "AFC Leopards", "Bandari FC", "Gor Mahia", "KCB FC", "Kakamega Homeboyz",
    "Mathare United", "Nairobi City Stars", "Sofapaka", "Tusker FC",

    // Africa – Ugandan Premier League
    "KCCA FC", "Onduparaka FC", "SC Villa", "URA FC", "Vipers SC",

    // Africa – Tanzanian Premier League
    "Azam FC", "Coastal Union", "Kagera Sugar", "Namungo FC",
    "Simba SC", "Young Africans SC",

    // Africa – Zambian Super League
    "Forest Rangers", "Green Buffaloes", "Nkana FC", "Power Dynamos",
    "Red Arrows", "Zanaco FC", "Zesco United",

    // Africa – Zimbabwean Premier Soccer League
    "Caps United", "Chicken Inn", "Dynamos FC", "FC Platinum",
    "Highlanders", "Ngezi Platinum Stars",

    // Africa – Rwandan Premier League
    "APR FC", "AS Kigali", "Gorilla FC", "Kiyovu SC", "Rayon Sports",

    // Africa – Cameroonian MTN Elite One
    "Canon Yaounde", "Coton Sport", "Fovu Club", "PWD Bamenda", "Union Douala",

    // Africa – Senegalese Premier League
    "AS Douanes", "AS Pikine", "Dakar Sacre-Coeur", "Diambars FC",
    "Generation Foot", "Jaraaf", "Teungueth FC",

    // Africa – Ivorian Ligue 1
    "Africa Sports", "AFAD Djékanou", "ASEC Mimosas", "Sporting Club de Gagnoa",
    "Stade d'Abidjan", "Williamsville AC",

    // Africa – Moroccan Botola Pro
    "AS FAR", "Difaa El Jadidi", "FUS Rabat", "Hassania Agadir",
    "Ittihad Tanger", "Moghreb Tetouan", "Raja Casablanca", "RS Berkane",
    "Wydad Casablanca",

    // Saudi Arabia – Saudi Pro League
    "Al Ahli", "Al Ettifaq", "Al Fayha", "Al Fateh", "Al Hazem",
    "Al Hilal", "Al Ittihad", "Al Nassr", "Al Okhdood", "Al Qadsiah",
    "Al Raed", "Al Riyadh", "Al Shabab", "Al Taawoun", "Al Wahda",
    "Al Wesam", "Damac FC", "Abha Club",

    // MLS
    "Atlanta United", "Austin FC", "Charlotte FC", "Chicago Fire",
    "Colorado Rapids", "Columbus Crew", "D.C. United", "FC Cincinnati",
    "FC Dallas", "Houston Dynamo", "Inter Miami", "LA Galaxy",
    "LAFC", "Minnesota United", "Nashville SC", "New England Revolution",
    "New York City FC", "New York Red Bulls", "Orlando City", "Philadelphia Union",
    "Portland Timbers", "Real Salt Lake", "San Jose Earthquakes", "Seattle Sounders",
    "Sporting Kansas City", "St. Louis City SC", "Toronto FC", "Vancouver Whitecaps",
    "CF Montreal", "New York Red Bulls II",

    // International – National Teams (Europe)
    "Albania", "Andorra", "Armenia", "Austria", "Azerbaijan",
    "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia",
    "Cyprus", "Czech Republic", "Denmark", "England", "Estonia",
    "Faroe Islands", "Finland", "France", "Georgia", "Germany",
    "Gibraltar", "Greece", "Hungary", "Iceland", "Ireland",
    "Israel", "Italy", "Kazakhstan", "Kosovo", "Latvia",
    "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova",
    "Montenegro", "Netherlands", "North Macedonia", "Northern Ireland", "Norway",
    "Poland", "Portugal", "Romania", "Russia", "San Marino",
    "Scotland", "Serbia", "Slovakia", "Slovenia", "Spain",
    "Sweden", "Switzerland", "Turkey", "Ukraine", "Wales",

    // International – National Teams (South America)
    "Argentina", "Bolivia", "Brazil", "Chile", "Colombia",
    "Ecuador", "Paraguay", "Peru", "Uruguay", "Venezuela",

    // International – National Teams (North/Central America & Caribbean)
    "Canada", "Costa Rica", "Cuba", "El Salvador", "Guatemala",
    "Haiti", "Honduras", "Jamaica", "Mexico", "Panama",
    "Trinidad and Tobago", "United States",

    // International – National Teams (Africa)
    "Algeria", "Angola", "Benin", "Burkina Faso", "Cameroon",
    "Cape Verde", "Central African Republic", "Comoros", "Congo DR",
    "Congo Republic", "Cote d'Ivoire", "Egypt", "Equatorial Guinea",
    "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea",
    "Guinea-Bissau", "Kenya", "Liberia", "Libya", "Madagascar",
    "Malawi", "Mali", "Mauritania", "Morocco", "Mozambique",
    "Namibia", "Niger", "Nigeria", "Rwanda", "Senegal",
    "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan",
    "Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe",

    // International – National Teams (Asia)
    "Australia", "Bahrain", "China", "India", "Indonesia",
    "Iran", "Iraq", "Japan", "Jordan", "Kuwait",
    "Lebanon", "Malaysia", "Myanmar", "North Korea", "Oman",
    "Palestine", "Philippines", "Qatar", "Saudi Arabia", "Singapore",
    "South Korea", "Syria", "Thailand", "UAE", "Uzbekistan",
    "Vietnam", "Yemen",

    // International – National Teams (Oceania)
    "Fiji", "New Caledonia", "New Zealand", "Papua New Guinea",
    "Solomon Islands", "Tahiti", "Vanuatu",
  ],


  // ──────────────────────────────────────────────
  // BASKETBALL
  // ──────────────────────────────────────────────
  basketball: [
    // NBA – Atlantic Division
    "Boston Celtics", "Brooklyn Nets", "New York Knicks",
    "Philadelphia 76ers", "Toronto Raptors",

    // NBA – Central Division
    "Chicago Bulls", "Cleveland Cavaliers", "Detroit Pistons",
    "Indiana Pacers", "Milwaukee Bucks",

    // NBA – Southeast Division
    "Atlanta Hawks", "Charlotte Hornets", "Miami Heat",
    "Orlando Magic", "Washington Wizards",

    // NBA – Northwest Division
    "Denver Nuggets", "Minnesota Timberwolves", "Oklahoma City Thunder",
    "Portland Trail Blazers", "Utah Jazz",

    // NBA – Pacific Division
    "Golden State Warriors", "LA Clippers", "Los Angeles Lakers",
    "Phoenix Suns", "Sacramento Kings",

    // NBA – Southwest Division
    "Dallas Mavericks", "Houston Rockets", "Memphis Grizzlies",
    "New Orleans Pelicans", "San Antonio Spurs",

    // NBA G League
    "Austin Spurs", "Birmingham Squadron", "Capital City Go-Go",
    "Cleveland Charge", "College Park Skyhawks", "Delaware Blue Coats",
    "Fort Wayne Mad Ants", "Grand Rapids Gold", "Greensboro Swarm",
    "Iowa Wolves", "Long Island Nets", "Maine Celtics",
    "Memphis Hustle", "Mexico City Capitanes", "Motor City Cruise",
    "Oklahoma City Blue", "Ontario Clippers", "Osceola Magic",
    "Raptors 905", "Rio Grande Valley Vipers", "Salt Lake City Stars",
    "Santa Cruz Warriors", "Sioux Falls Skyforce", "South Bay Lakers",
    "Stockton Kings", "Texas Legends", "Westchester Knicks",
    "Wisconsin Herd",

    // EuroLeague
    "Anadolu Efes", "AS Monaco Basketball", "Alba Berlin",
    "Baskonia", "Bayern Munich Basketball", "Crvena zvezda",
    "EA7 Emporio Armani Milan", "Fenerbahce Beko", "Maccabi Tel Aviv",
    "Olympiacos", "Panathinaikos", "Partizan Belgrade",
    "Real Madrid Basketball", "Valencia Basket", "Virtus Bologna",
    "Zalgiris Kaunas",

    // EuroCup
    "Bourg-en-Bresse", "Buducnost VOLI", "Cedevita Olimpija",
    "Dolomiti Energia Trento", "Gran Canaria", "Hamburg Towers",
    "Hapoel Tel Aviv", "Joventut Badalona", "Lietkabelis",
    "Nanterre 92", "Nizhny Novgorod", "Promitheas Patras",
    "Ratiopharm Ulm", "Rytas Vilnius", "Slask Wroclaw",
    "Spirou Charleroi", "Tofas Bursa", "Turk Telekom",
    "Umana Reyer Venezia", "Unicaja Malaga",

    // National Teams
    "Argentina Basketball", "Australia Basketball", "Brazil Basketball",
    "Canada Basketball", "China Basketball", "Croatia Basketball",
    "France Basketball", "Germany Basketball", "Greece Basketball",
    "Italy Basketball", "Latvia Basketball", "Lithuania Basketball",
    "Nigeria Basketball", "Serbia Basketball", "Slovenia Basketball",
    "Spain Basketball", "Turkey Basketball", "USA Basketball",
  ],


  // ──────────────────────────────────────────────
  // TENNIS (ATP / WTA top players)
  // ──────────────────────────────────────────────
  tennis: [
    // ATP Top 50
    "Jannik Sinner", "Carlos Alcaraz", "Novak Djokovic", "Alexander Zverev",
    "Daniil Medvedev", "Andrey Rublev", "Casper Ruud", "Hubert Hurkacz",
    "Grigor Dimitrov", "Alex de Minaur", "Taylor Fritz", "Ben Shelton",
    "Stefanos Tsitsipas", "Tommy Paul", "Ugo Humbert", "Sebastian Korda",
    "Frances Tiafoe", "Nicolas Jarry", "Karen Khachanov", "Holger Rune",
    "Lorenzo Musetti", "Tomas Machac", "Alejandro Davidovich Fokina",
    "Jiri Lehecka", "Flavio Cobolli", "Nuno Borges", "Matteo Berrettini",
    "Gael Monfils", "Borna Coric", "Tallon Griekspoor", "Alexei Popyrin",
    "Jakub Mensik", "Luciano Darderi", "Mariano Navone", "Miomir Kecmanovic",
    "Laslo Djere", "Yoshihito Nishioka", "Marcos Giron", "Quentin Halys",
    "Fabian Marozsan", "Camilo Ugo Carabelli", "Luca Van Assche",
    "Corentin Moutet", "Yannick Hanfmann", "Rinky Hijikata",
    "Thanasi Kokkinakis", "Jordan Thompson", "Taro Daniel",
    "Botic van de Zandschulp", "Roberto Bautista Agut",

    // WTA Top 50
    "Aryna Sabalenka", "Iga Swiatek", "Coco Gauff", "Elena Rybakina",
    "Jessica Pegula", "Mirra Andreeva", "Daria Kasatkina", "Barbora Krejcikova",
    "Jasmine Paolini", "Emma Navarro", "Qinwen Zheng", "Madison Keys",
    "Paula Badosa", "Donna Vekic", "Liudmila Samsonova", "Elina Svitolina",
    "Beatriz Haddad Maia", "Danielle Collins", "Karolina Muchova",
    "Anna Kalinskaya", "Marta Kostyuk", "Ekaterina Alexandrova",
    "Veronika Kudermetova", "Caroline Wozniacki", "Sloane Stephens",
    "Sorana Cirstea", "Anastasia Pavlyuchenkova", "Elise Mertens",
    "Yulia Putintseva", "Magdalena Frech", "Peyton Stearns",
    "Ashlyn Krueger", "Naomi Osaka", "Victoria Azarenka",
    "Marketa Vondrousova", "Petra Kvitova", "Ons Jabeur",
    "Maria Sakkari", "Jelena Ostapenko", "Anhelina Kalinina",
    "Viktoriya Tomova", "Xinyu Wang", "Yue Yuan",
    "Alycia Parks", "Camila Osorio", "Nadia Podoroska",
    "Tamara Zidansek", "Katerina Siniakova", "Irina-Camelia Begu",
    "Lucia Bronzetti",
  ],


  // ──────────────────────────────────────────────
  // RUGBY
  // ──────────────────────────────────────────────
  rugby: [
    // Six Nations – National Teams
    "England Rugby", "France Rugby", "Ireland Rugby",
    "Italy Rugby", "Scotland Rugby", "Wales Rugby",

    // Rugby Championship – National Teams
    "Argentina Rugby (Los Pumas)", "Australia Rugby (Wallabies)",
    "New Zealand Rugby (All Blacks)", "South Africa Rugby (Springboks)",

    // Premiership Rugby (England)
    "Bath Rugby", "Bristol Bears", "Exeter Chiefs", "Gloucester Rugby",
    "Harlequins", "Leicester Tigers", "London Irish", "Newcastle Falcons",
    "Northampton Saints", "Sale Sharks", "Saracens", "Wasps",
    "Worcester Warriors",

    // United Rugby Championship (URC)
    "Benetton Rugby", "Cardiff Rugby", "Cell C Sharks", "DHL Stormers",
    "Dragons RFC", "Edinburgh Rugby", "Glasgow Warriors", "Leinster Rugby",
    "Lions", "Munster Rugby", "Ospreys", "Scarlets",
    "Ulster Rugby", "Zebre Parma",

    // Super Rugby Pacific
    "ACT Brumbies", "Auckland Blues", "Bay of Plenty Steamers",
    "Chiefs", "Crusaders", "Fijian Drua", "Highlanders",
    "Hurricanes", "Moana Pasifika", "NSW Waratahs",
    "Queensland Reds", "Western Force",

    // Top 14 (France)
    "ASM Clermont Auvergne", "Bayonne", "Bordeaux-Begles",
    "Brive", "Castres Olympique", "La Rochelle",
    "Lyon OU", "Montpellier Herault Rugby", "Pau",
    "Racing 92", "Stade Aurillacois", "Stade Toulousain",
    "Toulon", "Vannes",

    // Other International Teams
    "Canada Rugby", "Georgia Rugby", "Japan Rugby",
    "Namibia Rugby", "Romania Rugby", "Samoa Rugby",
    "Tonga Rugby", "Uruguay Rugby", "USA Rugby",
    "Fiji Rugby",
  ],


  // ──────────────────────────────────────────────
  // BASEBALL
  // ──────────────────────────────────────────────
  baseball: [
    // MLB – American League East
    "Baltimore Orioles", "Boston Red Sox", "New York Yankees",
    "Tampa Bay Rays", "Toronto Blue Jays",

    // MLB – American League Central
    "Chicago White Sox", "Cleveland Guardians", "Detroit Tigers",
    "Kansas City Royals", "Minnesota Twins",

    // MLB – American League West
    "Houston Astros", "Los Angeles Angels", "Oakland Athletics",
    "Seattle Mariners", "Texas Rangers",

    // MLB – National League East
    "Atlanta Braves", "Miami Marlins", "New York Mets",
    "Philadelphia Phillies", "Washington Nationals",

    // MLB – National League Central
    "Chicago Cubs", "Cincinnati Reds", "Milwaukee Brewers",
    "Pittsburgh Pirates", "St. Louis Cardinals",

    // MLB – National League West
    "Arizona Diamondbacks", "Colorado Rockies", "Los Angeles Dodgers",
    "San Diego Padres", "San Francisco Giants",

    // NPB (Japan)
    "Chiba Lotte Marines", "Chunichi Dragons", "Fukuoka SoftBank Hawks",
    "Hanshin Tigers", "Hiroshima Toyo Carp", "Hokkaido Nippon-Ham Fighters",
    "Orix Buffaloes", "Rakuten Eagles", "Saitama Seibu Lions",
    "Tokyo Yakult Swallows", "Tohoku Rakuten Golden Eagles",
    "Yokohama DeNA BayStars", "Yomiuri Giants",

    // KBO (South Korea)
    "Doosan Bears", "Hanwha Eagles", "Kia Tigers",
    "Kiwoom Heroes", "KT Wiz", "LG Twins",
    "Lotte Giants", "NC Dinos", "Samsung Lions",
    "SSG Landers",
  ],


  // ──────────────────────────────────────────────
  // HOCKEY (ICE)
  // ──────────────────────────────────────────────
  hockey: [
    // NHL – Atlantic Division
    "Boston Bruins", "Buffalo Sabres", "Detroit Red Wings",
    "Florida Panthers", "Montreal Canadiens", "Ottawa Senators",
    "Tampa Bay Lightning", "Toronto Maple Leafs",

    // NHL – Metropolitan Division
    "Carolina Hurricanes", "Columbus Blue Jackets", "New Jersey Devils",
    "New York Islanders", "New York Rangers", "Philadelphia Flyers",
    "Pittsburgh Penguins", "Washington Capitals",

    // NHL – Central Division
    "Arizona Coyotes", "Chicago Blackhawks", "Colorado Avalanche",
    "Dallas Stars", "Minnesota Wild", "Nashville Predators",
    "St. Louis Blues", "Winnipeg Jets",

    // NHL – Pacific Division
    "Anaheim Ducks", "Calgary Flames", "Edmonton Oilers",
    "Las Vegas Golden Knights", "Los Angeles Kings", "San Jose Sharks",
    "Seattle Kraken", "Vancouver Canucks",

    // KHL (Russia / Eurasia)
    "Ak Bars Kazan", "Avangard Omsk", "CSKA Moscow",
    "Dinamo Minsk", "Dinamo Riga", "HC Sochi",
    "Jokerit Helsinki", "Kunlun Red Star", "Lokomotiv Yaroslavl",
    "Metallurg Magnitogorsk", "Neftekhimik Nizhnekamsk", "Salavat Yulaev Ufa",
    "Severstal Cherepovets", "SKA Saint Petersburg", "Spartak Moscow",
    "Torpedo Nizhny Novgorod", "Traktor Chelyabinsk",

    // SHL (Sweden)
    "Brynas IF", "Djurgarden IF", "Farjestad BK",
    "Frolunda HC", "HV71", "IF Malmo Redhawks",
    "Leksands IF", "Linkopings HC", "Lulea HF",
    "MoDo Hockey", "Orebro HK", "Oskarshamn IK",
    "Rogle BK", "Skelleftea AIK", "Timra IK",
    "Vaxjo Lakers",
  ],


  // ──────────────────────────────────────────────
  // BOXING
  // ──────────────────────────────────────────────
  boxing: [
    // Heavyweight
    "Oleksandr Usyk", "Tyson Fury", "Anthony Joshua", "Deontay Wilder",
    "Daniel Dubois", "Joe Joyce", "Filip Hrgovic", "Zhilei Zhang",
    "Andy Ruiz Jr.", "Otto Wallin",

    // Cruiserweight
    "Jai Opetaia", "Mairis Briedis", "Lawrence Okolie", "Yuniel Dorticos",
    "Mateusz Masternak",

    // Light Heavyweight
    "Artur Beterbiev", "Dmitry Bivol", "Joe Smith Jr.", "Callum Johnson",
    "Joshua Buatsi", "Lyndon Arthur",

    // Super Middleweight
    "Canelo Alvarez", "David Benavidez", "Caleb Plant", "Edgar Berlanga",
    "Chris Eubank Jr.", "Liam Smith",

    // Middleweight
    "Jermall Charlo", "Janibek Alimkhanuly", "Carlos Adames",
    "Erislandy Lara", "Demetrius Andrade",

    // Super Welterweight / Light Middleweight
    "Jermell Charlo", "Tim Tszyu", "Sebastian Fundora",
    "Brian Castano", "Tony Harrison",

    // Welterweight
    "Errol Spence Jr.", "Terence Crawford", "Vergil Ortiz Jr.",
    "Shawn Porter", "Keith Thurman", "Yordenis Ugas",

    // Super Lightweight / Junior Welterweight
    "Josh Taylor", "Jose Zepeda", "Regis Prograis",
    "Jack Catterall", "Arnold Barboza Jr.",

    // Lightweight
    "Gervonta Davis", "Vasyl Lomachenko", "Devin Haney",
    "Ryan Garcia", "George Kambosos Jr.", "Shakur Stevenson",

    // Super Featherweight
    "Oscar Valdez", "Robson Conceicao", "Lamont Roach Jr.",

    // Featherweight
    "Leo Santa Cruz", "Gary Russell Jr.", "Rey Vargas",
    "Brandon Figueroa", "Mark Magsayo",

    // Super Bantamweight
    "Murodjon Akhmadaliev", "Stephen Fulton", "Brandon Figueroa",
    "Danny Roman",

    // Bantamweight
    "Naoya Inoue", "Nonito Donaire", "Paul Butler",
    "Reymart Gaballo",

    // Super Flyweight
    "Juan Francisco Estrada", "Roman Gonzalez", "Kazuto Ioka",
    "Srisaket Sor Rungvisai",

    // Flyweight
    "Julio Cesar Martinez", "Charlie Edwards", "Sunny Edwards",
    "Artem Dalakian",

    // Light Flyweight
    "Ken Shiro", "Hiroto Kyoguchi", "Felix Alvarado",

    // Minimumweight / Strawweight
    "Wanheng Menayothin", "Knockout CP Freshmart", "Panya Pradabsri",
  ],


  // ──────────────────────────────────────────────
  // CRICKET
  // ──────────────────────────────────────────────
  cricket: [
    // IPL Teams
    "Chennai Super Kings", "Delhi Capitals", "Gujarat Titans",
    "Kolkata Knight Riders", "Lucknow Super Giants", "Mumbai Indians",
    "Punjab Kings", "Rajasthan Royals", "Royal Challengers Bangalore",
    "Sunrisers Hyderabad",

    // International Teams
    "Afghanistan Cricket", "Australia Cricket", "Bangladesh Cricket",
    "England Cricket", "India Cricket", "Ireland Cricket",
    "New Zealand Cricket", "Pakistan Cricket", "South Africa Cricket",
    "Sri Lanka Cricket", "West Indies Cricket", "Zimbabwe Cricket",
    "Netherlands Cricket", "Scotland Cricket", "UAE Cricket",
    "Namibia Cricket", "Nepal Cricket", "Oman Cricket",
    "Papua New Guinea Cricket",

    // BBL (Big Bash League – Australia)
    "Adelaide Strikers", "Brisbane Heat", "Hobart Hurricanes",
    "Melbourne Renegades", "Melbourne Stars", "Perth Scorchers",
    "Sydney Sixers", "Sydney Thunder",

    // CPL (Caribbean Premier League)
    "Barbados Royals", "Guyana Amazon Warriors", "Jamaica Tallawahs",
    "Saint Kitts and Nevis Patriots", "St Lucia Kings",
    "Trinbago Knight Riders",

    // SA20 (South Africa)
    "Durban's Super Giants", "Joburg Super Kings", "MI Cape Town",
    "Paarl Royals", "Pretoria Capitals", "Sunrisers Eastern Cape",

    // The Hundred
    "Birmingham Phoenix", "London Spirit", "Manchester Originals",
    "Northern Superchargers", "Oval Invincibles", "Southern Brave",
    "Trent Rockets", "Welsh Fire",
  ],


  // ──────────────────────────────────────────────
  // OTHER SPORTS
  // ──────────────────────────────────────────────
  other: [
    // MMA / UFC (fighters)
    "Jon Jones", "Islam Makhachev", "Alex Pereira", "Leon Edwards",
    "Sean O'Malley", "Ilia Topuria", "Dustin Poirier", "Charles Oliveira",
    "Conor McGregor", "Khabib Nurmagomedov", "Stipe Miocic",
    "Ciryl Gane", "Tom Aspinall", "Dricus du Plessis",
    "Israel Adesanya", "Robert Whittaker", "Valentina Shevchenko",
    "Zhang Weili", "Alexa Grasso",

    // Formula 1 (drivers)
    "Max Verstappen", "Lewis Hamilton", "Charles Leclerc",
    "Lando Norris", "Carlos Sainz", "Fernando Alonso",
    "George Russell", "Oscar Piastri", "Sergio Perez",
    "Lance Stroll", "Valtteri Bottas", "Nico Hulkenberg",
    "Pierre Gasly", "Esteban Ocon", "Yuki Tsunoda",
    "Kevin Magnussen", "Guanyu Zhou", "Logan Sargeant",
    "Alexander Albon", "Daniel Ricciardo",

    // Darts (players)
    "Michael van Gerwen", "Luke Littler", "Luke Humphries",
    "Gerwyn Price", "Peter Wright", "Gary Anderson",
    "Jonny Clayton", "Dimitri Van den Bergh", "Jose de Sousa",
    "Michael Smith", "Nathan Aspinall", "Rob Cross",

    // Snooker (players)
    "Ronnie O'Sullivan", "Judd Trump", "Mark Selby",
    "Neil Robertson", "John Higgins", "Kyren Wilson",
    "Mark Williams", "Shaun Murphy", "Barry Hawkins",
    "Ding Junhui", "Zhao Xintong", "Si Jiahui",

    // Golf (players)
    "Scottie Scheffler", "Rory McIlroy", "Jon Rahm",
    "Viktor Hovland", "Xander Schauffele", "Collin Morikawa",
    "Patrick Cantlay", "Wyndham Clark", "Brooks Koepka",
    "Dustin Johnson", "Tiger Woods", "Phil Mickelson",
    "Justin Thomas", "Jordan Spieth", "Tommy Fleetwood",
    "Shane Lowry", "Matt Fitzpatrick", "Tyrrell Hatton",

    // Volleyball (teams)
    "Brazil Volleyball", "Italy Volleyball", "Poland Volleyball",
    "France Volleyball", "USA Volleyball", "Russia Volleyball",
    "Serbia Volleyball", "Japan Volleyball", "Argentina Volleyball",
    "Slovenia Volleyball",

    // Table Tennis (players)
    "Fan Zhendong", "Ma Long", "Wang Chuqin",
    "Truls Moregard", "Timo Boll", "Dimitrij Ovtcharov",
    "Hugo Calderano", "Tomokazu Harimoto", "Lin Gaoyuan",
    "Sun Yingsha", "Chen Meng", "Wang Manyu",
  ],
};


// ============================================================
// LEAGUES BY SPORT
// ============================================================
export const leaguesBySport = {

  football: [
    // England
    "Premier League", "EFL Championship", "EFL League One", "EFL League Two",
    "National League", "FA Cup", "EFL Cup (Carabao Cup)",
    // Spain
    "La Liga", "La Liga 2", "Copa del Rey", "Supercopa de España",
    // Germany
    "Bundesliga", "2. Bundesliga", "3. Liga", "DFB-Pokal",
    // Italy
    "Serie A", "Serie B", "Serie C", "Coppa Italia",
    // France
    "Ligue 1", "Ligue 2", "National", "Coupe de France",
    // Netherlands
    "Eredivisie", "Eerste Divisie", "KNVB Cup",
    // Portugal
    "Primeira Liga", "Liga Portugal 2", "Taça de Portugal",
    // Turkey
    "Super Lig", "TFF First League", "TFF Second League", "Turkish Cup",
    // Scotland
    "Scottish Premiership", "Scottish Championship", "Scottish League One",
    "Scottish League Two", "Scottish Cup",
    // Belgium
    "Belgian Pro League", "Belgian First Amateur", "Belgian Cup",
    // Africa
    "Egyptian Premier League", "Nigerian Premier League", "Ghana Premier League",
    "South African PSL", "Algerian Ligue Pro", "Tunisian Ligue 1",
    "Kenyan Premier League", "Ugandan Premier League", "Tanzanian Premier League",
    "Zambian Super League", "Zimbabwean Premier Soccer League",
    "Rwandan Premier League", "Cameroonian MTN Elite One",
    "Senegalese Premier League", "Ivorian Ligue 1", "Moroccan Botola Pro",
    "CAF Champions League", "CAF Confederation Cup",
    // Saudi Arabia
    "Saudi Pro League", "Saudi King Cup",
    // USA
    "MLS", "USL Championship", "USL League One", "US Open Cup",
    // Europe – Other
    "Russian Premier League", "Ukrainian Premier League", "Greek Super League",
    "Swiss Super League", "Austrian Bundesliga", "Danish Superliga",
    "Norwegian Eliteserien", "Swedish Allsvenskan", "Polish Ekstraklasa",
    "Czech First League", "Romanian Liga 1", "Croatian HNL",
    "Serbian SuperLiga", "Hungarian OTP Bank Liga",
    // Cups & Continental
    "UEFA Champions League", "UEFA Europa League", "UEFA Conference League",
    "UEFA Nations League", "FIFA World Cup", "FIFA World Cup Qualifiers",
    "UEFA European Championship", "Copa America", "Africa Cup of Nations",
    "AFC Asian Cup", "CONCACAF Gold Cup", "OFC Nations Cup",
    "Club World Cup",
  ],

  basketball: [
    "NBA", "NBA G League", "EuroLeague", "EuroCup",
    "FIBA World Cup", "FIBA EuroBasket", "FIBA AmeriCup",
    "FIBA AfroBasket", "FIBA Asia Cup", "FIBA Oceania Cup",
    "NBA Summer League", "NCAA Basketball",
    "LNB Pro A (France)", "Basketball Bundesliga (Germany)",
    "Lega Basket Serie A (Italy)", "Liga ACB (Spain)",
    "BSL (Turkey)", "VTB United League", "NBL (Australia)",
    "CBA (China)", "KBL (South Korea)", "PBA (Philippines)",
  ],

  tennis: [
    // Grand Slams
    "Australian Open", "French Open (Roland Garros)", "Wimbledon", "US Open",
    // ATP Masters 1000
    "Indian Wells Masters", "Miami Open", "Monte-Carlo Masters",
    "Madrid Open", "Italian Open (Rome)", "Canadian Open",
    "Cincinnati Masters", "Shanghai Masters", "Paris Masters",
    // ATP 500
    "Dubai Tennis Championships", "Barcelona Open", "Halle Open",
    "Queen's Club Championships", "Hamburg Open", "Vienna Open",
    "Basel Indoor", "Tokyo Open",
    // WTA 1000
    "WTA Indian Wells", "WTA Miami", "WTA Madrid", "WTA Rome",
    "WTA Canadian Open", "WTA Cincinnati", "WTA Wuhan", "WTA Beijing",
    // Team Events
    "Davis Cup", "Billie Jean King Cup", "Laver Cup", "United Cup",
    "ATP Finals", "WTA Finals",
  ],

  rugby: [
    "Six Nations Championship", "Rugby Championship",
    "Premiership Rugby", "United Rugby Championship (URC)",
    "Super Rugby Pacific", "Top 14", "Pro D2",
    "Rugby World Cup", "Rugby Europe Championship",
    "Pacific Nations Cup", "The Rugby Championship",
    "Heineken Champions Cup", "EPCR Challenge Cup",
    "Currie Cup", "Mitre 10 Cup (NPC)",
  ],

  baseball: [
    "MLB", "MLB Playoffs", "World Series",
    "NPB (Nippon Professional Baseball)", "KBO League",
    "CPBL (Chinese Professional Baseball League)",
    "LMB (Mexican Baseball League)", "LIDOM (Dominican Republic)",
    "LVBP (Venezuelan Professional Baseball League)",
    "World Baseball Classic", "MLB Spring Training",
    "Triple-A East", "Triple-A West", "Double-A Central",
    "Double-A Northeast", "Double-A South",
  ],

  hockey: [
    "NHL", "NHL Playoffs", "Stanley Cup Finals",
    "KHL", "SHL (Sweden)", "Liiga (Finland)",
    "NL (Switzerland)", "DEL (Germany)", "EIHL (UK)",
    "AHL", "ECHL", "OHL", "WHL", "QMJHL",
    "IIHF World Championship", "IIHF World Junior Championship",
    "Winter Olympics Ice Hockey",
  ],

  boxing: [
    "WBC", "WBA", "IBF", "WBO",
    "IBO", "Ring Magazine",
    "World Boxing Super Series", "Golden Boy Promotions",
    "Top Rank Boxing", "Matchroom Boxing",
    "DAZN Boxing", "ESPN Boxing",
  ],

  cricket: [
    "IPL (Indian Premier League)", "BBL (Big Bash League)",
    "CPL (Caribbean Premier League)", "SA20",
    "The Hundred", "PSL (Pakistan Super League)",
    "LPL (Lanka Premier League)", "BPL (Bangladesh Premier League)",
    "ILT20 (UAE)", "MLC (Major League Cricket)",
    "ICC Cricket World Cup", "ICC T20 World Cup",
    "ICC Champions Trophy", "ICC World Test Championship",
    "The Ashes", "Test Series", "ODI Series", "T20I Series",
    "County Championship (England)", "Sheffield Shield (Australia)",
    "Ranji Trophy (India)", "Plunket Shield (New Zealand)",
  ],

  other: [
    // MMA
    "UFC", "Bellator MMA", "ONE Championship", "PFL",
    // F1
    "Formula 1 World Championship", "Formula 2", "Formula 3",
    // Darts
    "PDC World Darts Championship", "Premier League Darts",
    "World Matchplay", "World Grand Prix", "Grand Slam of Darts",
    // Snooker
    "World Snooker Championship", "UK Championship", "Masters Snooker",
    "Players Championship", "Tour Championship",
    // Golf
    "The Masters", "US Open Golf", "The Open Championship",
    "PGA Championship", "Ryder Cup", "Presidents Cup",
    "PGA Tour", "DP World Tour", "LIV Golf",
    // Volleyball
    "FIVB Volleyball World Championship", "FIVB Nations League",
    "Olympic Volleyball",
    // Table Tennis
    "ITTF World Championships", "ITTF World Cup",
    "WTT Champions", "Olympic Table Tennis",
  ],
};


// ============================================================
// COUNTRIES BY SPORT
// ============================================================
export const countriesBySport = {

  football: [
    // Europe
    "Albania", "Andorra", "Armenia", "Austria", "Azerbaijan",
    "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia",
    "Cyprus", "Czech Republic", "Denmark", "England", "Estonia",
    "Faroe Islands", "Finland", "France", "Georgia", "Germany",
    "Gibraltar", "Greece", "Hungary", "Iceland", "Ireland",
    "Israel", "Italy", "Kazakhstan", "Kosovo", "Latvia",
    "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova",
    "Montenegro", "Netherlands", "North Macedonia", "Northern Ireland", "Norway",
    "Poland", "Portugal", "Romania", "Russia", "San Marino",
    "Scotland", "Serbia", "Slovakia", "Slovenia", "Spain",
    "Sweden", "Switzerland", "Turkey", "Ukraine", "Wales",
    // South America
    "Argentina", "Bolivia", "Brazil", "Chile", "Colombia",
    "Ecuador", "Paraguay", "Peru", "Uruguay", "Venezuela",
    // North/Central America & Caribbean
    "Canada", "Costa Rica", "Cuba", "El Salvador", "Guatemala",
    "Haiti", "Honduras", "Jamaica", "Mexico", "Panama",
    "Trinidad and Tobago", "United States",
    // Africa
    "Algeria", "Angola", "Benin", "Burkina Faso", "Cameroon",
    "Cape Verde", "Congo DR", "Congo Republic", "Cote d'Ivoire", "Egypt",
    "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea",
    "Kenya", "Libya", "Madagascar", "Malawi", "Mali",
    "Mauritania", "Morocco", "Mozambique", "Namibia", "Niger",
    "Nigeria", "Rwanda", "Senegal", "Sierra Leone", "South Africa",
    "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda",
    "Zambia", "Zimbabwe",
    // Asia
    "Australia", "Bahrain", "China", "India", "Indonesia",
    "Iran", "Iraq", "Japan", "Jordan", "Kuwait",
    "Lebanon", "Malaysia", "North Korea", "Oman", "Palestine",
    "Philippines", "Qatar", "Saudi Arabia", "Singapore", "South Korea",
    "Syria", "Thailand", "UAE", "Uzbekistan", "Vietnam",
    // Oceania
    "Fiji", "New Caledonia", "New Zealand", "Papua New Guinea",
    "Solomon Islands", "Tahiti", "Vanuatu",
  ],

  basketball: [
    "Argentina", "Australia", "Brazil", "Canada", "China",
    "Croatia", "Czech Republic", "France", "Germany", "Greece",
    "Italy", "Japan", "Latvia", "Lithuania", "Montenegro",
    "Nigeria", "Philippines", "Puerto Rico", "Serbia", "Slovenia",
    "Spain", "Turkey", "Ukraine", "United States",
  ],

  tennis: [
    "Australia", "Austria", "Belarus", "Belgium", "Canada",
    "China", "Czech Republic", "Denmark", "France", "Germany",
    "Greece", "Italy", "Japan", "Kazakhstan", "Netherlands",
    "Norway", "Poland", "Romania", "Russia", "Serbia",
    "Slovakia", "Spain", "Switzerland", "Tunisia", "Ukraine",
    "United Kingdom", "United States",
  ],

  rugby: [
    "Argentina", "Australia", "Canada", "England", "Fiji",
    "France", "Georgia", "Ireland", "Italy", "Japan",
    "Namibia", "New Zealand", "Romania", "Samoa", "Scotland",
    "South Africa", "Tonga", "United States", "Uruguay", "Wales",
  ],

  baseball: [
    "Australia", "Canada", "China", "Cuba", "Dominican Republic",
    "Italy", "Japan", "Mexico", "Netherlands", "Panama",
    "Puerto Rico", "South Korea", "Taiwan", "United States", "Venezuela",
  ],

  hockey: [
    "Austria", "Belarus", "Canada", "Czech Republic", "Denmark",
    "Finland", "France", "Germany", "Hungary", "Italy",
    "Kazakhstan", "Latvia", "Norway", "Russia", "Slovakia",
    "Slovenia", "Sweden", "Switzerland", "Ukraine", "United States",
  ],

  boxing: [
    "Cuba", "Ireland", "Jamaica", "Kazakhstan", "Mexico",
    "Philippines", "Puerto Rico", "Russia", "Ukraine", "United Kingdom",
    "United States", "Uzbekistan",
  ],

  cricket: [
    "Afghanistan", "Australia", "Bangladesh", "England", "India",
    "Ireland", "Kenya", "Namibia", "Nepal", "Netherlands",
    "New Zealand", "Oman", "Pakistan", "Papua New Guinea",
    "Scotland", "South Africa", "Sri Lanka", "UAE",
    "West Indies", "Zimbabwe",
  ],

  other: [
    // MMA
    "Brazil", "Canada", "Ireland", "Russia", "United States",
    "Dagestan (Russia)", "Georgia", "Nigeria",
    // F1
    "Australia", "Austria", "Azerbaijan", "Bahrain", "Belgium",
    "Brazil", "Canada", "China", "France", "Germany",
    "Hungary", "Italy", "Japan", "Mexico", "Monaco",
    "Netherlands", "Qatar", "Saudi Arabia", "Singapore",
    "Spain", "United Arab Emirates", "United Kingdom", "United States",
    // Golf
    "Australia", "England", "Ireland", "Japan", "Northern Ireland",
    "Norway", "Scotland", "South Africa", "Spain", "Sweden",
    "United States",
  ],
};
