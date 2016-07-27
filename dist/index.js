"use strict";

module.exports = {
  parse: parse
};

/* LIST IF ISO CODES FOR EACH COUNTRY/TERRITORY */
var _countries = [];
_countries["AFG"] = "Afghanistan";
_countries["ALB"] = "Albania";
_countries["DZA"] = "Algeria";
_countries["ASM"] = "American Samoa";
_countries["AND"] = "Andorra";
_countries["AGO"] = "Angola";
_countries["AIA"] = "Anguilla";
_countries["ATA"] = "Antarctica";
_countries["ATG"] = "Antigua and Barbuda";
_countries["ARG"] = "Argentina";
_countries["ARM"] = "Armenia";
_countries["ABW"] = "Aruba";
_countries["AUS"] = "Australia";
_countries["AUT"] = "Austria";
_countries["AZE"] = "Azerbaijan";
_countries["BHS"] = "Bahamas";
_countries["BHR"] = "Bahrain";
_countries["BGD"] = "Bangladesh";
_countries["BRB"] = "Barbados";
_countries["BLR"] = "Belarus";
_countries["BEL"] = "Belgium";
_countries["BLZ"] = "Belize";
_countries["BEN"] = "Benin";
_countries["BMU"] = "Bermuda";
_countries["BTN"] = "Bhutan";
_countries["BOL"] = "Bolivia";
_countries["BIH"] = "Bosnia and Herzegovina";
_countries["BWA"] = "Botswana";
_countries["BVT"] = "Bouvet Island";
_countries["BRA"] = "Brazil";
_countries["IOT"] = "British Indian Ocean Territory";
_countries["BRN"] = "Brunei Darussalam";
_countries["BGR"] = "Bulgaria";
_countries["BFA"] = "Burkina Faso";
_countries["BDI"] = "Burundi";
_countries["KHM"] = "Cambodia";
_countries["CMR"] = "Cameroon";
_countries["CAN"] = "Canada";
_countries["CPV"] = "Cape Verde";
_countries["CYM"] = "Cayman Islands";
_countries["CAF"] = "Central African Republic";
_countries["TCD"] = "Chad";
_countries["CHL"] = "Chile";
_countries["CHN"] = "China";
_countries["CXR"] = "Christmas Island";
_countries["CCK"] = "Cocos (Keeling) Islands";
_countries["COL"] = "Colombia";
_countries["COM"] = "Comoros";
_countries["COG"] = "Congo";
_countries["COK"] = "Cook Islands";
_countries["CRI"] = "Costa Rica";
_countries["CIV"] = "Côte d'Ivoire";
_countries["HRV"] = "Croatia";
_countries["CUB"] = "Cuba";
_countries["CYP"] = "Cyprus";
_countries["CZE"] = "Czech Republic";
_countries["PRK"] = "Democratic People's Republic of Korea";
_countries["COD"] = "Democratic Republic of the Congo";
_countries["DNK"] = "Denmark";
_countries["DJI"] = "Djibouti";
_countries["DMA"] = "Dominica";
_countries["DOM"] = "Dominican Republic";
_countries["TMP"] = "East Timor";
_countries["ECU"] = "Ecuador";
_countries["EGY"] = "Egypt";
_countries["SLV"] = "El Salvador";
_countries["GNQ"] = "Equatorial Guinea";
_countries["ERI"] = "Eritrea";
_countries["EST"] = "Estonia";
_countries["ETH"] = "Ethiopia";
_countries["FLK"] = "Falkland Islands (Malvinas)";
_countries["FRO"] = "Faeroe Islands";
_countries["FJI"] = "Fiji";
_countries["FIN"] = "Finland";
_countries["FRA"] = "France";
_countries["FXX"] = "France, Metropolitan";
_countries["GUF"] = "French Guiana";
_countries["PYF"] = "French Polynesia";
_countries["GAB"] = "Gabon";
_countries["GMB"] = "Gambia";
_countries["GEO"] = "Georgia";
_countries["D"] = "Germany";
_countries["GHA"] = "Ghana";
_countries["GIB"] = "Gibraltar";
_countries["GRC"] = "Greece";
_countries["GRL"] = "Greenland";
_countries["GRD"] = "Grenada";
_countries["GLP"] = "Guadeloupe";
_countries["GUM"] = "Guam";
_countries["GTM"] = "Guatemala";
_countries["GIN"] = "Guinea";
_countries["GNB"] = "Guinea-Bissau";
_countries["GUY"] = "Guyana";
_countries["HTI"] = "Haiti";
_countries["HMD"] = "Heard and McDonald Islands";
_countries["VAT"] = "Holy See (Vatican City State)";
_countries["HND"] = "Honduras";
_countries["HKG"] = "Hong Kong";
_countries["HUN"] = "Hungary";
_countries["ISL"] = "Iceland";
_countries["IND"] = "India";
_countries["IDN"] = "Indonesia";
_countries["IRN"] = "Iran, Islamic Republic of";
_countries["IRQ"] = "Iraq";
_countries["IRL"] = "Ireland";
_countries["ISR"] = "Israel";
_countries["ITA"] = "Italy";
_countries["JAM"] = "Jamaica";
_countries["JPN"] = "Japan";
_countries["JOR"] = "Jordan";
_countries["KAZ"] = "Kazakhstan";
_countries["KEN"] = "Kenya";
_countries["KIR"] = "Kiribati";
_countries["KWT"] = "Kuwait";
_countries["KGZ"] = "Kyrgyzstan";
_countries["LAO"] = "Lao People's Democratic Republic";
_countries["LVA"] = "Latvia";
_countries["LBN"] = "Lebanon";
_countries["LSO"] = "Lesotho";
_countries["LBR"] = "Liberia";
_countries["LBY"] = "Libyan Arab Jamahiriya";
_countries["LIE"] = "Liechtenstein";
_countries["LTU"] = "Lithuania";
_countries["LUX"] = "Luxembourg";
_countries["MDG"] = "Madagascar";
_countries["MWI"] = "Malawi";
_countries["MYS"] = "Malaysia";
_countries["MDV"] = "Maldives";
_countries["MLI"] = "Mali";
_countries["MLT"] = "Malta";
_countries["MHL"] = "Marshall Islands";
_countries["MTQ"] = "Martinique";
_countries["MRT"] = "Mauritania";
_countries["MUS"] = "Mauritius";
_countries["MYT"] = "Mayotte";
_countries["MEX"] = "Mexico";
_countries["FSM"] = "Micronesia, Federated States of";
_countries["MCO"] = "Monaco";
_countries["MNG"] = "Mongolia";
_countries["MNE"] = "Montenegro";
_countries["MSR"] = "Montserrat";
_countries["MAR"] = "Morocco";
_countries["MOZ"] = "Mozambique";
_countries["MMR"] = "Myanmar";
_countries["NAM"] = "Namibia";
_countries["NRU"] = "Nauru";
_countries["NPL"] = "Nepal";
_countries["NLD"] = "Netherlands, Kingdom of the";
_countries["ANT"] = "Netherlands Antilles";
_countries["NTZ"] = "Neutral Zone";
_countries["NCL"] = "New Caledonia";
_countries["NZL"] = "New Zealand";
_countries["NIC"] = "Nicaragua";
_countries["NER"] = "Niger";
_countries["NGA"] = "Nigeria";
_countries["NIU"] = "Niue";
_countries["NFK"] = "Norfolk Island";
_countries["MNP"] = "Northern Mariana Islands";
_countries["NOR"] = "Norway";
_countries["OMN"] = "Oman";
_countries["PAK"] = "Pakistan";
_countries["PLW"] = "Palau";
_countries["PSE"] = "Palestine";
_countries["PAN"] = "Panama";
_countries["PNG"] = "Papua New Guinea";
_countries["PRY"] = "Paraguay";
_countries["PER"] = "Peru";
_countries["PHL"] = "Philippines";
_countries["PCN"] = "Pitcairn";
_countries["POL"] = "Poland";
_countries["PRT"] = "Portugal";
_countries["PRI"] = "Puerto Rico";
_countries["QAT"] = "Qatar";
_countries["KOR"] = "Republic of Korea";
_countries["MDA"] = "Republic of Moldova";
_countries["REU"] = "Réunion";
_countries["ROU"] = "Romania";
_countries["RUS"] = "Russian Federation";
_countries["RWA"] = "Rwanda";
_countries["SHN"] = "Saint Helena";
_countries["KNA"] = "Saint Kitts and Nevis";
_countries["LCA"] = "Saint Lucia";
_countries["SPM"] = "Saint Pierre and Miquelon";
_countries["VCT"] = "Saint Vincent and the Grenadines";
_countries["WSM"] = "Samoa";
_countries["SMR"] = "San Marino";
_countries["STP"] = "Sao Tome and Principe";
_countries["SAU"] = "Saudi Arabia";
_countries["SRB"] = "Serbia";
_countries["SEN"] = "Senegal";
_countries["SYC"] = "Seychelles";
_countries["SLE"] = "Sierra Leone";
_countries["SGP"] = "Singapore";
_countries["SVK"] = "Slovakia";
_countries["SVN"] = "Slovenia";
_countries["SLB"] = "Solomon Islands";
_countries["SOM"] = "Somalia";
_countries["ZAF"] = "South Africa";
_countries["SGS"] = "South Georgia and the South Sandwich Island";
_countries["SSD"] = "South Sudan";
_countries["ESP"] = "Spain";
_countries["LKA"] = "Sri Lanka";
_countries["SDN"] = "Sudan";
_countries["SUR"] = "Suriname";
_countries["SJM"] = "Svalbard and Jan Mayen Islands";
_countries["SWZ"] = "Swaziland";
_countries["SWE"] = "Sweden";
_countries["CHE"] = "Switzerland";
_countries["SYR"] = "Syrian Arab Republic";
_countries["TWN"] = "Taiwan Province of China";
_countries["TJK"] = "Tajikistan";
_countries["TLS"] = "Timor Leste";
_countries["THA"] = "Thailand";
_countries["MKD"] = "The former Yugoslav Republic of Macedonia";
_countries["TGO"] = "Togo";
_countries["TKL"] = "Tokelau";
_countries["TON"] = "Tonga";
_countries["TTO"] = "Trinidad and Tobago";
_countries["TUN"] = "Tunisia";
_countries["TUR"] = "Turkey";
_countries["TKM"] = "Turkmenistan";
_countries["TCA"] = "Turks and Caicos Islands";
_countries["TUV"] = "Tuvalu";
_countries["UGA"] = "Uganda";
_countries["UKR"] = "Ukraine";
_countries["ARE"] = "United Arab Emirates";
_countries["GBR"] = "United Kingdom of Great Britain and Northern Ireland Citizen";
_countries["GBD"] = "United Kingdom of Great Britain and Northern Ireland Dependent Territories Citizen";
_countries["GBN"] = "United Kingdom of Great Britain and Northern Ireland National (oversees)";
_countries["GBO"] = "United Kingdom of Great Britain and Northern Ireland Oversees Citizen";
_countries["GBP"] = "United Kingdom of Great Britain and Northern Ireland Protected Person";
_countries["GBS"] = "United Kingdom of Great Britain and Northern Ireland Subject";
_countries["TZA"] = "United Republic of Tanzania";
_countries["USA"] = "United States of America";
_countries["UMI"] = "United States of America Minor Outlying Islands";
_countries["URY"] = "Uruguay";
_countries["UZB"] = "Uzbekistan";
_countries["VUT"] = "Vanuatu";
_countries["VEN"] = "Venezuela";
_countries["VNM"] = "Viet Nam";
_countries["VGB"] = "Virgin Islands (Great Britian)";
_countries["VIR"] = "Virgin Islands (United States)";
_countries["WLF"] = "Wallis and Futuna Islands";
_countries["ESH"] = "Western Sahara";
_countries["YEM"] = "Yemen";
_countries["ZAR"] = "Zaire";
_countries["ZMB"] = "Zambia";
_countries["ZWE"] = "Zimbabwe";
_countries["UNO"] = "United Nations Organization Official";
_countries["UNA"] = "United Nations Organization Specialized Agency Official";
_countries["XAA"] = "Stateless (per Article 1 of 1954 convention)";
_countries["XXB"] = "Refugee (per Article 1 of 1951 convention, amended by 1967 protocol)";
_countries["XXC"] = "Refugee (non-convention)";
_countries["XXX"] = "Unspecified / Unknown";

