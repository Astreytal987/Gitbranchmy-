
const sum = 200000;
const iga = 0.1;
const time = 2

const sos_my = (sum,iga,time) => {
    for (let i = 1; i <= time; i++) {
        sum = (sum * iga) + sum;
      }

      return sum;
    };

const finalSum = sos_my(sum, iga, time);
const sumplus = finalSum - sum
console.log(`Общая сумма с процентами = ${finalSum} рублей\nПереплата = ${sumplus}`);
