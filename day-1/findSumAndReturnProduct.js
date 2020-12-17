
function findSumAndReturnProduct(numsArr, sum){
  for (let i = 0; i < numsArr.length; i++){
    for (let j = i+1; j < numsArr.length; j++){
      if (numsArr[i] + numsArr[j] === sum){
        return numsArr[i] * numsArr[j]
      }
    }
  }
}

function findTripleSumAndReturnProduct(numsArr, sum){
  for (let i = 0; i < numsArr.length; i++){
    const miniTarget = sum - numsArr[i];
    const sumObj = {};
    for (let j = i+1; j < numsArr.length; j++){
      const finalTarget = miniTarget - numsArr[j];
      sumObj[finalTarget] = j;
    }
    for (let k = i+1; k < numsArr.length; k++){
      const secondVal = numsArr[k];
      const thirdIndex = sumObj[secondVal]; // sumObj[numsArr[k]]
      const thirdVal = numsArr[thirdIndex];
      if (sumObj[secondVal]  || sumObj[secondVal] === 0){
        return numsArr[i] * secondVal * thirdVal; 
      }
    }
  }
}

// [8, 2, 4, 7, 6] //13 
// unnested loop, check if obj[arr[k]], return k, obj[arr[k]], i
const nums = [1511, 1112, 1958, 1778, 1769, 1946, 1800, 1911, 1821, 1886, 285, 1649, 1952, 1428, 1779, 1822, 1793, 1968, 1898, 1497, 1071, 2000, 1902, 1860, 1960, 1282, 1732, 1845, 1917, 1937, 1477, 1471, 1728, 1957, 1558, 1472, 1931, 1864, 967, 1846, 1739, 1852, 1760, 1856, 1568, 503, 1897, 1548, 2009, 1662, 1767, 1899, 1842, 1995, 1885, 1904, 1870, 1881, 1788, 1709, 1980, 1296, 1678, 1985, 1830, 1932, 1961, 1964, 1828, 1458, 209, 1746, 1972, 27, 1491, 1956, 360, 1851, 1994, 1687, 1569, 1910, 1982, 1859, 1858, 1630, 1869, 1818, 1987, 1805, 1816, 1938, 1878, 1004, 1999, 1795, 1974, 1478, 1867, 1990, 1949, 1494, 1831, 1749, 1224, 550, 1951, 1692, 1475, 1810, 1770, 2010, 1266, 1591, 1916, 1735, 1119, 1928, 1719, 1918, 1017, 1935, 2001, 1776, 1484, 1577, 1813, 1888, 1906, 1742, 1078, 1796, 1664, 1656, 2002, 1676, 1505, 1930, 2004, 1806, 1792, 1798, 1883, 1836, 1892, 1699, 1900, 1914, 1988, 1882, 1832, 1874, 1723, 2005, 1977, 1903, 1473, 2003, 1781, 1414, 1921, 1947, 1919, 1814, 1400, 1839, 1824, 1812, 1820, 1756, 1099, 1991, 1850, 1058, 1700, 1753, 1159, 1825, 1997, 1896, 1762, 1872, 1963, 1761, 555, 1865, 1616, 1682, 1975, 1853, 1838, 1981, 1750, 1688, 766, 1474, 14, 1943, 1652, 1901]

console.log(findSumAndReturnProduct(nums, 2020))
console.log(findTripleSumAndReturnProduct(nums, 2020))

