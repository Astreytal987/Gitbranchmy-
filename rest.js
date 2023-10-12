function splitBill(nompeple, bill, billservis) {
    const totalBill = bill - billservis; // Общий счет с чаевыми
    const amountPerPerson = totalBill / nompeple; // Сумма, которую должен заплатить каждый
  
    return amountPerPerson;
  }
  
  const nompeple = 6;
  const bill = 3500;
  const billservis = 500;
  
  const amountToPay = splitBill(nompeple, bill, billservis);
  console.log(`С каждого по ${amountToPay} рублей`);