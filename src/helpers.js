//more readable number
//e.g: 10000000 -> 10 000 000
export const formatNumber = num => {
  var nf = Intl.NumberFormat();
  return nf.format(num);
}
