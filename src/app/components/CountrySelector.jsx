import React, { useState,useEffect } from "react";
import { countries } from "../utils/index";
// List of 120 countries with their codes and dial codes
// const countries = [
//   { name: "Afghanistan", code: "AF", dialCode: "+93" },
//   { name: "Albania", code: "AL", dialCode: "+355" },
//   { name: "Algeria", code: "DZ", dialCode: "+213" },
//   { name: "Andorra", code: "AD", dialCode: "+376" },
//   { name: "Angola", code: "AO", dialCode: "+244" },
//   { name: "Argentina", code: "AR", dialCode: "+54" },
//   { name: "Armenia", code: "AM", dialCode: "+374" },
//   { name: "Australia", code: "AU", dialCode: "+61" },
//   { name: "Austria", code: "AT", dialCode: "+43" },
//   { name: "Azerbaijan", code: "AZ", dialCode: "+994" },
//   { name: "Bahamas", code: "BS", dialCode: "+1-242" },
//   { name: "Bahrain", code: "BH", dialCode: "+973" },
//   { name: "Bangladesh", code: "BD", dialCode: "+880" },
//   { name: "Barbados", code: "BB", dialCode: "+1-246" },
//   { name: "Belarus", code: "BY", dialCode: "+375" },
//   { name: "Belgium", code: "BE", dialCode: "+32" },
//   { name: "Belize", code: "BZ", dialCode: "+501" },
//   { name: "Benin", code: "BJ", dialCode: "+229" },
//   { name: "Bhutan", code: "BT", dialCode: "+975" },
//   { name: "Bolivia", code: "BO", dialCode: "+591" },
//   { name: "Bosnia and Herzegovina", code: "BA", dialCode: "+387" },
//   { name: "Botswana", code: "BW", dialCode: "+267" },
//   { name: "Brazil", code: "BR", dialCode: "+55" },
//   { name: "Brunei", code: "BN", dialCode: "+673" },
//   { name: "Bulgaria", code: "BG", dialCode: "+359" },
//   { name: "Burkina Faso", code: "BF", dialCode: "+226" },
//   { name: "Burundi", code: "BI", dialCode: "+257" },
//   { name: "Cabo Verde", code: "CV", dialCode: "+238" },
//   { name: "Cambodia", code: "KH", dialCode: "+855" },
//   { name: "Cameroon", code: "CM", dialCode: "+237" },
//   { name: "Canada", code: "CA", dialCode: "+1" },
//   { name: "Central African Republic", code: "CF", dialCode: "+236" },
//   { name: "Chad", code: "TD", dialCode: "+235" },
//   { name: "Chile", code: "CL", dialCode: "+56" },
//   { name: "China", code: "CN", dialCode: "+86" },
//   { name: "Colombia", code: "CO", dialCode: "+57" },
//   { name: "Comoros", code: "KM", dialCode: "+269" },
//   { name: "Congo", code: "CG", dialCode: "+242" },
//   { name: "Congo (DRC)", code: "CD", dialCode: "+243" },
//   { name: "Costa Rica", code: "CR", dialCode: "+506" },
//   { name: "Croatia", code: "HR", dialCode: "+385" },
//   { name: "Cuba", code: "CU", dialCode: "+53" },
//   { name: "Cyprus", code: "CY", dialCode: "+357" },
//   { name: "Czech Republic", code: "CZ", dialCode: "+420" },
//   { name: "Denmark", code: "DK", dialCode: "+45" },
//   { name: "Djibouti", code: "DJ", dialCode: "+253" },
//   { name: "Dominica", code: "DM", dialCode: "+1-767" },
//   { name: "Dominican Republic", code: "DO", dialCode: "+1-809" },
//   { name: "Ecuador", code: "EC", dialCode: "+593" },
//   { name: "Egypt", code: "EG", dialCode: "+20" },
//   { name: "El Salvador", code: "SV", dialCode: "+503" },
//   { name: "Equatorial Guinea", code: "GQ", dialCode: "+240" },
//   { name: "Eritrea", code: "ER", dialCode: "+291" },
//   { name: "Estonia", code: "EE", dialCode: "+372" },
//   { name: "Eswatini", code: "SZ", dialCode: "+268" },
//   { name: "Ethiopia", code: "ET", dialCode: "+251" },
//   { name: "Fiji", code: "FJ", dialCode: "+679" },
//   { name: "Finland", code: "FI", dialCode: "+358" },
//   { name: "France", code: "FR", dialCode: "+33" },
//   { name: "Gabon", code: "GA", dialCode: "+241" },
//   { name: "Gambia", code: "GM", dialCode: "+220" },
//   { name: "Georgia", code: "GE", dialCode: "+995" },
//   { name: "Germany", code: "DE", dialCode: "+49" },
//   { name: "Ghana", code: "GH", dialCode: "+233" },
//   { name: "Greece", code: "GR", dialCode: "+30" },
//   { name: "Grenada", code: "GD", dialCode: "+1-473" },
//   { name: "Guatemala", code: "GT", dialCode: "+502" },
//   { name: "Guinea", code: "GN", dialCode: "+224" },
//   { name: "Guinea-Bissau", code: "GW", dialCode: "+245" },
//   { name: "Guyana", code: "GY", dialCode: "+592" },
//   { name: "Haiti", code: "HT", dialCode: "+509" },
//   { name: "Honduras", code: "HN", dialCode: "+504" },
//   { name: "Hungary", code: "HU", dialCode: "+36" },
//   { name: "Iceland", code: "IS", dialCode: "+354" },
//   { name: "India", code: "IN", dialCode: "+91" },
//   { name: "Indonesia", code: "ID", dialCode: "+62" },
//   { name: "Iran", code: "IR", dialCode: "+98" },
//   { name: "Iraq", code: "IQ", dialCode: "+964" },
//   { name: "Ireland", code: "IE", dialCode: "+353" },
//   { name: "Israel", code: "IL", dialCode: "+972" },
//   { name: "Italy", code: "IT", dialCode: "+39" },
//   { name: "Jamaica", code: "JM", dialCode: "+1-876" },
//   { name: "Japan", code: "JP", dialCode: "+81" },
//   { name: "Jordan", code: "JO", dialCode: "+962" },
//   { name: "Kazakhstan", code: "KZ", dialCode: "+7" },
//   { name: "Kenya", code: "KE", dialCode: "+254" },
//   { name: "Kiribati", code: "KI", dialCode: "+686" },
//   { name: "Korea (North)", code: "KP", dialCode: "+850" },
//   { name: "Korea (South)", code: "KR", dialCode: "+82" },
//   { name: "Kuwait", code: "KW", dialCode: "+965" },
//   { name: "Kyrgyzstan", code: "KG", dialCode: "+996" },
//   { name: "Laos", code: "LA", dialCode: "+856" },
//   { name: "Latvia", code: "LV", dialCode: "+371" },
//   { name: "Lebanon", code: "LB", dialCode: "+961" },
//   { name: "Lesotho", code: "LS", dialCode: "+266" },
//   { name: "Liberia", code: "LR", dialCode: "+231" },
//   { name: "Libya", code: "LY", dialCode: "+218" },
//   { name: "Liechtenstein", code: "LI", dialCode: "+423" },
//   { name: "Lithuania", code: "LT", dialCode: "+370" },
//   { name: "Luxembourg", code: "LU", dialCode: "+352" },
//   { name: "Madagascar", code: "MG", dialCode: "+261" },
//   { name: "Malawi", code: "MW", dialCode: "+265" },
//   { name: "Malaysia", code: "MY", dialCode: "+60" },
//   { name: "Maldives", code: "MV", dialCode: "+960" },
//   { name: "Mali", code: "ML", dialCode: "+223" },
//   { name: "Malta", code: "MT", dialCode: "+356" },
//   { name: "Marshall Islands", code: "MH", dialCode: "+692" },
//   { name: "Mauritania", code: "MR", dialCode: "+222" },
//   { name: "Mauritius", code: "MU", dialCode: "+230" },
//   { name: "Mexico", code: "MX", dialCode: "+52" },
//   { name: "Micronesia", code: "FM", dialCode: "+691" },
//   { name: "Moldova", code: "MD", dialCode: "+373" },
//   { name: "Monaco", code: "MC", dialCode: "+377" },
//   { name: "Mongolia", code: "MN", dialCode: "+976" },
//   { name: "Montenegro", code: "ME", dialCode: "+382" },
//   { name: "Morocco", code: "MA", dialCode: "+212" },
//   { name: "Mozambique", code: "MZ", dialCode: "+258" },
//   { name: "Myanmar", code: "MM", dialCode: "+95" },
//   { name: "Namibia", code: "NA", dialCode: "+264" },
//   { name: "Nauru", code: "NR", dialCode: "+674" },
//   { name: "Nepal", code: "NP", dialCode: "+977" },
//   { name: "Netherlands", code: "NL", dialCode: "+31" },
//   { name: "New Zealand", code: "NZ", dialCode: "+64" },
//   { name: "Nicaragua", code: "NI", dialCode: "+505" },
//   { name: "Niger", code: "NE", dialCode: "+227" },
//   { name: "Nigeria", code: "NG", dialCode: "+234" },
//   { name: "North Macedonia", code: "MK", dialCode: "+389" },
//   { name: "Norway", code: "NO", dialCode: "+47" },
//   { name: "Oman", code: "OM", dialCode: "+968" },
//   { name: "Pakistan", code: "PK", dialCode: "+92" },
//   { name: "Palau", code: "PW", dialCode: "+680" },
//   { name: "Palestine", code: "PS", dialCode: "+970" },
//   { name: "Panama", code: "PA", dialCode: "+507" },
//   { name: "Papua New Guinea", code: "PG", dialCode: "+675" },
//   { name: "Paraguay", code: "PY", dialCode: "+595" },
//   { name: "Peru", code: "PE", dialCode: "+51" },
//   { name: "Philippines", code: "PH", dialCode: "+63" },
//   { name: "Poland", code: "PL", dialCode: "+48" },
//   { name: "Portugal", code: "PT", dialCode: "+351" },
//   { name: "Qatar", code: "QA", dialCode: "+974" },
//   { name: "Romania", code: "RO", dialCode: "+40" },
//   { name: "Russia", code: "RU", dialCode: "+7" },
//   { name: "Rwanda", code: "RW", dialCode: "+250" },
//   { name: "Saint Kitts and Nevis", code: "KN", dialCode: "+1-869" },
//   { name: "Saint Lucia", code: "LC", dialCode: "+1-758" },
//   { name: "Saint Vincent and the Grenadines", code: "VC", dialCode: "+1-784" },
//   { name: "Samoa", code: "WS", dialCode: "+685" },
//   { name: "San Marino", code: "SM", dialCode: "+378" },
//   { name: "Sao Tome and Principe", code: "ST", dialCode: "+239" },
//   { name: "Saudi Arabia", code: "SA", dialCode: "+966" },
//   { name: "Senegal", code: "SN", dialCode: "+221" },
//   { name: "Serbia", code: "RS", dialCode: "+381" },
//   { name: "Seychelles", code: "SC", dialCode: "+248" },
//   { name: "Sierra Leone", code: "SL", dialCode: "+232" },
//   { name: "Singapore", code: "SG", dialCode: "+65" },
//   { name: "Slovakia", code: "SK", dialCode: "+421" },
//   { name: "Slovenia", code: "SI", dialCode: "+386" },
//   { name: "Solomon Islands", code: "SB", dialCode: "+677" },
//   { name: "Somalia", code: "SO", dialCode: "+252" },
//   { name: "South Africa", code: "ZA", dialCode: "+27" },
//   { name: "South Sudan", code: "SS", dialCode: "+211" },
//   { name: "Spain", code: "ES", dialCode: "+34" },
//   { name: "Sri Lanka", code: "LK", dialCode: "+94" },
//   { name: "Sudan", code: "SD", dialCode: "+249" },
//   { name: "Suriname", code: "SR", dialCode: "+597" },
//   { name: "Sweden", code: "SE", dialCode: "+46" },
//   { name: "Switzerland", code: "CH", dialCode: "+41" },
//   { name: "Syria", code: "SY", dialCode: "+963" },
//   { name: "Taiwan", code: "TW", dialCode: "+886" },
//   { name: "Tajikistan", code: "TJ", dialCode: "+992" },
//   { name: "Tanzania", code: "TZ", dialCode: "+255" },
//   { name: "Thailand", code: "TH", dialCode: "+66" },
//   { name: "Timor-Leste", code: "TL", dialCode: "+670" },
//   { name: "Togo", code: "TG", dialCode: "+228" },
//   { name: "Tonga", code: "TO", dialCode: "+676" },
//   { name: "Trinidad and Tobago", code: "TT", dialCode: "+1-868" },
//   { name: "Tunisia", code: "TN", dialCode: "+216" },
//   { name: "Turkey", code: "TR", dialCode: "+90" },
//   { name: "Turkmenistan", code: "TM", dialCode: "+993" },
//   { name: "Tuvalu", code: "TV", dialCode: "+688" },
//   { name: "Uganda", code: "UG", dialCode: "+256" },
//   { name: "Ukraine", code: "UA", dialCode: "+380" },
//   { name: "United Arab Emirates", code: "AE", dialCode: "+971" },
//   { name: "United Kingdom", code: "GB", dialCode: "+44" },
//   { name: "United States", code: "US", dialCode: "+1" },
//   { name: "Uruguay", code: "UY", dialCode: "+598" },
//   { name: "Uzbekistan", code: "UZ", dialCode: "+998" },
//   { name: "Vanuatu", code: "VU", dialCode: "+678" },
//   { name: "Venezuela", code: "VE", dialCode: "+58" },
//   { name: "Vietnam", code: "VN", dialCode: "+84" },
//   { name: "Yemen", code: "YE", dialCode: "+967" },
//   { name: "Zambia", code: "ZM", dialCode: "+260" },
//   { name: "Zimbabwe", code: "ZW", dialCode: "+263" },
// ];

const CountrySelector = ({ onCountryChange }) => {
  // const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  // const [code, setCode] = useState("");
  // const handleCountryChange = (event) => {
  //   const country = countries.find(
  //     (country) => country.code === event.target.value
  //   );
  //   setSelectedCountry(country);
  // };
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  useEffect(() => {
    if (selectedCountry) {
      onCountryChange(selectedCountry);
    }
  }, [selectedCountry, onCountryChange]);

  const handleChange = (event) => {
    const country = countries.find(
      (country) => country.code === event.target.value
    );
    if (country) {
      setSelectedCountry(country);
    }
  };
  return (
    <div>
      {/* <label htmlFor="country">Select your country: </label> */}
      <select
        id="country"
        value={selectedCountry.code}
        onChange={handleChange}
        className="bg-neutral-600 h-[42px] rounded-lg border border-white"
      >
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
      {/* <div>
        <p>Country Code: {selectedCountry.code}</p>
        <p>Dial Code: {selectedCountry.dialCode}</p>
      </div> */}
    </div>
  );
};

export default CountrySelector;
