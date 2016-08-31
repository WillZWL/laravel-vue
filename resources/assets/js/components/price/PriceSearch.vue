<template>
    <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="x_panel">
            <div class="x_title">
                <h2>Filters <small>[Advanced]</small></h2>
                <ul class="nav navbar-right panel_toolbox">
                    <li>
                        <a class="collapse-link"><i class="fa fa-chevron-down"></i></a>
                    </li>
                </ul>
                <div class="clearfix"></div>
            </div>
            <div class="x_content" id="pjax-container">
                <form data-pjax name="fm" class="form-horizontal form-label-left" action="http://price_tool/api/price">
                    <div class="form-group col-md-6">
                        <label class="control-label col-md-4">Marketplace ID</label>
                        <div class="col-md-6 col-xs-12">
                            <select class="form-control" name="markerplace_id">
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="control-label col-md-4">Brand</label>
                        <div class="col-md-6 col-xs-12">
                            <select class="form-control" name="brand_id">
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="control-label col-md-4">Country</label>
                        <div class="col-md-6 col-xs-12">
                            <select class="form-control" name="country_id">
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="control-label col-md-4">Merchant</label>
                        <div class="col-md-6 col-xs-12">
                            <select class="form-control" name="merchant_id">
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="control-label col-md-4">Category</label>
                        <div class="col-md-6 col-xs-12">
                            <select class="form-control" name="cat_id">
                                <option></option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="control-label col-md-4">SKU Type</label>
                        <div class="col-md-6 col-xs-12">
                            <select class="form-control" name='sku_type'>
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="control-label col-md-4">Sub-Category</label>
                        <div class="col-md-6 col-xs-12">
                            <select class="form-control" name="sub_cat_id">
                                <option></option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="control-label col-md-4">Sku Status</label>
                        <div class="col-md-6 col-xs-12">
                            <select class="form-control" name='sku_status'>
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="control-label col-md-4">Sub-Sub-Category</label>
                        <div class="col-md-6 col-xs-12">
                            <select class="form-control" name="sub_sub_cat_id">
                                <option></option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="control-label col-md-4">Sourcing Status</label>
                        <div class="col-md-6 col-xs-12">
                            <select class="form-control" name='sourcing_status'>
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="control-label col-md-4">Brand Manager</label>
                        <div class="col-md-6 col-xs-12">
                            <select class="form-control" name='brand_manager'>
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="control-label col-md-4">Inventory</label>
                        <div class="col-md-6 col-xs-12">
                            <input type="text" class="form-control col-md-4 col-xs-12" placeholder=">,<,= ">
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="control-label col-md-4">SKU List</label>
                        <div class="col-md-6 col-xs-12">
                            <input id="tags_1" type="text" class="tags form-control" value="">
                            <div id="suggestions-container" style="position: relative; float: left; width: 250px; margin: 10px;"></div>
                        </div>
                    </div>
                    <!-- <div class="ln_solid"></div> -->
                    <div class="form-group col-md-12">
                        <div class="col-md-12 col-sm-12 col-xs-12 col-md-offset-5">
                            <input type="button" class="btn btn-dark" name='reset' value="Reset">
                            <input type="button" class="btn btn-success" name="search" value="Search" @click="fetchData()">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    ready() {
        this.initSearchForm()
    },
    data() {
        return {
            items: {}
        }
    },
    methods: {
        initSearchForm() {
            var cat_list =
                {'0': {'775':'Home & Office', '776':'XYZ Recategorisation', '780':'Cards, Books & Stationery', '784':'More Category', '798':'Electronics', '814':'Health & Beauty', '820':'Automotive/ Motorcycle', '826':'Travel & Luggage', '830':'Sports & Outdoors', '836':'Toys, Kids & Babies', '844':' Appliances', '852':'Stationeries', '912':'Complementary Accessories', '736':'Electricals', '738':'Crafts, Gadgets & Toys', '753':'Fashion', '758':'Pet Supplies'}, '736': {'787':'Home Automation', '791':'Action Cams', '794':'Digital Cameras', '795':'Lenses', '796':'Watches', '797':'Digital Cameras', '742':'Computing & Phones', '745':'Sound & Vision', '748':'Small Appliances'}, '738': {'781':'Plush Toys', '790':'Gadgets', '917':'Sextoys', '918':'Artwork', '929':'3D Printing Inks', '741':'3D Printing', '749':'3D Printing Plastics', '752':'3D Printing Accessories'}, '741': {'930':'PrintingPen'}, '742': {'923':'Softwares', '743':'Computer & Tablet Accessories', '744':'Telephones'}, '745': {'786':'Accessories', '746':'Headphones and Earphones', '747':'Speakers'}, '749': {'750':'ABS Plastic', '751':'PLA Plastic'}, '753': {'779':'Bags & Accessories', '782':'Unisex', '792':'Jewelry', '808':'Bags', '809':'Shoes', '810':'Jewellery &  Accessories ', '811':'Clothings', '812':'Watches', '813':'Sunglasses', '928':'Perfume', '754':'Women', '756':'Men', '761':'Baby & Child'}, '754': {'755':'T-Shirts'}, '756': {'757':'T-Shirts'}, '758': {'919':'Birds', '926':'Fish & Aquatic Pets', '927':'Other Animals', '759':'Cats', '760':'Dogs'}, '759': {'763':'Cat Accessories', '764':'Cat Scratchers', '765':'Cat Toys', '766':'Collars, Harnesses & Leashes'}, '760': {'768':'Bowls', '769':'Carriers, Crates & Kennels', '770':'Coats & Clothing', '771':'Collars, Harnesses & Leashes', '772':'Dog Toys', '773':'Food Accessories', '774':'Grooming', '767':'Beds & Bedding'}, '761': {'878':'Baby & Child'}, '775': {'788':'Kitchen', '924':'Home Decoration', '925':'Garden Decoration'}, '776': {'777':'XYZ Sub-Categorization'}, '777': {'778':'XYZ Sub-Sub-Categorization'}, '779': {'880':'Bags & Accessories'}, '780': {'783':'Cards, Books & Stationary', '793':'Prints', '916':'Others', '762':'Calendars'}, '784': {'785':'Refund Deductibles'}, '788': {'789':'Cutlery'}, '798': {'799':'Digital Cameras', '800':'Lenses', '801':'Digital Camcorders', '802':'Tablets', '803':'Computing & Gaming', '804':'Apple', '805':'Mobile Phones', '806':'Audio & Visual', '807':'Headphones'}, '799': {'861':'Digital Cameras', '915':'Instant Camera', '920':'Camera accessories'}, '800': {'863':'Lenses'}, '801': {'860':'Digital Camcorders'}, '802': {'865':'Tablets', '914':'Tablets Accessories', '922':'Do not use'}, '803': {'859':'Computing & Gaming'}, '804': {'857':'Apple'}, '805': {'864':'Mobile Phones', '921':'Mobile Phones Accessories'}, '806': {'858':'Audio & Visual'}, '807': {'862':'Headphones'}, '808': {'879':'Bags'}, '809': {'883':'Shoes'}, '810': {'882':'Jewellery &  Accessories '}, '811': {'881':'Clothings'}, '812': {'885':'Watches'}, '813': {'884':'Sunglasses'}, '814': {'815':'Makeup', '816':'Skin Care', '817':'Bath, Body & Hair Care', '818':'Nails', '819':'Others'}, '815': {'887':'Makeup'}, '816': {'890':'Skin Care'}, '817': {'886':'Bath, Body & Hair Care'}, '818': {'888':'Nails'}, '819': {'889':'Others'}, '820': {'821':'Car Care', '822':'Tools & Equipment', '823':'Performance Parts & Accessories', '824':'Wheels & Tires', '825':'Others'}, '821': {'873':'Car Care'}, '822': {'876':'Tools & Equipment'}, '823': {'875':'Performance Parts & Accessories'}, '824': {'877':'Wheels & Tires'}, '825': {'874':'Others'}, '826': {'827':'Bags & Backpacks', '828':'Luggage', '829':'Travel & Luggage'}, '827': {'909':'Bags & Backpacks'}, '828': {'910':'Luggage'}, '829': {'911':'Travel & Luggage'}, '830': {'831':'Shoes & Clothing', '832':'Accessories', '833':'Sport Watches & Sunglasses', '834':'Other Sports Equipment', '835':'Helmet & Protection', '891':'Sports & Outdoors'}, '831': {'895':'Shoes & Clothing'}, '832': {'892':'Accessories'}, '833': {'896':'Sport Watches & Sunglasses'}, '834': {'894':'Other Sports Equipment'}, '835': {'893':'Helmet & Protection'}, '836': {'837':'Shoes & Clothing', '838':'Toys', '839':'Bath, Body & Hair Care', '840':'Feeding & Nursing', '841':'Health & Saftey', '842':'Diapers & Potties', '843':'Others'}, '837': {'907':'Shoes & Clothing'}, '838': {'908':'Toys'}, '839': {'902':'Bath, Body & Hair Care'}, '840': {'904':'Feeding & Nursing'}, '841': {'905':'Health & Saftey'}, '842': {'903':'Diapers & Potties'}, '843': {'906':'Others'}, '844': {'845':'Health Care Equipment ', '846':'Home Appliances ', '847':'Kitchen Appliances ', '848':'Home Decoration', '849':'Kitchen Utensils & Cookware ', '850':'Small Appliances ', '851':'Others'}, '845': {'866':'Health Care Equipment '}, '846': {'867':'Home Appliances '}, '847': {'869':'Kitchen Appliances'}, '848': {'868':'Home Decoration'}, '849': {'870':'Kitchen Utensils & Cookware'}, '850': {'872':'Small Appliances '}, '851': {'871':'Others'}, '852': {'853':'Books ', '854':'Stationeries', '855':'Printing', '856':'Fine Pens'}, '853': {'898':'Books '}, '854': {'901':'Stationeries'}, '855': {'900':'Printing', '931':'PrintingPen'}, '856': {'899':'Fine Pens'}, '891': {'897':'Sports & Outdoors'}, '912': {'913':'Adapters'}};
            var marketplace_list = {'3DAMAZON':'3DAMAZON','3DLAZADA':'3DLAZADA','BCALIEXPRESS':'BCALIEXPRESS','BCALLEGRO':'BCALLEGRO','BCAMAZON':'BCAMAZON','BCCDISCOUNT':'BCCDISCOUNT','BCEBAY':'BCEBAY','BCFNAC':'BCFNAC','BCLAZADA':'BCLAZADA','BCLINIO':'BCLINIO','BCMERCADOLIBRE':'BCMERCADOLIBRE','BCNEWEGG':'BCNEWEGG','BCPRICEMINISTER':'BCPRICEMINISTER','BCQOO10':'BCQOO10','BCRAKUTEN':'BCRAKUTEN','BCTANGA':'BCTANGA','BMLAZADA':'BMLAZADA','CSLAZADA':'CSLAZADA','CVALLEGRO':'CVALLEGRO','CVAMAZON':'CVAMAZON','CVEBAY':'CVEBAY','CVWEB':'CVWEB','MLLAZADA':'MLLAZADA','PXALIEXPRESS':'PXALIEXPRESS','PXALLEGRO':'PXALLEGRO','PXAMAZON':'PXAMAZON','PXEBAY':'PXEBAY','PXFNAC':'PXFNAC','PXLAZADA':'PXLAZADA','PXLINIO':'PXLINIO','PXMERCADOLIBRE':'PXMERCADOLIBRE','PXNEWEGG':'PXNEWEGG','PXPRICEMINISTER':'PXPRICEMINISTER','PXQOO10':'PXQOO10','PXRAKUTEN':'PXRAKUTEN','VBALIEXPRESS':'VBALIEXPRESS','VBALLEGRO':'VBALLEGRO','VBCDISCOUNT':'VBCDISCOUNT','VBEBAY':'VBEBAY','VBFLUBIT':'VBFLUBIT','VBFNAC':'VBFNAC','VBGROUPON':'VBGROUPON','VBLAZADA':'VBLAZADA','VBLINIO':'VBLINIO','VBNEWEGG':'VBNEWEGG','VBPRICEMINISTER':'VBPRICEMINISTER','VBQOO10':'VBQOO10','VBRAKUTEN':'VBRAKUTEN','VBWEB':'VBWEB'};

            var brand_list = {'108':'Lenovo','217':'Harman Kardon','310':'iTech','311':'ClearOne','314':'RTX','577':'Zopo','596':'Leap Motion','627':'Biloop','630':'Blue Microphones','643':'AYL','648':'3Doodler','650':'AAF x Stella McCartney','651':'AAF Animals Asia','652':'Made4Pets','653':'Devotec','654':'loudjam','655':'Ring','656':'ButterUp','657':'Rapide 3D','658':'SleepACE','659':'Little Green Mouse','660':'Ghostdrone','661':'ParaShoot','662':'Jo Test Brand','663':'SKIVA','664':'Luminox','665':'Seiko','666':'Zeuse','667':'Catalyst Lifestyle','668':'Case Scenario','669':'BodyAwakening','670':'EMIE','671':'FashionComm','672':'Golf','673':'Pantone','674':'Atongm','675':'AVI-8','676':'Solartime','677':'Cycliq','678':'Marc Jacobs','679':'Michael Kors','680':'Zero','681':'Nevo','682':'Looking Glass','683':'Bluedio','684':'Sugr','685':'Diesel','686':'Dame Products','687':'3Glasses','688':'Zig','689':'GlobalSources','690':'DaoTian','691':'Bookniture','692':'Sandbucket','694':'Jolla Asia LTD.','695':'AMITIDY','696':'KONNEXT','697':'VTECH','698':'PowerDot','699':'Bluesmart','700':'Syabas','701':'New Matter','702':'Quitbit','703':'The Bamboo Barn','704':'Ceed Ltd.','706':'ESG','707':'Z-Camera','708':'Lumio','709':'DFrobot','710':'EzeeCube','711':'Noitom','712':'TLF','713':'Telecom Lifestyle Fashion','714':'RiCi','715':'Palettegear','716':'Future of Play','717':'MEITU','718':'hereO','719':'Vector','720':'OontZ','721':'Linjer','722':'ShopifyBrand','723':'MagentoBrand','724':'OMIMO','725':'FUTURE MAKE ','726':'Future Former','727':'Aiwatch','728':'Zuk','729':'Multi CAV','730':'4PX','731':'Sounder','732':'EasyBBQ','733':'XuanWheel','734':'Sustyle','735':'Huadoo','736':'AmTidy','737':'XGIMI','738':'ALOMA','739':'Upair','740':'Autobot','741':'Fgoola','742':'Boboo','743':'RunCam','744':'LUMO','745':'CamFi','746':'Exptest','747':'Nubia','748':'G10','749':'Z-Ben','750':'Redpepper','751':'Bolt Power','752':'TopWatch','753':'Coollang','754':'Czur','755':'Dlodlo','756':'Fisher Price','757':'Barbie','758':'Mega bloks','759':'Mattel','760':'palette','761':'Keekoon','762':'Amkov','763':'MINIX','764':'Tronsmart','765':'wowstick','766':'Zidoo','767':'Vwalker','768':'Reke','769':'Aimo','770':'SenseON','771':'Yiban','772':'KXL','773':'Emish','774':'Hugsby','775':'Echoman','776':'Patpet','777':'Fortune Dragon','778':'FH-801','779':'FTL','780':'kinder','781':'Eyemore','782':'uPlane','783':'CardioCycle','784':'VIBOTON','785':'Danmini','786':'LESI','787':'VSTARCAM⇥','788':'SolarCharger','789':'QIVV','790':'SONIDA','791':'Qlippie','792':'VeePai','793':'AIMOMETER','794':'ABLY','795':'Visiontek','796':'ZoneCharge','797':'scarletto','798':'Ausek','799':'Blackphone','800':'Soundbrenner'};
            var country_list = {'AD':"Andorra",'AE':"United Arab Emirates",'AF':"Afghanistan",'AG':"Antigua and Barbuda",'AI':"Anguilla",'AL':"Albania",'AM':"Armenia",'AN':"Netherlands Antilles",'AO':"Angola",'AQ':"Antarctica",'AR':"Argentina",'AS':"American Samoa",'AT':"Austria",'AU':"Australia",'AW':"Aruba",'AX':"Aland Islands ?A*land Islands",'AZ':"Azerbaijan",'BA':"Bosnia and Herzegovina",'BB':"Barbados",'BD':"Bangladesh",'BE':"Belgium",'BF':"Burkina Faso",'BG':"Bulgaria",'BH':"Bahrain",'BI':"Burundi",'BJ':"Benin",'BL':"Saint Barthe'lemy",'BM':"Bermuda",'BN':"Brunei Darussalam",'BO':"Bolivia, Plurinational State of",'BR':"Brazil",'BS':"Bahamas",'BT':"Bhutan",'BV':"Bouvet Island",'BW':"Botswana",'BY':"Belarus",'BZ':"Belize",'CA':"Canada",'CC':"Cocos (Keeling) Islands",'CD':"Congo, the Democratic Republic of",'CF':"Central African Republic",'CG':"Congo",'CH':"Switzerland",'CI':"Cote d'Ivoire ?Co^te d'Ivoire",'CK':"Cook Islands",'CL':"Chile",'CM':"Cameroon",'CN':"China",'CO':"Colombia",'CR':"Costa Rica",'CU':"Cuba",'CV':"Cape Verde",'CX':"Christmas Island",'CY':"Cyprus",'CZ':"Czech Republic",'DE':"Germany",'DJ':"Djibouti",'DK':"Denmark",'DM':"Dominica",'DO':"Dominican Republic",'DZ':"Algeria",'EC':"Ecuador",'EE':"Estonia",'EG':"Egypt",'EH':"Western Sahara",'ER':"Eritrea",'ES':"Spain",'ET':"Ethiopia",'FI':"Finland",'FJ':"Fiji",'FK':"Falkland Islands (Malvinas)",'FM':"Micronesia, Federated States of",'FO':"Faroe Islands",'FR':"France",'GA':"Gabon",'GB':"United Kingdom",'GD':"Grenada",'GE':"Georgia",'GF':"French Guiana",'GG':"Guernsey",'GH':"Ghana",'GI':"Gibraltar",'GL':"Greenland",'GM':"Gambia",'GN':"Guinea",'GP':"Guadeloupe",'GQ':"Equatorial Guinea",'GR':"Greece",'GS':"South Georgia and the South Sand",'GT':"Guatemala",'GU':"Guam",'GW':"Guinea-Bissau",'GY':"Guyana",'HK':"Hong Kong",'HM':"Heard Island and McDonald Island",'HN':"Honduras",'HR':"Croatia",'HT':"Haiti",'HU':"Hungary",'IC':"Canary Islands",'ID':"Indonesia",'IE':"Ireland",'IL':"Israel",'IM':"Isle of Man",'IN':"India",'IO':"British Indian Ocean Territory",'IQ':"Iraq",'IR':"Iran, Islamic Republic of",'IS':"Iceland",'IT':"Italy",'JE':"Jersey",'JM':"Jamaica",'JO':"Jordan",'JP':"Japan",'KE':"Kenya",'KG':"Kyrgyzstan",'KH':"Cambodia",'KI':"Kiribati",'KM':"Comoros",'KN':"Saint Kitts and Nevis",'KP':"Korea, Democratic People's Repub",'KR':"Korea, Republic of",'KW':"Kuwait",'KY':"Cayman Islands",'KZ':"Kazakhstan",'LA':"Lao People's Democratic Republic",'LB':"Lebanon",'LC':"Saint Lucia",'LI':"Liechtenstein",'LK':"Sri Lanka",'LR':"Liberia",'LS':"Lesotho",'LT':"Lithuania",'LU':"Luxembourg",'LV':"Latvia",'LY':"Libyan Arab Jamahiriya",'MA':"Morocco",'MC':"Monaco",'MD':"Moldova, Republic of",'ME':"Montenegro",'MF':"Saint Martin (French part)",'MG':"Madagascar",'MH':"Marshall Islands",'MK':"Macedonia, FYR",'ML':"Mali",'MM':"Myanmar",'MN':"Mongolia",'MO':"Macau",'MP':"Northern Mariana Islands",'MQ':"Martinique",'MR':"Mauritania",'MS':"Montserrat",'MT':"Malta",'MU':"Mauritius",'MV':"Maldives",'MW':"Malawi",'MX':"Mexico",'MY':"Malaysia",'MZ':"Mozambique",'NA':"Namibia",'NC':"New Caledonia",'NE':"Niger",'NF':"Norfolk Island",'NG':"Nigeria",'NI':"Nicaragua",'NL':"Netherlands",'NO':"Norway",'NP':"Nepal",'NR':"Nauru",'NU':"Niue",'NZ':"New Zealand",'OM':"Oman",'PA':"Panama",'PE':"Peru",'PF':"French Polynesia",'PG':"Papua New Guinea",'PH':"Philippines",'PK':"Pakistan",'PL':"Poland",'PM':"Saint Pierre and Miquelon",'PN':"Pitcairn",'PR':"Puerto Rico",'PS':"Palestinian Territory, Occupied",'PT':"Portugal",'PW':"Palau",'PY':"Paraguay",'QA':"Qatar",'RE':"Réunion",'RO':"Romania",'RS':"Serbia",'RU':"Russian Federation",'RW':"Rwanda",'SA':"Saudi Arabia",'SB':"Solomon Islands",'SC':"Seychelles",'SD':"Sudan",'SE':"Sweden",'SG':"Singapore",'SH':"Saint Helena",'SI':"Slovenia",'SJ':"Svalbard and Jan Mayen",'SK':"Slovakia",'SL':"Sierra Leone",'SM':"San Marino",'SN':"Senegal",'SO':"Somalia",'SR':"Suriname",'ST':"Sao Tome and Principe",'SV':"El Salvador",'SY':"Syrian Arab Republic",'SZ':"Swaziland",'TC':"Turks and Caicos Islands",'TD':"Chad",'TF':"French Southern Territories",'TG':"Togo",'TH':"Thailand",'TJ':"Tajikistan",'TK':"Tokelau",'TL':"Timor-Leste",'TM':"Turkmenistan",'TN':"Tunisia",'TO':"Tonga",'TR':"Turkey",'TT':"Trinidad and Tobago",'TV':"Tuvalu",'TW':"Taiwan, Province of China",'TZ':"Tanzania, United Republic of",'UA':"Ukraine",'UG':"Uganda",'UM':"United States Minor Outlying Isl",'US':"United States",'UY':"Uruguay",'UZ':"Uzbekistan",'VA':"Holy See (Vatican City State)",'VC':"Saint Vincent and the Grenadines",'VE':"Venezuela",'VG':"Virgin Islands, British",'VI':"Virgin Islands, U.S.",'VN':"Viet Nam",'VU':"Vanuatu",'WF':"Wallis and Futuna",'WS':"Samoa",'YE':"Yemen",'YT':"Mayotte",'ZA':"South Africa",'ZM':"Zambia"};
            var merchant_list = {'3DOODLER':'3DOODLER','3GLASSES':'3GLASSES','4PX':'4PX','AAF':'AAF','ABLY':'ABLY','ADIVENTURES':'ADIVENTURES','AFTERSHOKZ':'AFTERSHOKZ','AIMOMETER':'AIMOMETER','AIWATCH':'AIWATCH','ALIBABA':'ALIBABA','ALOMA':'ALOMA','AMAR':'AMAR','AMBI':'AMBI','AMITIDY':'AMITIDY','AMTIDY':'AMTIDY','ASAP':'ASAP','ASTROHAUS':'ASTROHAUS','ASWY':'ASWY','AUMEO':'AUMEO','AUSEK':'AUSEK','AVECONCEPT':'AVECONCEPT','BAICHENG':'BAICHENG','BAMBOOBARN':'BAMBOOBARN','BETTERBACK':'BETTERBACK','BLUEDIO':'BLUEDIO','BLUESMART':'BLUESMART','BODAWK':'BODAWK','BOLTPOWER':'BOLTPOWER','BOOKNITURE':'BOOKNITURE','BRANDCOMOMIMO':'BRANDCOMOMIMO','BUP':'BUP','CAMBRIDGESOUNDWORKS':'CAMBRIDGESOUNDWORKS','CAMFI':'CAMFI','CARDIOCYCLE':'CARDIOCYCLE','CASE':'CASE','CATLIF':'CATLIF','COOLLANG':'COOLLANG','CRAZYBABY':'CRAZYBABY','CUBOT':'CUBOT','CUJO':'CUJO','CYCLIQ':'CYCLIQ','CZUR':'CZUR','DAME':'DAME','DAOTIAN':'DAOTIAN','DARMA':'DARMA','DESKPODDIGITAL':'DESKPODDIGITAL','DEVOTEC':'DEVOTEC','DFROBOT':'DFROBOT','DLODLO':'DLODLO','DOLFI':'DOLFI','DRIVEBOT':'DRIVEBOT','EASYBBQ':'EASYBBQ','EASYSHIP':'EASYSHIP','ECHOMAN':'ECHOMAN','EMIE':'EMIE','EMPATICA':'EMPATICA','EONETIME':'EONETIME','ESG':'ESG','ESG2':'ESG2','ESG3':'ESG3','ESG888':'ESG888','ESGEXPTEST':'ESGEXPTEST','ESGTESTSHIPMENTS':'ESGTESTSHIPMENTS','ETRADE':'ETRADE','ETRADEMANUAL':'ETRADEMANUAL','EVAPOLAR':'EVAPOLAR','EVEKANE':'EVEKANE','EXTREMEFLIERS':'EXTREMEFLIERS','EZEECUBE':'EZEECUBE','FGOOLA':'FGOOLA','FTL':'FTL','FUTUREFORMER':'FUTUREFORMER','FUTUREMAKE':'FUTUREMAKE','FUTUREPLAY':'FUTUREPLAY','GGMM':'GGMM','GHOST':'GHOST','GIFLYBIKE':'GIFLYBIKE','GLOBALBRAND':'GLOBALBRAND','GOKEY':'GOKEY','GROKINGLAB':'GROKINGLAB','GSO':'GSO','HOMTIME':'HOMTIME','HONGLAJIAO':'HONGLAJIAO','HUADOO':'HUADOO','HUAQING':'HUAQING','HUGSBY':'HUGSBY','HYDAWAY':'HYDAWAY','ITUM':'ITUM','JESURUN':'JESURUN','JOL':'JOL','JOL2':'JOL2','KEEZEL':'KEEZEL','KINDER':'KINDER','KONNEXT':'KONNEXT','LAMETRIC':'LAMETRIC','LANGTIAN':'LANGTIAN','LAZADA':'LAZADA','LAZRDX':'LAZRDX','LESI':'LESI','LINJER':'LINJER','LINKA':'LINKA','LITTLEGREENMOUSE':'LITTLEGREENMOUSE','LOOKGLASS':'LOOKGLASS','LULABOP':'LULABOP','LUMIO':'LUMIO','LUMO':'LUMO','LUMOS':'LUMOS','MAGENTO':'MAGENTO','MAKEBLOCK':'MAKEBLOCK','MASSFIDELITY':'MASSFIDELITY','MATTEL':'MATTEL','MEITU':'MEITU','MELDHOME':'MELDHOME','MISTI':'MISTI','MITTAG':'MITTAG','MONARCH':'MONARCH','MORPHER':'MORPHER','MOVEIT':'MOVEIT','MUTANTS':'MUTANTS','NARY':'NARY','NEVO':'NEVO','NEWMATTER':'NEWMATTER','NEWSUNTELECOM':'NEWSUNTELECOM','NOITOM':'NOITOM','OMONE':'OMONE','ONEEDUCATION':'ONEEDUCATION','PALETTEGEAR':'PALETTEGEAR','PARASHOOT':'PARASHOOT','PATPET':'PATPET','PERSPECTIVEROBOTICS':'PERSPECTIVEROBOTICS','PILLDRILL':'PILLDRILL','PITOP':'PITOP','POWERDOT':'POWERDOT','PUREDESIGN':'PUREDESIGN','QDESIGNS':'QDESIGNS','QIVV':'QIVV','QUITBIT':'QUITBIT','RAP3':'RAP3','REKE':'REKE','RICI':'RICI','RING':'RING','RINGUK':'RINGUK','RMALAMETRIC':'RMALAMETRIC','RRIOO':'RRIOO','SANDBUCK':'SANDBUCK','SANHO':'SANHO','SCARLETTO':'SCARLETTO','SEMIR':'SEMIR','SERAFIM':'SERAFIM','SERENEISHELPUS':'SERENEISHELPUS','SHOPIFY':'SHOPIFY','SKALLI':'SKALLI','SKIVA':'SKIVA','SLEEP':'SLEEP','SMARTROPE':'SMARTROPE','SOLARCHARGER':'SOLARCHARGER','SOLARTIME':'SOLARTIME','SONIDA':'SONIDA','SOUNDBRENNER':'SOUNDBRENNER','SOUNDER':'SOUNDER','STANDMAC':'STANDMAC','STUDIOBANANA':'STUDIOBANANA','SUGR':'SUGR','SUREWAY':'SUREWAY','SUSTYLE':'SUSTYLE','SYABAS':'SYABAS','SZ01':'SZ01','TAG':'TAG','TELCOM':'TELCOM','TESLAAMAZING':'TESLAAMAZING','TOPWATCH':'TOPWATCH','TRUNKSTER':'TRUNKSTER','UPAIR':'UPAIR','VECTORWATCH':'VECTORWATCH','VISIONTEK':'VISIONTEK','VSCAM':'VSCAM','VSTARCAM':'VSTARCAM','VTECH':'VTECH','WEBGENIX':'WEBGENIX','WELLSN':'WELLSN','XIGIMI':'XIGIMI','XKEYAIR':'XKEYAIR','XUANWHEEL':'XUANWHEEL','YANQING':'YANQING','YIBAN':'YIBAN','ZANO':'ZANO','ZAPTIP':'ZAPTIP','ZCAMERA':'ZCAMERA','ZEUSE':'ZEUSE','ZHONGHUICHUANGZHI':'ZHONGHUICHUANGZHI','ZIG':'ZIG','ZOPO':'ZOPO','ZORLOO':'ZORLOO','ZUK':'ZUK'};

            var sku_type_list = {'0':'Not Accelerator', '1':'Accelerator'};
            var sku_status_list = { '0':'Inactive', '1':'Created', '2':'Listed'};
            var sourcing_status_list = {'A':'Readily Available', 'O':'Temp of Out Stock','C':'Limited Stock','L':'Last Lot','D':'Discontinued'};
            var brand_manager_list= {'Apple':'Apple','Edward':'Edward','Jim':'Jim','Romuald':'Romuald','Shoaib':'Shoaib','Test':'Test','Tomasz':'Tomasz'};

            function ChangeCat(val, obj, obj2)
            {
                obj.length = 1;
                if (obj2) {
                    obj2.length = 1;
                }
                for (var i in cat_list[val]){
                    obj.options[obj.options.length]=new Option(cat_list[val][i], i);
                }
            }

            function PutSelectorContent(selector, list)
            {
                for (var i in list) {
                    selector.options[selector.options.length] = new Option(list[i], i);
                }
            }

            ChangeCat('0', document.fm.cat_id);

            $("select[name='cat_id']").on('change', function(){
                ChangeCat(this.value, this.form.sub_cat_id, this.form.sub_sub_cat_id)
            });

            $("select[name='sub_cat_id']").on('change', function(){
                ChangeCat(this.value, this.form.sub_sub_cat_id)
            });
            // Put selector content
            PutSelectorContent(document.fm.markerplace_id, marketplace_list);
            PutSelectorContent(document.fm.brand_id, brand_list);
            PutSelectorContent(document.fm.country_id, country_list);
            PutSelectorContent(document.fm.merchant_id, merchant_list);
            PutSelectorContent(document.fm.sku_type, sku_type_list);
            PutSelectorContent(document.fm.sku_status, sku_status_list);
            PutSelectorContent(document.fm.sourcing_status, sourcing_status_list);
            PutSelectorContent(document.fm.brand_manager, brand_manager_list);

            $("input[name='reset']").on('click', function(){
                $("select").val("");
            });

            $('#tags_1').tagsInput({
                width: 'auto',
                defaultText:'add a SKU',
            });
        }
    }
}
</script>