import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

const names = "Kenyon Roy,Abby Sprague,Daija Alcala,Maxine Childress,Uriah Valle,Colton Littleton,Infant Daniel,Jacquez Murray,Todd Norman,Dane Switzer,Tyquan Stephenson,Marianna Gamboa,Kaitlyn Singleton,Estevan Cecil,Alia Driver,Trenten Snead,Saira Whittington,Kaley Singh,Harley Shackelford,Walker Schilling,Thea Kidwell,Antoine Call,Heriberto Guest,Titus Barba,Quinton Robles,Roland Edgar,Tanisha Parnell,Ray Jeter,Caitlyn Comer,Gregorio Trevino,Kaylan Beyer,Abrianna Willard,Rocco Guerra,Denzel Dubose,Deon Louis,Hamza McNeal,Precious Reaves,Tamya Cochrane,Camron Salter,Brice Pratt,Ashton Sands,Hayley Wheaton,Annette Grove,Ericka Santoro,Natalie Egan".split(","); 
const addresses = "74 Ngaio Place, Te Rapa Park, Hamilton, 3200\n182 Garnett Avenue, Avalon Industrial, Hamilton, 3200\n201 Caxton Place, Te Awamutu, Hamilton, 3800\n159 Coleraine Drive, Rototuna, Hamilton, 3210\n177 Northolt Road, Enderley, Hamilton, 3214\n232 Bader Street, Melville, Hamilton, 3206\n70 Kohekohe Place, Beerescourt, Hamilton, 3200\n64 Dorchester Place, Western Heights, Hamilton, 3200\n243 Plymouth Place, Fairfield, Hamilton, 3214\n193 Linden Street, Te Awamutu, Hamilton, 3800\n218 Jeanette Street, Glenview, Hamilton, 3206\n4 Calypso Rise, Rototuna North, Hamilton, 3210\n169 Friesian Place, Te Rapa Straight, Hamilton, 3200\n129 San Clemento Way, Flagstaff, Hamilton, 3210\n162 Newport Place, Enderley, Hamilton, 3214\n247 Angus Street, Forest Lake, Hamilton, 3200\n182 Hamblyn Crescent, Maeroa, Hamilton, 3200\n140 Mahana Road, Grandview Heights, Hamilton, 3200\n174 Hampton Place, Grandview Heights, Hamilton, 3200\n136 Simon Place, Pukete, Hamilton, 3200\n152 Ruapehu Street, Flagstaff, Hamilton, 3210\n106 Titoki Place, St Andrews, Hamilton, 3200\n197 Ngaere Avenue, Queenwood, Hamilton, 3210\n189 Victoria Street, Waikato Hospital, Hamilton, 3204\n180 Te Manatu Drive, Chedworth, Hamilton, 3210\n150 Dalesford Street, Silverdale, Hamilton, 3216\n60 Queenwood Avenue, Puketaha, Hamilton, 3210\n250 Caulfield Place, Avalon Industrial, Hamilton, 3200\n207 Sapphire Place, Harrowfield, Hamilton, 3210\n220 Pavilion Drive, Avalon Industrial, Hamilton, 3200\n219 Brightwell Place, Nawton, Hamilton, 3200\n139 Maxwell Place, St Andrews, Hamilton, 3200\n47 George Street, Te Awamutu, Hamilton, 3800\n250 Eclipse Rise, Harrowfield, Hamilton, 3210\n103 Emerald Place, Queenwood, Hamilton, 3210\n93 Kirk Close, Chartwell, Hamilton, 3210\n198 Twickenham Place, Te Rapa Park, Hamilton, 3200\n247 Tauhara Drive, Flagstaff, Hamilton, 3210\n45 Jennifer Place, Huntingdon, Hamilton, 3210\n121 Carrs Road, Chartwell, Hamilton, 3210\n27 Torrington Avenue, Waikato Hospital, Hamilton, 3204\n93 Riverview Terrace, Enderley, Hamilton, 3214\n249 Haswell Place, Chedworth, Hamilton, 3210\n29 Orchard Avenue, Enderley, Hamilton, 3214\n154 Aspen Court, Harrowfield, Hamilton, 3210".split("\n");
const numbers = "(028) 2137-546,(027) 4276-142,(026) 2922-854,(028) 3050-393,(021) 4809-302,(027) 2503-088,(027) 8456-175,(027) 3569-986,(020) 4503-791,(026) 7896-819,(026) 4812-203,(027) 3668-362,(027) 5079-449,(022) 9628-489,(022) 9089-341,(028) 8091-125,(022) 8810-790,(021) 2515-152,(028) 7948-439,(022) 5843-288,(020) 5365-927,(026) 8468-153,(026) 4946-458,(020) 9374-599,(027) 7210-586,(026) 3481-007,(021) 8936-389,(028) 7862-484,(021) 5896-662,(022) 0370-983,(026) 8515-274,(022) 3333-921,(027) 1520-216,(020) 3965-619,(029) 9261-805,(020) 9977-065,(022) 2997-597,(029) 5526-904,(022) 4627-961,(026) 7324-279,(028) 1263-715,(029) 1508-736,(027) 9305-006,(020) 0785-337,(028) 0995-514".split(",");

async function main() {
  for (let i = 0; i < 45; i++) {
    const splitName = names[i].split(" ");
    await prisma.users.create({
      data: {
        first_name: splitName[0],
        last_name: splitName[1],
        address: addresses[i],
        phone_number: numbers[i],
        email: `${splitName[0] + i}@rennacstest.com`
      }
    })
  }
}

main()
  .catch(e => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect;
});