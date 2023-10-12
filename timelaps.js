const seconds = 100000;

const timeconvert = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `Время: ${hours} ч ${minutes} мин ${remainingSeconds} сек`;
};

console.log(timeconvert(seconds));