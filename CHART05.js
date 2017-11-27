$(function () {

    // Create the chart
    $('#container').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'INSTALLATION REPORT 2017'
        },
        xAxis: {
            type: 'category'
        },

        legend: {
            enabled: false
        },

        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                }
            }
        },
series: 
  [ 
{
    name: "MAIN INSTA",
    colorByPoint: true,
    data: 
    [ 
{
     name: "APRIL",
     y: 8213,
     drilldown: "IDmnth4"
     },
{
     name: "MAY",
     y: 7139,
     drilldown: "IDmnth5"
     },
{
     name: "JUNE",
     y: 7886,
     drilldown: "IDmnth6"
     },
{
     name: "JULY",
     y: 8272,
     drilldown: "IDmnth7"
     },
{
     name: "AUGUST",
     y: 7109,
     drilldown: "IDmnth8"
     },
{
     name: "SEPTEMBER",
     y: 6885,
     drilldown: "IDmnth9"
     },
{
     name: "OCTOBER",
     y: 5909,
     drilldown: "IDmnth10"
     },


    ]
   },
],

        drilldown:
  {
            series: 
   [     

{
     id: "IDmnth4",
     name: "APRIL Month",
     data: 
     [
{
       name: "AHMEDABAD",
       y: 502,
       drilldown: "IDmnth4ahmedabad"
       },
{
       name: "BANGALORE",
       y: 220,
       drilldown: "IDmnth4bangalore"
       },
{
       name: "CHENNAI",
       y: 216,
       drilldown: "IDmnth4chennai"
       },
{
       name: "GURGAON",
       y: 136,
       drilldown: "IDmnth4gurgaon"
       },
{
       name: "HYDERABAD",
       y: 1210,
       drilldown: "IDmnth4hyderabad"
       },
{
       name: "KAKINADA",
       y: 233,
       drilldown: "IDmnth4kakinada"
       },
{
       name: "KHARGHAR",
       y: 41,
       drilldown: "IDmnth4kharghar"
       },
{
       name: "MUMBAI",
       y: 129,
       drilldown: "IDmnth4mumbai"
       },
{
       name: "NASHIK",
       y: 1,
       drilldown: "IDmnth4nashik"
       },
{
       name: "NAVI MUMBAI",
       y: 104,
       drilldown: "IDmnth4navi mumbai"
       },
{
       name: "NAVSARI",
       y: 170,
       drilldown: "IDmnth4navsari"
       },
{
       name: "POWAI",
       y: 92,
       drilldown: "IDmnth4powai"
       },
{
       name: "PUNE CENTRAL",
       y: 419,
       drilldown: "IDmnth4pune central"
       },
{
       name: "PUNE EAST",
       y: 256,
       drilldown: "IDmnth4pune east"
       },
{
       name: "PUNE NORTH",
       y: 53,
       drilldown: "IDmnth4pune north"
       },
{
       name: "PUNE WEST",
       y: 326,
       drilldown: "IDmnth4pune west"
       },
{
       name: "RAJKOT",
       y: 57,
       drilldown: "IDmnth4rajkot"
       },
{
       name: "SURAT",
       y: 2028,
       drilldown: "IDmnth4surat"
       },
{
       name: "THANE",
       y: 75,
       drilldown: "IDmnth4thane"
       },
{
       name: "VADODARA",
       y: 1014,
       drilldown: "IDmnth4vadodara"
       },
{
       name: "VALSAD",
       y: 1,
       drilldown: "IDmnth4valsad"
       },
{
       name: "VAPI",
       y: 25,
       drilldown: "IDmnth4vapi"
       },
{
       name: "VIJAYAWADA",
       y: 99,
       drilldown: "IDmnth4vijayawada"
       },
{
       name: "VISHAKAPATNAM",
       y: 806,
       drilldown: "IDmnth4vishakapatnam"
       },]
    },
{
     id: "IDmnth5",
     name: "MAY Month",
     data: 
     [
{
       name: "AHMEDABAD",
       y: 410,
       drilldown: "IDmnth5ahmedabad"
       },
{
       name: "BANGALORE",
       y: 209,
       drilldown: "IDmnth5bangalore"
       },
{
       name: "CHENNAI",
       y: 102,
       drilldown: "IDmnth5chennai"
       },
{
       name: "GURGAON",
       y: 141,
       drilldown: "IDmnth5gurgaon"
       },
{
       name: "HYDERABAD",
       y: 1048,
       drilldown: "IDmnth5hyderabad"
       },
{
       name: "KAKINADA",
       y: 230,
       drilldown: "IDmnth5kakinada"
       },
{
       name: "KHARGHAR",
       y: 35,
       drilldown: "IDmnth5kharghar"
       },
{
       name: "MUMBAI",
       y: 155,
       drilldown: "IDmnth5mumbai"
       },
{
       name: "NASHIK",
       y: 11,
       drilldown: "IDmnth5nashik"
       },
{
       name: "NAVI MUMBAI",
       y: 86,
       drilldown: "IDmnth5navi mumbai"
       },
{
       name: "NAVSARI",
       y: 124,
       drilldown: "IDmnth5navsari"
       },
{
       name: "POWAI",
       y: 86,
       drilldown: "IDmnth5powai"
       },
{
       name: "PUNE CENTRAL",
       y: 380,
       drilldown: "IDmnth5pune central"
       },
{
       name: "PUNE EAST",
       y: 260,
       drilldown: "IDmnth5pune east"
       },
{
       name: "PUNE NORTH",
       y: 55,
       drilldown: "IDmnth5pune north"
       },
{
       name: "PUNE WEST",
       y: 303,
       drilldown: "IDmnth5pune west"
       },
{
       name: "RAJKOT",
       y: 92,
       drilldown: "IDmnth5rajkot"
       },
{
       name: "SURAT",
       y: 1504,
       drilldown: "IDmnth5surat"
       },
{
       name: "THANE",
       y: 54,
       drilldown: "IDmnth5thane"
       },
{
       name: "VADODARA",
       y: 982,
       drilldown: "IDmnth5vadodara"
       },
{
       name: "VALSAD",
       y: 5,
       drilldown: "IDmnth5valsad"
       },
{
       name: "VAPI",
       y: 23,
       drilldown: "IDmnth5vapi"
       },
{
       name: "VIJAYAWADA",
       y: 86,
       drilldown: "IDmnth5vijayawada"
       },
{
       name: "VISHAKAPATNAM",
       y: 758,
       drilldown: "IDmnth5vishakapatnam"
       },]
    },
{
     id: "IDmnth6",
     name: "JUNE Month",
     data: 
     [
{
       name: "AHMEDABAD",
       y: 462,
       drilldown: "IDmnth6ahmedabad"
       },
{
       name: "AURANGABAD",
       y: 7,
       drilldown: "IDmnth6aurangabad"
       },
{
       name: "BANGALORE",
       y: 261,
       drilldown: "IDmnth6bangalore"
       },
{
       name: "CHENNAI",
       y: 142,
       drilldown: "IDmnth6chennai"
       },
{
       name: "GURGAON",
       y: 137,
       drilldown: "IDmnth6gurgaon"
       },
{
       name: "HYDERABAD",
       y: 1346,
       drilldown: "IDmnth6hyderabad"
       },
{
       name: "KAKINADA",
       y: 280,
       drilldown: "IDmnth6kakinada"
       },
{
       name: "KHARGHAR",
       y: 40,
       drilldown: "IDmnth6kharghar"
       },
{
       name: "MUMBAI",
       y: 164,
       drilldown: "IDmnth6mumbai"
       },
{
       name: "NASHIK",
       y: 39,
       drilldown: "IDmnth6nashik"
       },
{
       name: "NAVI MUMBAI",
       y: 105,
       drilldown: "IDmnth6navi mumbai"
       },
{
       name: "NAVSARI",
       y: 135,
       drilldown: "IDmnth6navsari"
       },
{
       name: "POWAI",
       y: 66,
       drilldown: "IDmnth6powai"
       },
{
       name: "PUNE CENTRAL",
       y: 422,
       drilldown: "IDmnth6pune central"
       },
{
       name: "PUNE EAST",
       y: 271,
       drilldown: "IDmnth6pune east"
       },
{
       name: "PUNE NORTH",
       y: 55,
       drilldown: "IDmnth6pune north"
       },
{
       name: "PUNE WEST",
       y: 385,
       drilldown: "IDmnth6pune west"
       },
{
       name: "RAJKOT",
       y: 142,
       drilldown: "IDmnth6rajkot"
       },
{
       name: "SURAT",
       y: 1389,
       drilldown: "IDmnth6surat"
       },
{
       name: "THANE",
       y: 74,
       drilldown: "IDmnth6thane"
       },
{
       name: "VADODARA",
       y: 940,
       drilldown: "IDmnth6vadodara"
       },
{
       name: "VALSAD",
       y: 12,
       drilldown: "IDmnth6valsad"
       },
{
       name: "VAPI",
       y: 38,
       drilldown: "IDmnth6vapi"
       },
{
       name: "VIJAYAWADA",
       y: 109,
       drilldown: "IDmnth6vijayawada"
       },
{
       name: "VISHAKAPATNAM",
       y: 865,
       drilldown: "IDmnth6vishakapatnam"
       },]
    },
{
     id: "IDmnth7",
     name: "JULY Month",
     data: 
     [
{
       name: "AHMEDABAD",
       y: 528,
       drilldown: "IDmnth7ahmedabad"
       },
{
       name: "AURANGABAD",
       y: 21,
       drilldown: "IDmnth7aurangabad"
       },
{
       name: "BANGALORE",
       y: 224,
       drilldown: "IDmnth7bangalore"
       },
{
       name: "CHENNAI",
       y: 139,
       drilldown: "IDmnth7chennai"
       },
{
       name: "GURGAON",
       y: 107,
       drilldown: "IDmnth7gurgaon"
       },
{
       name: "HYDERABAD",
       y: 1224,
       drilldown: "IDmnth7hyderabad"
       },
{
       name: "KAKINADA",
       y: 275,
       drilldown: "IDmnth7kakinada"
       },
{
       name: "KHARGHAR",
       y: 28,
       drilldown: "IDmnth7kharghar"
       },
{
       name: "MUMBAI",
       y: 157,
       drilldown: "IDmnth7mumbai"
       },
{
       name: "NASHIK",
       y: 74,
       drilldown: "IDmnth7nashik"
       },
{
       name: "NAVI MUMBAI",
       y: 149,
       drilldown: "IDmnth7navi mumbai"
       },
{
       name: "NAVSARI",
       y: 172,
       drilldown: "IDmnth7navsari"
       },
{
       name: "POWAI",
       y: 78,
       drilldown: "IDmnth7powai"
       },
{
       name: "PUNE CENTRAL",
       y: 583,
       drilldown: "IDmnth7pune central"
       },
{
       name: "PUNE EAST",
       y: 339,
       drilldown: "IDmnth7pune east"
       },
{
       name: "PUNE NORTH",
       y: 67,
       drilldown: "IDmnth7pune north"
       },
{
       name: "PUNE WEST",
       y: 375,
       drilldown: "IDmnth7pune west"
       },
{
       name: "RAJKOT",
       y: 141,
       drilldown: "IDmnth7rajkot"
       },
{
       name: "SURAT",
       y: 1584,
       drilldown: "IDmnth7surat"
       },
{
       name: "THANE",
       y: 87,
       drilldown: "IDmnth7thane"
       },
{
       name: "VADODARA",
       y: 1037,
       drilldown: "IDmnth7vadodara"
       },
{
       name: "VALSAD",
       y: 21,
       drilldown: "IDmnth7valsad"
       },
{
       name: "VAPI",
       y: 55,
       drilldown: "IDmnth7vapi"
       },
{
       name: "VIJAYAWADA",
       y: 103,
       drilldown: "IDmnth7vijayawada"
       },
{
       name: "VISHAKAPATNAM",
       y: 704,
       drilldown: "IDmnth7vishakapatnam"
       },]
    },
{
     id: "IDmnth8",
     name: "AUGUST Month",
     data: 
     [
{
       name: "AHMEDABAD",
       y: 448,
       drilldown: "IDmnth8ahmedabad"
       },
{
       name: "AURANGABAD",
       y: 25,
       drilldown: "IDmnth8aurangabad"
       },
{
       name: "BANGALORE",
       y: 226,
       drilldown: "IDmnth8bangalore"
       },
{
       name: "CHENNAI",
       y: 118,
       drilldown: "IDmnth8chennai"
       },
{
       name: "GURGAON",
       y: 86,
       drilldown: "IDmnth8gurgaon"
       },
{
       name: "HYDERABAD",
       y: 1068,
       drilldown: "IDmnth8hyderabad"
       },
{
       name: "KAKINADA",
       y: 247,
       drilldown: "IDmnth8kakinada"
       },
{
       name: "KHARGHAR",
       y: 123,
       drilldown: "IDmnth8kharghar"
       },
{
       name: "MUMBAI",
       y: 133,
       drilldown: "IDmnth8mumbai"
       },
{
       name: "NASHIK",
       y: 58,
       drilldown: "IDmnth8nashik"
       },
{
       name: "NAVI MUMBAI",
       y: 99,
       drilldown: "IDmnth8navi mumbai"
       },
{
       name: "NAVSARI",
       y: 89,
       drilldown: "IDmnth8navsari"
       },
{
       name: "POWAI",
       y: 107,
       drilldown: "IDmnth8powai"
       },
{
       name: "PUNE CENTRAL",
       y: 492,
       drilldown: "IDmnth8pune central"
       },
{
       name: "PUNE EAST",
       y: 283,
       drilldown: "IDmnth8pune east"
       },
{
       name: "PUNE NORTH",
       y: 68,
       drilldown: "IDmnth8pune north"
       },
{
       name: "PUNE WEST",
       y: 349,
       drilldown: "IDmnth8pune west"
       },
{
       name: "RAJKOT",
       y: 133,
       drilldown: "IDmnth8rajkot"
       },
{
       name: "SURAT",
       y: 1119,
       drilldown: "IDmnth8surat"
       },
{
       name: "THANE",
       y: 87,
       drilldown: "IDmnth8thane"
       },
{
       name: "VADODARA",
       y: 977,
       drilldown: "IDmnth8vadodara"
       },
{
       name: "VALSAD",
       y: 44,
       drilldown: "IDmnth8valsad"
       },
{
       name: "VAPI",
       y: 40,
       drilldown: "IDmnth8vapi"
       },
{
       name: "VIJAYAWADA",
       y: 58,
       drilldown: "IDmnth8vijayawada"
       },
{
       name: "VISHAKAPATNAM",
       y: 632,
       drilldown: "IDmnth8vishakapatnam"
       },]
    },
{
     id: "IDmnth9",
     name: "SEPTEMBER Month",
     data: 
     [
{
       name: "AHMEDABAD",
       y: 389,
       drilldown: "IDmnth9ahmedabad"
       },
{
       name: "AURANGABAD",
       y: 57,
       drilldown: "IDmnth9aurangabad"
       },
{
       name: "BANGALORE",
       y: 278,
       drilldown: "IDmnth9bangalore"
       },
{
       name: "CHENNAI",
       y: 176,
       drilldown: "IDmnth9chennai"
       },
{
       name: "GURGAON",
       y: 102,
       drilldown: "IDmnth9gurgaon"
       },
{
       name: "HYDERABAD",
       y: 875,
       drilldown: "IDmnth9hyderabad"
       },
{
       name: "KAKINADA",
       y: 213,
       drilldown: "IDmnth9kakinada"
       },
{
       name: "KHARGHAR",
       y: 44,
       drilldown: "IDmnth9kharghar"
       },
{
       name: "MUMBAI",
       y: 117,
       drilldown: "IDmnth9mumbai"
       },
{
       name: "NASHIK",
       y: 106,
       drilldown: "IDmnth9nashik"
       },
{
       name: "NAVI MUMBAI",
       y: 114,
       drilldown: "IDmnth9navi mumbai"
       },
{
       name: "NAVSARI",
       y: 115,
       drilldown: "IDmnth9navsari"
       },
{
       name: "POWAI",
       y: 58,
       drilldown: "IDmnth9powai"
       },
{
       name: "PUNE CENTRAL",
       y: 484,
       drilldown: "IDmnth9pune central"
       },
{
       name: "PUNE EAST",
       y: 254,
       drilldown: "IDmnth9pune east"
       },
{
       name: "PUNE NORTH",
       y: 56,
       drilldown: "IDmnth9pune north"
       },
{
       name: "PUNE WEST",
       y: 314,
       drilldown: "IDmnth9pune west"
       },
{
       name: "RAJKOT",
       y: 156,
       drilldown: "IDmnth9rajkot"
       },
{
       name: "SURAT",
       y: 1117,
       drilldown: "IDmnth9surat"
       },
{
       name: "THANE",
       y: 65,
       drilldown: "IDmnth9thane"
       },
{
       name: "VADODARA",
       y: 986,
       drilldown: "IDmnth9vadodara"
       },
{
       name: "VALSAD",
       y: 39,
       drilldown: "IDmnth9valsad"
       },
{
       name: "VAPI",
       y: 35,
       drilldown: "IDmnth9vapi"
       },
{
       name: "VIJAYAWADA",
       y: 68,
       drilldown: "IDmnth9vijayawada"
       },
{
       name: "VISHAKAPATNAM",
       y: 667,
       drilldown: "IDmnth9vishakapatnam"
       },]
    },
{
     id: "IDmnth10",
     name: "OCTOBER Month",
     data: 
     [
{
       name: "AHMEDABAD",
       y: 359,
       drilldown: "IDmnth10ahmedabad"
       },
{
       name: "AURANGABAD",
       y: 61,
       drilldown: "IDmnth10aurangabad"
       },
{
       name: "BANGALORE",
       y: 264,
       drilldown: "IDmnth10bangalore"
       },
{
       name: "CHENNAI",
       y: 205,
       drilldown: "IDmnth10chennai"
       },
{
       name: "DELHI",
       y: 4,
       drilldown: "IDmnth10delhi"
       },
{
       name: "GURGAON",
       y: 107,
       drilldown: "IDmnth10gurgaon"
       },
{
       name: "HYDERABAD",
       y: 759,
       drilldown: "IDmnth10hyderabad"
       },
{
       name: "KAKINADA",
       y: 218,
       drilldown: "IDmnth10kakinada"
       },
{
       name: "KHARGHAR",
       y: 44,
       drilldown: "IDmnth10kharghar"
       },
{
       name: "MUMBAI",
       y: 134,
       drilldown: "IDmnth10mumbai"
       },
{
       name: "NASHIK",
       y: 90,
       drilldown: "IDmnth10nashik"
       },
{
       name: "NAVI MUMBAI",
       y: 97,
       drilldown: "IDmnth10navi mumbai"
       },
{
       name: "NAVSARI",
       y: 101,
       drilldown: "IDmnth10navsari"
       },
{
       name: "POWAI",
       y: 67,
       drilldown: "IDmnth10powai"
       },
{
       name: "PUNE CENTRAL",
       y: 346,
       drilldown: "IDmnth10pune central"
       },
{
       name: "PUNE EAST",
       y: 273,
       drilldown: "IDmnth10pune east"
       },
{
       name: "PUNE NORTH",
       y: 41,
       drilldown: "IDmnth10pune north"
       },
{
       name: "PUNE WEST",
       y: 263,
       drilldown: "IDmnth10pune west"
       },
{
       name: "RAJKOT",
       y: 116,
       drilldown: "IDmnth10rajkot"
       },
{
       name: "SURAT",
       y: 711,
       drilldown: "IDmnth10surat"
       },
{
       name: "THANE",
       y: 59,
       drilldown: "IDmnth10thane"
       },
{
       name: "VADODARA",
       y: 776,
       drilldown: "IDmnth10vadodara"
       },
{
       name: "VALSAD",
       y: 54,
       drilldown: "IDmnth10valsad"
       },
{
       name: "VAPI",
       y: 35,
       drilldown: "IDmnth10vapi"
       },
{
       name: "VIJAYAWADA",
       y: 75,
       drilldown: "IDmnth10vijayawada"
       },
{
       name: "VISHAKAPATNAM",
       y: 650,
       drilldown: "IDmnth10vishakapatnam"
       },]
    },
{
    id: "IDmnth4ahmedabad",
    data: 
    [{
     name: "DAY 1",
     y: 13,
     },
{
     name: "DAY 2",
     y: 6,
     },
{
     name: "DAY 3",
     y: 20,
     },
{
     name: "DAY 4",
     y: 25,
     },
{
     name: "DAY 5",
     y: 23,
     },
{
     name: "DAY 6",
     y: 24,
     },
{
     name: "DAY 7",
     y: 19,
     },
{
     name: "DAY 8",
     y: 22,
     },
{
     name: "DAY 9",
     y: 10,
     },
{
     name: "DAY 10",
     y: 18,
     },
{
     name: "DAY 11",
     y: 23,
     },
{
     name: "DAY 12",
     y: 25,
     },
{
     name: "DAY 13",
     y: 16,
     },
{
     name: "DAY 14",
     y: 19,
     },
{
     name: "DAY 15",
     y: 25,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 19,
     },
{
     name: "DAY 18",
     y: 19,
     },
{
     name: "DAY 19",
     y: 12,
     },
{
     name: "DAY 20",
     y: 17,
     },
{
     name: "DAY 21",
     y: 9,
     },
{
     name: "DAY 22",
     y: 20,
     },
{
     name: "DAY 24",
     y: 18,
     },
{
     name: "DAY 25",
     y: 14,
     },
{
     name: "DAY 26",
     y: 11,
     },
{
     name: "DAY 27",
     y: 18,
     },
{
     name: "DAY 28",
     y: 18,
     },
{
     name: "DAY 29",
     y: 19,
     },
{
     name: "DAY 30",
     y: 17,
     },]
    },

{
    id: "IDmnth4bangalore",
    data: 
    [{
     name: "DAY 1",
     y: 3,
     },
{
     name: "DAY 2",
     y: 5,
     },
{
     name: "DAY 3",
     y: 8,
     },
{
     name: "DAY 4",
     y: 8,
     },
{
     name: "DAY 5",
     y: 7,
     },
{
     name: "DAY 6",
     y: 13,
     },
{
     name: "DAY 7",
     y: 6,
     },
{
     name: "DAY 8",
     y: 15,
     },
{
     name: "DAY 9",
     y: 7,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 8,
     },
{
     name: "DAY 12",
     y: 7,
     },
{
     name: "DAY 13",
     y: 7,
     },
{
     name: "DAY 14",
     y: 8,
     },
{
     name: "DAY 15",
     y: 9,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 7,
     },
{
     name: "DAY 18",
     y: 10,
     },
{
     name: "DAY 19",
     y: 5,
     },
{
     name: "DAY 20",
     y: 6,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 12,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 7,
     },
{
     name: "DAY 26",
     y: 15,
     },
{
     name: "DAY 27",
     y: 8,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 13,
     },
{
     name: "DAY 30",
     y: 13,
     },]
    },

{
    id: "IDmnth4chennai",
    data: 
    [{
     name: "DAY 1",
     y: 5,
     },
{
     name: "DAY 3",
     y: 4,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 9,
     },
{
     name: "DAY 6",
     y: 5,
     },
{
     name: "DAY 7",
     y: 20,
     },
{
     name: "DAY 8",
     y: 12,
     },
{
     name: "DAY 10",
     y: 14,
     },
{
     name: "DAY 11",
     y: 10,
     },
{
     name: "DAY 12",
     y: 8,
     },
{
     name: "DAY 13",
     y: 8,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 6,
     },
{
     name: "DAY 17",
     y: 11,
     },
{
     name: "DAY 18",
     y: 5,
     },
{
     name: "DAY 19",
     y: 9,
     },
{
     name: "DAY 20",
     y: 10,
     },
{
     name: "DAY 21",
     y: 6,
     },
{
     name: "DAY 22",
     y: 8,
     },
{
     name: "DAY 24",
     y: 8,
     },
{
     name: "DAY 25",
     y: 7,
     },
{
     name: "DAY 26",
     y: 8,
     },
{
     name: "DAY 27",
     y: 12,
     },
{
     name: "DAY 28",
     y: 16,
     },
{
     name: "DAY 29",
     y: 11,
     },]
    },

{
    id: "IDmnth4gurgaon",
    data: 
    [{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 8,
     },
{
     name: "DAY 3",
     y: 8,
     },
{
     name: "DAY 4",
     y: 10,
     },
{
     name: "DAY 5",
     y: 6,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 8",
     y: 8,
     },
{
     name: "DAY 9",
     y: 8,
     },
{
     name: "DAY 10",
     y: 6,
     },
{
     name: "DAY 11",
     y: 4,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 5,
     },
{
     name: "DAY 14",
     y: 6,
     },
{
     name: "DAY 15",
     y: 8,
     },
{
     name: "DAY 16",
     y: 5,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 19",
     y: 4,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 3,
     },
{
     name: "DAY 23",
     y: 6,
     },
{
     name: "DAY 24",
     y: 4,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 5,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 5,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 5,
     },]
    },

{
    id: "IDmnth4hyderabad",
    data: 
    [{
     name: "DAY 1",
     y: 28,
     },
{
     name: "DAY 2",
     y: 29,
     },
{
     name: "DAY 3",
     y: 57,
     },
{
     name: "DAY 4",
     y: 61,
     },
{
     name: "DAY 5",
     y: 57,
     },
{
     name: "DAY 6",
     y: 54,
     },
{
     name: "DAY 7",
     y: 50,
     },
{
     name: "DAY 8",
     y: 76,
     },
{
     name: "DAY 9",
     y: 10,
     },
{
     name: "DAY 10",
     y: 53,
     },
{
     name: "DAY 11",
     y: 64,
     },
{
     name: "DAY 12",
     y: 53,
     },
{
     name: "DAY 13",
     y: 45,
     },
{
     name: "DAY 14",
     y: 39,
     },
{
     name: "DAY 15",
     y: 43,
     },
{
     name: "DAY 16",
     y: 13,
     },
{
     name: "DAY 17",
     y: 42,
     },
{
     name: "DAY 18",
     y: 52,
     },
{
     name: "DAY 19",
     y: 32,
     },
{
     name: "DAY 20",
     y: 36,
     },
{
     name: "DAY 21",
     y: 31,
     },
{
     name: "DAY 22",
     y: 43,
     },
{
     name: "DAY 23",
     y: 21,
     },
{
     name: "DAY 24",
     y: 36,
     },
{
     name: "DAY 25",
     y: 32,
     },
{
     name: "DAY 26",
     y: 26,
     },
{
     name: "DAY 27",
     y: 37,
     },
{
     name: "DAY 28",
     y: 35,
     },
{
     name: "DAY 29",
     y: 27,
     },
{
     name: "DAY 30",
     y: 28,
     },]
    },

{
    id: "IDmnth4kakinada",
    data: 
    [{
     name: "DAY 1",
     y: 8,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 6,
     },
{
     name: "DAY 4",
     y: 10,
     },
{
     name: "DAY 5",
     y: 14,
     },
{
     name: "DAY 6",
     y: 10,
     },
{
     name: "DAY 7",
     y: 9,
     },
{
     name: "DAY 8",
     y: 12,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 9,
     },
{
     name: "DAY 11",
     y: 13,
     },
{
     name: "DAY 12",
     y: 5,
     },
{
     name: "DAY 13",
     y: 10,
     },
{
     name: "DAY 14",
     y: 6,
     },
{
     name: "DAY 15",
     y: 8,
     },
{
     name: "DAY 16",
     y: 5,
     },
{
     name: "DAY 17",
     y: 10,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 19",
     y: 6,
     },
{
     name: "DAY 20",
     y: 10,
     },
{
     name: "DAY 21",
     y: 10,
     },
{
     name: "DAY 22",
     y: 10,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 8,
     },
{
     name: "DAY 25",
     y: 10,
     },
{
     name: "DAY 26",
     y: 4,
     },
{
     name: "DAY 27",
     y: 8,
     },
{
     name: "DAY 28",
     y: 7,
     },
{
     name: "DAY 29",
     y: 5,
     },
{
     name: "DAY 30",
     y: 10,
     },]
    },

{
    id: "IDmnth4kharghar",
    data: 
    [{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 4,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 3,
     },]
    },

{
    id: "IDmnth4mumbai",
    data: 
    [{
     name: "DAY 1",
     y: 8,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 5,
     },
{
     name: "DAY 5",
     y: 5,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 8,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 10",
     y: 4,
     },
{
     name: "DAY 11",
     y: 3,
     },
{
     name: "DAY 12",
     y: 8,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 5,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 5,
     },
{
     name: "DAY 19",
     y: 3,
     },
{
     name: "DAY 20",
     y: 3,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 7,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 5,
     },
{
     name: "DAY 25",
     y: 5,
     },
{
     name: "DAY 26",
     y: 6,
     },
{
     name: "DAY 27",
     y: 4,
     },
{
     name: "DAY 28",
     y: 7,
     },
{
     name: "DAY 29",
     y: 9,
     },
{
     name: "DAY 30",
     y: 4,
     },]
    },

{
    id: "IDmnth4nashik",
    data: 
    [{
     name: "DAY 30",
     y: 1,
     },]
    },

{
    id: "IDmnth4navi mumbai",
    data: 
    [{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 5,
     },
{
     name: "DAY 4",
     y: 5,
     },
{
     name: "DAY 5",
     y: 4,
     },
{
     name: "DAY 6",
     y: 7,
     },
{
     name: "DAY 7",
     y: 5,
     },
{
     name: "DAY 8",
     y: 4,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 6,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 6,
     },
{
     name: "DAY 17",
     y: 4,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 4,
     },
{
     name: "DAY 20",
     y: 3,
     },
{
     name: "DAY 21",
     y: 5,
     },
{
     name: "DAY 22",
     y: 4,
     },
{
     name: "DAY 24",
     y: 6,
     },
{
     name: "DAY 25",
     y: 5,
     },
{
     name: "DAY 26",
     y: 4,
     },
{
     name: "DAY 28",
     y: 4,
     },
{
     name: "DAY 29",
     y: 5,
     },
{
     name: "DAY 30",
     y: 2,
     },]
    },

{
    id: "IDmnth4navsari",
    data: 
    [{
     name: "DAY 1",
     y: 18,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 10,
     },
{
     name: "DAY 4",
     y: 7,
     },
{
     name: "DAY 5",
     y: 7,
     },
{
     name: "DAY 6",
     y: 7,
     },
{
     name: "DAY 7",
     y: 8,
     },
{
     name: "DAY 8",
     y: 8,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 5,
     },
{
     name: "DAY 11",
     y: 7,
     },
{
     name: "DAY 12",
     y: 5,
     },
{
     name: "DAY 13",
     y: 5,
     },
{
     name: "DAY 14",
     y: 8,
     },
{
     name: "DAY 15",
     y: 6,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 4,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 11,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 8,
     },
{
     name: "DAY 22",
     y: 6,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 7,
     },
{
     name: "DAY 25",
     y: 6,
     },
{
     name: "DAY 26",
     y: 6,
     },
{
     name: "DAY 27",
     y: 5,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 1,
     },]
    },

{
    id: "IDmnth4powai",
    data: 
    [{
     name: "DAY 1",
     y: 4,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 4,
     },
{
     name: "DAY 5",
     y: 8,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 4,
     },
{
     name: "DAY 8",
     y: 5,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 4,
     },
{
     name: "DAY 12",
     y: 6,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 7,
     },
{
     name: "DAY 16",
     y: 4,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 3,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 4,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 26",
     y: 4,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 5,
     },
{
     name: "DAY 30",
     y: 1,
     },]
    },

{
    id: "IDmnth4pune central",
    data: 
    [{
     name: "DAY 1",
     y: 7,
     },
{
     name: "DAY 3",
     y: 19,
     },
{
     name: "DAY 4",
     y: 22,
     },
{
     name: "DAY 5",
     y: 15,
     },
{
     name: "DAY 6",
     y: 17,
     },
{
     name: "DAY 7",
     y: 18,
     },
{
     name: "DAY 8",
     y: 21,
     },
{
     name: "DAY 10",
     y: 25,
     },
{
     name: "DAY 11",
     y: 16,
     },
{
     name: "DAY 12",
     y: 13,
     },
{
     name: "DAY 13",
     y: 15,
     },
{
     name: "DAY 14",
     y: 15,
     },
{
     name: "DAY 15",
     y: 14,
     },
{
     name: "DAY 17",
     y: 13,
     },
{
     name: "DAY 18",
     y: 12,
     },
{
     name: "DAY 19",
     y: 16,
     },
{
     name: "DAY 20",
     y: 12,
     },
{
     name: "DAY 21",
     y: 14,
     },
{
     name: "DAY 22",
     y: 19,
     },
{
     name: "DAY 24",
     y: 16,
     },
{
     name: "DAY 25",
     y: 17,
     },
{
     name: "DAY 26",
     y: 16,
     },
{
     name: "DAY 27",
     y: 14,
     },
{
     name: "DAY 28",
     y: 16,
     },
{
     name: "DAY 29",
     y: 23,
     },
{
     name: "DAY 30",
     y: 14,
     },]
    },

{
    id: "IDmnth4pune east",
    data: 
    [{
     name: "DAY 1",
     y: 7,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 9,
     },
{
     name: "DAY 4",
     y: 14,
     },
{
     name: "DAY 5",
     y: 13,
     },
{
     name: "DAY 6",
     y: 20,
     },
{
     name: "DAY 7",
     y: 8,
     },
{
     name: "DAY 8",
     y: 14,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 12,
     },
{
     name: "DAY 11",
     y: 15,
     },
{
     name: "DAY 12",
     y: 9,
     },
{
     name: "DAY 13",
     y: 7,
     },
{
     name: "DAY 14",
     y: 7,
     },
{
     name: "DAY 15",
     y: 10,
     },
{
     name: "DAY 16",
     y: 7,
     },
{
     name: "DAY 17",
     y: 4,
     },
{
     name: "DAY 18",
     y: 10,
     },
{
     name: "DAY 19",
     y: 4,
     },
{
     name: "DAY 20",
     y: 8,
     },
{
     name: "DAY 21",
     y: 9,
     },
{
     name: "DAY 22",
     y: 11,
     },
{
     name: "DAY 24",
     y: 11,
     },
{
     name: "DAY 25",
     y: 10,
     },
{
     name: "DAY 26",
     y: 8,
     },
{
     name: "DAY 27",
     y: 6,
     },
{
     name: "DAY 28",
     y: 5,
     },
{
     name: "DAY 29",
     y: 10,
     },
{
     name: "DAY 30",
     y: 4,
     },]
    },

{
    id: "IDmnth4pune north",
    data: 
    [{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 8",
     y: 4,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 11",
     y: 4,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 5,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 6,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 27",
     y: 4,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 4,
     },
{
     name: "DAY 30",
     y: 1,
     },]
    },

{
    id: "IDmnth4pune west",
    data: 
    [{
     name: "DAY 1",
     y: 8,
     },
{
     name: "DAY 2",
     y: 6,
     },
{
     name: "DAY 3",
     y: 12,
     },
{
     name: "DAY 4",
     y: 18,
     },
{
     name: "DAY 5",
     y: 17,
     },
{
     name: "DAY 6",
     y: 16,
     },
{
     name: "DAY 7",
     y: 12,
     },
{
     name: "DAY 8",
     y: 18,
     },
{
     name: "DAY 9",
     y: 5,
     },
{
     name: "DAY 10",
     y: 16,
     },
{
     name: "DAY 11",
     y: 14,
     },
{
     name: "DAY 12",
     y: 9,
     },
{
     name: "DAY 13",
     y: 10,
     },
{
     name: "DAY 14",
     y: 10,
     },
{
     name: "DAY 15",
     y: 12,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 11,
     },
{
     name: "DAY 18",
     y: 14,
     },
{
     name: "DAY 19",
     y: 7,
     },
{
     name: "DAY 20",
     y: 10,
     },
{
     name: "DAY 21",
     y: 10,
     },
{
     name: "DAY 22",
     y: 11,
     },
{
     name: "DAY 23",
     y: 3,
     },
{
     name: "DAY 24",
     y: 8,
     },
{
     name: "DAY 25",
     y: 15,
     },
{
     name: "DAY 26",
     y: 4,
     },
{
     name: "DAY 27",
     y: 11,
     },
{
     name: "DAY 28",
     y: 9,
     },
{
     name: "DAY 29",
     y: 12,
     },
{
     name: "DAY 30",
     y: 16,
     },]
    },

{
    id: "IDmnth4rajkot",
    data: 
    [{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 10",
     y: 6,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 6,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 19",
     y: 3,
     },
{
     name: "DAY 20",
     y: 3,
     },
{
     name: "DAY 21",
     y: 3,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 5,
     },]
    },

{
    id: "IDmnth4surat",
    data: 
    [{
     name: "DAY 1",
     y: 34,
     },
{
     name: "DAY 3",
     y: 38,
     },
{
     name: "DAY 4",
     y: 101,
     },
{
     name: "DAY 5",
     y: 75,
     },
{
     name: "DAY 6",
     y: 111,
     },
{
     name: "DAY 7",
     y: 94,
     },
{
     name: "DAY 8",
     y: 91,
     },
{
     name: "DAY 9",
     y: 34,
     },
{
     name: "DAY 10",
     y: 94,
     },
{
     name: "DAY 11",
     y: 71,
     },
{
     name: "DAY 12",
     y: 97,
     },
{
     name: "DAY 13",
     y: 73,
     },
{
     name: "DAY 14",
     y: 81,
     },
{
     name: "DAY 15",
     y: 90,
     },
{
     name: "DAY 16",
     y: 17,
     },
{
     name: "DAY 17",
     y: 56,
     },
{
     name: "DAY 18",
     y: 71,
     },
{
     name: "DAY 19",
     y: 61,
     },
{
     name: "DAY 20",
     y: 70,
     },
{
     name: "DAY 21",
     y: 71,
     },
{
     name: "DAY 22",
     y: 74,
     },
{
     name: "DAY 23",
     y: 19,
     },
{
     name: "DAY 24",
     y: 64,
     },
{
     name: "DAY 25",
     y: 82,
     },
{
     name: "DAY 26",
     y: 80,
     },
{
     name: "DAY 27",
     y: 75,
     },
{
     name: "DAY 28",
     y: 70,
     },
{
     name: "DAY 29",
     y: 83,
     },
{
     name: "DAY 30",
     y: 51,
     },]
    },

{
    id: "IDmnth4thane",
    data: 
    [{
     name: "DAY 1",
     y: 4,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 5,
     },
{
     name: "DAY 5",
     y: 8,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 5,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 5,
     },
{
     name: "DAY 12",
     y: 4,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 22",
     y: 4,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 3,
     },]
    },

{
    id: "IDmnth4vadodara",
    data: 
    [{
     name: "DAY 1",
     y: 18,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 27,
     },
{
     name: "DAY 4",
     y: 38,
     },
{
     name: "DAY 5",
     y: 37,
     },
{
     name: "DAY 6",
     y: 38,
     },
{
     name: "DAY 7",
     y: 35,
     },
{
     name: "DAY 8",
     y: 36,
     },
{
     name: "DAY 9",
     y: 7,
     },
{
     name: "DAY 10",
     y: 40,
     },
{
     name: "DAY 11",
     y: 46,
     },
{
     name: "DAY 12",
     y: 32,
     },
{
     name: "DAY 13",
     y: 35,
     },
{
     name: "DAY 14",
     y: 33,
     },
{
     name: "DAY 15",
     y: 37,
     },
{
     name: "DAY 16",
     y: 17,
     },
{
     name: "DAY 17",
     y: 35,
     },
{
     name: "DAY 18",
     y: 36,
     },
{
     name: "DAY 19",
     y: 38,
     },
{
     name: "DAY 20",
     y: 40,
     },
{
     name: "DAY 21",
     y: 44,
     },
{
     name: "DAY 22",
     y: 40,
     },
{
     name: "DAY 23",
     y: 25,
     },
{
     name: "DAY 24",
     y: 37,
     },
{
     name: "DAY 25",
     y: 31,
     },
{
     name: "DAY 26",
     y: 35,
     },
{
     name: "DAY 27",
     y: 49,
     },
{
     name: "DAY 28",
     y: 46,
     },
{
     name: "DAY 29",
     y: 37,
     },
{
     name: "DAY 30",
     y: 43,
     },]
    },

{
    id: "IDmnth4valsad",
    data: 
    [{
     name: "DAY 3",
     y: 1,
     },]
    },

{
    id: "IDmnth4vapi",
    data: 
    [{
     name: "DAY 1",
     y: 3,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 20",
     y: 3,
     },
{
     name: "DAY 21",
     y: 3,
     },
{
     name: "DAY 22",
     y: 4,
     },
{
     name: "DAY 26",
     y: 1,
     },]
    },

{
    id: "IDmnth4vijayawada",
    data: 
    [{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 5,
     },
{
     name: "DAY 5",
     y: 6,
     },
{
     name: "DAY 6",
     y: 5,
     },
{
     name: "DAY 7",
     y: 6,
     },
{
     name: "DAY 8",
     y: 5,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 7,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 4,
     },
{
     name: "DAY 21",
     y: 4,
     },
{
     name: "DAY 22",
     y: 4,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 6,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 6,
     },
{
     name: "DAY 30",
     y: 10,
     },]
    },

{
    id: "IDmnth4vishakapatnam",
    data: 
    [{
     name: "DAY 1",
     y: 24,
     },
{
     name: "DAY 2",
     y: 25,
     },
{
     name: "DAY 3",
     y: 32,
     },
{
     name: "DAY 4",
     y: 38,
     },
{
     name: "DAY 5",
     y: 40,
     },
{
     name: "DAY 6",
     y: 31,
     },
{
     name: "DAY 7",
     y: 28,
     },
{
     name: "DAY 8",
     y: 46,
     },
{
     name: "DAY 9",
     y: 11,
     },
{
     name: "DAY 10",
     y: 26,
     },
{
     name: "DAY 11",
     y: 33,
     },
{
     name: "DAY 12",
     y: 35,
     },
{
     name: "DAY 13",
     y: 30,
     },
{
     name: "DAY 14",
     y: 25,
     },
{
     name: "DAY 15",
     y: 36,
     },
{
     name: "DAY 16",
     y: 13,
     },
{
     name: "DAY 17",
     y: 29,
     },
{
     name: "DAY 18",
     y: 25,
     },
{
     name: "DAY 19",
     y: 23,
     },
{
     name: "DAY 20",
     y: 21,
     },
{
     name: "DAY 21",
     y: 26,
     },
{
     name: "DAY 22",
     y: 29,
     },
{
     name: "DAY 23",
     y: 10,
     },
{
     name: "DAY 24",
     y: 21,
     },
{
     name: "DAY 25",
     y: 23,
     },
{
     name: "DAY 26",
     y: 24,
     },
{
     name: "DAY 27",
     y: 21,
     },
{
     name: "DAY 28",
     y: 22,
     },
{
     name: "DAY 29",
     y: 27,
     },
{
     name: "DAY 30",
     y: 32,
     },]
    },


{
    id: "IDmnth5ahmedabad",
    data: 
    [{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 17,
     },
{
     name: "DAY 3",
     y: 21,
     },
{
     name: "DAY 4",
     y: 15,
     },
{
     name: "DAY 5",
     y: 16,
     },
{
     name: "DAY 6",
     y: 9,
     },
{
     name: "DAY 7",
     y: 4,
     },
{
     name: "DAY 8",
     y: 14,
     },
{
     name: "DAY 9",
     y: 5,
     },
{
     name: "DAY 10",
     y: 17,
     },
{
     name: "DAY 11",
     y: 21,
     },
{
     name: "DAY 12",
     y: 9,
     },
{
     name: "DAY 13",
     y: 12,
     },
{
     name: "DAY 14",
     y: 8,
     },
{
     name: "DAY 15",
     y: 13,
     },
{
     name: "DAY 16",
     y: 9,
     },
{
     name: "DAY 17",
     y: 25,
     },
{
     name: "DAY 18",
     y: 16,
     },
{
     name: "DAY 19",
     y: 16,
     },
{
     name: "DAY 20",
     y: 16,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 10,
     },
{
     name: "DAY 23",
     y: 11,
     },
{
     name: "DAY 24",
     y: 14,
     },
{
     name: "DAY 25",
     y: 10,
     },
{
     name: "DAY 26",
     y: 16,
     },
{
     name: "DAY 27",
     y: 25,
     },
{
     name: "DAY 28",
     y: 4,
     },
{
     name: "DAY 29",
     y: 12,
     },
{
     name: "DAY 30",
     y: 15,
     },
{
     name: "DAY 31",
     y: 26,
     },]
    },

{
    id: "IDmnth5bangalore",
    data: 
    [{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 9,
     },
{
     name: "DAY 4",
     y: 9,
     },
{
     name: "DAY 5",
     y: 7,
     },
{
     name: "DAY 6",
     y: 10,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 5,
     },
{
     name: "DAY 9",
     y: 5,
     },
{
     name: "DAY 10",
     y: 15,
     },
{
     name: "DAY 11",
     y: 7,
     },
{
     name: "DAY 12",
     y: 5,
     },
{
     name: "DAY 13",
     y: 9,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 8,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 8,
     },
{
     name: "DAY 18",
     y: 8,
     },
{
     name: "DAY 19",
     y: 6,
     },
{
     name: "DAY 20",
     y: 10,
     },
{
     name: "DAY 22",
     y: 7,
     },
{
     name: "DAY 23",
     y: 6,
     },
{
     name: "DAY 24",
     y: 5,
     },
{
     name: "DAY 25",
     y: 12,
     },
{
     name: "DAY 26",
     y: 9,
     },
{
     name: "DAY 27",
     y: 8,
     },
{
     name: "DAY 29",
     y: 6,
     },
{
     name: "DAY 30",
     y: 14,
     },
{
     name: "DAY 31",
     y: 13,
     },]
    },

{
    id: "IDmnth5chennai",
    data: 
    [{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 6,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 5,
     },
{
     name: "DAY 6",
     y: 4,
     },
{
     name: "DAY 8",
     y: 6,
     },
{
     name: "DAY 9",
     y: 6,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 5,
     },
{
     name: "DAY 13",
     y: 5,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 3,
     },
{
     name: "DAY 22",
     y: 4,
     },
{
     name: "DAY 23",
     y: 4,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 4,
     },
{
     name: "DAY 26",
     y: 4,
     },
{
     name: "DAY 27",
     y: 6,
     },
{
     name: "DAY 29",
     y: 4,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 13,
     },]
    },

{
    id: "IDmnth5gurgaon",
    data: 
    [{
     name: "DAY 1",
     y: 4,
     },
{
     name: "DAY 2",
     y: 7,
     },
{
     name: "DAY 3",
     y: 6,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 5,
     },
{
     name: "DAY 6",
     y: 6,
     },
{
     name: "DAY 7",
     y: 7,
     },
{
     name: "DAY 8",
     y: 4,
     },
{
     name: "DAY 9",
     y: 10,
     },
{
     name: "DAY 10",
     y: 4,
     },
{
     name: "DAY 11",
     y: 4,
     },
{
     name: "DAY 12",
     y: 5,
     },
{
     name: "DAY 13",
     y: 4,
     },
{
     name: "DAY 14",
     y: 5,
     },
{
     name: "DAY 15",
     y: 3,
     },
{
     name: "DAY 16",
     y: 5,
     },
{
     name: "DAY 17",
     y: 4,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 4,
     },
{
     name: "DAY 20",
     y: 4,
     },
{
     name: "DAY 21",
     y: 7,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 6,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 7,
     },
{
     name: "DAY 30",
     y: 5,
     },
{
     name: "DAY 31",
     y: 8,
     },]
    },

{
    id: "IDmnth5hyderabad",
    data: 
    [{
     name: "DAY 1",
     y: 31,
     },
{
     name: "DAY 2",
     y: 30,
     },
{
     name: "DAY 3",
     y: 41,
     },
{
     name: "DAY 4",
     y: 47,
     },
{
     name: "DAY 5",
     y: 41,
     },
{
     name: "DAY 6",
     y: 39,
     },
{
     name: "DAY 7",
     y: 11,
     },
{
     name: "DAY 8",
     y: 25,
     },
{
     name: "DAY 9",
     y: 40,
     },
{
     name: "DAY 10",
     y: 33,
     },
{
     name: "DAY 11",
     y: 33,
     },
{
     name: "DAY 12",
     y: 46,
     },
{
     name: "DAY 13",
     y: 36,
     },
{
     name: "DAY 14",
     y: 20,
     },
{
     name: "DAY 15",
     y: 25,
     },
{
     name: "DAY 16",
     y: 39,
     },
{
     name: "DAY 17",
     y: 37,
     },
{
     name: "DAY 18",
     y: 51,
     },
{
     name: "DAY 19",
     y: 31,
     },
{
     name: "DAY 20",
     y: 33,
     },
{
     name: "DAY 21",
     y: 19,
     },
{
     name: "DAY 22",
     y: 31,
     },
{
     name: "DAY 23",
     y: 37,
     },
{
     name: "DAY 24",
     y: 42,
     },
{
     name: "DAY 25",
     y: 29,
     },
{
     name: "DAY 26",
     y: 35,
     },
{
     name: "DAY 27",
     y: 37,
     },
{
     name: "DAY 28",
     y: 12,
     },
{
     name: "DAY 29",
     y: 36,
     },
{
     name: "DAY 30",
     y: 37,
     },
{
     name: "DAY 31",
     y: 44,
     },]
    },

{
    id: "IDmnth5kakinada",
    data: 
    [{
     name: "DAY 1",
     y: 4,
     },
{
     name: "DAY 2",
     y: 7,
     },
{
     name: "DAY 3",
     y: 9,
     },
{
     name: "DAY 4",
     y: 9,
     },
{
     name: "DAY 5",
     y: 6,
     },
{
     name: "DAY 6",
     y: 5,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 4,
     },
{
     name: "DAY 9",
     y: 9,
     },
{
     name: "DAY 10",
     y: 8,
     },
{
     name: "DAY 11",
     y: 10,
     },
{
     name: "DAY 12",
     y: 9,
     },
{
     name: "DAY 13",
     y: 11,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 11,
     },
{
     name: "DAY 16",
     y: 12,
     },
{
     name: "DAY 17",
     y: 11,
     },
{
     name: "DAY 18",
     y: 7,
     },
{
     name: "DAY 19",
     y: 5,
     },
{
     name: "DAY 20",
     y: 5,
     },
{
     name: "DAY 21",
     y: 3,
     },
{
     name: "DAY 22",
     y: 9,
     },
{
     name: "DAY 23",
     y: 9,
     },
{
     name: "DAY 24",
     y: 5,
     },
{
     name: "DAY 25",
     y: 8,
     },
{
     name: "DAY 26",
     y: 12,
     },
{
     name: "DAY 27",
     y: 9,
     },
{
     name: "DAY 29",
     y: 9,
     },
{
     name: "DAY 30",
     y: 7,
     },
{
     name: "DAY 31",
     y: 12,
     },]
    },

{
    id: "IDmnth5kharghar",
    data: 
    [{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 13",
     y: 4,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 3,
     },]
    },

{
    id: "IDmnth5mumbai",
    data: 
    [{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 4,
     },
{
     name: "DAY 3",
     y: 4,
     },
{
     name: "DAY 4",
     y: 8,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 9,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 5,
     },
{
     name: "DAY 10",
     y: 7,
     },
{
     name: "DAY 11",
     y: 4,
     },
{
     name: "DAY 12",
     y: 6,
     },
{
     name: "DAY 13",
     y: 4,
     },
{
     name: "DAY 15",
     y: 6,
     },
{
     name: "DAY 16",
     y: 6,
     },
{
     name: "DAY 17",
     y: 6,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 19",
     y: 4,
     },
{
     name: "DAY 20",
     y: 8,
     },
{
     name: "DAY 22",
     y: 5,
     },
{
     name: "DAY 23",
     y: 6,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 7,
     },
{
     name: "DAY 26",
     y: 8,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 8,
     },
{
     name: "DAY 29",
     y: 11,
     },
{
     name: "DAY 30",
     y: 8,
     },
{
     name: "DAY 31",
     y: 9,
     },]
    },

{
    id: "IDmnth5nashik",
    data: 
    [{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 30",
     y: 1,
     },]
    },

{
    id: "IDmnth5navi mumbai",
    data: 
    [{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 4,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 5,
     },
{
     name: "DAY 8",
     y: 4,
     },
{
     name: "DAY 9",
     y: 5,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 4,
     },
{
     name: "DAY 13",
     y: 5,
     },
{
     name: "DAY 15",
     y: 4,
     },
{
     name: "DAY 16",
     y: 5,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 3,
     },
{
     name: "DAY 22",
     y: 6,
     },
{
     name: "DAY 23",
     y: 5,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 3,
     },
{
     name: "DAY 29",
     y: 3,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 6,
     },]
    },

{
    id: "IDmnth5navsari",
    data: 
    [{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 5,
     },
{
     name: "DAY 4",
     y: 5,
     },
{
     name: "DAY 5",
     y: 6,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 6,
     },
{
     name: "DAY 9",
     y: 9,
     },
{
     name: "DAY 10",
     y: 5,
     },
{
     name: "DAY 11",
     y: 6,
     },
{
     name: "DAY 12",
     y: 5,
     },
{
     name: "DAY 13",
     y: 6,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 10,
     },
{
     name: "DAY 16",
     y: 7,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 19",
     y: 3,
     },
{
     name: "DAY 20",
     y: 8,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 5,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 5,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 4,
     },
{
     name: "DAY 31",
     y: 6,
     },]
    },

{
    id: "IDmnth5powai",
    data: 
    [{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 5,
     },
{
     name: "DAY 4",
     y: 8,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 9",
     y: 4,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 4,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 13",
     y: 5,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 4,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 4,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 4,
     },
{
     name: "DAY 20",
     y: 3,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 4,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 3,
     },]
    },

{
    id: "IDmnth5pune central",
    data: 
    [{
     name: "DAY 1",
     y: 3,
     },
{
     name: "DAY 2",
     y: 13,
     },
{
     name: "DAY 3",
     y: 13,
     },
{
     name: "DAY 4",
     y: 13,
     },
{
     name: "DAY 5",
     y: 13,
     },
{
     name: "DAY 6",
     y: 14,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 8",
     y: 15,
     },
{
     name: "DAY 9",
     y: 18,
     },
{
     name: "DAY 10",
     y: 14,
     },
{
     name: "DAY 11",
     y: 9,
     },
{
     name: "DAY 12",
     y: 16,
     },
{
     name: "DAY 13",
     y: 13,
     },
{
     name: "DAY 15",
     y: 12,
     },
{
     name: "DAY 16",
     y: 12,
     },
{
     name: "DAY 17",
     y: 13,
     },
{
     name: "DAY 18",
     y: 9,
     },
{
     name: "DAY 19",
     y: 11,
     },
{
     name: "DAY 20",
     y: 22,
     },
{
     name: "DAY 22",
     y: 14,
     },
{
     name: "DAY 23",
     y: 13,
     },
{
     name: "DAY 24",
     y: 15,
     },
{
     name: "DAY 25",
     y: 13,
     },
{
     name: "DAY 26",
     y: 19,
     },
{
     name: "DAY 27",
     y: 12,
     },
{
     name: "DAY 28",
     y: 7,
     },
{
     name: "DAY 29",
     y: 20,
     },
{
     name: "DAY 30",
     y: 10,
     },
{
     name: "DAY 31",
     y: 23,
     },]
    },

{
    id: "IDmnth5pune east",
    data: 
    [{
     name: "DAY 1",
     y: 4,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 10,
     },
{
     name: "DAY 4",
     y: 12,
     },
{
     name: "DAY 5",
     y: 14,
     },
{
     name: "DAY 6",
     y: 12,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 9,
     },
{
     name: "DAY 9",
     y: 6,
     },
{
     name: "DAY 10",
     y: 15,
     },
{
     name: "DAY 11",
     y: 13,
     },
{
     name: "DAY 12",
     y: 11,
     },
{
     name: "DAY 13",
     y: 12,
     },
{
     name: "DAY 15",
     y: 7,
     },
{
     name: "DAY 16",
     y: 14,
     },
{
     name: "DAY 17",
     y: 6,
     },
{
     name: "DAY 18",
     y: 5,
     },
{
     name: "DAY 19",
     y: 8,
     },
{
     name: "DAY 20",
     y: 10,
     },
{
     name: "DAY 21",
     y: 5,
     },
{
     name: "DAY 22",
     y: 4,
     },
{
     name: "DAY 23",
     y: 5,
     },
{
     name: "DAY 24",
     y: 9,
     },
{
     name: "DAY 25",
     y: 6,
     },
{
     name: "DAY 26",
     y: 13,
     },
{
     name: "DAY 27",
     y: 12,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 5,
     },
{
     name: "DAY 30",
     y: 10,
     },
{
     name: "DAY 31",
     y: 16,
     },]
    },

{
    id: "IDmnth5pune north",
    data: 
    [{
     name: "DAY 1",
     y: 5,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 6,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 6,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 25",
     y: 4,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 4,
     },]
    },

{
    id: "IDmnth5pune west",
    data: 
    [{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 9,
     },
{
     name: "DAY 3",
     y: 13,
     },
{
     name: "DAY 4",
     y: 13,
     },
{
     name: "DAY 5",
     y: 15,
     },
{
     name: "DAY 6",
     y: 16,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 12,
     },
{
     name: "DAY 9",
     y: 12,
     },
{
     name: "DAY 10",
     y: 14,
     },
{
     name: "DAY 11",
     y: 4,
     },
{
     name: "DAY 12",
     y: 6,
     },
{
     name: "DAY 13",
     y: 16,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 11,
     },
{
     name: "DAY 16",
     y: 6,
     },
{
     name: "DAY 17",
     y: 12,
     },
{
     name: "DAY 18",
     y: 6,
     },
{
     name: "DAY 19",
     y: 10,
     },
{
     name: "DAY 20",
     y: 12,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 10,
     },
{
     name: "DAY 23",
     y: 9,
     },
{
     name: "DAY 24",
     y: 7,
     },
{
     name: "DAY 25",
     y: 7,
     },
{
     name: "DAY 26",
     y: 14,
     },
{
     name: "DAY 27",
     y: 11,
     },
{
     name: "DAY 28",
     y: 5,
     },
{
     name: "DAY 29",
     y: 12,
     },
{
     name: "DAY 30",
     y: 10,
     },
{
     name: "DAY 31",
     y: 24,
     },]
    },

{
    id: "IDmnth5rajkot",
    data: 
    [{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 7,
     },
{
     name: "DAY 6",
     y: 4,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 10",
     y: 7,
     },
{
     name: "DAY 11",
     y: 5,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 4,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 5,
     },
{
     name: "DAY 20",
     y: 3,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 3,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 5,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 3,
     },
{
     name: "DAY 29",
     y: 5,
     },
{
     name: "DAY 30",
     y: 4,
     },
{
     name: "DAY 31",
     y: 6,
     },]
    },

{
    id: "IDmnth5surat",
    data: 
    [{
     name: "DAY 1",
     y: 16,
     },
{
     name: "DAY 2",
     y: 21,
     },
{
     name: "DAY 3",
     y: 57,
     },
{
     name: "DAY 4",
     y: 56,
     },
{
     name: "DAY 5",
     y: 62,
     },
{
     name: "DAY 6",
     y: 50,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 74,
     },
{
     name: "DAY 9",
     y: 60,
     },
{
     name: "DAY 10",
     y: 70,
     },
{
     name: "DAY 11",
     y: 61,
     },
{
     name: "DAY 12",
     y: 58,
     },
{
     name: "DAY 13",
     y: 63,
     },
{
     name: "DAY 14",
     y: 5,
     },
{
     name: "DAY 15",
     y: 40,
     },
{
     name: "DAY 16",
     y: 54,
     },
{
     name: "DAY 17",
     y: 51,
     },
{
     name: "DAY 18",
     y: 69,
     },
{
     name: "DAY 19",
     y: 70,
     },
{
     name: "DAY 20",
     y: 60,
     },
{
     name: "DAY 21",
     y: 10,
     },
{
     name: "DAY 22",
     y: 55,
     },
{
     name: "DAY 23",
     y: 61,
     },
{
     name: "DAY 24",
     y: 50,
     },
{
     name: "DAY 25",
     y: 45,
     },
{
     name: "DAY 26",
     y: 47,
     },
{
     name: "DAY 27",
     y: 47,
     },
{
     name: "DAY 28",
     y: 13,
     },
{
     name: "DAY 29",
     y: 47,
     },
{
     name: "DAY 30",
     y: 62,
     },
{
     name: "DAY 31",
     y: 67,
     },]
    },

{
    id: "IDmnth5thane",
    data: 
    [{
     name: "DAY 2",
     y: 4,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 4,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 3,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 3,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 3,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 1,
     },
{
     name: "DAY 31",
     y: 3,
     },]
    },

{
    id: "IDmnth5vadodara",
    data: 
    [{
     name: "DAY 1",
     y: 15,
     },
{
     name: "DAY 2",
     y: 30,
     },
{
     name: "DAY 3",
     y: 36,
     },
{
     name: "DAY 4",
     y: 29,
     },
{
     name: "DAY 5",
     y: 29,
     },
{
     name: "DAY 6",
     y: 33,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 32,
     },
{
     name: "DAY 9",
     y: 36,
     },
{
     name: "DAY 10",
     y: 32,
     },
{
     name: "DAY 11",
     y: 37,
     },
{
     name: "DAY 12",
     y: 34,
     },
{
     name: "DAY 13",
     y: 36,
     },
{
     name: "DAY 14",
     y: 11,
     },
{
     name: "DAY 15",
     y: 31,
     },
{
     name: "DAY 16",
     y: 39,
     },
{
     name: "DAY 17",
     y: 42,
     },
{
     name: "DAY 18",
     y: 34,
     },
{
     name: "DAY 19",
     y: 38,
     },
{
     name: "DAY 20",
     y: 30,
     },
{
     name: "DAY 21",
     y: 8,
     },
{
     name: "DAY 22",
     y: 31,
     },
{
     name: "DAY 23",
     y: 34,
     },
{
     name: "DAY 24",
     y: 42,
     },
{
     name: "DAY 25",
     y: 48,
     },
{
     name: "DAY 26",
     y: 39,
     },
{
     name: "DAY 27",
     y: 30,
     },
{
     name: "DAY 28",
     y: 21,
     },
{
     name: "DAY 29",
     y: 33,
     },
{
     name: "DAY 30",
     y: 38,
     },
{
     name: "DAY 31",
     y: 51,
     },]
    },

{
    id: "IDmnth5valsad",
    data: 
    [{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 30",
     y: 1,
     },]
    },

{
    id: "IDmnth5vapi",
    data: 
    [{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 1,
     },]
    },

{
    id: "IDmnth5vijayawada",
    data: 
    [{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 5,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 5,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 8",
     y: 5,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 6,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 3,
     },
{
     name: "DAY 16",
     y: 4,
     },
{
     name: "DAY 17",
     y: 4,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 5,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 23",
     y: 7,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 4,
     },
{
     name: "DAY 31",
     y: 6,
     },]
    },

{
    id: "IDmnth5vishakapatnam",
    data: 
    [{
     name: "DAY 1",
     y: 21,
     },
{
     name: "DAY 2",
     y: 32,
     },
{
     name: "DAY 3",
     y: 29,
     },
{
     name: "DAY 4",
     y: 21,
     },
{
     name: "DAY 5",
     y: 31,
     },
{
     name: "DAY 6",
     y: 25,
     },
{
     name: "DAY 7",
     y: 15,
     },
{
     name: "DAY 8",
     y: 26,
     },
{
     name: "DAY 9",
     y: 26,
     },
{
     name: "DAY 10",
     y: 27,
     },
{
     name: "DAY 11",
     y: 28,
     },
{
     name: "DAY 12",
     y: 32,
     },
{
     name: "DAY 13",
     y: 29,
     },
{
     name: "DAY 14",
     y: 12,
     },
{
     name: "DAY 15",
     y: 21,
     },
{
     name: "DAY 16",
     y: 20,
     },
{
     name: "DAY 17",
     y: 22,
     },
{
     name: "DAY 18",
     y: 22,
     },
{
     name: "DAY 19",
     y: 19,
     },
{
     name: "DAY 20",
     y: 24,
     },
{
     name: "DAY 21",
     y: 17,
     },
{
     name: "DAY 22",
     y: 25,
     },
{
     name: "DAY 23",
     y: 25,
     },
{
     name: "DAY 24",
     y: 31,
     },
{
     name: "DAY 25",
     y: 24,
     },
{
     name: "DAY 26",
     y: 22,
     },
{
     name: "DAY 27",
     y: 23,
     },
{
     name: "DAY 28",
     y: 17,
     },
{
     name: "DAY 29",
     y: 24,
     },
{
     name: "DAY 30",
     y: 34,
     },
{
     name: "DAY 31",
     y: 34,
     },]
    },


{
    id: "IDmnth6ahmedabad",
    data: 
    [{
     name: "DAY 1",
     y: 14,
     },
{
     name: "DAY 2",
     y: 5,
     },
{
     name: "DAY 3",
     y: 14,
     },
{
     name: "DAY 4",
     y: 9,
     },
{
     name: "DAY 5",
     y: 16,
     },
{
     name: "DAY 6",
     y: 27,
     },
{
     name: "DAY 7",
     y: 20,
     },
{
     name: "DAY 8",
     y: 25,
     },
{
     name: "DAY 9",
     y: 20,
     },
{
     name: "DAY 10",
     y: 13,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 19,
     },
{
     name: "DAY 13",
     y: 15,
     },
{
     name: "DAY 14",
     y: 22,
     },
{
     name: "DAY 15",
     y: 17,
     },
{
     name: "DAY 16",
     y: 14,
     },
{
     name: "DAY 17",
     y: 16,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 5,
     },
{
     name: "DAY 20",
     y: 13,
     },
{
     name: "DAY 21",
     y: 20,
     },
{
     name: "DAY 22",
     y: 18,
     },
{
     name: "DAY 23",
     y: 18,
     },
{
     name: "DAY 24",
     y: 13,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 6,
     },
{
     name: "DAY 27",
     y: 23,
     },
{
     name: "DAY 28",
     y: 26,
     },
{
     name: "DAY 29",
     y: 17,
     },
{
     name: "DAY 30",
     y: 32,
     },]
    },

{
    id: "IDmnth6aurangabad",
    data: 
    [{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 5,
     },]
    },

{
    id: "IDmnth6bangalore",
    data: 
    [{
     name: "DAY 1",
     y: 12,
     },
{
     name: "DAY 2",
     y: 7,
     },
{
     name: "DAY 3",
     y: 14,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 9,
     },
{
     name: "DAY 6",
     y: 10,
     },
{
     name: "DAY 7",
     y: 9,
     },
{
     name: "DAY 8",
     y: 7,
     },
{
     name: "DAY 9",
     y: 7,
     },
{
     name: "DAY 10",
     y: 11,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 10,
     },
{
     name: "DAY 13",
     y: 15,
     },
{
     name: "DAY 14",
     y: 14,
     },
{
     name: "DAY 15",
     y: 7,
     },
{
     name: "DAY 16",
     y: 8,
     },
{
     name: "DAY 17",
     y: 9,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 8,
     },
{
     name: "DAY 20",
     y: 8,
     },
{
     name: "DAY 21",
     y: 7,
     },
{
     name: "DAY 22",
     y: 4,
     },
{
     name: "DAY 23",
     y: 12,
     },
{
     name: "DAY 24",
     y: 17,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 5,
     },
{
     name: "DAY 27",
     y: 9,
     },
{
     name: "DAY 28",
     y: 7,
     },
{
     name: "DAY 29",
     y: 12,
     },
{
     name: "DAY 30",
     y: 17,
     },]
    },

{
    id: "IDmnth6chennai",
    data: 
    [{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 10,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 12,
     },
{
     name: "DAY 7",
     y: 7,
     },
{
     name: "DAY 8",
     y: 8,
     },
{
     name: "DAY 9",
     y: 7,
     },
{
     name: "DAY 10",
     y: 6,
     },
{
     name: "DAY 12",
     y: 4,
     },
{
     name: "DAY 13",
     y: 7,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 3,
     },
{
     name: "DAY 16",
     y: 4,
     },
{
     name: "DAY 17",
     y: 7,
     },
{
     name: "DAY 19",
     y: 4,
     },
{
     name: "DAY 20",
     y: 4,
     },
{
     name: "DAY 21",
     y: 4,
     },
{
     name: "DAY 22",
     y: 4,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 8,
     },
{
     name: "DAY 26",
     y: 6,
     },
{
     name: "DAY 27",
     y: 5,
     },
{
     name: "DAY 28",
     y: 4,
     },
{
     name: "DAY 29",
     y: 4,
     },
{
     name: "DAY 30",
     y: 13,
     },]
    },

{
    id: "IDmnth6gurgaon",
    data: 
    [{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 6,
     },
{
     name: "DAY 3",
     y: 6,
     },
{
     name: "DAY 4",
     y: 7,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 8,
     },
{
     name: "DAY 7",
     y: 4,
     },
{
     name: "DAY 8",
     y: 9,
     },
{
     name: "DAY 9",
     y: 6,
     },
{
     name: "DAY 10",
     y: 8,
     },
{
     name: "DAY 11",
     y: 5,
     },
{
     name: "DAY 12",
     y: 4,
     },
{
     name: "DAY 13",
     y: 5,
     },
{
     name: "DAY 14",
     y: 5,
     },
{
     name: "DAY 15",
     y: 3,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 9,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 4,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 5,
     },
{
     name: "DAY 23",
     y: 3,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 6,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 6,
     },
{
     name: "DAY 30",
     y: 4,
     },]
    },

{
    id: "IDmnth6hyderabad",
    data: 
    [{
     name: "DAY 1",
     y: 40,
     },
{
     name: "DAY 2",
     y: 46,
     },
{
     name: "DAY 3",
     y: 44,
     },
{
     name: "DAY 4",
     y: 14,
     },
{
     name: "DAY 5",
     y: 43,
     },
{
     name: "DAY 6",
     y: 42,
     },
{
     name: "DAY 7",
     y: 51,
     },
{
     name: "DAY 8",
     y: 43,
     },
{
     name: "DAY 9",
     y: 46,
     },
{
     name: "DAY 10",
     y: 49,
     },
{
     name: "DAY 11",
     y: 36,
     },
{
     name: "DAY 12",
     y: 61,
     },
{
     name: "DAY 13",
     y: 48,
     },
{
     name: "DAY 14",
     y: 52,
     },
{
     name: "DAY 15",
     y: 48,
     },
{
     name: "DAY 16",
     y: 42,
     },
{
     name: "DAY 17",
     y: 53,
     },
{
     name: "DAY 18",
     y: 18,
     },
{
     name: "DAY 19",
     y: 44,
     },
{
     name: "DAY 20",
     y: 53,
     },
{
     name: "DAY 21",
     y: 57,
     },
{
     name: "DAY 22",
     y: 51,
     },
{
     name: "DAY 23",
     y: 39,
     },
{
     name: "DAY 24",
     y: 42,
     },
{
     name: "DAY 25",
     y: 20,
     },
{
     name: "DAY 26",
     y: 35,
     },
{
     name: "DAY 27",
     y: 39,
     },
{
     name: "DAY 28",
     y: 50,
     },
{
     name: "DAY 29",
     y: 52,
     },
{
     name: "DAY 30",
     y: 88,
     },]
    },

{
    id: "IDmnth6kakinada",
    data: 
    [{
     name: "DAY 1",
     y: 9,
     },
{
     name: "DAY 2",
     y: 10,
     },
{
     name: "DAY 3",
     y: 10,
     },
{
     name: "DAY 4",
     y: 4,
     },
{
     name: "DAY 5",
     y: 6,
     },
{
     name: "DAY 6",
     y: 17,
     },
{
     name: "DAY 7",
     y: 7,
     },
{
     name: "DAY 8",
     y: 7,
     },
{
     name: "DAY 9",
     y: 7,
     },
{
     name: "DAY 10",
     y: 9,
     },
{
     name: "DAY 11",
     y: 7,
     },
{
     name: "DAY 12",
     y: 14,
     },
{
     name: "DAY 13",
     y: 6,
     },
{
     name: "DAY 14",
     y: 12,
     },
{
     name: "DAY 15",
     y: 13,
     },
{
     name: "DAY 16",
     y: 12,
     },
{
     name: "DAY 17",
     y: 10,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 3,
     },
{
     name: "DAY 20",
     y: 12,
     },
{
     name: "DAY 21",
     y: 9,
     },
{
     name: "DAY 22",
     y: 13,
     },
{
     name: "DAY 23",
     y: 15,
     },
{
     name: "DAY 24",
     y: 8,
     },
{
     name: "DAY 25",
     y: 6,
     },
{
     name: "DAY 26",
     y: 5,
     },
{
     name: "DAY 27",
     y: 11,
     },
{
     name: "DAY 28",
     y: 9,
     },
{
     name: "DAY 29",
     y: 16,
     },
{
     name: "DAY 30",
     y: 10,
     },]
    },

{
    id: "IDmnth6kharghar",
    data: 
    [{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 30",
     y: 2,
     },]
    },

{
    id: "IDmnth6mumbai",
    data: 
    [{
     name: "DAY 1",
     y: 10,
     },
{
     name: "DAY 2",
     y: 9,
     },
{
     name: "DAY 3",
     y: 9,
     },
{
     name: "DAY 4",
     y: 5,
     },
{
     name: "DAY 5",
     y: 7,
     },
{
     name: "DAY 6",
     y: 5,
     },
{
     name: "DAY 7",
     y: 5,
     },
{
     name: "DAY 8",
     y: 7,
     },
{
     name: "DAY 9",
     y: 6,
     },
{
     name: "DAY 10",
     y: 7,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 5,
     },
{
     name: "DAY 13",
     y: 8,
     },
{
     name: "DAY 14",
     y: 7,
     },
{
     name: "DAY 15",
     y: 5,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 5,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 7,
     },
{
     name: "DAY 20",
     y: 4,
     },
{
     name: "DAY 21",
     y: 5,
     },
{
     name: "DAY 22",
     y: 3,
     },
{
     name: "DAY 23",
     y: 4,
     },
{
     name: "DAY 24",
     y: 8,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 4,
     },
{
     name: "DAY 28",
     y: 5,
     },
{
     name: "DAY 29",
     y: 6,
     },
{
     name: "DAY 30",
     y: 10,
     },]
    },

{
    id: "IDmnth6nashik",
    data: 
    [{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 4,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 22",
     y: 3,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 30",
     y: 7,
     },]
    },

{
    id: "IDmnth6navi mumbai",
    data: 
    [{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 8,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 6,
     },
{
     name: "DAY 7",
     y: 5,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 5,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 13",
     y: 8,
     },
{
     name: "DAY 14",
     y: 5,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 5,
     },
{
     name: "DAY 17",
     y: 6,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 7,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 3,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 6,
     },
{
     name: "DAY 30",
     y: 7,
     },]
    },

{
    id: "IDmnth6navsari",
    data: 
    [{
     name: "DAY 1",
     y: 5,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 7,
     },
{
     name: "DAY 7",
     y: 4,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 4,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 5,
     },
{
     name: "DAY 13",
     y: 5,
     },
{
     name: "DAY 14",
     y: 9,
     },
{
     name: "DAY 15",
     y: 3,
     },
{
     name: "DAY 16",
     y: 4,
     },
{
     name: "DAY 17",
     y: 7,
     },
{
     name: "DAY 19",
     y: 5,
     },
{
     name: "DAY 20",
     y: 8,
     },
{
     name: "DAY 21",
     y: 10,
     },
{
     name: "DAY 22",
     y: 4,
     },
{
     name: "DAY 23",
     y: 7,
     },
{
     name: "DAY 24",
     y: 7,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 8,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 7,
     },
{
     name: "DAY 30",
     y: 10,
     },]
    },

{
    id: "IDmnth6powai",
    data: 
    [{
     name: "DAY 2",
     y: 5,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 8",
     y: 4,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 4,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 4,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 3,
     },
{
     name: "DAY 23",
     y: 5,
     },
{
     name: "DAY 24",
     y: 4,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 3,
     },
{
     name: "DAY 30",
     y: 3,
     },]
    },

{
    id: "IDmnth6pune central",
    data: 
    [{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 14,
     },
{
     name: "DAY 3",
     y: 19,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 15,
     },
{
     name: "DAY 6",
     y: 13,
     },
{
     name: "DAY 7",
     y: 18,
     },
{
     name: "DAY 8",
     y: 18,
     },
{
     name: "DAY 9",
     y: 18,
     },
{
     name: "DAY 10",
     y: 14,
     },
{
     name: "DAY 11",
     y: 4,
     },
{
     name: "DAY 12",
     y: 8,
     },
{
     name: "DAY 13",
     y: 12,
     },
{
     name: "DAY 14",
     y: 11,
     },
{
     name: "DAY 15",
     y: 17,
     },
{
     name: "DAY 16",
     y: 19,
     },
{
     name: "DAY 17",
     y: 21,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 20,
     },
{
     name: "DAY 20",
     y: 17,
     },
{
     name: "DAY 21",
     y: 15,
     },
{
     name: "DAY 22",
     y: 9,
     },
{
     name: "DAY 23",
     y: 22,
     },
{
     name: "DAY 24",
     y: 21,
     },
{
     name: "DAY 25",
     y: 6,
     },
{
     name: "DAY 26",
     y: 11,
     },
{
     name: "DAY 27",
     y: 14,
     },
{
     name: "DAY 28",
     y: 12,
     },
{
     name: "DAY 29",
     y: 21,
     },
{
     name: "DAY 30",
     y: 29,
     },]
    },

{
    id: "IDmnth6pune east",
    data: 
    [{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 6,
     },
{
     name: "DAY 3",
     y: 12,
     },
{
     name: "DAY 4",
     y: 5,
     },
{
     name: "DAY 5",
     y: 10,
     },
{
     name: "DAY 6",
     y: 9,
     },
{
     name: "DAY 7",
     y: 19,
     },
{
     name: "DAY 8",
     y: 11,
     },
{
     name: "DAY 9",
     y: 6,
     },
{
     name: "DAY 10",
     y: 15,
     },
{
     name: "DAY 11",
     y: 3,
     },
{
     name: "DAY 12",
     y: 15,
     },
{
     name: "DAY 13",
     y: 11,
     },
{
     name: "DAY 14",
     y: 14,
     },
{
     name: "DAY 15",
     y: 8,
     },
{
     name: "DAY 16",
     y: 5,
     },
{
     name: "DAY 17",
     y: 4,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 6,
     },
{
     name: "DAY 20",
     y: 8,
     },
{
     name: "DAY 21",
     y: 9,
     },
{
     name: "DAY 22",
     y: 10,
     },
{
     name: "DAY 23",
     y: 8,
     },
{
     name: "DAY 24",
     y: 5,
     },
{
     name: "DAY 25",
     y: 10,
     },
{
     name: "DAY 27",
     y: 9,
     },
{
     name: "DAY 28",
     y: 13,
     },
{
     name: "DAY 29",
     y: 9,
     },
{
     name: "DAY 30",
     y: 29,
     },]
    },

{
    id: "IDmnth6pune north",
    data: 
    [{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 3",
     y: 4,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 11",
     y: 4,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 4,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 3,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 4,
     },
{
     name: "DAY 24",
     y: 4,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 4,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 2,
     },]
    },

{
    id: "IDmnth6pune west",
    data: 
    [{
     name: "DAY 1",
     y: 13,
     },
{
     name: "DAY 2",
     y: 6,
     },
{
     name: "DAY 3",
     y: 9,
     },
{
     name: "DAY 4",
     y: 9,
     },
{
     name: "DAY 5",
     y: 17,
     },
{
     name: "DAY 6",
     y: 13,
     },
{
     name: "DAY 7",
     y: 17,
     },
{
     name: "DAY 8",
     y: 10,
     },
{
     name: "DAY 9",
     y: 7,
     },
{
     name: "DAY 10",
     y: 15,
     },
{
     name: "DAY 11",
     y: 7,
     },
{
     name: "DAY 12",
     y: 15,
     },
{
     name: "DAY 13",
     y: 12,
     },
{
     name: "DAY 14",
     y: 10,
     },
{
     name: "DAY 15",
     y: 13,
     },
{
     name: "DAY 16",
     y: 10,
     },
{
     name: "DAY 17",
     y: 18,
     },
{
     name: "DAY 18",
     y: 9,
     },
{
     name: "DAY 19",
     y: 11,
     },
{
     name: "DAY 20",
     y: 15,
     },
{
     name: "DAY 21",
     y: 19,
     },
{
     name: "DAY 22",
     y: 15,
     },
{
     name: "DAY 23",
     y: 10,
     },
{
     name: "DAY 24",
     y: 12,
     },
{
     name: "DAY 25",
     y: 7,
     },
{
     name: "DAY 26",
     y: 8,
     },
{
     name: "DAY 27",
     y: 9,
     },
{
     name: "DAY 28",
     y: 9,
     },
{
     name: "DAY 29",
     y: 23,
     },
{
     name: "DAY 30",
     y: 37,
     },]
    },

{
    id: "IDmnth6rajkot",
    data: 
    [{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 6,
     },
{
     name: "DAY 5",
     y: 6,
     },
{
     name: "DAY 6",
     y: 7,
     },
{
     name: "DAY 7",
     y: 4,
     },
{
     name: "DAY 8",
     y: 10,
     },
{
     name: "DAY 9",
     y: 8,
     },
{
     name: "DAY 10",
     y: 8,
     },
{
     name: "DAY 12",
     y: 4,
     },
{
     name: "DAY 13",
     y: 5,
     },
{
     name: "DAY 14",
     y: 5,
     },
{
     name: "DAY 15",
     y: 4,
     },
{
     name: "DAY 16",
     y: 7,
     },
{
     name: "DAY 17",
     y: 5,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 6,
     },
{
     name: "DAY 20",
     y: 7,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 9,
     },
{
     name: "DAY 23",
     y: 8,
     },
{
     name: "DAY 24",
     y: 6,
     },
{
     name: "DAY 26",
     y: 5,
     },
{
     name: "DAY 28",
     y: 7,
     },
{
     name: "DAY 30",
     y: 7,
     },]
    },

{
    id: "IDmnth6surat",
    data: 
    [{
     name: "DAY 1",
     y: 25,
     },
{
     name: "DAY 2",
     y: 35,
     },
{
     name: "DAY 3",
     y: 41,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 47,
     },
{
     name: "DAY 6",
     y: 52,
     },
{
     name: "DAY 7",
     y: 58,
     },
{
     name: "DAY 8",
     y: 50,
     },
{
     name: "DAY 9",
     y: 52,
     },
{
     name: "DAY 10",
     y: 50,
     },
{
     name: "DAY 11",
     y: 8,
     },
{
     name: "DAY 12",
     y: 45,
     },
{
     name: "DAY 13",
     y: 56,
     },
{
     name: "DAY 14",
     y: 60,
     },
{
     name: "DAY 15",
     y: 55,
     },
{
     name: "DAY 16",
     y: 41,
     },
{
     name: "DAY 17",
     y: 58,
     },
{
     name: "DAY 18",
     y: 18,
     },
{
     name: "DAY 19",
     y: 40,
     },
{
     name: "DAY 20",
     y: 67,
     },
{
     name: "DAY 21",
     y: 70,
     },
{
     name: "DAY 22",
     y: 60,
     },
{
     name: "DAY 23",
     y: 54,
     },
{
     name: "DAY 24",
     y: 60,
     },
{
     name: "DAY 25",
     y: 10,
     },
{
     name: "DAY 26",
     y: 40,
     },
{
     name: "DAY 27",
     y: 33,
     },
{
     name: "DAY 28",
     y: 43,
     },
{
     name: "DAY 29",
     y: 66,
     },
{
     name: "DAY 30",
     y: 92,
     },]
    },

{
    id: "IDmnth6thane",
    data: 
    [{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 4,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 9",
     y: 4,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 5,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 13",
     y: 4,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 5,
     },
{
     name: "DAY 22",
     y: 4,
     },
{
     name: "DAY 23",
     y: 4,
     },
{
     name: "DAY 24",
     y: 5,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 2,
     },]
    },

{
    id: "IDmnth6vadodara",
    data: 
    [{
     name: "DAY 1",
     y: 21,
     },
{
     name: "DAY 2",
     y: 30,
     },
{
     name: "DAY 3",
     y: 36,
     },
{
     name: "DAY 4",
     y: 6,
     },
{
     name: "DAY 5",
     y: 36,
     },
{
     name: "DAY 6",
     y: 40,
     },
{
     name: "DAY 7",
     y: 26,
     },
{
     name: "DAY 8",
     y: 32,
     },
{
     name: "DAY 9",
     y: 28,
     },
{
     name: "DAY 10",
     y: 39,
     },
{
     name: "DAY 11",
     y: 6,
     },
{
     name: "DAY 12",
     y: 40,
     },
{
     name: "DAY 13",
     y: 41,
     },
{
     name: "DAY 14",
     y: 31,
     },
{
     name: "DAY 15",
     y: 41,
     },
{
     name: "DAY 16",
     y: 26,
     },
{
     name: "DAY 17",
     y: 40,
     },
{
     name: "DAY 18",
     y: 16,
     },
{
     name: "DAY 19",
     y: 28,
     },
{
     name: "DAY 20",
     y: 29,
     },
{
     name: "DAY 21",
     y: 38,
     },
{
     name: "DAY 22",
     y: 32,
     },
{
     name: "DAY 23",
     y: 38,
     },
{
     name: "DAY 24",
     y: 27,
     },
{
     name: "DAY 25",
     y: 11,
     },
{
     name: "DAY 26",
     y: 21,
     },
{
     name: "DAY 27",
     y: 41,
     },
{
     name: "DAY 28",
     y: 31,
     },
{
     name: "DAY 29",
     y: 52,
     },
{
     name: "DAY 30",
     y: 57,
     },]
    },

{
    id: "IDmnth6valsad",
    data: 
    [{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 30",
     y: 1,
     },]
    },

{
    id: "IDmnth6vapi",
    data: 
    [{
     name: "DAY 1",
     y: 3,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 21",
     y: 3,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 4,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 4,
     },]
    },

{
    id: "IDmnth6vijayawada",
    data: 
    [{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 4,
     },
{
     name: "DAY 3",
     y: 5,
     },
{
     name: "DAY 4",
     y: 4,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 4,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 7,
     },
{
     name: "DAY 10",
     y: 5,
     },
{
     name: "DAY 11",
     y: 4,
     },
{
     name: "DAY 12",
     y: 4,
     },
{
     name: "DAY 13",
     y: 5,
     },
{
     name: "DAY 14",
     y: 4,
     },
{
     name: "DAY 15",
     y: 4,
     },
{
     name: "DAY 16",
     y: 6,
     },
{
     name: "DAY 17",
     y: 5,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 3,
     },
{
     name: "DAY 22",
     y: 4,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 3,
     },
{
     name: "DAY 28",
     y: 8,
     },
{
     name: "DAY 29",
     y: 4,
     },
{
     name: "DAY 30",
     y: 8,
     },]
    },

{
    id: "IDmnth6vishakapatnam",
    data: 
    [{
     name: "DAY 1",
     y: 21,
     },
{
     name: "DAY 2",
     y: 19,
     },
{
     name: "DAY 3",
     y: 34,
     },
{
     name: "DAY 4",
     y: 9,
     },
{
     name: "DAY 5",
     y: 24,
     },
{
     name: "DAY 6",
     y: 41,
     },
{
     name: "DAY 7",
     y: 21,
     },
{
     name: "DAY 8",
     y: 35,
     },
{
     name: "DAY 9",
     y: 22,
     },
{
     name: "DAY 10",
     y: 27,
     },
{
     name: "DAY 11",
     y: 20,
     },
{
     name: "DAY 12",
     y: 25,
     },
{
     name: "DAY 13",
     y: 37,
     },
{
     name: "DAY 14",
     y: 25,
     },
{
     name: "DAY 15",
     y: 41,
     },
{
     name: "DAY 16",
     y: 33,
     },
{
     name: "DAY 17",
     y: 30,
     },
{
     name: "DAY 18",
     y: 24,
     },
{
     name: "DAY 19",
     y: 30,
     },
{
     name: "DAY 20",
     y: 46,
     },
{
     name: "DAY 21",
     y: 34,
     },
{
     name: "DAY 22",
     y: 23,
     },
{
     name: "DAY 23",
     y: 32,
     },
{
     name: "DAY 24",
     y: 25,
     },
{
     name: "DAY 25",
     y: 12,
     },
{
     name: "DAY 26",
     y: 28,
     },
{
     name: "DAY 27",
     y: 24,
     },
{
     name: "DAY 28",
     y: 28,
     },
{
     name: "DAY 29",
     y: 38,
     },
{
     name: "DAY 30",
     y: 57,
     },]
    },


{
    id: "IDmnth7ahmedabad",
    data: 
    [{
     name: "DAY 1",
     y: 21,
     },
{
     name: "DAY 3",
     y: 12,
     },
{
     name: "DAY 4",
     y: 34,
     },
{
     name: "DAY 5",
     y: 16,
     },
{
     name: "DAY 6",
     y: 20,
     },
{
     name: "DAY 7",
     y: 20,
     },
{
     name: "DAY 8",
     y: 28,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 10",
     y: 24,
     },
{
     name: "DAY 11",
     y: 21,
     },
{
     name: "DAY 12",
     y: 27,
     },
{
     name: "DAY 13",
     y: 19,
     },
{
     name: "DAY 14",
     y: 28,
     },
{
     name: "DAY 15",
     y: 22,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 19,
     },
{
     name: "DAY 18",
     y: 17,
     },
{
     name: "DAY 19",
     y: 24,
     },
{
     name: "DAY 20",
     y: 20,
     },
{
     name: "DAY 21",
     y: 21,
     },
{
     name: "DAY 22",
     y: 16,
     },
{
     name: "DAY 24",
     y: 10,
     },
{
     name: "DAY 25",
     y: 13,
     },
{
     name: "DAY 26",
     y: 17,
     },
{
     name: "DAY 28",
     y: 23,
     },
{
     name: "DAY 29",
     y: 19,
     },
{
     name: "DAY 30",
     y: 11,
     },
{
     name: "DAY 31",
     y: 24,
     },]
    },

{
    id: "IDmnth7aurangabad",
    data: 
    [{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 5,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 31",
     y: 1,
     },]
    },

{
    id: "IDmnth7bangalore",
    data: 
    [{
     name: "DAY 1",
     y: 5,
     },
{
     name: "DAY 3",
     y: 11,
     },
{
     name: "DAY 4",
     y: 8,
     },
{
     name: "DAY 5",
     y: 6,
     },
{
     name: "DAY 6",
     y: 6,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 7,
     },
{
     name: "DAY 10",
     y: 9,
     },
{
     name: "DAY 11",
     y: 6,
     },
{
     name: "DAY 12",
     y: 9,
     },
{
     name: "DAY 13",
     y: 4,
     },
{
     name: "DAY 14",
     y: 7,
     },
{
     name: "DAY 15",
     y: 6,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 5,
     },
{
     name: "DAY 18",
     y: 6,
     },
{
     name: "DAY 19",
     y: 3,
     },
{
     name: "DAY 20",
     y: 6,
     },
{
     name: "DAY 21",
     y: 5,
     },
{
     name: "DAY 22",
     y: 15,
     },
{
     name: "DAY 23",
     y: 3,
     },
{
     name: "DAY 24",
     y: 9,
     },
{
     name: "DAY 25",
     y: 10,
     },
{
     name: "DAY 26",
     y: 12,
     },
{
     name: "DAY 27",
     y: 9,
     },
{
     name: "DAY 28",
     y: 11,
     },
{
     name: "DAY 29",
     y: 12,
     },
{
     name: "DAY 30",
     y: 7,
     },
{
     name: "DAY 31",
     y: 23,
     },]
    },

{
    id: "IDmnth7chennai",
    data: 
    [{
     name: "DAY 1",
     y: 6,
     },
{
     name: "DAY 3",
     y: 5,
     },
{
     name: "DAY 4",
     y: 7,
     },
{
     name: "DAY 5",
     y: 6,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 5,
     },
{
     name: "DAY 8",
     y: 10,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 6,
     },
{
     name: "DAY 12",
     y: 4,
     },
{
     name: "DAY 13",
     y: 5,
     },
{
     name: "DAY 14",
     y: 5,
     },
{
     name: "DAY 15",
     y: 6,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 9,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 19",
     y: 4,
     },
{
     name: "DAY 20",
     y: 3,
     },
{
     name: "DAY 21",
     y: 5,
     },
{
     name: "DAY 22",
     y: 5,
     },
{
     name: "DAY 25",
     y: 5,
     },
{
     name: "DAY 26",
     y: 6,
     },
{
     name: "DAY 27",
     y: 4,
     },
{
     name: "DAY 28",
     y: 8,
     },
{
     name: "DAY 29",
     y: 5,
     },
{
     name: "DAY 31",
     y: 11,
     },]
    },

{
    id: "IDmnth7gurgaon",
    data: 
    [{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 4,
     },
{
     name: "DAY 3",
     y: 6,
     },
{
     name: "DAY 4",
     y: 6,
     },
{
     name: "DAY 5",
     y: 6,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 5,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 4,
     },
{
     name: "DAY 14",
     y: 4,
     },
{
     name: "DAY 15",
     y: 4,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 7,
     },
{
     name: "DAY 18",
     y: 5,
     },
{
     name: "DAY 19",
     y: 3,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 6,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 26",
     y: 5,
     },
{
     name: "DAY 27",
     y: 3,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 6,
     },
{
     name: "DAY 31",
     y: 5,
     },]
    },

{
    id: "IDmnth7hyderabad",
    data: 
    [{
     name: "DAY 1",
     y: 39,
     },
{
     name: "DAY 2",
     y: 20,
     },
{
     name: "DAY 3",
     y: 56,
     },
{
     name: "DAY 4",
     y: 53,
     },
{
     name: "DAY 5",
     y: 60,
     },
{
     name: "DAY 6",
     y: 64,
     },
{
     name: "DAY 7",
     y: 43,
     },
{
     name: "DAY 8",
     y: 67,
     },
{
     name: "DAY 9",
     y: 15,
     },
{
     name: "DAY 10",
     y: 54,
     },
{
     name: "DAY 11",
     y: 60,
     },
{
     name: "DAY 12",
     y: 42,
     },
{
     name: "DAY 13",
     y: 46,
     },
{
     name: "DAY 14",
     y: 49,
     },
{
     name: "DAY 15",
     y: 41,
     },
{
     name: "DAY 16",
     y: 12,
     },
{
     name: "DAY 17",
     y: 28,
     },
{
     name: "DAY 18",
     y: 19,
     },
{
     name: "DAY 19",
     y: 29,
     },
{
     name: "DAY 20",
     y: 30,
     },
{
     name: "DAY 21",
     y: 44,
     },
{
     name: "DAY 22",
     y: 49,
     },
{
     name: "DAY 23",
     y: 16,
     },
{
     name: "DAY 24",
     y: 28,
     },
{
     name: "DAY 25",
     y: 37,
     },
{
     name: "DAY 26",
     y: 26,
     },
{
     name: "DAY 27",
     y: 37,
     },
{
     name: "DAY 28",
     y: 44,
     },
{
     name: "DAY 29",
     y: 40,
     },
{
     name: "DAY 30",
     y: 29,
     },
{
     name: "DAY 31",
     y: 47,
     },]
    },

{
    id: "IDmnth7kakinada",
    data: 
    [{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 5,
     },
{
     name: "DAY 3",
     y: 10,
     },
{
     name: "DAY 4",
     y: 19,
     },
{
     name: "DAY 5",
     y: 20,
     },
{
     name: "DAY 6",
     y: 5,
     },
{
     name: "DAY 7",
     y: 8,
     },
{
     name: "DAY 8",
     y: 10,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 10,
     },
{
     name: "DAY 11",
     y: 14,
     },
{
     name: "DAY 12",
     y: 8,
     },
{
     name: "DAY 13",
     y: 8,
     },
{
     name: "DAY 14",
     y: 10,
     },
{
     name: "DAY 15",
     y: 4,
     },
{
     name: "DAY 16",
     y: 5,
     },
{
     name: "DAY 17",
     y: 4,
     },
{
     name: "DAY 18",
     y: 9,
     },
{
     name: "DAY 19",
     y: 12,
     },
{
     name: "DAY 20",
     y: 7,
     },
{
     name: "DAY 21",
     y: 7,
     },
{
     name: "DAY 22",
     y: 16,
     },
{
     name: "DAY 23",
     y: 4,
     },
{
     name: "DAY 24",
     y: 4,
     },
{
     name: "DAY 25",
     y: 5,
     },
{
     name: "DAY 26",
     y: 8,
     },
{
     name: "DAY 27",
     y: 20,
     },
{
     name: "DAY 28",
     y: 10,
     },
{
     name: "DAY 29",
     y: 10,
     },
{
     name: "DAY 30",
     y: 4,
     },
{
     name: "DAY 31",
     y: 15,
     },]
    },

{
    id: "IDmnth7kharghar",
    data: 
    [{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 1,
     },]
    },

{
    id: "IDmnth7mumbai",
    data: 
    [{
     name: "DAY 1",
     y: 4,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 7,
     },
{
     name: "DAY 4",
     y: 5,
     },
{
     name: "DAY 5",
     y: 7,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 5,
     },
{
     name: "DAY 8",
     y: 7,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 10",
     y: 7,
     },
{
     name: "DAY 11",
     y: 13,
     },
{
     name: "DAY 12",
     y: 5,
     },
{
     name: "DAY 13",
     y: 7,
     },
{
     name: "DAY 14",
     y: 4,
     },
{
     name: "DAY 15",
     y: 3,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 4,
     },
{
     name: "DAY 18",
     y: 7,
     },
{
     name: "DAY 19",
     y: 9,
     },
{
     name: "DAY 20",
     y: 3,
     },
{
     name: "DAY 21",
     y: 6,
     },
{
     name: "DAY 22",
     y: 5,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 5,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 26",
     y: 8,
     },
{
     name: "DAY 27",
     y: 7,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 5,
     },
{
     name: "DAY 30",
     y: 4,
     },
{
     name: "DAY 31",
     y: 7,
     },]
    },

{
    id: "IDmnth7nashik",
    data: 
    [{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 5,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 4,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 3,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 4,
     },
{
     name: "DAY 21",
     y: 3,
     },
{
     name: "DAY 22",
     y: 7,
     },
{
     name: "DAY 24",
     y: 4,
     },
{
     name: "DAY 25",
     y: 7,
     },
{
     name: "DAY 26",
     y: 5,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 4,
     },
{
     name: "DAY 31",
     y: 1,
     },]
    },

{
    id: "IDmnth7navi mumbai",
    data: 
    [{
     name: "DAY 1",
     y: 6,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 9,
     },
{
     name: "DAY 4",
     y: 4,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 4,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 7,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 8,
     },
{
     name: "DAY 11",
     y: 6,
     },
{
     name: "DAY 12",
     y: 5,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 4,
     },
{
     name: "DAY 15",
     y: 6,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 8,
     },
{
     name: "DAY 19",
     y: 5,
     },
{
     name: "DAY 20",
     y: 5,
     },
{
     name: "DAY 21",
     y: 4,
     },
{
     name: "DAY 22",
     y: 8,
     },
{
     name: "DAY 23",
     y: 3,
     },
{
     name: "DAY 24",
     y: 6,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 7,
     },
{
     name: "DAY 27",
     y: 4,
     },
{
     name: "DAY 28",
     y: 4,
     },
{
     name: "DAY 29",
     y: 8,
     },
{
     name: "DAY 30",
     y: 4,
     },
{
     name: "DAY 31",
     y: 4,
     },]
    },

{
    id: "IDmnth7navsari",
    data: 
    [{
     name: "DAY 1",
     y: 8,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 6,
     },
{
     name: "DAY 4",
     y: 6,
     },
{
     name: "DAY 5",
     y: 17,
     },
{
     name: "DAY 6",
     y: 12,
     },
{
     name: "DAY 7",
     y: 4,
     },
{
     name: "DAY 8",
     y: 8,
     },
{
     name: "DAY 9",
     y: 5,
     },
{
     name: "DAY 10",
     y: 7,
     },
{
     name: "DAY 11",
     y: 6,
     },
{
     name: "DAY 12",
     y: 4,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 4,
     },
{
     name: "DAY 15",
     y: 7,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 11,
     },
{
     name: "DAY 21",
     y: 7,
     },
{
     name: "DAY 22",
     y: 7,
     },
{
     name: "DAY 24",
     y: 4,
     },
{
     name: "DAY 25",
     y: 5,
     },
{
     name: "DAY 26",
     y: 6,
     },
{
     name: "DAY 27",
     y: 4,
     },
{
     name: "DAY 28",
     y: 4,
     },
{
     name: "DAY 29",
     y: 6,
     },
{
     name: "DAY 31",
     y: 9,
     },]
    },

{
    id: "IDmnth7powai",
    data: 
    [{
     name: "DAY 1",
     y: 4,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 4,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 4,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 15",
     y: 3,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 4,
     },
{
     name: "DAY 21",
     y: 3,
     },
{
     name: "DAY 22",
     y: 3,
     },
{
     name: "DAY 23",
     y: 4,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 6,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 5,
     },
{
     name: "DAY 30",
     y: 7,
     },
{
     name: "DAY 31",
     y: 2,
     },]
    },

{
    id: "IDmnth7pune central",
    data: 
    [{
     name: "DAY 1",
     y: 18,
     },
{
     name: "DAY 2",
     y: 5,
     },
{
     name: "DAY 3",
     y: 22,
     },
{
     name: "DAY 4",
     y: 23,
     },
{
     name: "DAY 5",
     y: 23,
     },
{
     name: "DAY 6",
     y: 16,
     },
{
     name: "DAY 7",
     y: 10,
     },
{
     name: "DAY 8",
     y: 19,
     },
{
     name: "DAY 10",
     y: 23,
     },
{
     name: "DAY 11",
     y: 23,
     },
{
     name: "DAY 12",
     y: 15,
     },
{
     name: "DAY 13",
     y: 19,
     },
{
     name: "DAY 14",
     y: 17,
     },
{
     name: "DAY 15",
     y: 23,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 11,
     },
{
     name: "DAY 18",
     y: 30,
     },
{
     name: "DAY 19",
     y: 27,
     },
{
     name: "DAY 20",
     y: 13,
     },
{
     name: "DAY 21",
     y: 19,
     },
{
     name: "DAY 22",
     y: 33,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 21,
     },
{
     name: "DAY 25",
     y: 39,
     },
{
     name: "DAY 26",
     y: 28,
     },
{
     name: "DAY 27",
     y: 21,
     },
{
     name: "DAY 28",
     y: 18,
     },
{
     name: "DAY 29",
     y: 26,
     },
{
     name: "DAY 30",
     y: 9,
     },
{
     name: "DAY 31",
     y: 29,
     },]
    },

{
    id: "IDmnth7pune east",
    data: 
    [{
     name: "DAY 1",
     y: 10,
     },
{
     name: "DAY 2",
     y: 4,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 17,
     },
{
     name: "DAY 5",
     y: 16,
     },
{
     name: "DAY 6",
     y: 24,
     },
{
     name: "DAY 7",
     y: 14,
     },
{
     name: "DAY 8",
     y: 9,
     },
{
     name: "DAY 9",
     y: 5,
     },
{
     name: "DAY 10",
     y: 7,
     },
{
     name: "DAY 11",
     y: 18,
     },
{
     name: "DAY 12",
     y: 9,
     },
{
     name: "DAY 13",
     y: 11,
     },
{
     name: "DAY 14",
     y: 13,
     },
{
     name: "DAY 15",
     y: 13,
     },
{
     name: "DAY 17",
     y: 7,
     },
{
     name: "DAY 18",
     y: 21,
     },
{
     name: "DAY 19",
     y: 17,
     },
{
     name: "DAY 20",
     y: 8,
     },
{
     name: "DAY 21",
     y: 7,
     },
{
     name: "DAY 22",
     y: 9,
     },
{
     name: "DAY 24",
     y: 9,
     },
{
     name: "DAY 25",
     y: 25,
     },
{
     name: "DAY 26",
     y: 10,
     },
{
     name: "DAY 27",
     y: 5,
     },
{
     name: "DAY 28",
     y: 12,
     },
{
     name: "DAY 29",
     y: 15,
     },
{
     name: "DAY 30",
     y: 10,
     },
{
     name: "DAY 31",
     y: 12,
     },]
    },

{
    id: "IDmnth7pune north",
    data: 
    [{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 5,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 5,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 20",
     y: 4,
     },
{
     name: "DAY 22",
     y: 10,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 27",
     y: 6,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 3,
     },
{
     name: "DAY 30",
     y: 4,
     },
{
     name: "DAY 31",
     y: 3,
     },]
    },

{
    id: "IDmnth7pune west",
    data: 
    [{
     name: "DAY 1",
     y: 20,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 18,
     },
{
     name: "DAY 4",
     y: 9,
     },
{
     name: "DAY 5",
     y: 12,
     },
{
     name: "DAY 6",
     y: 21,
     },
{
     name: "DAY 7",
     y: 9,
     },
{
     name: "DAY 8",
     y: 14,
     },
{
     name: "DAY 9",
     y: 7,
     },
{
     name: "DAY 10",
     y: 10,
     },
{
     name: "DAY 11",
     y: 14,
     },
{
     name: "DAY 12",
     y: 13,
     },
{
     name: "DAY 13",
     y: 15,
     },
{
     name: "DAY 14",
     y: 8,
     },
{
     name: "DAY 15",
     y: 16,
     },
{
     name: "DAY 16",
     y: 5,
     },
{
     name: "DAY 17",
     y: 8,
     },
{
     name: "DAY 18",
     y: 10,
     },
{
     name: "DAY 19",
     y: 21,
     },
{
     name: "DAY 20",
     y: 8,
     },
{
     name: "DAY 21",
     y: 9,
     },
{
     name: "DAY 22",
     y: 16,
     },
{
     name: "DAY 24",
     y: 8,
     },
{
     name: "DAY 25",
     y: 14,
     },
{
     name: "DAY 26",
     y: 10,
     },
{
     name: "DAY 27",
     y: 12,
     },
{
     name: "DAY 28",
     y: 11,
     },
{
     name: "DAY 29",
     y: 24,
     },
{
     name: "DAY 30",
     y: 15,
     },
{
     name: "DAY 31",
     y: 15,
     },]
    },

{
    id: "IDmnth7rajkot",
    data: 
    [{
     name: "DAY 1",
     y: 4,
     },
{
     name: "DAY 3",
     y: 4,
     },
{
     name: "DAY 4",
     y: 7,
     },
{
     name: "DAY 5",
     y: 8,
     },
{
     name: "DAY 6",
     y: 7,
     },
{
     name: "DAY 7",
     y: 6,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 8,
     },
{
     name: "DAY 12",
     y: 6,
     },
{
     name: "DAY 13",
     y: 5,
     },
{
     name: "DAY 14",
     y: 4,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 19",
     y: 5,
     },
{
     name: "DAY 20",
     y: 5,
     },
{
     name: "DAY 21",
     y: 6,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 24",
     y: 9,
     },
{
     name: "DAY 25",
     y: 9,
     },
{
     name: "DAY 26",
     y: 5,
     },
{
     name: "DAY 27",
     y: 6,
     },
{
     name: "DAY 28",
     y: 9,
     },
{
     name: "DAY 29",
     y: 9,
     },
{
     name: "DAY 31",
     y: 8,
     },]
    },

{
    id: "IDmnth7surat",
    data: 
    [{
     name: "DAY 1",
     y: 36,
     },
{
     name: "DAY 2",
     y: 7,
     },
{
     name: "DAY 3",
     y: 52,
     },
{
     name: "DAY 4",
     y: 51,
     },
{
     name: "DAY 5",
     y: 73,
     },
{
     name: "DAY 6",
     y: 73,
     },
{
     name: "DAY 7",
     y: 43,
     },
{
     name: "DAY 8",
     y: 52,
     },
{
     name: "DAY 9",
     y: 27,
     },
{
     name: "DAY 10",
     y: 49,
     },
{
     name: "DAY 11",
     y: 85,
     },
{
     name: "DAY 12",
     y: 76,
     },
{
     name: "DAY 13",
     y: 49,
     },
{
     name: "DAY 14",
     y: 42,
     },
{
     name: "DAY 15",
     y: 46,
     },
{
     name: "DAY 16",
     y: 20,
     },
{
     name: "DAY 17",
     y: 56,
     },
{
     name: "DAY 18",
     y: 45,
     },
{
     name: "DAY 19",
     y: 41,
     },
{
     name: "DAY 20",
     y: 66,
     },
{
     name: "DAY 21",
     y: 68,
     },
{
     name: "DAY 22",
     y: 74,
     },
{
     name: "DAY 23",
     y: 10,
     },
{
     name: "DAY 24",
     y: 61,
     },
{
     name: "DAY 25",
     y: 71,
     },
{
     name: "DAY 26",
     y: 64,
     },
{
     name: "DAY 27",
     y: 52,
     },
{
     name: "DAY 28",
     y: 54,
     },
{
     name: "DAY 29",
     y: 61,
     },
{
     name: "DAY 30",
     y: 18,
     },
{
     name: "DAY 31",
     y: 62,
     },]
    },

{
    id: "IDmnth7thane",
    data: 
    [{
     name: "DAY 1",
     y: 3,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 5,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 4,
     },
{
     name: "DAY 8",
     y: 6,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 3,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 4,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 4,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 19",
     y: 5,
     },
{
     name: "DAY 20",
     y: 3,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 5,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 4,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 4,
     },
{
     name: "DAY 30",
     y: 4,
     },
{
     name: "DAY 31",
     y: 4,
     },]
    },

{
    id: "IDmnth7vadodara",
    data: 
    [{
     name: "DAY 1",
     y: 22,
     },
{
     name: "DAY 2",
     y: 5,
     },
{
     name: "DAY 3",
     y: 26,
     },
{
     name: "DAY 4",
     y: 40,
     },
{
     name: "DAY 5",
     y: 36,
     },
{
     name: "DAY 6",
     y: 44,
     },
{
     name: "DAY 7",
     y: 41,
     },
{
     name: "DAY 8",
     y: 32,
     },
{
     name: "DAY 9",
     y: 10,
     },
{
     name: "DAY 10",
     y: 39,
     },
{
     name: "DAY 11",
     y: 38,
     },
{
     name: "DAY 12",
     y: 32,
     },
{
     name: "DAY 13",
     y: 52,
     },
{
     name: "DAY 14",
     y: 39,
     },
{
     name: "DAY 15",
     y: 32,
     },
{
     name: "DAY 16",
     y: 4,
     },
{
     name: "DAY 17",
     y: 44,
     },
{
     name: "DAY 18",
     y: 36,
     },
{
     name: "DAY 19",
     y: 34,
     },
{
     name: "DAY 20",
     y: 42,
     },
{
     name: "DAY 21",
     y: 35,
     },
{
     name: "DAY 22",
     y: 46,
     },
{
     name: "DAY 23",
     y: 11,
     },
{
     name: "DAY 24",
     y: 41,
     },
{
     name: "DAY 25",
     y: 40,
     },
{
     name: "DAY 26",
     y: 26,
     },
{
     name: "DAY 27",
     y: 40,
     },
{
     name: "DAY 28",
     y: 28,
     },
{
     name: "DAY 29",
     y: 43,
     },
{
     name: "DAY 30",
     y: 28,
     },
{
     name: "DAY 31",
     y: 51,
     },]
    },

{
    id: "IDmnth7valsad",
    data: 
    [{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 31",
     y: 1,
     },]
    },

{
    id: "IDmnth7vapi",
    data: 
    [{
     name: "DAY 1",
     y: 3,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 4,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 3,
     },
{
     name: "DAY 30",
     y: 1,
     },
{
     name: "DAY 31",
     y: 3,
     },]
    },

{
    id: "IDmnth7vijayawada",
    data: 
    [{
     name: "DAY 1",
     y: 5,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 4,
     },
{
     name: "DAY 4",
     y: 4,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 4,
     },
{
     name: "DAY 8",
     y: 5,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 3,
     },
{
     name: "DAY 12",
     y: 5,
     },
{
     name: "DAY 13",
     y: 6,
     },
{
     name: "DAY 14",
     y: 4,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 6,
     },
{
     name: "DAY 21",
     y: 3,
     },
{
     name: "DAY 22",
     y: 8,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 5,
     },
{
     name: "DAY 29",
     y: 4,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 2,
     },]
    },

{
    id: "IDmnth7vishakapatnam",
    data: 
    [{
     name: "DAY 1",
     y: 22,
     },
{
     name: "DAY 2",
     y: 11,
     },
{
     name: "DAY 3",
     y: 24,
     },
{
     name: "DAY 4",
     y: 30,
     },
{
     name: "DAY 5",
     y: 31,
     },
{
     name: "DAY 6",
     y: 23,
     },
{
     name: "DAY 7",
     y: 28,
     },
{
     name: "DAY 8",
     y: 31,
     },
{
     name: "DAY 9",
     y: 17,
     },
{
     name: "DAY 10",
     y: 16,
     },
{
     name: "DAY 11",
     y: 34,
     },
{
     name: "DAY 12",
     y: 24,
     },
{
     name: "DAY 13",
     y: 18,
     },
{
     name: "DAY 14",
     y: 28,
     },
{
     name: "DAY 15",
     y: 19,
     },
{
     name: "DAY 16",
     y: 17,
     },
{
     name: "DAY 17",
     y: 12,
     },
{
     name: "DAY 18",
     y: 37,
     },
{
     name: "DAY 19",
     y: 28,
     },
{
     name: "DAY 20",
     y: 34,
     },
{
     name: "DAY 21",
     y: 21,
     },
{
     name: "DAY 22",
     y: 27,
     },
{
     name: "DAY 23",
     y: 13,
     },
{
     name: "DAY 24",
     y: 19,
     },
{
     name: "DAY 25",
     y: 27,
     },
{
     name: "DAY 26",
     y: 12,
     },
{
     name: "DAY 27",
     y: 24,
     },
{
     name: "DAY 28",
     y: 14,
     },
{
     name: "DAY 29",
     y: 14,
     },
{
     name: "DAY 30",
     y: 19,
     },
{
     name: "DAY 31",
     y: 30,
     },]
    },


{
    id: "IDmnth8ahmedabad",
    data: 
    [{
     name: "DAY 1",
     y: 11,
     },
{
     name: "DAY 2",
     y: 10,
     },
{
     name: "DAY 3",
     y: 29,
     },
{
     name: "DAY 4",
     y: 21,
     },
{
     name: "DAY 5",
     y: 15,
     },
{
     name: "DAY 6",
     y: 11,
     },
{
     name: "DAY 8",
     y: 19,
     },
{
     name: "DAY 9",
     y: 13,
     },
{
     name: "DAY 10",
     y: 12,
     },
{
     name: "DAY 11",
     y: 13,
     },
{
     name: "DAY 12",
     y: 23,
     },
{
     name: "DAY 13",
     y: 7,
     },
{
     name: "DAY 14",
     y: 18,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 19,
     },
{
     name: "DAY 17",
     y: 15,
     },
{
     name: "DAY 18",
     y: 23,
     },
{
     name: "DAY 19",
     y: 20,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 15,
     },
{
     name: "DAY 22",
     y: 19,
     },
{
     name: "DAY 23",
     y: 23,
     },
{
     name: "DAY 24",
     y: 23,
     },
{
     name: "DAY 25",
     y: 10,
     },
{
     name: "DAY 26",
     y: 7,
     },
{
     name: "DAY 27",
     y: 3,
     },
{
     name: "DAY 28",
     y: 17,
     },
{
     name: "DAY 29",
     y: 17,
     },
{
     name: "DAY 30",
     y: 15,
     },
{
     name: "DAY 31",
     y: 18,
     },]
    },

{
    id: "IDmnth8aurangabad",
    data: 
    [{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 3,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 3,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 28",
     y: 1,
     },]
    },

{
    id: "IDmnth8bangalore",
    data: 
    [{
     name: "DAY 1",
     y: 9,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 9,
     },
{
     name: "DAY 4",
     y: 4,
     },
{
     name: "DAY 5",
     y: 7,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 7,
     },
{
     name: "DAY 8",
     y: 4,
     },
{
     name: "DAY 9",
     y: 6,
     },
{
     name: "DAY 10",
     y: 14,
     },
{
     name: "DAY 11",
     y: 9,
     },
{
     name: "DAY 12",
     y: 12,
     },
{
     name: "DAY 14",
     y: 8,
     },
{
     name: "DAY 15",
     y: 3,
     },
{
     name: "DAY 16",
     y: 8,
     },
{
     name: "DAY 17",
     y: 12,
     },
{
     name: "DAY 18",
     y: 13,
     },
{
     name: "DAY 19",
     y: 11,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 8,
     },
{
     name: "DAY 22",
     y: 8,
     },
{
     name: "DAY 23",
     y: 7,
     },
{
     name: "DAY 24",
     y: 5,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 4,
     },
{
     name: "DAY 27",
     y: 3,
     },
{
     name: "DAY 28",
     y: 7,
     },
{
     name: "DAY 29",
     y: 10,
     },
{
     name: "DAY 30",
     y: 12,
     },
{
     name: "DAY 31",
     y: 20,
     },]
    },

{
    id: "IDmnth8chennai",
    data: 
    [{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 6,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 5,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 4,
     },
{
     name: "DAY 8",
     y: 7,
     },
{
     name: "DAY 9",
     y: 8,
     },
{
     name: "DAY 10",
     y: 5,
     },
{
     name: "DAY 11",
     y: 6,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 14",
     y: 5,
     },
{
     name: "DAY 16",
     y: 4,
     },
{
     name: "DAY 17",
     y: 5,
     },
{
     name: "DAY 18",
     y: 7,
     },
{
     name: "DAY 19",
     y: 5,
     },
{
     name: "DAY 21",
     y: 4,
     },
{
     name: "DAY 22",
     y: 7,
     },
{
     name: "DAY 23",
     y: 5,
     },
{
     name: "DAY 24",
     y: 6,
     },
{
     name: "DAY 28",
     y: 5,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 7,
     },
{
     name: "DAY 31",
     y: 4,
     },]
    },

{
    id: "IDmnth8gurgaon",
    data: 
    [{
     name: "DAY 1",
     y: 4,
     },
{
     name: "DAY 2",
     y: 4,
     },
{
     name: "DAY 4",
     y: 5,
     },
{
     name: "DAY 5",
     y: 7,
     },
{
     name: "DAY 6",
     y: 5,
     },
{
     name: "DAY 8",
     y: 6,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 3,
     },
{
     name: "DAY 12",
     y: 7,
     },
{
     name: "DAY 13",
     y: 9,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 4,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 3,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 3,
     },]
    },

{
    id: "IDmnth8hyderabad",
    data: 
    [{
     name: "DAY 1",
     y: 28,
     },
{
     name: "DAY 2",
     y: 55,
     },
{
     name: "DAY 3",
     y: 36,
     },
{
     name: "DAY 4",
     y: 35,
     },
{
     name: "DAY 5",
     y: 42,
     },
{
     name: "DAY 6",
     y: 24,
     },
{
     name: "DAY 7",
     y: 23,
     },
{
     name: "DAY 8",
     y: 41,
     },
{
     name: "DAY 9",
     y: 27,
     },
{
     name: "DAY 10",
     y: 59,
     },
{
     name: "DAY 11",
     y: 46,
     },
{
     name: "DAY 12",
     y: 52,
     },
{
     name: "DAY 13",
     y: 12,
     },
{
     name: "DAY 14",
     y: 40,
     },
{
     name: "DAY 15",
     y: 53,
     },
{
     name: "DAY 16",
     y: 31,
     },
{
     name: "DAY 17",
     y: 23,
     },
{
     name: "DAY 18",
     y: 35,
     },
{
     name: "DAY 19",
     y: 44,
     },
{
     name: "DAY 20",
     y: 16,
     },
{
     name: "DAY 21",
     y: 33,
     },
{
     name: "DAY 22",
     y: 41,
     },
{
     name: "DAY 23",
     y: 31,
     },
{
     name: "DAY 24",
     y: 21,
     },
{
     name: "DAY 25",
     y: 8,
     },
{
     name: "DAY 26",
     y: 30,
     },
{
     name: "DAY 27",
     y: 23,
     },
{
     name: "DAY 28",
     y: 46,
     },
{
     name: "DAY 29",
     y: 38,
     },
{
     name: "DAY 30",
     y: 36,
     },
{
     name: "DAY 31",
     y: 39,
     },]
    },

{
    id: "IDmnth8kakinada",
    data: 
    [{
     name: "DAY 1",
     y: 8,
     },
{
     name: "DAY 2",
     y: 8,
     },
{
     name: "DAY 3",
     y: 7,
     },
{
     name: "DAY 4",
     y: 10,
     },
{
     name: "DAY 5",
     y: 11,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 10,
     },
{
     name: "DAY 8",
     y: 12,
     },
{
     name: "DAY 9",
     y: 5,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 8,
     },
{
     name: "DAY 12",
     y: 4,
     },
{
     name: "DAY 13",
     y: 7,
     },
{
     name: "DAY 14",
     y: 7,
     },
{
     name: "DAY 15",
     y: 11,
     },
{
     name: "DAY 16",
     y: 14,
     },
{
     name: "DAY 17",
     y: 9,
     },
{
     name: "DAY 18",
     y: 9,
     },
{
     name: "DAY 19",
     y: 6,
     },
{
     name: "DAY 20",
     y: 9,
     },
{
     name: "DAY 21",
     y: 10,
     },
{
     name: "DAY 22",
     y: 10,
     },
{
     name: "DAY 23",
     y: 9,
     },
{
     name: "DAY 24",
     y: 7,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 4,
     },
{
     name: "DAY 27",
     y: 6,
     },
{
     name: "DAY 28",
     y: 8,
     },
{
     name: "DAY 29",
     y: 7,
     },
{
     name: "DAY 30",
     y: 11,
     },
{
     name: "DAY 31",
     y: 15,
     },]
    },

{
    id: "IDmnth8kharghar",
    data: 
    [{
     name: "DAY 1",
     y: 5,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 9,
     },
{
     name: "DAY 7",
     y: 7,
     },
{
     name: "DAY 8",
     y: 9,
     },
{
     name: "DAY 9",
     y: 6,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 8,
     },
{
     name: "DAY 13",
     y: 14,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 3,
     },
{
     name: "DAY 16",
     y: 8,
     },
{
     name: "DAY 17",
     y: 10,
     },
{
     name: "DAY 18",
     y: 5,
     },
{
     name: "DAY 19",
     y: 7,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 4,
     },
{
     name: "DAY 22",
     y: 7,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 1,
     },]
    },

{
    id: "IDmnth8mumbai",
    data: 
    [{
     name: "DAY 1",
     y: 4,
     },
{
     name: "DAY 2",
     y: 4,
     },
{
     name: "DAY 3",
     y: 6,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 6,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 4,
     },
{
     name: "DAY 8",
     y: 5,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 4,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 9,
     },
{
     name: "DAY 13",
     y: 4,
     },
{
     name: "DAY 14",
     y: 4,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 8,
     },
{
     name: "DAY 18",
     y: 7,
     },
{
     name: "DAY 19",
     y: 15,
     },
{
     name: "DAY 20",
     y: 4,
     },
{
     name: "DAY 21",
     y: 10,
     },
{
     name: "DAY 22",
     y: 8,
     },
{
     name: "DAY 23",
     y: 4,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 31",
     y: 3,
     },]
    },

{
    id: "IDmnth8nashik",
    data: 
    [{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 10,
     },
{
     name: "DAY 20",
     y: 3,
     },
{
     name: "DAY 21",
     y: 5,
     },
{
     name: "DAY 22",
     y: 4,
     },
{
     name: "DAY 23",
     y: 4,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 3,
     },]
    },

{
    id: "IDmnth8navi mumbai",
    data: 
    [{
     name: "DAY 1",
     y: 6,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 4,
     },
{
     name: "DAY 6",
     y: 4,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 4,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 3,
     },
{
     name: "DAY 12",
     y: 7,
     },
{
     name: "DAY 14",
     y: 4,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 6,
     },
{
     name: "DAY 19",
     y: 4,
     },
{
     name: "DAY 20",
     y: 3,
     },
{
     name: "DAY 21",
     y: 6,
     },
{
     name: "DAY 22",
     y: 6,
     },
{
     name: "DAY 23",
     y: 6,
     },
{
     name: "DAY 24",
     y: 4,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 4,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 3,
     },]
    },

{
    id: "IDmnth8navsari",
    data: 
    [{
     name: "DAY 1",
     y: 4,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 4,
     },
{
     name: "DAY 4",
     y: 5,
     },
{
     name: "DAY 5",
     y: 7,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 8",
     y: 4,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 5,
     },
{
     name: "DAY 12",
     y: 4,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 4,
     },
{
     name: "DAY 17",
     y: 5,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 4,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 3,
     },
{
     name: "DAY 23",
     y: 3,
     },
{
     name: "DAY 24",
     y: 6,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 4,
     },
{
     name: "DAY 31",
     y: 2,
     },]
    },

{
    id: "IDmnth8powai",
    data: 
    [{
     name: "DAY 1",
     y: 3,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 7,
     },
{
     name: "DAY 6",
     y: 5,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 5,
     },
{
     name: "DAY 13",
     y: 10,
     },
{
     name: "DAY 14",
     y: 5,
     },
{
     name: "DAY 15",
     y: 4,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 19",
     y: 4,
     },
{
     name: "DAY 20",
     y: 4,
     },
{
     name: "DAY 21",
     y: 7,
     },
{
     name: "DAY 22",
     y: 4,
     },
{
     name: "DAY 23",
     y: 5,
     },
{
     name: "DAY 24",
     y: 7,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 3,
     },
{
     name: "DAY 31",
     y: 5,
     },]
    },

{
    id: "IDmnth8pune central",
    data: 
    [{
     name: "DAY 1",
     y: 13,
     },
{
     name: "DAY 2",
     y: 16,
     },
{
     name: "DAY 3",
     y: 19,
     },
{
     name: "DAY 4",
     y: 14,
     },
{
     name: "DAY 5",
     y: 34,
     },
{
     name: "DAY 7",
     y: 12,
     },
{
     name: "DAY 8",
     y: 12,
     },
{
     name: "DAY 9",
     y: 17,
     },
{
     name: "DAY 10",
     y: 16,
     },
{
     name: "DAY 11",
     y: 15,
     },
{
     name: "DAY 12",
     y: 20,
     },
{
     name: "DAY 13",
     y: 12,
     },
{
     name: "DAY 14",
     y: 18,
     },
{
     name: "DAY 15",
     y: 7,
     },
{
     name: "DAY 16",
     y: 17,
     },
{
     name: "DAY 17",
     y: 7,
     },
{
     name: "DAY 18",
     y: 16,
     },
{
     name: "DAY 19",
     y: 26,
     },
{
     name: "DAY 21",
     y: 17,
     },
{
     name: "DAY 22",
     y: 32,
     },
{
     name: "DAY 23",
     y: 29,
     },
{
     name: "DAY 24",
     y: 19,
     },
{
     name: "DAY 25",
     y: 4,
     },
{
     name: "DAY 26",
     y: 25,
     },
{
     name: "DAY 28",
     y: 19,
     },
{
     name: "DAY 29",
     y: 18,
     },
{
     name: "DAY 30",
     y: 22,
     },
{
     name: "DAY 31",
     y: 16,
     },]
    },

{
    id: "IDmnth8pune east",
    data: 
    [{
     name: "DAY 1",
     y: 5,
     },
{
     name: "DAY 2",
     y: 14,
     },
{
     name: "DAY 3",
     y: 13,
     },
{
     name: "DAY 4",
     y: 15,
     },
{
     name: "DAY 5",
     y: 15,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 8,
     },
{
     name: "DAY 8",
     y: 8,
     },
{
     name: "DAY 9",
     y: 10,
     },
{
     name: "DAY 10",
     y: 10,
     },
{
     name: "DAY 11",
     y: 5,
     },
{
     name: "DAY 12",
     y: 17,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 13,
     },
{
     name: "DAY 15",
     y: 4,
     },
{
     name: "DAY 16",
     y: 14,
     },
{
     name: "DAY 17",
     y: 11,
     },
{
     name: "DAY 18",
     y: 6,
     },
{
     name: "DAY 19",
     y: 13,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 12,
     },
{
     name: "DAY 22",
     y: 14,
     },
{
     name: "DAY 23",
     y: 11,
     },
{
     name: "DAY 24",
     y: 8,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 8,
     },
{
     name: "DAY 27",
     y: 3,
     },
{
     name: "DAY 28",
     y: 8,
     },
{
     name: "DAY 29",
     y: 10,
     },
{
     name: "DAY 30",
     y: 13,
     },
{
     name: "DAY 31",
     y: 8,
     },]
    },

{
    id: "IDmnth8pune north",
    data: 
    [{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 4,
     },
{
     name: "DAY 5",
     y: 7,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 3,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 16",
     y: 5,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 3,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 4,
     },]
    },

{
    id: "IDmnth8pune west",
    data: 
    [{
     name: "DAY 1",
     y: 12,
     },
{
     name: "DAY 2",
     y: 14,
     },
{
     name: "DAY 3",
     y: 12,
     },
{
     name: "DAY 4",
     y: 16,
     },
{
     name: "DAY 5",
     y: 20,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 10,
     },
{
     name: "DAY 8",
     y: 8,
     },
{
     name: "DAY 9",
     y: 7,
     },
{
     name: "DAY 10",
     y: 12,
     },
{
     name: "DAY 11",
     y: 9,
     },
{
     name: "DAY 12",
     y: 20,
     },
{
     name: "DAY 13",
     y: 5,
     },
{
     name: "DAY 14",
     y: 9,
     },
{
     name: "DAY 15",
     y: 11,
     },
{
     name: "DAY 16",
     y: 15,
     },
{
     name: "DAY 17",
     y: 7,
     },
{
     name: "DAY 18",
     y: 13,
     },
{
     name: "DAY 19",
     y: 14,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 11,
     },
{
     name: "DAY 22",
     y: 8,
     },
{
     name: "DAY 23",
     y: 14,
     },
{
     name: "DAY 24",
     y: 10,
     },
{
     name: "DAY 25",
     y: 9,
     },
{
     name: "DAY 26",
     y: 18,
     },
{
     name: "DAY 27",
     y: 8,
     },
{
     name: "DAY 28",
     y: 15,
     },
{
     name: "DAY 29",
     y: 5,
     },
{
     name: "DAY 30",
     y: 14,
     },
{
     name: "DAY 31",
     y: 19,
     },]
    },

{
    id: "IDmnth8rajkot",
    data: 
    [{
     name: "DAY 1",
     y: 7,
     },
{
     name: "DAY 2",
     y: 4,
     },
{
     name: "DAY 3",
     y: 4,
     },
{
     name: "DAY 4",
     y: 7,
     },
{
     name: "DAY 5",
     y: 11,
     },
{
     name: "DAY 8",
     y: 5,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 10",
     y: 8,
     },
{
     name: "DAY 11",
     y: 4,
     },
{
     name: "DAY 12",
     y: 9,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 21",
     y: 7,
     },
{
     name: "DAY 22",
     y: 8,
     },
{
     name: "DAY 23",
     y: 6,
     },
{
     name: "DAY 24",
     y: 10,
     },
{
     name: "DAY 25",
     y: 4,
     },
{
     name: "DAY 26",
     y: 8,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 6,
     },
{
     name: "DAY 30",
     y: 5,
     },
{
     name: "DAY 31",
     y: 6,
     },]
    },

{
    id: "IDmnth8surat",
    data: 
    [{
     name: "DAY 1",
     y: 26,
     },
{
     name: "DAY 2",
     y: 73,
     },
{
     name: "DAY 3",
     y: 41,
     },
{
     name: "DAY 4",
     y: 71,
     },
{
     name: "DAY 5",
     y: 66,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 16,
     },
{
     name: "DAY 8",
     y: 17,
     },
{
     name: "DAY 9",
     y: 42,
     },
{
     name: "DAY 10",
     y: 40,
     },
{
     name: "DAY 11",
     y: 52,
     },
{
     name: "DAY 12",
     y: 52,
     },
{
     name: "DAY 13",
     y: 7,
     },
{
     name: "DAY 14",
     y: 38,
     },
{
     name: "DAY 15",
     y: 7,
     },
{
     name: "DAY 16",
     y: 29,
     },
{
     name: "DAY 17",
     y: 50,
     },
{
     name: "DAY 18",
     y: 54,
     },
{
     name: "DAY 19",
     y: 43,
     },
{
     name: "DAY 20",
     y: 3,
     },
{
     name: "DAY 21",
     y: 48,
     },
{
     name: "DAY 22",
     y: 42,
     },
{
     name: "DAY 23",
     y: 31,
     },
{
     name: "DAY 24",
     y: 32,
     },
{
     name: "DAY 25",
     y: 41,
     },
{
     name: "DAY 26",
     y: 50,
     },
{
     name: "DAY 27",
     y: 6,
     },
{
     name: "DAY 28",
     y: 22,
     },
{
     name: "DAY 29",
     y: 42,
     },
{
     name: "DAY 30",
     y: 39,
     },
{
     name: "DAY 31",
     y: 38,
     },]
    },

{
    id: "IDmnth8thane",
    data: 
    [{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 4,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 9",
     y: 4,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 13",
     y: 4,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 8,
     },
{
     name: "DAY 16",
     y: 9,
     },
{
     name: "DAY 17",
     y: 5,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 4,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 10,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 1,
     },
{
     name: "DAY 31",
     y: 2,
     },]
    },

{
    id: "IDmnth8vadodara",
    data: 
    [{
     name: "DAY 1",
     y: 24,
     },
{
     name: "DAY 2",
     y: 39,
     },
{
     name: "DAY 3",
     y: 29,
     },
{
     name: "DAY 4",
     y: 36,
     },
{
     name: "DAY 5",
     y: 42,
     },
{
     name: "DAY 6",
     y: 14,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 25,
     },
{
     name: "DAY 9",
     y: 27,
     },
{
     name: "DAY 10",
     y: 36,
     },
{
     name: "DAY 11",
     y: 36,
     },
{
     name: "DAY 12",
     y: 40,
     },
{
     name: "DAY 13",
     y: 13,
     },
{
     name: "DAY 14",
     y: 29,
     },
{
     name: "DAY 15",
     y: 16,
     },
{
     name: "DAY 16",
     y: 34,
     },
{
     name: "DAY 17",
     y: 30,
     },
{
     name: "DAY 18",
     y: 51,
     },
{
     name: "DAY 19",
     y: 44,
     },
{
     name: "DAY 20",
     y: 6,
     },
{
     name: "DAY 21",
     y: 47,
     },
{
     name: "DAY 22",
     y: 40,
     },
{
     name: "DAY 23",
     y: 47,
     },
{
     name: "DAY 24",
     y: 50,
     },
{
     name: "DAY 25",
     y: 34,
     },
{
     name: "DAY 26",
     y: 42,
     },
{
     name: "DAY 27",
     y: 12,
     },
{
     name: "DAY 28",
     y: 29,
     },
{
     name: "DAY 29",
     y: 28,
     },
{
     name: "DAY 30",
     y: 32,
     },
{
     name: "DAY 31",
     y: 42,
     },]
    },

{
    id: "IDmnth8valsad",
    data: 
    [{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 14",
     y: 4,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 3,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 3,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 30",
     y: 1,
     },
{
     name: "DAY 31",
     y: 1,
     },]
    },

{
    id: "IDmnth8vapi",
    data: 
    [{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 4,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 31",
     y: 2,
     },]
    },

{
    id: "IDmnth8vijayawada",
    data: 
    [{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 5,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 3,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 4,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 5,
     },
{
     name: "DAY 31",
     y: 2,
     },]
    },

{
    id: "IDmnth8vishakapatnam",
    data: 
    [{
     name: "DAY 1",
     y: 15,
     },
{
     name: "DAY 2",
     y: 15,
     },
{
     name: "DAY 3",
     y: 25,
     },
{
     name: "DAY 4",
     y: 17,
     },
{
     name: "DAY 5",
     y: 27,
     },
{
     name: "DAY 6",
     y: 13,
     },
{
     name: "DAY 7",
     y: 20,
     },
{
     name: "DAY 8",
     y: 20,
     },
{
     name: "DAY 9",
     y: 24,
     },
{
     name: "DAY 10",
     y: 27,
     },
{
     name: "DAY 11",
     y: 24,
     },
{
     name: "DAY 12",
     y: 21,
     },
{
     name: "DAY 13",
     y: 9,
     },
{
     name: "DAY 14",
     y: 22,
     },
{
     name: "DAY 15",
     y: 11,
     },
{
     name: "DAY 16",
     y: 12,
     },
{
     name: "DAY 17",
     y: 24,
     },
{
     name: "DAY 18",
     y: 24,
     },
{
     name: "DAY 19",
     y: 21,
     },
{
     name: "DAY 20",
     y: 3,
     },
{
     name: "DAY 21",
     y: 19,
     },
{
     name: "DAY 22",
     y: 30,
     },
{
     name: "DAY 23",
     y: 27,
     },
{
     name: "DAY 24",
     y: 29,
     },
{
     name: "DAY 25",
     y: 11,
     },
{
     name: "DAY 26",
     y: 23,
     },
{
     name: "DAY 27",
     y: 22,
     },
{
     name: "DAY 28",
     y: 19,
     },
{
     name: "DAY 29",
     y: 23,
     },
{
     name: "DAY 30",
     y: 27,
     },
{
     name: "DAY 31",
     y: 28,
     },]
    },


{
    id: "IDmnth9ahmedabad",
    data: 
    [{
     name: "DAY 1",
     y: 15,
     },
{
     name: "DAY 2",
     y: 11,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 15,
     },
{
     name: "DAY 5",
     y: 10,
     },
{
     name: "DAY 6",
     y: 20,
     },
{
     name: "DAY 7",
     y: 14,
     },
{
     name: "DAY 8",
     y: 18,
     },
{
     name: "DAY 9",
     y: 14,
     },
{
     name: "DAY 11",
     y: 16,
     },
{
     name: "DAY 12",
     y: 18,
     },
{
     name: "DAY 13",
     y: 15,
     },
{
     name: "DAY 14",
     y: 10,
     },
{
     name: "DAY 15",
     y: 19,
     },
{
     name: "DAY 16",
     y: 15,
     },
{
     name: "DAY 18",
     y: 9,
     },
{
     name: "DAY 19",
     y: 22,
     },
{
     name: "DAY 20",
     y: 15,
     },
{
     name: "DAY 21",
     y: 11,
     },
{
     name: "DAY 22",
     y: 12,
     },
{
     name: "DAY 23",
     y: 17,
     },
{
     name: "DAY 24",
     y: 5,
     },
{
     name: "DAY 25",
     y: 14,
     },
{
     name: "DAY 26",
     y: 20,
     },
{
     name: "DAY 27",
     y: 13,
     },
{
     name: "DAY 28",
     y: 11,
     },
{
     name: "DAY 29",
     y: 14,
     },
{
     name: "DAY 30",
     y: 13,
     },]
    },

{
    id: "IDmnth9aurangabad",
    data: 
    [{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 7",
     y: 5,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 4,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 3,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 7,
     },
{
     name: "DAY 30",
     y: 7,
     },]
    },

{
    id: "IDmnth9bangalore",
    data: 
    [{
     name: "DAY 1",
     y: 10,
     },
{
     name: "DAY 2",
     y: 7,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 4,
     },
{
     name: "DAY 5",
     y: 6,
     },
{
     name: "DAY 6",
     y: 9,
     },
{
     name: "DAY 7",
     y: 7,
     },
{
     name: "DAY 8",
     y: 4,
     },
{
     name: "DAY 9",
     y: 6,
     },
{
     name: "DAY 11",
     y: 8,
     },
{
     name: "DAY 12",
     y: 6,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 8,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 9,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 6,
     },
{
     name: "DAY 19",
     y: 17,
     },
{
     name: "DAY 20",
     y: 9,
     },
{
     name: "DAY 21",
     y: 19,
     },
{
     name: "DAY 22",
     y: 13,
     },
{
     name: "DAY 23",
     y: 13,
     },
{
     name: "DAY 24",
     y: 4,
     },
{
     name: "DAY 25",
     y: 9,
     },
{
     name: "DAY 26",
     y: 8,
     },
{
     name: "DAY 27",
     y: 5,
     },
{
     name: "DAY 28",
     y: 12,
     },
{
     name: "DAY 29",
     y: 8,
     },
{
     name: "DAY 30",
     y: 65,
     },]
    },

{
    id: "IDmnth9chennai",
    data: 
    [{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 4,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 7,
     },
{
     name: "DAY 6",
     y: 6,
     },
{
     name: "DAY 7",
     y: 5,
     },
{
     name: "DAY 8",
     y: 5,
     },
{
     name: "DAY 9",
     y: 4,
     },
{
     name: "DAY 11",
     y: 6,
     },
{
     name: "DAY 12",
     y: 6,
     },
{
     name: "DAY 13",
     y: 5,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 12,
     },
{
     name: "DAY 16",
     y: 5,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 19",
     y: 10,
     },
{
     name: "DAY 20",
     y: 10,
     },
{
     name: "DAY 21",
     y: 6,
     },
{
     name: "DAY 22",
     y: 9,
     },
{
     name: "DAY 23",
     y: 13,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 8,
     },
{
     name: "DAY 26",
     y: 8,
     },
{
     name: "DAY 27",
     y: 9,
     },
{
     name: "DAY 28",
     y: 9,
     },
{
     name: "DAY 29",
     y: 10,
     },
{
     name: "DAY 30",
     y: 6,
     },]
    },

{
    id: "IDmnth9gurgaon",
    data: 
    [{
     name: "DAY 1",
     y: 4,
     },
{
     name: "DAY 2",
     y: 6,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 4,
     },
{
     name: "DAY 5",
     y: 7,
     },
{
     name: "DAY 6",
     y: 4,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 5,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 13",
     y: 4,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 4,
     },
{
     name: "DAY 16",
     y: 4,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 4,
     },
{
     name: "DAY 23",
     y: 6,
     },
{
     name: "DAY 24",
     y: 5,
     },
{
     name: "DAY 25",
     y: 4,
     },
{
     name: "DAY 26",
     y: 4,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 7,
     },]
    },

{
    id: "IDmnth9hyderabad",
    data: 
    [{
     name: "DAY 1",
     y: 27,
     },
{
     name: "DAY 2",
     y: 48,
     },
{
     name: "DAY 3",
     y: 12,
     },
{
     name: "DAY 4",
     y: 30,
     },
{
     name: "DAY 5",
     y: 36,
     },
{
     name: "DAY 6",
     y: 23,
     },
{
     name: "DAY 7",
     y: 29,
     },
{
     name: "DAY 8",
     y: 37,
     },
{
     name: "DAY 9",
     y: 50,
     },
{
     name: "DAY 10",
     y: 22,
     },
{
     name: "DAY 11",
     y: 52,
     },
{
     name: "DAY 12",
     y: 37,
     },
{
     name: "DAY 13",
     y: 46,
     },
{
     name: "DAY 14",
     y: 21,
     },
{
     name: "DAY 15",
     y: 46,
     },
{
     name: "DAY 16",
     y: 36,
     },
{
     name: "DAY 17",
     y: 11,
     },
{
     name: "DAY 18",
     y: 30,
     },
{
     name: "DAY 19",
     y: 34,
     },
{
     name: "DAY 20",
     y: 34,
     },
{
     name: "DAY 21",
     y: 33,
     },
{
     name: "DAY 22",
     y: 27,
     },
{
     name: "DAY 23",
     y: 29,
     },
{
     name: "DAY 24",
     y: 19,
     },
{
     name: "DAY 25",
     y: 18,
     },
{
     name: "DAY 26",
     y: 19,
     },
{
     name: "DAY 27",
     y: 32,
     },
{
     name: "DAY 28",
     y: 20,
     },
{
     name: "DAY 29",
     y: 12,
     },
{
     name: "DAY 30",
     y: 5,
     },]
    },

{
    id: "IDmnth9kakinada",
    data: 
    [{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 6,
     },
{
     name: "DAY 3",
     y: 6,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 11,
     },
{
     name: "DAY 6",
     y: 10,
     },
{
     name: "DAY 7",
     y: 8,
     },
{
     name: "DAY 8",
     y: 9,
     },
{
     name: "DAY 9",
     y: 9,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 6,
     },
{
     name: "DAY 12",
     y: 9,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 14,
     },
{
     name: "DAY 15",
     y: 7,
     },
{
     name: "DAY 16",
     y: 6,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 9,
     },
{
     name: "DAY 20",
     y: 8,
     },
{
     name: "DAY 21",
     y: 9,
     },
{
     name: "DAY 22",
     y: 9,
     },
{
     name: "DAY 23",
     y: 6,
     },
{
     name: "DAY 24",
     y: 4,
     },
{
     name: "DAY 25",
     y: 7,
     },
{
     name: "DAY 26",
     y: 9,
     },
{
     name: "DAY 27",
     y: 7,
     },
{
     name: "DAY 28",
     y: 5,
     },
{
     name: "DAY 29",
     y: 18,
     },
{
     name: "DAY 30",
     y: 6,
     },]
    },

{
    id: "IDmnth9kharghar",
    data: 
    [{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 4,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 3,
     },
{
     name: "DAY 30",
     y: 4,
     },]
    },

{
    id: "IDmnth9mumbai",
    data: 
    [{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 4,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 4,
     },
{
     name: "DAY 7",
     y: 5,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 9",
     y: 4,
     },
{
     name: "DAY 11",
     y: 7,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 6,
     },
{
     name: "DAY 15",
     y: 4,
     },
{
     name: "DAY 16",
     y: 6,
     },
{
     name: "DAY 18",
     y: 6,
     },
{
     name: "DAY 19",
     y: 3,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 6,
     },
{
     name: "DAY 22",
     y: 4,
     },
{
     name: "DAY 23",
     y: 3,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 8,
     },
{
     name: "DAY 26",
     y: 7,
     },
{
     name: "DAY 27",
     y: 7,
     },
{
     name: "DAY 28",
     y: 5,
     },
{
     name: "DAY 29",
     y: 3,
     },
{
     name: "DAY 30",
     y: 8,
     },]
    },

{
    id: "IDmnth9nashik",
    data: 
    [{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 5,
     },
{
     name: "DAY 11",
     y: 8,
     },
{
     name: "DAY 12",
     y: 4,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 5,
     },
{
     name: "DAY 16",
     y: 9,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 6,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 22,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 11,
     },
{
     name: "DAY 29",
     y: 5,
     },
{
     name: "DAY 30",
     y: 6,
     },]
    },

{
    id: "IDmnth9navi mumbai",
    data: 
    [{
     name: "DAY 1",
     y: 3,
     },
{
     name: "DAY 2",
     y: 4,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 6,
     },
{
     name: "DAY 5",
     y: 4,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 5,
     },
{
     name: "DAY 9",
     y: 4,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 6,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 4,
     },
{
     name: "DAY 15",
     y: 5,
     },
{
     name: "DAY 16",
     y: 5,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 4,
     },
{
     name: "DAY 22",
     y: 5,
     },
{
     name: "DAY 23",
     y: 6,
     },
{
     name: "DAY 24",
     y: 4,
     },
{
     name: "DAY 25",
     y: 5,
     },
{
     name: "DAY 26",
     y: 4,
     },
{
     name: "DAY 27",
     y: 4,
     },
{
     name: "DAY 28",
     y: 7,
     },
{
     name: "DAY 29",
     y: 6,
     },
{
     name: "DAY 30",
     y: 5,
     },]
    },

{
    id: "IDmnth9navsari",
    data: 
    [{
     name: "DAY 1",
     y: 3,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 5,
     },
{
     name: "DAY 8",
     y: 6,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 6,
     },
{
     name: "DAY 13",
     y: 10,
     },
{
     name: "DAY 14",
     y: 6,
     },
{
     name: "DAY 15",
     y: 10,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 19",
     y: 4,
     },
{
     name: "DAY 20",
     y: 3,
     },
{
     name: "DAY 21",
     y: 3,
     },
{
     name: "DAY 22",
     y: 7,
     },
{
     name: "DAY 23",
     y: 8,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 4,
     },
{
     name: "DAY 26",
     y: 4,
     },
{
     name: "DAY 27",
     y: 4,
     },
{
     name: "DAY 28",
     y: 7,
     },
{
     name: "DAY 29",
     y: 7,
     },
{
     name: "DAY 30",
     y: 4,
     },]
    },

{
    id: "IDmnth9powai",
    data: 
    [{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 5,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 4,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 3,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 3,
     },
{
     name: "DAY 30",
     y: 1,
     },]
    },

{
    id: "IDmnth9pune central",
    data: 
    [{
     name: "DAY 1",
     y: 15,
     },
{
     name: "DAY 2",
     y: 13,
     },
{
     name: "DAY 4",
     y: 11,
     },
{
     name: "DAY 6",
     y: 8,
     },
{
     name: "DAY 7",
     y: 16,
     },
{
     name: "DAY 8",
     y: 25,
     },
{
     name: "DAY 9",
     y: 21,
     },
{
     name: "DAY 10",
     y: 7,
     },
{
     name: "DAY 11",
     y: 22,
     },
{
     name: "DAY 12",
     y: 26,
     },
{
     name: "DAY 13",
     y: 19,
     },
{
     name: "DAY 14",
     y: 23,
     },
{
     name: "DAY 15",
     y: 16,
     },
{
     name: "DAY 16",
     y: 26,
     },
{
     name: "DAY 18",
     y: 17,
     },
{
     name: "DAY 19",
     y: 20,
     },
{
     name: "DAY 20",
     y: 15,
     },
{
     name: "DAY 21",
     y: 24,
     },
{
     name: "DAY 22",
     y: 20,
     },
{
     name: "DAY 23",
     y: 32,
     },
{
     name: "DAY 24",
     y: 11,
     },
{
     name: "DAY 25",
     y: 15,
     },
{
     name: "DAY 26",
     y: 13,
     },
{
     name: "DAY 27",
     y: 14,
     },
{
     name: "DAY 28",
     y: 16,
     },
{
     name: "DAY 29",
     y: 19,
     },
{
     name: "DAY 30",
     y: 20,
     },]
    },

{
    id: "IDmnth9pune east",
    data: 
    [{
     name: "DAY 1",
     y: 4,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 7,
     },
{
     name: "DAY 4",
     y: 8,
     },
{
     name: "DAY 5",
     y: 4,
     },
{
     name: "DAY 6",
     y: 8,
     },
{
     name: "DAY 7",
     y: 10,
     },
{
     name: "DAY 8",
     y: 7,
     },
{
     name: "DAY 9",
     y: 13,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 11,
     },
{
     name: "DAY 12",
     y: 13,
     },
{
     name: "DAY 13",
     y: 14,
     },
{
     name: "DAY 14",
     y: 11,
     },
{
     name: "DAY 15",
     y: 5,
     },
{
     name: "DAY 16",
     y: 17,
     },
{
     name: "DAY 17",
     y: 4,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 19",
     y: 7,
     },
{
     name: "DAY 20",
     y: 10,
     },
{
     name: "DAY 21",
     y: 11,
     },
{
     name: "DAY 22",
     y: 4,
     },
{
     name: "DAY 23",
     y: 14,
     },
{
     name: "DAY 24",
     y: 6,
     },
{
     name: "DAY 25",
     y: 4,
     },
{
     name: "DAY 26",
     y: 11,
     },
{
     name: "DAY 27",
     y: 12,
     },
{
     name: "DAY 28",
     y: 6,
     },
{
     name: "DAY 29",
     y: 16,
     },
{
     name: "DAY 30",
     y: 8,
     },]
    },

{
    id: "IDmnth9pune north",
    data: 
    [{
     name: "DAY 2",
     y: 4,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 11",
     y: 3,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 4,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 22",
     y: 3,
     },
{
     name: "DAY 23",
     y: 3,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 5,
     },
{
     name: "DAY 30",
     y: 1,
     },]
    },

{
    id: "IDmnth9pune west",
    data: 
    [{
     name: "DAY 1",
     y: 11,
     },
{
     name: "DAY 2",
     y: 14,
     },
{
     name: "DAY 3",
     y: 4,
     },
{
     name: "DAY 4",
     y: 10,
     },
{
     name: "DAY 5",
     y: 8,
     },
{
     name: "DAY 6",
     y: 9,
     },
{
     name: "DAY 7",
     y: 16,
     },
{
     name: "DAY 8",
     y: 9,
     },
{
     name: "DAY 9",
     y: 15,
     },
{
     name: "DAY 10",
     y: 6,
     },
{
     name: "DAY 11",
     y: 18,
     },
{
     name: "DAY 12",
     y: 15,
     },
{
     name: "DAY 13",
     y: 16,
     },
{
     name: "DAY 14",
     y: 5,
     },
{
     name: "DAY 15",
     y: 4,
     },
{
     name: "DAY 16",
     y: 15,
     },
{
     name: "DAY 18",
     y: 12,
     },
{
     name: "DAY 19",
     y: 11,
     },
{
     name: "DAY 20",
     y: 4,
     },
{
     name: "DAY 21",
     y: 9,
     },
{
     name: "DAY 22",
     y: 12,
     },
{
     name: "DAY 23",
     y: 13,
     },
{
     name: "DAY 24",
     y: 5,
     },
{
     name: "DAY 25",
     y: 11,
     },
{
     name: "DAY 26",
     y: 12,
     },
{
     name: "DAY 27",
     y: 14,
     },
{
     name: "DAY 28",
     y: 7,
     },
{
     name: "DAY 29",
     y: 10,
     },
{
     name: "DAY 30",
     y: 19,
     },]
    },

{
    id: "IDmnth9rajkot",
    data: 
    [{
     name: "DAY 1",
     y: 8,
     },
{
     name: "DAY 2",
     y: 10,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 4,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 6,
     },
{
     name: "DAY 7",
     y: 7,
     },
{
     name: "DAY 8",
     y: 4,
     },
{
     name: "DAY 9",
     y: 8,
     },
{
     name: "DAY 11",
     y: 5,
     },
{
     name: "DAY 12",
     y: 5,
     },
{
     name: "DAY 13",
     y: 7,
     },
{
     name: "DAY 14",
     y: 5,
     },
{
     name: "DAY 15",
     y: 9,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 3,
     },
{
     name: "DAY 20",
     y: 5,
     },
{
     name: "DAY 21",
     y: 5,
     },
{
     name: "DAY 22",
     y: 7,
     },
{
     name: "DAY 23",
     y: 9,
     },
{
     name: "DAY 25",
     y: 7,
     },
{
     name: "DAY 26",
     y: 6,
     },
{
     name: "DAY 27",
     y: 5,
     },
{
     name: "DAY 28",
     y: 7,
     },
{
     name: "DAY 29",
     y: 9,
     },
{
     name: "DAY 30",
     y: 8,
     },]
    },

{
    id: "IDmnth9surat",
    data: 
    [{
     name: "DAY 1",
     y: 39,
     },
{
     name: "DAY 2",
     y: 29,
     },
{
     name: "DAY 4",
     y: 50,
     },
{
     name: "DAY 6",
     y: 29,
     },
{
     name: "DAY 7",
     y: 48,
     },
{
     name: "DAY 8",
     y: 48,
     },
{
     name: "DAY 9",
     y: 43,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 29,
     },
{
     name: "DAY 12",
     y: 19,
     },
{
     name: "DAY 13",
     y: 26,
     },
{
     name: "DAY 14",
     y: 54,
     },
{
     name: "DAY 15",
     y: 54,
     },
{
     name: "DAY 16",
     y: 27,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 15,
     },
{
     name: "DAY 19",
     y: 41,
     },
{
     name: "DAY 20",
     y: 60,
     },
{
     name: "DAY 21",
     y: 94,
     },
{
     name: "DAY 22",
     y: 63,
     },
{
     name: "DAY 23",
     y: 67,
     },
{
     name: "DAY 24",
     y: 8,
     },
{
     name: "DAY 25",
     y: 56,
     },
{
     name: "DAY 26",
     y: 50,
     },
{
     name: "DAY 27",
     y: 51,
     },
{
     name: "DAY 28",
     y: 37,
     },
{
     name: "DAY 29",
     y: 47,
     },
{
     name: "DAY 30",
     y: 31,
     },]
    },

{
    id: "IDmnth9thane",
    data: 
    [{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 4,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 3,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 4,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 5,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 4,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 29",
     y: 5,
     },
{
     name: "DAY 30",
     y: 2,
     },]
    },

{
    id: "IDmnth9vadodara",
    data: 
    [{
     name: "DAY 1",
     y: 19,
     },
{
     name: "DAY 2",
     y: 26,
     },
{
     name: "DAY 4",
     y: 31,
     },
{
     name: "DAY 5",
     y: 10,
     },
{
     name: "DAY 6",
     y: 34,
     },
{
     name: "DAY 7",
     y: 47,
     },
{
     name: "DAY 8",
     y: 37,
     },
{
     name: "DAY 9",
     y: 36,
     },
{
     name: "DAY 10",
     y: 11,
     },
{
     name: "DAY 11",
     y: 22,
     },
{
     name: "DAY 12",
     y: 33,
     },
{
     name: "DAY 13",
     y: 35,
     },
{
     name: "DAY 14",
     y: 39,
     },
{
     name: "DAY 15",
     y: 33,
     },
{
     name: "DAY 16",
     y: 44,
     },
{
     name: "DAY 17",
     y: 6,
     },
{
     name: "DAY 18",
     y: 28,
     },
{
     name: "DAY 19",
     y: 73,
     },
{
     name: "DAY 20",
     y: 46,
     },
{
     name: "DAY 21",
     y: 40,
     },
{
     name: "DAY 22",
     y: 46,
     },
{
     name: "DAY 23",
     y: 42,
     },
{
     name: "DAY 24",
     y: 12,
     },
{
     name: "DAY 25",
     y: 36,
     },
{
     name: "DAY 26",
     y: 36,
     },
{
     name: "DAY 27",
     y: 50,
     },
{
     name: "DAY 28",
     y: 36,
     },
{
     name: "DAY 29",
     y: 34,
     },
{
     name: "DAY 30",
     y: 44,
     },]
    },

{
    id: "IDmnth9valsad",
    data: 
    [{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 5,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 26",
     y: 4,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 2,
     },]
    },

{
    id: "IDmnth9vapi",
    data: 
    [{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 3,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 2,
     },]
    },

{
    id: "IDmnth9vijayawada",
    data: 
    [{
     name: "DAY 1",
     y: 3,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 4,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 5,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 4,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 3,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 4,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 5,
     },
{
     name: "DAY 29",
     y: 3,
     },
{
     name: "DAY 30",
     y: 2,
     },]
    },

{
    id: "IDmnth9vishakapatnam",
    data: 
    [{
     name: "DAY 1",
     y: 16,
     },
{
     name: "DAY 2",
     y: 18,
     },
{
     name: "DAY 3",
     y: 10,
     },
{
     name: "DAY 4",
     y: 14,
     },
{
     name: "DAY 5",
     y: 29,
     },
{
     name: "DAY 6",
     y: 30,
     },
{
     name: "DAY 7",
     y: 21,
     },
{
     name: "DAY 8",
     y: 26,
     },
{
     name: "DAY 9",
     y: 29,
     },
{
     name: "DAY 10",
     y: 10,
     },
{
     name: "DAY 11",
     y: 21,
     },
{
     name: "DAY 12",
     y: 17,
     },
{
     name: "DAY 13",
     y: 30,
     },
{
     name: "DAY 14",
     y: 14,
     },
{
     name: "DAY 15",
     y: 23,
     },
{
     name: "DAY 16",
     y: 15,
     },
{
     name: "DAY 17",
     y: 8,
     },
{
     name: "DAY 18",
     y: 16,
     },
{
     name: "DAY 19",
     y: 27,
     },
{
     name: "DAY 20",
     y: 32,
     },
{
     name: "DAY 21",
     y: 26,
     },
{
     name: "DAY 22",
     y: 30,
     },
{
     name: "DAY 23",
     y: 34,
     },
{
     name: "DAY 24",
     y: 18,
     },
{
     name: "DAY 25",
     y: 18,
     },
{
     name: "DAY 26",
     y: 20,
     },
{
     name: "DAY 27",
     y: 32,
     },
{
     name: "DAY 28",
     y: 22,
     },
{
     name: "DAY 29",
     y: 38,
     },
{
     name: "DAY 30",
     y: 23,
     },]
    },


{
    id: "IDmnth10ahmedabad",
    data: 
    [{
     name: "DAY 2",
     y: 11,
     },
{
     name: "DAY 3",
     y: 11,
     },
{
     name: "DAY 4",
     y: 12,
     },
{
     name: "DAY 5",
     y: 18,
     },
{
     name: "DAY 6",
     y: 12,
     },
{
     name: "DAY 7",
     y: 15,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 9",
     y: 17,
     },
{
     name: "DAY 10",
     y: 16,
     },
{
     name: "DAY 11",
     y: 21,
     },
{
     name: "DAY 12",
     y: 16,
     },
{
     name: "DAY 13",
     y: 13,
     },
{
     name: "DAY 14",
     y: 23,
     },
{
     name: "DAY 16",
     y: 13,
     },
{
     name: "DAY 17",
     y: 8,
     },
{
     name: "DAY 18",
     y: 15,
     },
{
     name: "DAY 19",
     y: 6,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 23",
     y: 6,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 14,
     },
{
     name: "DAY 26",
     y: 18,
     },
{
     name: "DAY 27",
     y: 19,
     },
{
     name: "DAY 28",
     y: 12,
     },
{
     name: "DAY 29",
     y: 5,
     },
{
     name: "DAY 30",
     y: 17,
     },
{
     name: "DAY 31",
     y: 35,
     },]
    },

{
    id: "IDmnth10aurangabad",
    data: 
    [{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 4,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 4,
     },
{
     name: "DAY 9",
     y: 7,
     },
{
     name: "DAY 11",
     y: 6,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 7,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 16",
     y: 5,
     },
{
     name: "DAY 17",
     y: 7,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 3,
     },]
    },

{
    id: "IDmnth10bangalore",
    data: 
    [{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 3",
     y: 5,
     },
{
     name: "DAY 4",
     y: 12,
     },
{
     name: "DAY 5",
     y: 10,
     },
{
     name: "DAY 6",
     y: 13,
     },
{
     name: "DAY 7",
     y: 19,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 8,
     },
{
     name: "DAY 10",
     y: 8,
     },
{
     name: "DAY 11",
     y: 10,
     },
{
     name: "DAY 12",
     y: 13,
     },
{
     name: "DAY 13",
     y: 9,
     },
{
     name: "DAY 14",
     y: 10,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 6,
     },
{
     name: "DAY 17",
     y: 9,
     },
{
     name: "DAY 18",
     y: 6,
     },
{
     name: "DAY 20",
     y: 6,
     },
{
     name: "DAY 21",
     y: 8,
     },
{
     name: "DAY 22",
     y: 5,
     },
{
     name: "DAY 23",
     y: 12,
     },
{
     name: "DAY 24",
     y: 8,
     },
{
     name: "DAY 25",
     y: 7,
     },
{
     name: "DAY 26",
     y: 5,
     },
{
     name: "DAY 27",
     y: 9,
     },
{
     name: "DAY 28",
     y: 7,
     },
{
     name: "DAY 29",
     y: 13,
     },
{
     name: "DAY 30",
     y: 13,
     },
{
     name: "DAY 31",
     y: 27,
     },]
    },

{
    id: "IDmnth10chennai",
    data: 
    [{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 9,
     },
{
     name: "DAY 5",
     y: 14,
     },
{
     name: "DAY 6",
     y: 12,
     },
{
     name: "DAY 7",
     y: 7,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 4,
     },
{
     name: "DAY 10",
     y: 10,
     },
{
     name: "DAY 11",
     y: 10,
     },
{
     name: "DAY 12",
     y: 10,
     },
{
     name: "DAY 13",
     y: 8,
     },
{
     name: "DAY 14",
     y: 8,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 10,
     },
{
     name: "DAY 17",
     y: 8,
     },
{
     name: "DAY 20",
     y: 8,
     },
{
     name: "DAY 21",
     y: 4,
     },
{
     name: "DAY 23",
     y: 7,
     },
{
     name: "DAY 24",
     y: 12,
     },
{
     name: "DAY 25",
     y: 10,
     },
{
     name: "DAY 26",
     y: 5,
     },
{
     name: "DAY 27",
     y: 9,
     },
{
     name: "DAY 28",
     y: 5,
     },
{
     name: "DAY 30",
     y: 12,
     },
{
     name: "DAY 31",
     y: 15,
     },]
    },

{
    id: "IDmnth10delhi",
    data: 
    [{
     name: "DAY 31",
     y: 4,
     },]
    },

{
    id: "IDmnth10gurgaon",
    data: 
    [{
     name: "DAY 1",
     y: 5,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 4,
     },
{
     name: "DAY 4",
     y: 7,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 4,
     },
{
     name: "DAY 8",
     y: 5,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 5,
     },
{
     name: "DAY 11",
     y: 5,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 5,
     },
{
     name: "DAY 15",
     y: 6,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 5,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 21",
     y: 3,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 3,
     },
{
     name: "DAY 24",
     y: 4,
     },
{
     name: "DAY 25",
     y: 4,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 6,
     },
{
     name: "DAY 30",
     y: 6,
     },
{
     name: "DAY 31",
     y: 6,
     },]
    },

{
    id: "IDmnth10hyderabad",
    data: 
    [{
     name: "DAY 1",
     y: 4,
     },
{
     name: "DAY 2",
     y: 12,
     },
{
     name: "DAY 3",
     y: 19,
     },
{
     name: "DAY 4",
     y: 33,
     },
{
     name: "DAY 5",
     y: 36,
     },
{
     name: "DAY 6",
     y: 34,
     },
{
     name: "DAY 7",
     y: 45,
     },
{
     name: "DAY 8",
     y: 11,
     },
{
     name: "DAY 9",
     y: 34,
     },
{
     name: "DAY 10",
     y: 42,
     },
{
     name: "DAY 11",
     y: 33,
     },
{
     name: "DAY 12",
     y: 25,
     },
{
     name: "DAY 13",
     y: 25,
     },
{
     name: "DAY 14",
     y: 43,
     },
{
     name: "DAY 15",
     y: 5,
     },
{
     name: "DAY 16",
     y: 39,
     },
{
     name: "DAY 17",
     y: 28,
     },
{
     name: "DAY 18",
     y: 27,
     },
{
     name: "DAY 19",
     y: 8,
     },
{
     name: "DAY 20",
     y: 10,
     },
{
     name: "DAY 21",
     y: 27,
     },
{
     name: "DAY 22",
     y: 8,
     },
{
     name: "DAY 23",
     y: 14,
     },
{
     name: "DAY 24",
     y: 35,
     },
{
     name: "DAY 25",
     y: 16,
     },
{
     name: "DAY 26",
     y: 20,
     },
{
     name: "DAY 27",
     y: 24,
     },
{
     name: "DAY 28",
     y: 21,
     },
{
     name: "DAY 29",
     y: 8,
     },
{
     name: "DAY 30",
     y: 25,
     },
{
     name: "DAY 31",
     y: 48,
     },]
    },

{
    id: "IDmnth10kakinada",
    data: 
    [{
     name: "DAY 1",
     y: 5,
     },
{
     name: "DAY 2",
     y: 6,
     },
{
     name: "DAY 3",
     y: 7,
     },
{
     name: "DAY 4",
     y: 6,
     },
{
     name: "DAY 5",
     y: 8,
     },
{
     name: "DAY 6",
     y: 8,
     },
{
     name: "DAY 7",
     y: 7,
     },
{
     name: "DAY 8",
     y: 4,
     },
{
     name: "DAY 9",
     y: 12,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 5,
     },
{
     name: "DAY 12",
     y: 8,
     },
{
     name: "DAY 13",
     y: 10,
     },
{
     name: "DAY 14",
     y: 12,
     },
{
     name: "DAY 15",
     y: 3,
     },
{
     name: "DAY 16",
     y: 7,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 5,
     },
{
     name: "DAY 19",
     y: 3,
     },
{
     name: "DAY 20",
     y: 8,
     },
{
     name: "DAY 21",
     y: 4,
     },
{
     name: "DAY 22",
     y: 5,
     },
{
     name: "DAY 23",
     y: 7,
     },
{
     name: "DAY 24",
     y: 10,
     },
{
     name: "DAY 25",
     y: 6,
     },
{
     name: "DAY 26",
     y: 4,
     },
{
     name: "DAY 27",
     y: 3,
     },
{
     name: "DAY 28",
     y: 7,
     },
{
     name: "DAY 29",
     y: 3,
     },
{
     name: "DAY 30",
     y: 17,
     },
{
     name: "DAY 31",
     y: 23,
     },]
    },

{
    id: "IDmnth10kharghar",
    data: 
    [{
     name: "DAY 1",
     y: 4,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 4,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 2,
     },]
    },

{
    id: "IDmnth10mumbai",
    data: 
    [{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 4,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 5,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 8,
     },
{
     name: "DAY 7",
     y: 8,
     },
{
     name: "DAY 8",
     y: 4,
     },
{
     name: "DAY 9",
     y: 7,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 3,
     },
{
     name: "DAY 12",
     y: 9,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 4,
     },
{
     name: "DAY 15",
     y: 3,
     },
{
     name: "DAY 16",
     y: 7,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 8,
     },
{
     name: "DAY 19",
     y: 3,
     },
{
     name: "DAY 20",
     y: 4,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 4,
     },
{
     name: "DAY 24",
     y: 5,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 4,
     },
{
     name: "DAY 27",
     y: 6,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 4,
     },
{
     name: "DAY 31",
     y: 12,
     },]
    },

{
    id: "IDmnth10nashik",
    data: 
    [{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 7,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 5,
     },
{
     name: "DAY 11",
     y: 7,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 6,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 4,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 23",
     y: 3,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 26",
     y: 4,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 3,
     },
{
     name: "DAY 30",
     y: 8,
     },
{
     name: "DAY 31",
     y: 10,
     },]
    },

{
    id: "IDmnth10navi mumbai",
    data: 
    [{
     name: "DAY 2",
     y: 5,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 4,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 7,
     },
{
     name: "DAY 9",
     y: 5,
     },
{
     name: "DAY 10",
     y: 9,
     },
{
     name: "DAY 11",
     y: 3,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 4,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 4,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 3,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 5,
     },
{
     name: "DAY 25",
     y: 4,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 3,
     },
{
     name: "DAY 28",
     y: 6,
     },
{
     name: "DAY 29",
     y: 4,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 8,
     },]
    },

{
    id: "IDmnth10navsari",
    data: 
    [{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 7,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 4,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 4,
     },
{
     name: "DAY 10",
     y: 5,
     },
{
     name: "DAY 11",
     y: 5,
     },
{
     name: "DAY 12",
     y: 7,
     },
{
     name: "DAY 13",
     y: 4,
     },
{
     name: "DAY 14",
     y: 4,
     },
{
     name: "DAY 16",
     y: 7,
     },
{
     name: "DAY 17",
     y: 5,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 7,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 9,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 8,
     },]
    },

{
    id: "IDmnth10powai",
    data: 
    [{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 16",
     y: 4,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 3,
     },
{
     name: "DAY 21",
     y: 3,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 5,
     },
{
     name: "DAY 30",
     y: 4,
     },
{
     name: "DAY 31",
     y: 5,
     },]
    },

{
    id: "IDmnth10pune central",
    data: 
    [{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 7,
     },
{
     name: "DAY 4",
     y: 12,
     },
{
     name: "DAY 5",
     y: 6,
     },
{
     name: "DAY 6",
     y: 18,
     },
{
     name: "DAY 7",
     y: 18,
     },
{
     name: "DAY 9",
     y: 12,
     },
{
     name: "DAY 10",
     y: 21,
     },
{
     name: "DAY 11",
     y: 19,
     },
{
     name: "DAY 12",
     y: 19,
     },
{
     name: "DAY 13",
     y: 12,
     },
{
     name: "DAY 14",
     y: 13,
     },
{
     name: "DAY 16",
     y: 17,
     },
{
     name: "DAY 17",
     y: 10,
     },
{
     name: "DAY 18",
     y: 12,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 21",
     y: 4,
     },
{
     name: "DAY 23",
     y: 11,
     },
{
     name: "DAY 24",
     y: 21,
     },
{
     name: "DAY 25",
     y: 9,
     },
{
     name: "DAY 26",
     y: 14,
     },
{
     name: "DAY 27",
     y: 9,
     },
{
     name: "DAY 28",
     y: 14,
     },
{
     name: "DAY 29",
     y: 10,
     },
{
     name: "DAY 30",
     y: 22,
     },
{
     name: "DAY 31",
     y: 32,
     },]
    },

{
    id: "IDmnth10pune east",
    data: 
    [{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 5,
     },
{
     name: "DAY 3",
     y: 17,
     },
{
     name: "DAY 4",
     y: 12,
     },
{
     name: "DAY 5",
     y: 13,
     },
{
     name: "DAY 6",
     y: 9,
     },
{
     name: "DAY 7",
     y: 15,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 9",
     y: 12,
     },
{
     name: "DAY 10",
     y: 10,
     },
{
     name: "DAY 11",
     y: 13,
     },
{
     name: "DAY 12",
     y: 12,
     },
{
     name: "DAY 13",
     y: 7,
     },
{
     name: "DAY 14",
     y: 7,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 9,
     },
{
     name: "DAY 17",
     y: 13,
     },
{
     name: "DAY 18",
     y: 9,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 6,
     },
{
     name: "DAY 23",
     y: 5,
     },
{
     name: "DAY 24",
     y: 15,
     },
{
     name: "DAY 25",
     y: 12,
     },
{
     name: "DAY 26",
     y: 8,
     },
{
     name: "DAY 27",
     y: 5,
     },
{
     name: "DAY 28",
     y: 11,
     },
{
     name: "DAY 29",
     y: 4,
     },
{
     name: "DAY 30",
     y: 19,
     },
{
     name: "DAY 31",
     y: 17,
     },]
    },

{
    id: "IDmnth10pune north",
    data: 
    [{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 5,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 10",
     y: 4,
     },
{
     name: "DAY 11",
     y: 3,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 30",
     y: 1,
     },
{
     name: "DAY 31",
     y: 1,
     },]
    },

{
    id: "IDmnth10pune west",
    data: 
    [{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 7,
     },
{
     name: "DAY 4",
     y: 15,
     },
{
     name: "DAY 5",
     y: 13,
     },
{
     name: "DAY 6",
     y: 9,
     },
{
     name: "DAY 7",
     y: 7,
     },
{
     name: "DAY 8",
     y: 4,
     },
{
     name: "DAY 9",
     y: 8,
     },
{
     name: "DAY 10",
     y: 19,
     },
{
     name: "DAY 11",
     y: 16,
     },
{
     name: "DAY 12",
     y: 10,
     },
{
     name: "DAY 13",
     y: 11,
     },
{
     name: "DAY 14",
     y: 8,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 10,
     },
{
     name: "DAY 17",
     y: 11,
     },
{
     name: "DAY 18",
     y: 7,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 23",
     y: 4,
     },
{
     name: "DAY 24",
     y: 9,
     },
{
     name: "DAY 25",
     y: 6,
     },
{
     name: "DAY 26",
     y: 14,
     },
{
     name: "DAY 27",
     y: 12,
     },
{
     name: "DAY 28",
     y: 16,
     },
{
     name: "DAY 29",
     y: 5,
     },
{
     name: "DAY 30",
     y: 13,
     },
{
     name: "DAY 31",
     y: 20,
     },]
    },

{
    id: "IDmnth10rajkot",
    data: 
    [{
     name: "DAY 3",
     y: 6,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 4,
     },
{
     name: "DAY 6",
     y: 8,
     },
{
     name: "DAY 7",
     y: 6,
     },
{
     name: "DAY 9",
     y: 4,
     },
{
     name: "DAY 10",
     y: 8,
     },
{
     name: "DAY 11",
     y: 5,
     },
{
     name: "DAY 12",
     y: 4,
     },
{
     name: "DAY 13",
     y: 5,
     },
{
     name: "DAY 14",
     y: 6,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 9,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 4,
     },
{
     name: "DAY 26",
     y: 5,
     },
{
     name: "DAY 27",
     y: 6,
     },
{
     name: "DAY 28",
     y: 6,
     },
{
     name: "DAY 30",
     y: 10,
     },
{
     name: "DAY 31",
     y: 10,
     },]
    },

{
    id: "IDmnth10surat",
    data: 
    [{
     name: "DAY 2",
     y: 23,
     },
{
     name: "DAY 3",
     y: 28,
     },
{
     name: "DAY 4",
     y: 28,
     },
{
     name: "DAY 5",
     y: 51,
     },
{
     name: "DAY 6",
     y: 40,
     },
{
     name: "DAY 7",
     y: 45,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 9",
     y: 51,
     },
{
     name: "DAY 10",
     y: 42,
     },
{
     name: "DAY 11",
     y: 50,
     },
{
     name: "DAY 12",
     y: 30,
     },
{
     name: "DAY 13",
     y: 36,
     },
{
     name: "DAY 14",
     y: 35,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 24,
     },
{
     name: "DAY 17",
     y: 28,
     },
{
     name: "DAY 18",
     y: 18,
     },
{
     name: "DAY 19",
     y: 6,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 23",
     y: 7,
     },
{
     name: "DAY 24",
     y: 13,
     },
{
     name: "DAY 25",
     y: 9,
     },
{
     name: "DAY 26",
     y: 16,
     },
{
     name: "DAY 27",
     y: 22,
     },
{
     name: "DAY 28",
     y: 19,
     },
{
     name: "DAY 29",
     y: 3,
     },
{
     name: "DAY 30",
     y: 38,
     },
{
     name: "DAY 31",
     y: 43,
     },]
    },

{
    id: "IDmnth10thane",
    data: 
    [{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 4,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 3,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 25",
     y: 7,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 4,
     },
{
     name: "DAY 31",
     y: 5,
     },]
    },

{
    id: "IDmnth10vadodara",
    data: 
    [{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 13,
     },
{
     name: "DAY 3",
     y: 21,
     },
{
     name: "DAY 4",
     y: 26,
     },
{
     name: "DAY 5",
     y: 33,
     },
{
     name: "DAY 6",
     y: 44,
     },
{
     name: "DAY 7",
     y: 38,
     },
{
     name: "DAY 8",
     y: 12,
     },
{
     name: "DAY 9",
     y: 22,
     },
{
     name: "DAY 10",
     y: 36,
     },
{
     name: "DAY 11",
     y: 46,
     },
{
     name: "DAY 12",
     y: 30,
     },
{
     name: "DAY 13",
     y: 33,
     },
{
     name: "DAY 14",
     y: 44,
     },
{
     name: "DAY 15",
     y: 5,
     },
{
     name: "DAY 16",
     y: 44,
     },
{
     name: "DAY 17",
     y: 44,
     },
{
     name: "DAY 18",
     y: 34,
     },
{
     name: "DAY 19",
     y: 6,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 23",
     y: 15,
     },
{
     name: "DAY 24",
     y: 17,
     },
{
     name: "DAY 25",
     y: 27,
     },
{
     name: "DAY 26",
     y: 24,
     },
{
     name: "DAY 27",
     y: 28,
     },
{
     name: "DAY 28",
     y: 28,
     },
{
     name: "DAY 29",
     y: 7,
     },
{
     name: "DAY 30",
     y: 41,
     },
{
     name: "DAY 31",
     y: 54,
     },]
    },

{
    id: "IDmnth10valsad",
    data: 
    [{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 4,
     },
{
     name: "DAY 14",
     y: 4,
     },
{
     name: "DAY 15",
     y: 6,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 4,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 3,
     },]
    },

{
    id: "IDmnth10vapi",
    data: 
    [{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 31",
     y: 1,
     },]
    },

{
    id: "IDmnth10vijayawada",
    data: 
    [{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 5,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 4,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 20",
     y: 3,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 3,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 3,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 30",
     y: 7,
     },
{
     name: "DAY 31",
     y: 12,
     },]
    },

{
    id: "IDmnth10vishakapatnam",
    data: 
    [{
     name: "DAY 1",
     y: 7,
     },
{
     name: "DAY 2",
     y: 13,
     },
{
     name: "DAY 3",
     y: 24,
     },
{
     name: "DAY 4",
     y: 31,
     },
{
     name: "DAY 5",
     y: 22,
     },
{
     name: "DAY 6",
     y: 23,
     },
{
     name: "DAY 7",
     y: 22,
     },
{
     name: "DAY 8",
     y: 15,
     },
{
     name: "DAY 9",
     y: 22,
     },
{
     name: "DAY 10",
     y: 19,
     },
{
     name: "DAY 11",
     y: 32,
     },
{
     name: "DAY 12",
     y: 21,
     },
{
     name: "DAY 13",
     y: 25,
     },
{
     name: "DAY 14",
     y: 27,
     },
{
     name: "DAY 15",
     y: 15,
     },
{
     name: "DAY 16",
     y: 19,
     },
{
     name: "DAY 17",
     y: 18,
     },
{
     name: "DAY 18",
     y: 22,
     },
{
     name: "DAY 19",
     y: 9,
     },
{
     name: "DAY 20",
     y: 14,
     },
{
     name: "DAY 21",
     y: 18,
     },
{
     name: "DAY 22",
     y: 15,
     },
{
     name: "DAY 23",
     y: 9,
     },
{
     name: "DAY 24",
     y: 33,
     },
{
     name: "DAY 25",
     y: 19,
     },
{
     name: "DAY 26",
     y: 19,
     },
{
     name: "DAY 27",
     y: 26,
     },
{
     name: "DAY 28",
     y: 22,
     },
{
     name: "DAY 29",
     y: 13,
     },
{
     name: "DAY 30",
     y: 34,
     },
{
     name: "DAY 31",
     y: 42,
     },]
    },

   ]
        }
    })
});
