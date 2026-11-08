/* =========================================================
   data.js - Explore Hawke's Bay
   All the places, activities and reviews used on the site.
   Normally this would come from a database; for this static
   site it is stored in arrays (the same idea as the class demos).
   ========================================================= */

// The three attraction categories from the Website Specification Document
let categories = [
    { id: 1, name: "Wine & Food" },
    { id: 2, name: "Nature Trails" },
    { id: 3, name: "Art Deco & Culture" }
];

// Places shown on the Places to Visit page (explore.html)
let places = [
    {
        id: 1, name: "Te Mata Peak", category: 2, area: "Havelock North",
        image: "images/teMataPeak.jpg", alt: "View across green farmland and the Tukituki River from the top of Te Mata Peak",
        gallery: ["images/teMataPeak.jpg", "images/teMataPeak2.jpg", "images/craggyRange.jpg"],
        popularity: 98, cost: "Free",
        tags: ["walk", "views", "free", "family"],
        summary: "Hawke's Bay's best lookout, 399 metres above the Heretaunga Plains.",
        description: "Te Mata Peak rises 399 metres above the Heretaunga Plains, just outside Havelock North. You can drive the sealed road to the summit or walk one of the tracks through Te Mata Park. On a clear day the view stretches across vineyards, the Tukituki River and the Pacific coast, and sometimes as far as Mount Ruapehu. In Ngāti Kahungunu tradition, the ridge is the body of the giant Te Mata o Rongokako lying across the land.",
        highlights: ["Free entry, open every day", "Walking and mountain-bike tracks for all fitness levels", "Sunrise and sunset are the most popular times"],
        mapQuery: "Te Mata Peak, Havelock North"
    },
    {
        id: 2, name: "Cape Kidnappers", category: 2, area: "Clifton",
        image: "images/capeKidnappers.jpg", alt: "White cliffs of Cape Kidnappers rising above a turquoise sea",
        gallery: ["images/capeKidnappers.jpg"],
        popularity: 92, cost: "Tour fees apply",
        tags: ["birds", "beach", "tour", "views"],
        summary: "Home to one of the largest mainland gannet colonies in the world.",
        description: "Cape Kidnappers is a dramatic headland at the southern end of Hawke Bay. Thousands of Australasian gannets (tākapu) nest here in summer, and it is one of the few places in the world where you can see a gannet colony on the mainland. You can walk along the beach from Clifton at low tide, or join a guided tour by tractor or 4WD.",
        highlights: ["Beach walk is only possible at low tide - check the tide times", "Best visited in the warmer months", "Guided tours leave from Clifton"],
        mapQuery: "Cape Kidnappers, Hawke's Bay"
    },
    {
        id: 3, name: "Waimarama Beach", category: 2, area: "Hastings District",
        image: "images/waimaramaBeach.jpg", alt: "Bare Island (Motu-o-Kura) off Waimarama Beach, seen past flax and agapanthus flowers",
        gallery: ["images/waimaramaBeach.jpg"],
        popularity: 74, cost: "Free",
        tags: ["beach", "swimming", "free", "family"],
        summary: "A long, quiet surf beach about 30 minutes from Havelock North.",
        description: "Waimarama is a long sandy surf beach south-east of Havelock North, with Bare Island (Motu-o-Kura) sitting just offshore. It is a favourite with local families for swimming, surfing and summer picnics, and it is much quieter than the beaches closer to Napier.",
        highlights: ["Patrolled by surf lifeguards in summer", "Great spot for a picnic", "Swim between the flags"],
        mapQuery: "Waimarama Beach, New Zealand"
    },
    {
        id: 4, name: "Ahuriri Estuary", category: 2, area: "Napier",
        image: "images/ahuririEstuary.jpg", alt: "Wooden boardwalk crossing the mudflats at Ahuriri Estuary in Napier",
        gallery: ["images/ahuririEstuary.jpg"],
        popularity: 61, cost: "Free",
        tags: ["walk", "birds", "free", "cycling"],
        summary: "Flat wetland walks and bird watching right on the edge of Napier.",
        description: "Ahuriri Estuary is a large wetland on the edge of Napier that formed after the 1931 earthquake lifted the land. Flat paths run along the water, which makes it an easy walk or bike ride, and it is one of the best places in the region to see wading birds.",
        highlights: ["Flat, easy paths suitable for most visitors", "Part of the Hawke's Bay cycle trail network", "Bring binoculars for the birdlife"],
        mapQuery: "Ahuriri Estuary, Napier"
    },
    {
        id: 5, name: "Mission Estate Winery", category: 1, area: "Taradale, Napier",
        image: "images/missionEstate.jpg", alt: "Rows of golden autumn grapevines at Mission Estate with a pine-covered hill behind",
        gallery: ["images/missionEstate.jpg"],
        popularity: 90, cost: "Tastings from a small fee",
        tags: ["wine", "history", "restaurant"],
        summary: "New Zealand's oldest winery, started by Marist missionaries in 1851.",
        description: "Mission Estate is New Zealand's oldest winery, founded by French Marist missionaries in 1851. The historic seminary building now houses a cellar door and restaurant, with views over the vineyard to Napier. It is an easy first stop for visitors who want to learn about the region's long wine history.",
        highlights: ["Cellar door tastings", "Restaurant with vineyard views", "Short drive from central Napier"],
        mapQuery: "Mission Estate Winery, Taradale"
    },
    {
        id: 6, name: "Craggy Range", category: 1, area: "Havelock North",
        image: "images/craggyRange.jpg", alt: "Aerial view of the Craggy Range winery buildings and vineyards beside the Tukituki River",
        gallery: ["images/craggyRange.jpg"],
        popularity: 85, cost: "Tastings from a small fee",
        tags: ["wine", "restaurant", "views"],
        summary: "A winery and restaurant at the foot of Te Mata Peak.",
        description: "Craggy Range sits beside the Tukituki River, directly below the cliffs of Te Mata Peak. Visitors come for the cellar door, the restaurant and one of the most photographed views in Hawke's Bay. It pairs well with a morning walk up the peak.",
        highlights: ["Cellar door and restaurant", "Views of Te Mata Peak", "Booking recommended for lunch"],
        mapQuery: "Craggy Range Winery, Havelock North"
    },
    {
        id: 7, name: "Hastings Farmers' Market", category: 1, area: "Hastings",
        image: "images/farmersMarket.jpg", alt: "Shoppers at a fresh fruit juice stall under a flowering wisteria at the Hawke's Bay Farmers' Market",
        gallery: ["images/farmersMarket.jpg"],
        popularity: 80, cost: "Free entry",
        tags: ["food", "local", "family", "free"],
        summary: "Local growers and food makers every Sunday morning.",
        description: "The Hastings Farmers' Market runs every Sunday morning at the Hawke's Bay showgrounds. Local growers, bakers and food makers sell seasonal fruit, vegetables, cheese, bread and coffee. It is a relaxed way to taste the region and meet the people who grow its food.",
        highlights: ["Every Sunday morning", "Bring a reusable bag", "Arrive early for the best choice"],
        mapQuery: "Hastings Farmers Market, Hawke's Bay Showgrounds"
    },
    {
        id: 8, name: "Napier Art Deco Walk", category: 3, area: "Napier",
        image: "images/napierArtDeco.jpg", alt: "The cream-coloured Art Deco Daily Telegraph building in Napier",
        gallery: ["images/napierArtDeco.jpg"],
        popularity: 95, cost: "Free self-guided, or paid guided tour",
        tags: ["walk", "history", "architecture", "free"],
        summary: "Explore a city rebuilt in Art Deco style after the 1931 earthquake.",
        description: "After the 1931 Hawke's Bay earthquake destroyed much of Napier, the city was rebuilt in the Art Deco style of the time. Today it has one of the best collections of Art Deco buildings in the world. You can follow a self-guided walk through the city centre or join a guided tour, and every February the Art Deco Festival fills the streets with vintage cars and 1930s costumes.",
        highlights: ["Self-guided walk is free", "Guided tours available in the city centre", "Art Deco Festival held every February"],
        mapQuery: "Art Deco Centre, Napier"
    },
    {
        id: 9, name: "Marine Parade", category: 3, area: "Napier",
        image: "images/marineParade.jpg", alt: "Tall Norfolk pines and the colonnade along Marine Parade in Napier on a sunny day",
        gallery: ["images/marineParade.jpg"],
        popularity: 77, cost: "Free",
        tags: ["walk", "free", "family", "views"],
        summary: "Napier's seaside promenade lined with Norfolk pines.",
        description: "Marine Parade is Napier's waterfront promenade, lined with tall Norfolk pines and gardens. Along the way you will find the statue of Pania of the Reef, the Sound Shell and playgrounds for children. It is an easy, flat walk that links several of the city's main attractions.",
        highlights: ["Flat and easy to walk", "See the Pania of the Reef statue", "Links to the National Aquarium and MTG"],
        mapQuery: "Marine Parade, Napier"
    },
    {
        id: 10, name: "MTG Hawke's Bay", category: 3, area: "Napier",
        image: "images/mtgHawkesBay.jpg", alt: "The 1937 Art Deco entrance of the Hawke's Bay Museum and Art Gallery, now part of MTG Hawke's Bay",
        gallery: ["images/mtgHawkesBay.jpg"],
        popularity: 70, cost: "Check website for entry",
        tags: ["museum", "history", "rainy day"],
        summary: "The region's museum, theatre and art gallery.",
        description: "MTG Hawke's Bay (Museum Theatre Gallery) tells the story of the region, including the 1931 earthquake and local Māori history, alongside changing art exhibitions. It is a good choice for a rainy day and sits close to Marine Parade.",
        highlights: ["Learn about the 1931 earthquake", "Changing art exhibitions", "Good rainy-day option"],
        mapQuery: "MTG Hawke's Bay, Napier"
    },
    {
        id: 11, name: "National Aquarium of New Zealand", category: 2, area: "Napier",
        image: "images/nationalAquarium.jpg", alt: "The round National Aquarium of New Zealand building on Napier's waterfront",
        gallery: ["images/nationalAquarium.jpg"],
        popularity: 82, cost: "Entry fee applies",
        tags: ["family", "animals", "rainy day"],
        summary: "Sea life and native animals on Napier's waterfront.",
        description: "The National Aquarium of New Zealand on Marine Parade showcases sea life from New Zealand waters and beyond. Families can walk through the large ocean tank and learn about native wildlife. It is one of the most popular indoor attractions in Napier.",
        highlights: ["Great for families with children", "Indoor - good in any weather", "On Marine Parade"],
        mapQuery: "National Aquarium of New Zealand, Napier"
    },
    {
        id: 12, name: "Te Mata Peak Sunrise Walk", category: 2, area: "Havelock North",
        image: "images/teMataPeak2.jpg", alt: "Grassy ridges and limestone cliffs of Te Mata Peak above the plains",
        gallery: ["images/teMataPeak2.jpg", "images/teMataPeak.jpg"],
        popularity: 66, cost: "Free",
        tags: ["walk", "views", "free"],
        summary: "Start the day with the whole region below you.",
        description: "Walking up Te Mata Peak before sunrise is a local favourite. The Red Track and the Rongokako tracks climb through the park to the summit, where you can watch the sun come up over the coast. Take a torch, warm clothes and water.",
        highlights: ["Bring a torch and warm layers", "Allow about an hour to the summit", "Free"],
        mapQuery: "Te Mata Park, Havelock North"
    }
];

