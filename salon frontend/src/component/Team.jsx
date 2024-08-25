import React, { useState } from "react";
import TeamInfo from "./TeamInfo";

const Team = () => {
  const [teamDetails, setTeamDetails] = useState([
    {
      key: "teamDet1",
      name: "Rahul",
      // pic:"https://cdn-partners-api.fresha.com/employee-avatars/processed/299162/medium/f69be09c-5e59-48fd-8982-e2079da46a8b-B90B7C27-4829-4A1F-9E84-F2A8E5C0B8E2.jpeg?class=square128",
      rating: "4.3",
      skill: "Barber",
    },
    {
      key: "teamDet2",
      name: "Pahul",
      // pic:"https://cdn-partners-api.fresha.com/employee-avatars/processed/187110/medium/f69ca654-2c2f-4493-9410-8223c8639b13-4DCCFE6B-912F-4BA9-B6BC-C281E5615EB2.jpeg?class=square128",
      rating: "5.0",
      skill: "Barber",
    },
    {
      key: "teamDet3",
      name: "Xahul",
      pic: "https://cdn-partners-api.fresha.com/employee-avatars/processed/197655/medium/c41b3540-e6f2-42c1-ba02-dd416feb39db-IMG_7500.jpeg?class=square128",
      rating: "4.3",
      skill: "Barber",
    },
    {
      key: "teamDet4",
      name: "Rahul",
      pic: "https://cdn-partners-api.fresha.com/employee-avatars/processed/68994/medium/547e501c-7561-45e0-99d6-fddb7526c139-0H4A5715.jpg?class=square128",
      rating: "4.3",
      skill: "Barber",
    },
    {
      key: "teamDet2",
      name: "Rahul",
      pic: "https://cdn-partners-api.fresha.com/employee-avatars/processed/187110/medium/f69ca654-2c2f-4493-9410-8223c8639b13-4DCCFE6B-912F-4BA9-B6BC-C281E5615EB2.jpeg?class=square128",
      rating: "5.0",
      skill: "Barber",
    },
    {
      key: "teamDet3",
      name: "Rahul",
      pic: "https://cdn-partners-api.fresha.com/employee-avatars/processed/197655/medium/c41b3540-e6f2-42c1-ba02-dd416feb39db-IMG_7500.jpeg?class=square128",
      rating: "4.3",
      skill: "Barber",
    },
    {
      key: "teamDet4",
      name: "Rahul",
      pic: "https://cdn-partners-api.fresha.com/employee-avatars/processed/68994/medium/547e501c-7561-45e0-99d6-fddb7526c139-0H4A5715.jpg?class=square128",
      rating: "4.3",
      skill: "Barber",
    },
    {
      key: "teamDet2",
      name: "Rahul",
      pic: "https://cdn-partners-api.fresha.com/employee-avatars/processed/187110/medium/f69ca654-2c2f-4493-9410-8223c8639b13-4DCCFE6B-912F-4BA9-B6BC-C281E5615EB2.jpeg?class=square128",
      rating: "5.0",
      skill: "Barber",
    },
    {
      key: "teamDet3",
      name: "Rahul",
      pic: "https://cdn-partners-api.fresha.com/employee-avatars/processed/197655/medium/c41b3540-e6f2-42c1-ba02-dd416feb39db-IMG_7500.jpeg?class=square128",
      rating: "4.3",
      skill: "Barber",
    },
    {
      key: "teamDet4",
      name: "Rahul",
      pic: "https://cdn-partners-api.fresha.com/employee-avatars/processed/68994/medium/547e501c-7561-45e0-99d6-fddb7526c139-0H4A5715.jpg?class=square128",
      rating: "4.3",
      skill: "Barber",
    },
  ]);
  return (
    <div className="grid grid-cols-4 gap-14">
      {teamDetails.map((team) => (
        <TeamInfo prop={team} />
      ))}
    </div>
  );
};

export default Team;
