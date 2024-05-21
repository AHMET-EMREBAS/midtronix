# TODO

- Find a good way to calcualte Taxes based on State/Location

Alabama: 4.0%
Alaska: No statewide sales tax, but localities may impose their own.
Arizona: 5.6%
Arkansas: 6.5%
California: 7.25% (varies by locality)
Colorado: 2.9%
Connecticut: 6.35%
Delaware: No sales tax
Florida: 6.0%
Georgia: 4.0%
Hawaii: 4.0%
Idaho: 6.0%
Illinois: 6.25%
Indiana: 7.0%
Iowa: 6.0%
Kansas: 6.5%
Kentucky: 6.0%
Louisiana: 4.45%
Maine: 5.5%
Maryland: 6.0%
Massachusetts: 6.25%
Michigan: 6.0%
Minnesota: 6.88%
Mississippi: 7.0%
Missouri: 4.225%
Montana: No sales tax
Nebraska: 5.5%
Nevada: 6.85%
New Hampshire: No sales tax
New Jersey: 6.625%
New Mexico: 5.125%
New York: 4.0% (varies by locality)
North Carolina: 4.75%
North Dakota: 5.0%
Ohio: 5.75%
Oklahoma: 4.5%
Oregon: No sales tax
Pennsylvania: 6.0%
Rhode Island: 7.0%
South Carolina: 6.0%
South Dakota: 4.5%
Tennessee: 7.0%
Texas: 6.25%
Utah: 4.85%
Vermont: 6.0%
Virginia: 4.3%
Washington: 6.5%
West Virginia: 6.0%
Wisconsin: 5.0%
Wyoming: 4.0%

```
const stateSalesTaxRates: Record<string, number> = {
  "Alabama": 4.0,
  "Alaska": 0, // No statewide sales tax, but localities may impose their own
  "Arizona": 5.6,
  "Arkansas": 6.5,
  "California": 7.25, // Varies by locality
  "Colorado": 2.9,
  "Connecticut": 6.35,
  "Delaware": 0, // No sales tax
  "Florida": 6.0,
  "Georgia": 4.0,
  "Hawaii": 4.0,
  "Idaho": 6.0,
  "Illinois": 6.25,
  "Indiana": 7.0,
  "Iowa": 6.0,
  "Kansas": 6.5,
  "Kentucky": 6.0,
  "Louisiana": 4.45,
  "Maine": 5.5,
  "Maryland": 6.0,
  "Massachusetts": 6.25,
  "Michigan": 6.0,
  "Minnesota": 6.88,
  "Mississippi": 7.0,
  "Missouri": 4.225,
  "Montana": 0, // No sales tax
  "Nebraska": 5.5,
  "Nevada": 6.85,
  "New Hampshire": 0, // No sales tax
  "New Jersey": 6.625,
  "New Mexico": 5.125,
  "New York": 4.0, // Varies by locality
  "North Carolina": 4.75,
  "North Dakota": 5.0,
  "Ohio": 5.75,
  "Oklahoma": 4.5,
  "Oregon": 0, // No sales tax
  "Pennsylvania": 6.0,
  "Rhode Island": 7.0,
  "South Carolina": 6.0,
  "South Dakota": 4.5,
  "Tennessee": 7.0,
  "Texas": 6.25,
  "Utah": 4.85,
  "Vermont": 6.0,
  "Virginia": 4.3,
  "Washington": 6.5,
  "West Virginia": 6.0,
  "Wisconsin": 5.0,
  "Wyoming": 4.0
};

// Example usage:
console.log(stateSalesTaxRates["California"]); // Output: 7.25


```