/* VALUES FOR EACH LETTER, USED TO PERFORM THE CHECK DIGITS VERIFICATION */
var _checkDigitValues = [];
_checkDigitValues["<"] = 0;
_checkDigitValues["A"] = 10;
_checkDigitValues["B"] = 11;
_checkDigitValues["C"] = 12;
_checkDigitValues["D"] = 13;
_checkDigitValues["E"] = 14;
_checkDigitValues["F"] = 15;
_checkDigitValues["G"] = 16;
_checkDigitValues["H"] = 17;
_checkDigitValues["I"] = 18;
_checkDigitValues["J"] = 19;
_checkDigitValues["K"] = 20;
_checkDigitValues["L"] = 21;
_checkDigitValues["M"] = 22;
_checkDigitValues["N"] = 23;
_checkDigitValues["O"] = 24;
_checkDigitValues["P"] = 25;
_checkDigitValues["Q"] = 26;
_checkDigitValues["R"] = 27;
_checkDigitValues["S"] = 28;
_checkDigitValues["T"] = 29;
_checkDigitValues["U"] = 30;
_checkDigitValues["V"] = 31;
_checkDigitValues["W"] = 32;
_checkDigitValues["X"] = 33;
_checkDigitValues["Y"] = 34;
_checkDigitValues["Z"] = 35;

