import React from "react";
const GithubStats = () => {
  return (
    // streak 
    <div>
      <div style={{ width: "40%", margin: "auto" }}>
        <a href="https://github.com/Surya9263">
          <img
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com/?user=Surya9263"
          alt="/"/>
        </a>
      </div>
 
      <div
        style={{
          width: "60%",
          height: "300px",
          display: "flex",
          margin: "auto",
        }}
      >
        <a href="https://github.com/Surya9263">  
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Surya9263"  //launguages
          alt="/"/>
        </a>
        <a href="https://github.com/Surya9263">
          <img
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=Surya9263&count_private=true&show_icons=true" //stats
          alt="/"/>
        </a>
      </div>
    </div>
  );
};

export default GithubStats;


















// import React from 'react'

// const GithubStats = () => {
//   return (
//     <div>
//         <div>
//         <a href="https://github.com/Surya9263">
//             <img align="left" src="https://github-readme-streak-stats.herokuapp.com?user=Surya9263" alt="" />
//         </a>
//         </div>
//         <div style={{w:"60%",height:"300px",display:"flex",margin:"auto"}}>
//             <a href="https://github.com/Surya9263">
//                 <img align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=Surya9263" alt="" />
//             </a>
//             <a href="https://github.com/Surya9263">
//                 <img align="center" src="https://github-readme-stats.vercel.app/api?username=Surya9263&count_private=true&show_icon=true" alt="" />
//             </a>
//         </div>
//     </div>
//   )
// }

// export default GithubStats