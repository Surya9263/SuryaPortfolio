import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
const GithubCalender = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 10;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <div>
      <h1 className="text-4xl font-bold border-b-4 border-pink-600 text-center py-5">Github Stats</h1>
      <GitHubCalendar
        style={{ margin: "auto",padding:"20px" }}
        username="Surya9263"
        blockSize={20}
        fontSize={20}
      >
         <ReactTooltip delayShow={20} html /> 
      </GitHubCalendar>
    </div>
  );
};

export default GithubCalender;











// import React from 'react'
// import GitHubCalendar from 'react-github-calendar'
// import ReactTooltip from "react-tooltip"

// const GithubCalender = () => {
//   return (
//     <div className='m-8'>
//         <GitHubCalendar 
//         style={{margin:"auto"}}
//         username="Surya9263">
//             <ReactTooltip delayShow={20} html/>
//         </GitHubCalendar>
//     </div>
//   )
// }

// export default GithubCalender



