//расходТоплива: расход топлива на 100 км (в литрах).
  //  • дистанция: планируемая дистанция поездки (в км).
    //• ценаТоплива: текущая цена топлива за литр.

    const travelprise = (ingliz,distans,prise) => {
        return (distans / ingliz) * prise
     }

     console.log (travelprise(100,20,60));