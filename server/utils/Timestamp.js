const Timestamp = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var dateObj = new Date();
  var month = monthNames[dateObj.getMonth()];
  var day = dateObj.getDate();
  var year = dateObj.getFullYear();
  var hours = dateObj.getHours();
  var minutes = dateObj.getMinutes();

  const newdate = month + "_" + day + "_" + year + "_" + hours + "_" + minutes;

  return newdate;
};
module.exports = Timestamp;
