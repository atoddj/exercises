const formatDate = (chsStartDate, chsEndDate) => {
  const startDate = new Date(chsStartDate);
  const endDate = new Date(chsEndDate);
  const chsOptions = {timeZone: "America/New_York", weekday: 'long', month: '2-digit', day: '2-digit', year: 'numeric', hour:'2-digit', minute: '2-digit', hour12: false, timeZoneName: 'short'};
  const bangkokOptions = {...chsOptions, timeZone: "Asia/Bangkok"};

  const formattedStartDate = startDate.toLocaleString("en-US", chsOptions);
  const formattedEndDate = endDate.toLocaleString("en-US", chsOptions);

  const bkFormattedStartDate = startDate.toLocaleString("en-US", bangkokOptions);
  const bkFormattedEndDate = endDate.toLocaleString("en-US", bangkokOptions);
  
  return {formattedStartDate, formattedEndDate, bkFormattedStartDate, bkFormattedEndDate};
}

console.log(
  formatDate('01/16/2021 06:00', '01/17/2021 16:00')
)