// Activities shown on the Things to Do page (activities.html)
// type matches the filters in the wireframe: Cycling, Wine, Nature, Culture
let activities = [
    { id: 1, title: "Cape Kidnappers Gannet Safari", type: "Nature", placeId: 2, popularity: 94, duration: "Half day",
      image: "images/capeKidnappers.jpg", alt: "Gannets at Cape Kidnappers",
      text: "Ride out along the coast on a guided tour to see the gannet colony up close." },
    { id: 2, title: "Wine Tasting Tour", type: "Wine", placeId: 5, popularity: 91, duration: "Half or full day",
      image: "images/missionEstate.jpg", alt: "Mission Estate winery",
      text: "Visit several cellar doors in one day, from New Zealand's oldest winery to boutique vineyards." },
    { id: 3, title: "Art Deco Walk", type: "Culture", placeId: 8, popularity: 89, duration: "1-2 hours",
      image: "images/napierArtDeco.jpg", alt: "Art Deco buildings in Napier",
      text: "Follow the self-guided trail through Napier's Art Deco city centre." },
    { id: 4, title: "Wineries Cycle Ride", type: "Cycling", placeId: 6, popularity: 84, duration: "Full day",
      image: "images/craggyRange.jpg", alt: "Vineyards near Havelock North",
      text: "Hire a bike and ride the flat trails between vineyards and cellar doors." },
    { id: 5, title: "Te Mata Peak Summit Walk", type: "Nature", placeId: 1, popularity: 87, duration: "1-2 hours",
      image: "images/teMataPeak.jpg", alt: "Te Mata Peak",
      text: "Climb through Te Mata Park to the best viewpoint in the region." },
    { id: 6, title: "Estuary Bike Loop", type: "Cycling", placeId: 4, popularity: 63, duration: "1-2 hours",
      image: "images/ahuririEstuary.jpg", alt: "Ahuriri Estuary",
      text: "An easy, flat ride around the Ahuriri wetland with plenty of birdlife." },
    { id: 7, title: "Sunday Market Food Trail", type: "Wine", placeId: 7, popularity: 72, duration: "Morning",
      image: "images/farmersMarket.jpg", alt: "Hastings Farmers' Market",
      text: "Taste local cheese, fruit and coffee at the Hastings Farmers' Market." },
    { id: 8, title: "Museum & Waterfront Afternoon", type: "Culture", placeId: 10, popularity: 68, duration: "Half day",
      image: "images/mtgHawkesBay.jpg", alt: "MTG Hawke's Bay",
      text: "Combine MTG Hawke's Bay with a stroll along Marine Parade." },
    { id: 9, title: "Waimarama Beach Day", type: "Nature", placeId: 3, popularity: 70, duration: "Half day",
      image: "images/waimaramaBeach.jpg", alt: "Waimarama Beach",
      text: "Swim, surf or picnic on a quiet beach with Bare Island just offshore." },
    { id: 10, title: "Vineyard Lunch at Craggy Range", type: "Wine", placeId: 6, popularity: 79, duration: "2-3 hours",
      image: "images/craggyRange.jpg", alt: "Craggy Range winery",
      text: "Enjoy lunch and a tasting with views of Te Mata Peak." },
    { id: 11, title: "Aquarium Visit", type: "Nature", placeId: 11, popularity: 75, duration: "1-2 hours",
      image: "images/nationalAquarium.jpg", alt: "National Aquarium of New Zealand",
      text: "See sea life from New Zealand waters - great for families and rainy days." },
    { id: 12, title: "Marine Parade Heritage Stroll", type: "Culture", placeId: 9, popularity: 71, duration: "1 hour",
      image: "images/marineParade.jpg", alt: "Marine Parade, Napier",
      text: "Walk past the Pania of the Reef statue, the Sound Shell and the Art Deco colonnade on Napier's waterfront." },
    { id: 13, title: "Ahuriri to Napier Coastal Ride", type: "Cycling", placeId: 4, popularity: 60, duration: "2 hours",
      image: "images/ahuririEstuary.jpg", alt: "Ahuriri Estuary walkway",
      text: "Ride the flat coastal path from the Ahuriri Estuary along the waterfront to Napier." }
];

