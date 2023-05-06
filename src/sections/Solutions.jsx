import React from "react";
import Timeline from "../components/Timeline";

const Solutions = () => {
  const timelines = {
    custom: {
      one: {
        title: "Research",
        description:
          "It involves identifying, analyzing, and documenting the needs and objectives of the stakeholders and users, and transforming them into a set of detailed requirements that the software must meet.",
      },
      two: {
        title: "Design",
        description:
          "Software requirements are analyzed and transformed into a detailed system design document that outlines how the software will be built.",
      },
      three: {
        title: "Deployment",
        description:
          "The deployment phase is the final stage of the Software Development Life Cycle (SDLC), where the software is released for use by the end-users.",
      },
      four: {
        title: "Testing",
        description:
          "It is a continuous process that aims to keep the software functioning correctly, meet new user requirements, and fix any issues that arise.",
      },
    },
    blockchain: {
      one: {
        title: "Planning",
        description:
          "In this phase, the goals and objectives of the project are established. The planning phase involves identifying the requirements of the blockchain technology and defining the scope of the project.",
      },
      two: {
        title: "Analysis",
        description:
          "In this phase, the design of the blockchain integration is created. This includes designing the architecture of the blockchain and how it will integrate with the application",
      },
      three: {
        title: "Design",
        description:
          "It's important to ensure that the blockchain system is integrated with other systems, data is migrated if necessary, and all security measures are in place.",
      },
      four: {
        title: "Implementation",
        description:
          "Once the blockchain system is live, ongoing maintenance is necessary to ensure it remains secure, scalable, and functional.",
      },
    },
    weekPlan: {
      one: {
        title: "Day 1",
        description:
          "Conduct a focused and efficient requirements gathering session to understand the client's needs and project scope.",
      },
      two: {
        title: "Day 2",
        description:
          "Create a functional prototype of the application based on the gathered requirements, using a rapid application development framework.",
      },
      three: {
        title: "Day (3-5)",
        description:
          "Develop the application in short, iterative cycles, incorporating client feedback and making adjustments as needed.",
      },
      four: {
        title: "Day (6-7)",
        description:
          "Developers will deploy the app to the intended platform, such as the app store or a web server.",
      },
    },
  };
  const [timeline, setTimeline] = React.useState(timelines.custom);

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold text-center">Solutions</h1>
      <div className="flex  justify-between my-4 mx-auto">
        <button
          className="btn mr-4"
          onClick={() => setTimeline(timelines.custom)}
        >
          Custom Based
        </button>
        <button
          className="btn mr-4"
          onClick={() => setTimeline(timelines.blockchain)}
        >
          Blockchain
        </button>
        <button
          className="btn mr-4"
          onClick={() => setTimeline(timelines.weekPlan)}
        >
          Week Plan
        </button>
      </div>
      <Timeline timeline={timeline} />
    </div>
  );
};

export default Solutions;