/**
 * Parser of Passport MRZ strings. The machine readable zone on a passport has
 * 2 lines, each consisting of 44 characters. Below a reference to the format:
 *   01 - 02: Document code
 *   03 - 05: Issuing state or organisation
 *   06 - 44: Names
 *   45 - 53: Document number
 *   54 - 54: Check digit
 *   55 - 57: Nationality
 *   58 - 63: Date of birth
 *   64 - 64: Check digit
 *   65 - 65: Sex
 *   66 - 71: Date of expiry
 *   72 - 72: Check digit
 *   73 - 86: Personal number
 *   87 - 87: Check digit
 *   88 - 88: Check digit
 *
 * @author Craig Newton <newtondev@gmail.com>
 */
function parse(mrz) {
  if (mrz == null || mrz.length != 88) {
    throw new Error('Invalid MRZ length');
  }

  var documentCode = _stripPadding(mrz.substring(0, 1));
  if (documentCode != 'P') {
    throw new Error('Not a passport MRZ, only passport MRZ currently supported!');
  }

  var documentType = _stripPadding(mrz.substring(1, 2));
  if (documentType == '') {
    documentType = null;
  }

  try {
    var issuerOrg = _stripPadding(mrz.substring(2, 5));
    var names = _getNames(mrz.substring(5, 44));
    var documentNumberRaw = mrz.substring(44, 53);
    var documentNumber = _stripPadding(documentNumberRaw);
    var checkDigit1 = mrz.substring(53, 54);
    var checkDigitVerify1 = _checkDigitVerify(documentNumberRaw, checkDigit1);
    var nationality = _getNationality(_stripPadding(mrz.substring(54, 57)));
    var dobRaw = mrz.substring(57, 63);
    var dob = _getFullDate(_stripPadding(dobRaw));
    var checkDigit2 = mrz.substring(63, 64);
    var checkDigitVerify2 = _checkDigitVerify(dobRaw, checkDigit2);
    var sex = _getSex(_stripPadding(mrz.substring(64, 65)));
    var expiryRaw = mrz.substring(65, 71);
    var expiry = _getFullDate(_stripPadding(expiryRaw));
    var checkDigit3 = _stripPadding(mrz.substring(71, 72));
    var checkDigitVerify3 = _checkDigitVerify(expiryRaw, checkDigit3);
    var personalNumberRaw = mrz.substring(72, 86);
    var personalNumber = _stripPadding(personalNumberRaw);
    var checkDigit4 = mrz.substring(86, 87);
    var checkDigitVerify4 = _checkDigitVerify(personalNumberRaw, checkDigit4);
    var checkDigit5 = mrz.substring(87, 88);
    var finalCheckDigitRaw = documentNumberRaw + checkDigit1 + dobRaw + checkDigit2 + expiryRaw + checkDigit3 + personalNumberRaw + checkDigit4;
    var checkDigitVerify5 = _checkDigitVerify(finalCheckDigitRaw, checkDigit5);

    return {
      documentCode: documentCode,
      documentType: 'PASSPORT',
      documentTypeCode: documentType,
      issuer: issuerOrg,
      names: names,
      documentNumber: documentNumber,
      nationality: nationality,
      dob: dob,
      sex: sex,
      checkDigit: {
        documentNumber: { value: checkDigit1, valid: checkDigitVerify1 },
        dob: { value: checkDigit2, valid: checkDigitVerify2 },
        expiry: { value: checkDigit3, valid: checkDigitVerify3 },
        personalNumber: { value: checkDigit4, valid: checkDigitVerify4 },
        finalCheck: { value: checkDigit5, valid: checkDigitVerify5 },
        valid: checkDigitVerify1 && checkDigitVerify2 && checkDigitVerify3 && checkDigitVerify4 && checkDigitVerify5
      },
      expiry: expiry,
      personalNumber: personalNumber
    };
  } catch (err) {
    throw err;
  }
};