// Votes for the like / dislike rating on detail.html (one entry per place)
// Normally this would be stored in a database
let votes = [
    {id: 1, like: 44, dislike: 1},
    {id: 2, like: 38, dislike: 2},
    {id: 3, like: 21, dislike: 3},
    {id: 4, like: 24, dislike: 0},
    {id: 5, like: 36, dislike: 1},
    {id: 6, like: 31, dislike: 2},
    {id: 7, like: 26, dislike: 3},
    {id: 8, like: 41, dislike: 0},
    {id: 9, like: 23, dislike: 1},
    {id: 10, like: 19, dislike: 2},
    {id: 11, like: 28, dislike: 3},
    {id: 12, like: 22, dislike: 0}
];

// Visitor comments for detail.html (one entry per place)
let comments = [
    {id: 1, comments: [{user: "Aroha", comment: "Went up for sunrise - worth the early alarm!"}, {user: "Tom", comment: "Easy drive to the top, amazing views."}]},
    {id: 2, comments: [{user: "Priya", comment: "So many gannets. The tour guides were great."}]},
    {id: 3, comments: [{user: "Liam", comment: "Quiet beach, perfect for a picnic."}]},
    {id: 4, comments: [{user: "Mere", comment: "Lovely flat walk with lots of birds."}]},
    {id: 5, comments: [{user: "Sophie", comment: "Beautiful old building and good wine."}]},
    {id: 6, comments: [{user: "James", comment: "Lunch with a view of the peak - very special."}]},
    {id: 7, comments: [{user: "Ana", comment: "Best coffee and fresh fruit on a Sunday."}]},
    {id: 8, comments: [{user: "Kate", comment: "Did the self-guided walk, loved the buildings."}]},
    {id: 9, comments: [{user: "Raj", comment: "Nice evening stroll by the sea."}]},
    {id: 10, comments: [{user: "Ella", comment: "Interesting earthquake exhibition."}]},
    {id: 11, comments: [{user: "Ben", comment: "The kids loved it."}]},
    {id: 12, comments: [{user: "Hana", comment: "Bring a torch, it is dark at the start!"}]}
];