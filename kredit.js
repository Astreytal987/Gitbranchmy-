
const sum = 200000;
const iga = 0.1;
const time = 2

const sos_my = (sum,iga,time) => {
    for (let i = 1; i <= time; i++) {
        sum = (sum * iga) + sum; // вычисляем сумму для каждого года
      }
      return sum;
    };

const finalSum = sos_my(sum, iga, time);
console.log(finalSum);