/**
 * Loops through the string|[array of strings] and replaces the padding characters with spaces, and then trims
 * off any empty spaces before and after the values.
 *
 * @param str|Array The values to strip the padding characters from
 * @returns {*}
 * @private
 */
var _stripPadding = function _stripPadding(str) {
  if (!str || typeof str === 'undefined' | str == null) {
    return str;
  } else {
    if (str instanceof Array) {
      for (var i = 0; i < str.length; i++) {
        str[i] = _stripPadding(str[i]);
        if (str[i] == '') {
          str.splice(i, 1);
          // reset i so we can loop through remaining elements
          i = 0;
        }
      }
      return str;
    } else {
      return str.replace(/</g, ' ').trim();
    }
  }
};

/**
 * Parse and split the last name from the rest of the names.
 *
 * @param str The unparsed value for the names field
 * @returns {{lastName: *, names: Array}}
 * @private
 */
var _getNames = function _getNames(str) {
  var names = str.split('<<');
  names = _stripPadding(names);
  return {
    lastName: names[0],
    names: names[1].split(' ')
  };
};

/**
 * Get the full date value for the shortened date specified and also take
 * into account the 19xx/20xx centennial into account when calculating the
 * correct year value to return.
 *
 * @param str The shortened date
 * @returns {{year: *, month: string, day: string, original: *}}
 * @private
 */
