// assuming all elements are non-negative numbers
function findContigiuousSet(numsArr, target){
  let first = 0; 
  let sum = 0;
  for (let i = 0; i < numsArr.length; i++){
    while (sum > target){
      sum -= numsArr[first];
      first += 1;
    }
    if (sum === target){
      let subArr = numsArr.slice(first, i + 1);
      return Math.min(...subArr) + Math.max(...subArr)
    }
    else{
      sum += numsArr[i];
    }  
  }
}

nums = [29, 44, 11, 5, 42, 8, 17, 23, 18, 16, 50, 47, 21, 3, 25, 28, 36, 34, 48, 30, 32, 40, 22, 19, 41, 13, 56, 14, 11, 20, 39, 43, 17, 64, 57, 66, 31, 16, 106, 27, 79, 25, 36, 24, 46, 38, 28, 33, 92, 29, 30, 34, 89, 35, 53, 83, 42, 40, 137, 41, 50, 43, 68, 49, 69, 52, 79, 60, 54, 62, 165, 57, 87, 102, 95, 110, 114, 75, 76, 239, 81, 94, 176, 84, 163, 92, 119, 173, 143, 167, 106, 111, 116, 197, 132, 133, 194, 151, 156, 157, 159, 160, 313, 165, 175, 249, 178, 240, 176, 269, 198, 217, 286, 310, 227, 424, 289, 273, 434, 265, 393, 332, 415, 337, 444, 530, 325, 340, 341, 351, 354, 451, 374, 403, 492, 649, 922, 500, 537, 516, 538, 554, 590, 639, 597, 825, 867, 662, 665, 666, 841, 676, 1113, 715, 705, 957, 777, 1242, 1134, 1016, 1037, 1038, 1328, 1054, 1155, 1092, 1144, 1187, 1236, 1312, 1327, 1799, 1623, 1331, 1342, 1381, 2518, 1420, 1482, 1662, 2049, 1814, 2419, 2146, 2404, 3382, 2342, 2209, 2247, 3141, 2236, 3296, 2563, 2567, 2654, 4727, 2673, 2712, 2863, 2723, 2801, 4050, 3469, 3144, 6270, 5287, 3960, 4456, 4355, 4445, 4483, 4551, 5236, 7099, 5099, 5217, 9278, 6142, 8568, 5327, 5385, 5396, 8540, 5524, 5867, 5945, 8996, 9196, 7104, 8315, 12316, 8405, 9681, 8800, 8928, 9034, 11341, 10316, 12203, 10909, 10544, 10712, 10723, 10781, 10851, 10920, 11263, 14979, 11391, 11812, 18609, 18445, 15419, 17827, 17205, 17333, 17439, 17962, 17834, 19244, 19350, 20860, 21028, 31447, 29956, 35796, 21504, 30270, 22732, 23203, 22183, 35273, 47289, 26810, 27231, 32858, 40566, 53718, 41976, 34538, 37206, 35401, 38694, 53888, 47838, 40854, 41888, 53159, 54041, 78108, 82830, 43687, 44915, 57741, 58604, 48993, 59668, 60089, 61348, 86576, 83531, 69939, 71744, 73232, 72607, 74095, 98362, 91853, 82742, 127430, 84541, 85575, 93908, 103519, 88602, 92680, 101428, 106263, 106734, 107597, 108661, 121016, 135443, 134580, 175178, 141683, 171344, 144351, 145839, 181104, 158636, 193172, 250489, 167283, 173143, 170116, 174177, 245779, 313122, 200277, 194108, 207691, 311799, 214331, 216258, 295193, 255596, 356014, 278931, 286034, 287522, 374974, 290190, 304475, 325919, 328752, 340426, 361391, 341460, 343259, 462037, 374454, 401799, 394385, 407968, 408439, 422022, 430589, 501853, 506448, 534527, 628982, 700893, 564965, 683685, 695961, 594665, 1223647, 776253, 836491, 669178, 681886, 772049, 1351064, 717713, 824974, 768839, 989050, 802353, 816407, 830461, 852611, 932442, 1036380, 1571192, 1248650, 1295558, 1379646, 1159630, 1263843, 1276551, 1312378, 1386891, 1399599, 2560242, 2097911, 1450725, 1540888, 1520066, 1542687, 1593813, 1585246, 2763103, 2435979, 1646868, 1683072, 1785053, 1968822, 2821433, 2436181, 2408280, 2423473, 2539276, 2472008, 2995450, 2711977, 2929578, 3691724, 2850324, 2970791, 2991613, 5257614, 3060954, 3276885, 4444137, 3179059, 3232114, 3468125, 6229190, 5183985, 5655587, 3753875, 4908189, 6007401, 4831753, 4880288, 9920914, 5011284, 5322332, 5562301, 10563776, 5779902, 5821115, 5841937, 14752667, 6932934, 9843037, 6240013, 6745010, 8585628, 8937860, 9076207, 7222000, 8634163, 9316176, 9739942, 10442589, 10470490, 9891572, 9712041, 12774871, 10333616, 10573585, 16824506, 11342203, 14427565, 16682602, 12061128, 13063937, 15330638, 12985023, 13462013, 13967010, 15379173, 17664589, 15856163, 16538176, 16934041, 25747735, 20465157, 19451983, 21773169, 19603613, 20045657, 20285626, 20907201, 38597675, 21915788, 25046151, 23403331, 25125065, 25523141, 26028138, 28364196, 42331206, 26447036, 27429023, 35424830, 39649270, 32394339, 36141789, 33472217, 36386024, 47816179, 42855314, 58057577, 39889239, 51970177, 82504584, 41192827, 48336224, 59500355, 47040853, 48926472, 48528396, 54392334, 53876059, 79241338, 76275263, 134332840, 76617657, 62853853, 65866556, 73587166, 68780363, 83182642, 93163004, 111933636, 87705418, 81082066, 86930092, 91859416, 88233680, 122513638, 135274533, 162423980, 207920006, 111382249, 102802531, 131711038, 108268393, 116729912, 246266476, 142367529, 185367491, 131634216, 134646919, 370343986, 149862429, 195965535, 168012158, 204963592, 144381670, 258130822, 169315746, 175163772, 180093096, 284742070, 279394407, 211070924, 214184780, 219532443, 224998305, 234436747, 239902609, 434604499, 248364128, 519178817, 519297016, 281496645, 266281135, 279028589, 294244099, 344479518, 312393828, 380127364, 563770659, 363914113, 519643290, 388848189, 399625539, 453969190, 425255704, 430603367, 433717223, 908491479, 444530748, 459435052, 678967495, 683092288, 591422417, 733327707, 1252970997, 712745812, 1472262138, 545309724, 573272688, 701242017, 708393631, 1499913896, 833342762, 752762302, 844156287, 788473728, 1556902099, 853594729, 855859071, 893152275, 864320590, 1752647766, 1004744776, 903965800, 1032707740, 1118582412, 1501219540, 1424765179, 1745453552, 1326034990, 1246551741, 1253703355, 1274514705, 1454004319, 1534584779, 1461155933, 1541236030, 1596918589, 1644332799, 1632630015, 2445201830, 1709453800, 1717915319, 2995240349, 2871230178, 2151290152, 1908710576, 1936673540, 2178480505, 2707707674, 2365134153, 2500255096, 2600549695, 2521066446, 4672356598, 2528218060, 2714859288, 4405814957, 4424313088, 4304626263, 4074587953, 4244882494, 5100804791, 3896395824, 3342083815, 3427369119, 3618164376, 3845384116, 7692752329, 4060000728, 4087191081, 4115154045, 4886200599, 4543614658, 5079993441, 4865389249, 6424613884, 8568752422, 5049284506, 8269697204, 5243077348, 6142228407, 13669557213, 7501957072, 6769452934, 6960248191, 8360036539, 18749550654, 7272753235, 11779943410, 7045533495, 7463548492, 8388998774, 16081751103, 24441787642, 8202345126, 8658768703, 9409003907, 20625365761, 12911681341, 10292361854, 12012530282, 14652081255, 19811785620, 11385305755, 12203325539, 13644185479, 14509081987, 18658058990, 14318286730, 14005781686, 14736301727, 15247878621, 21114026467, 15665893618, 33100556345, 15852547266, 16591343900, 27962472209, 16861113829, 22304892136, 18067772610, 19701365761, 23588631294, 28159559962, 25391087441, 23397836037, 36779920085, 25029491234, 25894387742, 26939627266, 27649967165, 28324068416, 28742083413, 29054588457, 44511080994, 37552770757, 50628960552, 46391841026, 32713661095, 32443891166, 45020673791, 45717739775, 40258949866, 34928886439, 58326722476, 37769138371, 43099201798, 48427327271, 48788923478, 53353559650, 49292223779, 77481915728, 50923878976, 61037729511, 54589594431, 56392050578, 57066151829, 71841285211, 70213029537, 70266431852, 84160979397, 65157552261, 67372777605, 67642547534, 72698024810, 75187836305, 104277438626, 115392874305, 105141915976, 87061362150, 86196465642, 91526529069, 97216250749, 103881818210, 100216102755, 150179940538, 111655746260, 105513473407, 204769534969, 126658482430, 113458202407, 122223704090, 142107717063, 156409495179, 137855577071, 132530329866, 179298293794, 158899306674, 154703909684, 147885861115, 190473904268, 197040002476, 206919403374, 173257827792, 177722994711, 183412716391, 235681906497, 217340020617, 350980822503, 217169219667, 247621190470, 328824965927, 227737177497, 301007023737, 240116684837, 361135711102, 380151520336, 292559486755, 287234239550, 328329481339, 280416190981, 327184154909, 302589770799, 395063015328, 321143688907, 356670544183, 475798591334, 390332119765, 390427047459, 394892214378, 573744836156, 434509240284, 444906397164, 504403459217, 530326948296, 581423214718, 620888968094, 716206704235, 520532875818, 527350924387, 755652929191, 567650430531, 682126453928, 1151215916390, 1057221806052, 675479206309, 1043390859144, 659260314982, 1095001354918, 677814233090, 1065811326074, 835238516929, 1208141181386, 1077018668306, 829401454662, 879415637448, 938912699501, 1551445221164, 1752497874615, 1047883800205, 1088183306349, 1141421843912, 1635068566639, 1179793190800, 1341386768910, 1488661769644, 1226910745513, 1747443621331, 1334739521291, 1337074548072, 2482808612822, 1494498831911, 1743625559164, 1507215687752, 1513052750019, 1923421823278, 2015931367807, 1708817092110, 1768314154163, 1818328336949, 1927299437653, 2273652220792, 2136067106554, 3650999934446, 2189305644117, 2429570075259, 2476161365203, 2976455335549, 2568297514423, 2561650266804, 3695613591816, 4991220342063, 2671814069363, 2847792271310, 2831573379983, 3001714519663, 3007551581930, 3216032779862, 5808028715532, 5233464336167, 3850721260931, 3477131246273, 3586642491112, 4091980557741, 4775091708963, 4063366544207, 4325372750671, 4565637181813, 5147975434566, 4618875719376, 9473348185237, 5323953636513, 5129947781227, 5416089785733, 5679365651293, 8314489311192, 5839124961913, 5503387449346, 7977740052537, 5833287899646, 6693164026135, 8625106680839, 6802675270974, 9766851153942, 7063773737385, 7327852507204, 7540497790480, 7650009035319, 15642341818396, 9942829355889, 12688473225046, 14868350297684, 10034965505109, 9748823500603, 10122263168722, 10453901417740, 12017117662648, 11182753100639, 11512653550939, 11342512411259, 11336675348992, 12526451925781, 12897061637031, 17726563553140, 18877173139472, 13495839297109, 13866449008359, 14130527778178, 14977861542523, 17362818012313, 15190506825799, 23809278364248, 17398832535922, 32917070378939, 19691652856492, 45605543603985, 21790576766732, 24409715187970, 19871086669325, 20576164586462, 23353793011640, 22519428449631, 31207762018317, 32218104782273, 22679187760251, 26763510645390, 33473226223493, 41080356564780, 28473700839632, 27362288305468, 27626367075287, 27996976786537, 63599785014411, 42390515118956, 60215081568810, 32589339361721, 37090485392414, 37269919205247, 39562739525817, 42366741353194, 40447251255787, 50264277606364, 61099593298780, 58981615427663, 54125798950858, 45873221461271, 61063040201353, 49442698405641, 61946927063125, 50041476065719, 54988655380755, 104431353786396, 64632207510715, 105079458766502, 55359265092005, 55623343861824, 67559716312354, 69859258566968, 72152078887538, 89889949661428, 69679824754135, 144878605042183, 95315919866912, 80009990781604, 82813992608981, 152162069669142, 101496565323095, 104854836888934, 95914697526990, 99484174471360, 100861876842026]

console.log(findContigiuousSet(nums, 144381670))