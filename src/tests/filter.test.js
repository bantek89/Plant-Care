const test = require('tape');
const filter = require('../filterJSON');

// test('Tape is up and running', function(t) {
//     t.pass();
//     t.end();
//   });

test('filter only returning objects with all key/value properties filled', function(t) {
  const firstTest = {
    "data": [
      {
          "Species": "abutiloides",
          "Common_Name": "shrubby Indian mallow",
          "Family": "Malvaceae",
          "Genus": "Abutilon"
      },
      {
          "Species": "abrus",
          "Common_Name": "",
          "Family": "",
          "Genus": "Abrus"
      },
      {
          "Species": "abutilon",
          "Common_Name": "",
          "Family": "",
          "Genus": "Abutilon"
      }
    ]
  }

    const actual = filter.filterPlants(firstTest);
    const expected = [{
      "Species": "abutiloides",
      "Common_Name": "shrubby Indian mallow",
      "Family": "Malvaceae",
      "Genus": "Abutilon"
  }]

    t.deepEqual(actual, expected, 'shoud return one item in array');
    t.end();
})

test('filter only returning objects with all key/value properties filled', function(t) {
  const secondTest = {
    "data": [
      {
          "Species": "abutiloides",
          "Common_Name": "shrubby Indian mallow",
          "Family": "Malvaceae",
          "Genus": "Abutilon"
      },
      {
          "Species": "abrus",
          "Common_Name": "",
          "Family": "",
          "Genus": "Abrus"
      },
      {
          "Species": "abutilon",
          "Common_Name": "",
          "Family": "",
          "Genus": "Abutilon"
      },
      {
        "Species": "abietina",
        "Common_Name": "abietinella moss",
        "Family": "Thuidiaceae",
        "Genus": "Abietinella"
    }
    ]
  }

    const actual = filter.filterPlants(secondTest);
    const expected = [{
      "Species": "abutiloides",
      "Common_Name": "shrubby Indian mallow",
      "Family": "Malvaceae",
      "Genus": "Abutilon"
  },
  {
    "Species": "abietina",
    "Common_Name": "abietinella moss",
    "Family": "Thuidiaceae",
    "Genus": "Abietinella"
  }
  ]

    t.deepEqual(actual, expected, 'shoud return two items in array');
    t.end();
})