var _getFullDate = function _getFullDate(str) {
  var d = new Date();
  d.setFullYear(d.getFullYear() + 15);
  var centennial = ("" + d.getFullYear()).substring(2, 4);

  var year = void 0;
  if (str.substring(0, 2) > centennial) {
    year = '19' + str.substring(0, 2);
  } else {
    year = '20' + str.substring(0, 2);
  }

  return {
    year: year,
    month: str.substring(2, 4),
    day: str.substring(4, 6),
    original: str
  };
};

/**
 * Get the gender/sex of the person using the sex/gender character specified.
 *
 * @param str The gender/sex character
 * @returns {{abbr: *, full: *}} - The abbreviation (character) and the full gender/sex text
 * @private
 */
var _getSex = function _getSex(str) {
  var abbr = void 0;
  var full = void 0;
  if (str == 'M') {
    abbr = 'M';
    full = 'Male';
  } else if (str == 'F') {
    abbr = 'F';
    full = 'Female';
  } else {
    abbr = 'X';
    full = 'Unspecified';
  }
  return {
    abbr: abbr,
    full: full
  };
};

/**
 * Get the country/territory name using the ISO code of the nationality value.
 *
 * @param str The ISO code of the Country/Territory
 * @returns {{abbr: *, full: *}} - The abbreviation (ISO) and the full country/territory name
 * @private
 */
var _getNationality = function _getNationality(str) {
  var region = _countries[str];
  if (!region) {
    throw new Error('Invalid region');
  }

  return {
    abbr: str,
    full: region
  };
};

/**
 * Performs the verification of the string to match the check digit.
 * This is used to check the validity of the value of the string to check for any counter-fit issues.
 *
 * @param str The value to perform the validation on
 * @param digit The value of the check digit which is to be compared to the result of the algorithm
 * @returns {boolean} Whether the computed result of the value specified matches the check digit value
 * @private
 */
var _checkDigitVerify = function _checkDigitVerify(str, digit) {
  var nmbrs = [];
  var weighting = [7, 3, 1];
  for (var i = 0; i < str.length; i++) {
    if (str[i].match(/[A-Za-z<]/)) {
      nmbrs.push(_checkDigitValues[str[i]]);
    } else {
      nmbrs.push(parseInt(str[i]));
    }
  }

  var curWeight = 0;
  var total = 0;
  for (var j = 0; j < nmbrs.length; j++) {
    total += nmbrs[j] * weighting[curWeight];
    curWeight++;
    if (curWeight == 3) {
      curWeight = 0;
    }
  }

  return total % 10 == digit;
};
