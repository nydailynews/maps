// http://www.convertcsv.com/csv-to-json.htm
var data = {
   "101": {
      "Community District": "Manhattan CD 1",
      "Name": "Battery Park City",
      "Hispanic": 6.9,
      "White": 79.7,
      "Black": 3.5,
      "Asian": 17.1,
      "Other": 2.5,
      "White-only": 72.3,
      "Non-white": 27.7,
      "Majority": "White",
      "Poverty": 8,
      "Tax": "49.92"
   },
   "102": {
      "Community District": "Manhattan CD 2",
      "Name": "Greenwich Village & Soho",
      "Hispanic": 6.9,
      "White": 79.7,
      "Black": 3.5,
      "Asian": 17.1,
      "Other": 2.5,
      "White-only": 72.3,
      "Non-white": 27.7,
      "Majority": "White",
      "Poverty": 8,
      "Tax": "94.48"
   },
   "103": {
      "Community District": "Manhattan CD 3",
      "Name": "Chinatown & Lower East Side",
      "Hispanic": 24.6,
      "White": 45.5,
      "Black": 9.4,
      "Asian": 33.9,
      "Other": 14.1,
      "White-only": 32.8,
      "Non-white": 67.2,
      "Majority": "White",
      "Poverty": 25.1,
      "Tax": "110.53"
   },
   "104": {
      "Community District": "Manhattan CD 4",
      "Name": "Chelsea, Clinton",
      "Hispanic": 14.7,
      "White": 73.8,
      "Black": 7.5,
      "Asian": 16.6,
      "Other": 4.8,
      "White-only": 61.9,
      "Non-white": 38.1,
      "Majority": "White",
      "Poverty": 12.7,
      "Tax": "102.74"
   },
   "105": {
      "Community District": "Manhattan CD 5",
      "Name": "Midtown Business District",
      "Hispanic": 14.7,
      "White": 73.8,
      "Black": 7.5,
      "Asian": 16.6,
      "Other": 4.8,
      "White-only": 61.9,
      "Non-white": 38.1,
      "Majority": "White",
      "Poverty": 12.7,
      "Tax": "n/a"
   },
   "106": {
      "Community District": "Manhattan CD 6",
      "Name": "Murray Hill, Gramercy & Stuyvesant Town",
      "Hispanic": 8.5,
      "White": 78.1,
      "Black": 4.5,
      "Asian": 16.2,
      "Other": 3.1,
      "White-only": 70.3,
      "Non-white": 29.7,
      "Majority": "White",
      "Poverty": 9.5,
      "Tax": "87.19"
   },
   "107": {
      "Community District": "Manhattan CD 7",
      "Name": "Upper West Side & West Side",
      "Hispanic": 14.2,
      "White": 78.5,
      "Black": 9.9,
      "Asian": 10.2,
      "Other": 3.7,
      "White-only": 68.5,
      "Non-white": 31.5,
      "Majority": "White",
      "Poverty": 9.9,
      "Tax": "100.72"
   },
   "108": {
      "Community District": "Manhattan CD 8",
      "Name": "Upper East Side",
      "Hispanic": 7.9,
      "White": 86,
      "Black": 4,
      "Asian": 10.3,
      "Other": 1.6,
      "White-only": 78,
      "Non-white": 22,
      "Majority": "White",
      "Poverty": 7.2,
      "Tax": "99.42"
   },
   "109": {
      "Community District": "Manhattan CD 9",
      "Name": "Hamilton Heights, Manhattanville & West Harlem",
      "Hispanic": 38.5,
      "White": 47.1,
      "Black": 36.2,
      "Asian": 9.1,
      "Other": 17,
      "White-only": 27.7,
      "Non-white": 72.3,
      "Majority": "White",
      "Poverty": 27.9,
      "Tax": "99.69"
   },
   "110": {
      "Community District": "Manhattan CD 10",
      "Name": "Central Harlem",
      "Hispanic": 22.3,
      "White": 19.8,
      "Black": 67.3,
      "Asian": 4.4,
      "Other": 11.8,
      "White-only": 12,
      "Non-white": 88,
      "Majority": "Black",
      "Poverty": 29.1,
      "Tax": "84.01"
   },
   "111": {
      "Community District": "Manhattan CD 11",
      "Name": "East Harlem",
      "Hispanic": 46.1,
      "White": 30.5,
      "Black": 36.9,
      "Asian": 8.3,
      "Other": 26.6,
      "White-only": 13.9,
      "Non-white": 86.1,
      "Majority": "Hispanic",
      "Poverty": 32.8,
      "Tax": "81.07"
   },
   "112": {
      "Community District": "Manhattan CD 12",
      "Name": "Washington Heights, Inwood & Marble Hill",
      "Hispanic": 70.8,
      "White": 40.4,
      "Black": 15.6,
      "Asian": 3.4,
      "Other": 44.4,
      "White-only": 17,
      "Non-white": 83,
      "Majority": "Hispanic",
      "Poverty": 24.8,
      "Tax": "141.38"
   },
   "201": {
      "Community District": "Bronx CD 1",
      "Name": "Melrose",
      "Hispanic": 68.8,
      "White": 18.4,
      "Black": 35.9,
      "Asian": 1.2,
      "Other": 46.1,
      "White-only": 1.7,
      "Non-white": 98.3,
      "Majority": "Hispanic",
      "Poverty": 42.8,
      "Tax": "101.87"
   },
   "202": {
      "Community District": "Bronx CD 2",
      "Name": "Hunts Point, Longwood",
      "Hispanic": 68.8,
      "White": 18.4,
      "Black": 35.9,
      "Asian": 1.2,
      "Other": 46.1,
      "White-only": 1.7,
      "Non-white": 98.3,
      "Majority": "Hispanic",
      "Poverty": 42.8,
      "Tax": "112.05"
   },
   "203": {
      "Community District": "Bronx CD 3",
      "Name": "Crotona Park East",
      "Hispanic": 62.7,
      "White": 16.2,
      "Black": 36.7,
      "Asian": 1.2,
      "Other": 48.3,
      "White-only": 4.6,
      "Non-white": 95.4,
      "Majority": "Hispanic",
      "Poverty": 44,
      "Tax": "122.97"
   },
   "204": {
      "Community District": "Bronx CD 4",
      "Name": "Concourse, Highbridge & Mount Eden",
      "Hispanic": 64.4,
      "White": 16.5,
      "Black": 38.2,
      "Asian": 2,
      "Other": 45.6,
      "White-only": 1.4,
      "Non-white": 98.6,
      "Majority": "Hispanic",
      "Poverty": 38,
      "Tax": "107.63"
   },
   "205": {
      "Community District": "Bronx CD 5",
      "Name": "Morris Heights, Fordham South & Mount Hope",
      "Hispanic": 68.1,
      "White": 13.5,
      "Black": 35.3,
      "Asian": 1.7,
      "Other": 51.9,
      "White-only": 1.5,
      "Non-white": 98.5,
      "Majority": "Hispanic",
      "Poverty": 41.6,
      "Tax": "108.91"
   },
   "206": {
      "Community District": "Bronx CD 6",
      "Name": "Belmont, East Tremont",
      "Hispanic": 62.7,
      "White": 16.2,
      "Black": 36.7,
      "Asian": 1.2,
      "Other": 48.3,
      "White-only": 4.6,
      "Non-white": 95.4,
      "Majority": "Hispanic",
      "Poverty": 44,
      "Tax": "108.79"
   },
   "207": {
      "Community District": "Bronx CD 7",
      "Name": "Bedford Park, Fordham North & Norwood",
      "Hispanic": 67,
      "White": 19.3,
      "Black": 23.1,
      "Asian": 7.7,
      "Other": 53.4,
      "White-only": 7.4,
      "Non-white": 92.6,
      "Majority": "Hispanic",
      "Poverty": 31.9,
      "Tax": "118.24"
   },
   "208": {
      "Community District": "Bronx CD 8",
      "Name": "Riverdale, Fieldston & Kingsbridge",
      "Hispanic": 45.7,
      "White": 48.1,
      "Black": 17.8,
      "Asian": 5.9,
      "Other": 31.5,
      "White-only": 34.1,
      "Non-white": 65.9,
      "Majority": "White",
      "Poverty": 17.7,
      "Tax": "103.60"
   },
   "209": {
      "Community District": "Bronx CD 9",
      "Name": "Castle Hill, Clason Point & Parkchester",
      "Hispanic": 57.6,
      "White": 20.7,
      "Black": 38.3,
      "Asian": 8,
      "Other": 37,
      "White-only": 2.5,
      "Non-white": 97.5,
      "Majority": "Hispanic",
      "Poverty": 28.2,
      "Tax": "103.90"
   },
   "210": {
      "Community District": "Bronx CD 10",
      "Name": "Co-op City, Pelham Bay & Schuylerville",
      "Hispanic": 34.8,
      "White": 45.9,
      "Black": 30.9,
      "Asian": 3.2,
      "Other": 22.7,
      "White-only": 33.6,
      "Non-white": 66.4,
      "Majority": "White",
      "Poverty": 12.5,
      "Tax": "101.99"
   },
   "211": {
      "Community District": "Bronx CD 11",
      "Name": "Pelham Parkway, Morris Park & Laconia",
      "Hispanic": 44.2,
      "White": 36,
      "Black": 25.4,
      "Asian": 8.9,
      "Other": 31.9,
      "White-only": 24.2,
      "Non-white": 75.8,
      "Majority": "Hispanic",
      "Poverty": 20.3,
      "Tax": "103.16"
   },
   "212": {
      "Community District": "Bronx CD 12",
      "Name": "Wakefield, Williamsbridge & Woodlawn",
      "Hispanic": 22.5,
      "White": 12.3,
      "Black": 70,
      "Asian": 2.8,
      "Other": 16.6,
      "White-only": 7.1,
      "Non-white": 92.9,
      "Majority": "Black",
      "Poverty": 19.8,
      "Tax": "109.48"
   },
   "301": {
      "Community District": "Brooklyn CD 1",
      "Name": "Greenpoint & Williamsburg",
      "Hispanic": 24.4,
      "White": 78.9,
      "Black": 6.4,
      "Asian": 7.1,
      "Other": 9.2,
      "White-only": 63.5,
      "Non-white": 36.5,
      "Majority": "White",
      "Poverty": 27.1,
      "Tax": "74.63"
   },
   "302": {
      "Community District": "Brooklyn CD 2",
      "Name": "Brooklyn Heights & Fort Greene",
      "Hispanic": 17,
      "White": 53.5,
      "Black": 31.2,
      "Asian": 10.2,
      "Other": 9.4,
      "White-only": 44.3,
      "Non-white": 55.7,
      "Majority": "White",
      "Poverty": 19.3,
      "Tax": "87.54"
   },
   "303": {
      "Community District": "Brooklyn CD 3",
      "Name": "Bedford-Stuyvesant",
      "Hispanic": 19.4,
      "White": 27,
      "Black": 63.3,
      "Asian": 3.2,
      "Other": 8.1,
      "White-only": 18.7,
      "Non-white": 81.3,
      "Majority": "Black",
      "Poverty": 31.7,
      "Tax": "89.31"
   },
   "304": {
      "Community District": "Brooklyn CD 4",
      "Name": "Bushwick",
      "Hispanic": 64.8,
      "White": 44.4,
      "Black": 28,
      "Asian": 4.9,
      "Other": 24.7,
      "White-only": 11.8,
      "Non-white": 88.2,
      "Majority": "Hispanic",
      "Poverty": 29.2,
      "Tax": "90.00"
   },
   "305": {
      "Community District": "Brooklyn CD 5",
      "Name": "East New York & Starrett City",
      "Hispanic": 37,
      "White": 25.7,
      "Black": 59.6,
      "Asian": 4,
      "Other": 11.8,
      "White-only": 4.7,
      "Non-white": 95.3,
      "Majority": "Black",
      "Poverty": 32.2,
      "Tax": "111.59"
   },
   "306": {
      "Community District": "Brooklyn CD 6",
      "Name": "Park Slope, Carroll Gardens & Red Hook",
      "Hispanic": 19.4,
      "White": 75.3,
      "Black": 9.3,
      "Asian": 8.9,
      "Other": 11,
      "White-only": 63.4,
      "Non-white": 36.6,
      "Majority": "White",
      "Poverty": 10.2,
      "Tax": "86.92"
   },
   "307": {
      "Community District": "Brooklyn CD 7",
      "Name": "Sunset Park & Windsor Terrace",
      "Hispanic": 42.2,
      "White": 38.5,
      "Black": 4.6,
      "Asian": 32.6,
      "Other": 25.6,
      "White-only": 21.8,
      "Non-white": 78.2,
      "Majority": "Hispanic",
      "Poverty": 28.6,
      "Tax": "94.71"
   },
   "308": {
      "Community District": "Brooklyn CD 8",
      "Name": "Crown Heights North & Prospect Heights",
      "Hispanic": 11.8,
      "White": 23.2,
      "Black": 67.5,
      "Asian": 4.8,
      "Other": 6.9,
      "White-only": 19,
      "Non-white": 81,
      "Majority": "Black",
      "Poverty": 26,
      "Tax": "87.74"
   },
   "309": {
      "Community District": "Brooklyn CD 9",
      "Name": "Crown Heights South, Prospect Lefferts & Wingate",
      "Hispanic": 9.1,
      "White": 20,
      "Black": 73.8,
      "Asian": 2.7,
      "Other": 4.9,
      "White-only": 17.2,
      "Non-white": 82.8,
      "Majority": "Black",
      "Poverty": 22.6,
      "Tax": "89.64"
   },
   "310": {
      "Community District": "Brooklyn CD 10",
      "Name": "Bay Ridge & Dyker Heights",
      "Hispanic": 14.5,
      "White": 68.6,
      "Black": 2.7,
      "Asian": 24.6,
      "Other": 5.7,
      "White-only": 58.8,
      "Non-white": 41.2,
      "Majority": "White",
      "Poverty": 16.7,
      "Tax": "97.04"
   },
   "311": {
      "Community District": "Brooklyn CD 11",
      "Name": "Bensonhurst & Bath Beach",
      "Hispanic": 13.7,
      "White": 54.3,
      "Black": 1.4,
      "Asian": 38.4,
      "Other": 6.7,
      "White-only": 46.7,
      "Non-white": 53.3,
      "Majority": "White",
      "Poverty": 17.5,
      "Tax": "97.93"
   },
   "312": {
      "Community District": "Brooklyn CD 12",
      "Name": "Borough Park, Kensington & Ocean Parkway",
      "Hispanic": 11.4,
      "White": 75.8,
      "Black": 2.4,
      "Asian": 15,
      "Other": 7.7,
      "White-only": 71.1,
      "Non-white": 28.9,
      "Majority": "White",
      "Poverty": 32.5,
      "Tax": "99.44"
   },
   "313": {
      "Community District": "Brooklyn CD 13",
      "Name": "Brighton Beach & Coney Island",
      "Hispanic": 14.6,
      "White": 67.3,
      "Black": 13.1,
      "Asian": 14.8,
      "Other": 6,
      "White-only": 58.4,
      "Non-white": 41.6,
      "Majority": "White",
      "Poverty": 27.4,
      "Tax": "98.87"
   },
   "314": {
      "Community District": "Brooklyn CD 14",
      "Name": "Flatbush & Midwood",
      "Hispanic": 14.3,
      "White": 44.9,
      "Black": 35.4,
      "Asian": 11,
      "Other": 10.4,
      "White-only": 40.1,
      "Non-white": 59.9,
      "Majority": "White",
      "Poverty": 21.5,
      "Tax": "99.47"
   },
   "315": {
      "Community District": "Brooklyn CD 15",
      "Name": "Sheepshead Bay, Gerritsen Beach & Homecrest",
      "Hispanic": 7.4,
      "White": 77.3,
      "Black": 4.4,
      "Asian": 16.8,
      "Other": 2.5,
      "White-only": 71.7,
      "Non-white": 28.3,
      "Majority": "White",
      "Poverty": 16.3,
      "Tax": "98.11"
   },
   "316": {
      "Community District": "Brooklyn CD 16",
      "Name": "Brownsville & Ocean Hill",
      "Hispanic": 20.5,
      "White": 6.9,
      "Black": 81.9,
      "Asian": 1.2,
      "Other": 10.9,
      "White-only": 1.4,
      "Non-white": 98.6,
      "Majority": "Black",
      "Poverty": 37.2,
      "Tax": "107.23"
   },
   "317": {
      "Community District": "Brooklyn CD 17",
      "Name": "East Flatbush, Farragut & Rugby",
      "Hispanic": 6.8,
      "White": 3.2,
      "Black": 92.4,
      "Asian": 1.7,
      "Other": 3.7,
      "White-only": 1.5,
      "Non-white": 98.5,
      "Majority": "Black",
      "Poverty": 17.1,
      "Tax": "106.91"
   },
   "318": {
      "Community District": "Brooklyn CD 18",
      "Name": "Canarsie & Flatlands",
      "Hispanic": 8.2,
      "White": 27.6,
      "Black": 64.6,
      "Asian": 4.6,
      "Other": 4,
      "White-only": 24,
      "Non-white": 76,
      "Majority": "Black",
      "Poverty": 12.1,
      "Tax": "103.76"
   },
   "401": {
      "Community District": "Queens CD 1",
      "Name": "Astoria & Long Island City",
      "Hispanic": 28.6,
      "White": 67,
      "Black": 9.1,
      "Asian": 15.2,
      "Other": 10.9,
      "White-only": 48.2,
      "Non-white": 51.8,
      "Majority": "White",
      "Poverty": 17.8,
      "Tax": "99.34"
   },
   "402": {
      "Community District": "Queens CD 2",
      "Name": "Sunnyside & Woodside",
      "Hispanic": 33.2,
      "White": 53.5,
      "Black": 3,
      "Asian": 36.6,
      "Other": 8.8,
      "White-only": 28,
      "Non-white": 72,
      "Majority": "White",
      "Poverty": 14.4,
      "Tax": "103.04"
   },
   "403": {
      "Community District": "Queens CD 3",
      "Name": "Jackson Heights & North Corona",
      "Hispanic": 65.5,
      "White": 46.5,
      "Black": 8,
      "Asian": 18.2,
      "Other": 29.5,
      "White-only": 10.2,
      "Non-white": 89.8,
      "Majority": "Hispanic",
      "Poverty": 20.7,
      "Tax": "103.43"
   },
   "404": {
      "Community District": "Queens CD 4",
      "Name": "Elmhurst & South Corona",
      "Hispanic": 50.3,
      "White": 42.6,
      "Black": 9.4,
      "Asian": 34,
      "Other": 15.1,
      "White-only": 7.1,
      "Non-white": 92.9,
      "Majority": "Hispanic",
      "Poverty": 21.8,
      "Tax": "101.74"
   },
   "405": {
      "Community District": "Queens CD 5",
      "Name": "Ridgewood, Glendale & Middle Village",
      "Hispanic": 35.7,
      "White": 82.7,
      "Black": 2.6,
      "Asian": 8.5,
      "Other": 7.4,
      "White-only": 54.1,
      "Non-white": 45.9,
      "Majority": "White",
      "Poverty": 14.7,
      "Tax": "101.71"
   },
   "406": {
      "Community District": "Queens CD 6",
      "Name": "Forest Hills & Rego Park",
      "Hispanic": 14.9,
      "White": 65.3,
      "Black": 3.5,
      "Asian": 27.9,
      "Other": 4.9,
      "White-only": 53.7,
      "Non-white": 46.3,
      "Majority": "White",
      "Poverty": 10.2,
      "Tax": "102.97"
   },
   "407": {
      "Community District": "Queens CD 7",
      "Name": "Flushing, Murray Hill & Whitestone",
      "Hispanic": 16.9,
      "White": 37.6,
      "Black": 3.1,
      "Asian": 51.8,
      "Other": 9.5,
      "White-only": 28.2,
      "Non-white": 71.8,
      "Majority": "Asian",
      "Poverty": 15.5,
      "Tax": "101.24"
   },
   "408": {
      "Community District": "Queens CD 8",
      "Name": "Briarwood, Fresh Meadows & Hillcrest",
      "Hispanic": 18.6,
      "White": 43.2,
      "Black": 13.4,
      "Asian": 35.6,
      "Other": 11.3,
      "White-only": 32.8,
      "Non-white": 67.2,
      "Majority": "White",
      "Poverty": 15.4,
      "Tax": "102.25"
   },
   "409": {
      "Community District": "Queens CD 9",
      "Name": "Richmond Hill & Woodhaven",
      "Hispanic": 40.9,
      "White": 39.6,
      "Black": 9.7,
      "Asian": 28.3,
      "Other": 26.9,
      "White-only": 18.5,
      "Non-white": 81.5,
      "Majority": "Hispanic",
      "Poverty": 15.3,
      "Tax": "103.64"
   },
   "410": {
      "Community District": "Queens CD 10",
      "Name": "Howard Beach & Ozone Park",
      "Hispanic": 23.8,
      "White": 36.6,
      "Black": 18.9,
      "Asian": 22.6,
      "Other": 26.3,
      "White-only": 23.5,
      "Non-white": 76.5,
      "Majority": "White",
      "Poverty": 13.3,
      "Tax": "103.85"
   },
   "411": {
      "Community District": "Queens CD 11",
      "Name": "Bayside, Douglaston & Little Neck",
      "Hispanic": 11.7,
      "White": 52,
      "Black": 3,
      "Asian": 43.2,
      "Other": 4.2,
      "White-only": 42.5,
      "Non-white": 57.5,
      "Majority": "White",
      "Poverty": 7.9,
      "Tax": "103.05"
   },
   "412": {
      "Community District": "Queens CD 12",
      "Name": "Jamaica, Hollis & St. Albans",
      "Hispanic": 19,
      "White": 6.9,
      "Black": 68.2,
      "Asian": 11.9,
      "Other": 16.4,
      "White-only": 1.7,
      "Non-white": 98.3,
      "Majority": "Black",
      "Poverty": 16.2,
      "Tax": "110.99"
   },
   "413": {
      "Community District": "Queens CD 13",
      "Name": "Queens Village, Cambria Heights & Rosedale",
      "Hispanic": 11.1,
      "White": 19,
      "Black": 60.1,
      "Asian": 16.9,
      "Other": 6.9,
      "White-only": 12.5,
      "Non-white": 87.5,
      "Majority": "Black",
      "Poverty": 8.9,
      "Tax": "107.49"
   },
   "414": {
      "Community District": "Queens CD 14",
      "Name": "Far Rockaway, Breezy Point & Broad Channel",
      "Hispanic": 22.8,
      "White": 50.3,
      "Black": 40.2,
      "Asian": 3.6,
      "Other": 7.8,
      "White-only": 35.8,
      "Non-white": 64.2,
      "Majority": "White",
      "Poverty": 20.2,
      "Tax": "104.98"
   },
   "501": {
      "Community District": "Staten Island CD 1",
      "Name": "Port Richmond, Stapleton & Mariner's Harbor",
      "Hispanic": 29,
      "White": 59.3,
      "Black": 26.2,
      "Asian": 8.4,
      "Other": 9,
      "White-only": 38.9,
      "Non-white": 61.1,
      "Majority": "White",
      "Poverty": 19.9,
      "Tax": "103.59"
   },
   "502": {
      "Community District": "Staten Island CD 2",
      "Name": "New Springville & South Beach",
      "Hispanic": 12.3,
      "White": 80.2,
      "Black": 4.8,
      "Asian": 13.7,
      "Other": 2.3,
      "White-only": 69.8,
      "Non-white": 30.2,
      "Majority": "White",
      "Poverty": 8.8,
      "Tax": "97.42"
   },
   "503": {
      "Community District": "Staten Island CD 3",
      "Name": "Tottenville, Great Kills & Annadale",
      "Hispanic": 10.1,
      "White": 93.3,
      "Black": 1.8,
      "Asian": 4.8,
      "Other": 0.9,
      "White-only": 83.5,
      "Non-white": 16.5,
      "Majority": "White",
      "Poverty": 7.3,
      "Tax": "100.61"
   }
}
