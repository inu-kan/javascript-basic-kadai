const day = () => {
  const today = new Date();
  const Year = today.getFullYear();
  const Month = today.getMonth() + 1;
  const date = today.getDate();
  console.log(`${Year}年${Month}月${date}日`);
};
day();
