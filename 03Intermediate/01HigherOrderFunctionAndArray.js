const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/**
 * fill
 * fills every index of the given array with the value given
 * second parameter is to tell the function after which index to start filling
*/
console.log(ages.fill('fill', 5));

/** 
 * forEach
*/

  companies.forEach(company => {
    //   console.log(company.name);
  });

/**
 * filter
*/

  const canDrink = ages.filter(age => age >= 21);
//   console.log(canDrink);

// Filter retail companies

const retailCompanies = companies.filter(company => 
company.category === 'Retail');
// console.log(retailCompanies);

// Get 80s companies

const eightiesCompanies = companies.filter(company => 
(company.start >= 1980 && company.start < 1990));
// console.log(eightiesCompanies);

// Get companies that lasted 10 years or more

const lastedTenYears = companies.filter(company => 
(company.end - company.start) >= 10);
// console.log(lastedTenYears);

/**
 * map
*/

// Get companyName [startDate - endDate]

const companyName = companies.map(company => 
`${company.name} [${company.start} - ${company.end}]`);
// console.log(companyName);

// Get square of ages

const agesSquareRoot = ages.map(age => Math.sqrt(age));
// console.log(agesSquareRoot);

// Combined map

const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);
// console.log(ageMap);


/**
 * sort
*/

// Sort company from earliest to latest

const sortedCompanies = companies.sort((company1, company2) => 
(company1.start > company2.start ? 1 : -1));
// console.log(sortedCompanies);

// Sort Ages

const sortAges = ages.sort((a, b) => a - b); // asc -> a -b , desc -> b - a
// console.log(sortAges);

/**
 * reduce
*/

// Add ages together

const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// Get total years for all companies

const totalYears = companies.reduce((total, company) => 
total + (company.end - company.start), 0);
// console.log(totalYears);

/**
 * Combined Methods
*/

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => b - a)
    .reduce((total, age) => total + age, 0);

// console.log(combined);