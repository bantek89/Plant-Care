const test = require('tape');
const search = require('../searchFilter');

// test('Tape is up and running', function(t) {
//     t.pass();
//     t.end();
//   });

test('filtering Species and Common Names names - first letter', function(t){
    const testData = [{
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

    const actual = search('a', testData);
    const expected = ["abutiloides", "abietina", "abietinella moss"]

    t.deepEqual(actual, expected, '3 values should be returned as they begin with a');
    t.end();
})

test('filtering Species and Common Names names - 2 letters', function(t){
    const testData = [{
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

    const actual = search('ab', testData);
    const expected = ["abutiloides", "abietina", "abietinella moss"]

    t.deepEqual(actual, expected, '3 values should be returned as they begin with ab');
    t.end();
})

test('filtering Species and Common Names names - 3 letters', function(t){
    const testData = [{
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

    const actual = search('abi', testData);
    const expected = ["abietina", "abietinella moss"]

    t.deepEqual(actual, expected, '2 values should be returned as they begin with abi');
    t.end();
})

test('filtering Species and Common Names names - wrong letters', function(t){
    const testData = [{
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

    const actual = search('abc', testData);
    const expected = []

    t.deepEqual(actual, expected, '0 values should be returned as none begin with abc');
    t.end();
})