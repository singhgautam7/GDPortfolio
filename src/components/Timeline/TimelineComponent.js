import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function TimelineComponent() {
  const dateStyleBlack = { background: "#1a1c20", color: "white" };
  const dateStyleColored = { background: "purple", color: "white" };

  const boxContainerBasic = {
    background: "#45046a",
    padding: "20px",
    borderRadius: "8px",
    // boxShadow: "0.5rem 0.5rem 2rem 0 #931a25",
    color: "white",
  };

  const boxParaStyle = {
    paddingTop: "5px",
  };

  return (
    <Timeline lineColor={"#bc658d"} animate={false}>
      <TimelineItem
        key="001"
        dateText="17th May, 1995"
        dateInnerStyle={dateStyleColored}
        bodyContainerStyle={boxContainerBasic}
      >
        <h4>The miracle of life</h4>
        <p style={boxParaStyle}>The day I was born.</p>
      </TimelineItem>

      <TimelineItem
        key="002"
        dateText="April 2010"
        dateInnerStyle={dateStyleBlack}
        bodyContainerStyle={boxContainerBasic}
      >
        <h4>Higher secondary schooling</h4>
        <p style={boxParaStyle}>
          Cleared my 10th standard examinations around this time. As every other
          Indian kid in 10th std, I too had no idea about what I would do in
          future
        </p>
      </TimelineItem>

      <TimelineItem
        key="003"
        dateText="May 2012"
        dateInnerStyle={dateStyleBlack}
        bodyContainerStyle={boxContainerBasic}
      >
        <h4>Senior secondary schooling</h4>
        <p style={boxParaStyle}>
          Cleared my 10th standard examinations around this time. As every other
          Indian kid in 10th std, I too had no idea about what I would do in
          future. I did my 10th std schooling from Shiva Public School, Bhilai
          3.
        </p>
      </TimelineItem>

      <TimelineItem
        key="004"
        dateText="April 2015"
        dateInnerStyle={dateStyleBlack}
        bodyContainerStyle={boxContainerBasic}
      >
        <h4>Good Old College Days</h4>
        <p style={boxParaStyle}>
          College days are always something to remeber. I did my graduation from
          Pandit Ravishankar Shukla University, Raipur. Trust me, even by this
          time I had no idea that I would be into fitness at all.
        </p>
      </TimelineItem>

      <TimelineItem
        key="005"
        dateText="2016-2017"
        dateInnerStyle={dateStyleBlack}
        bodyContainerStyle={boxContainerBasic}
      >
        <h4>My First Job</h4>
        <p style={boxParaStyle}>
          Now I started my career as a Team Leader at Nexton Technologies,
          Bangalore. Yes, there were many cities I have lived my fare share of
          life in. I was working pretty fine there shockingly, I still had no
          idea about what fitness is. I was just going with the flow.
        </p>
      </TimelineItem>

      <TimelineItem
        key="006"
        dateText="Late 2017"
        dateInnerStyle={dateStyleColored}
        bodyContainerStyle={boxContainerBasic}
      >
        <h4>Life Changing Incident</h4>
        <p style={boxParaStyle}>
          By the end of 2017, my life completely changed. Something happened in
          my life which made me realise how precious life is. This was the time
          when I understood that{" "}
          <i style={{ color: "#f6acc8" }}>
            everyone has a purpose in their life, and I have one too
          </i>
          .
        </p>
      </TimelineItem>

      <TimelineItem
        key="007"
        dateText="Early 2018"
        dateInnerStyle={dateStyleBlack}
        bodyContainerStyle={boxContainerBasic}
      >
        <h4>Joined Gym</h4>
        <p style={boxParaStyle}>
          After giving it a lot of thought, I ultimately came to the decision of
          helping other people get healthy and fit. But for that to happen, I
          have to learn and grow myself too. So I joined a gym and started
          practicing Yoga. It was hard to catch in the beginning, but when I got
          the hang of it, I totally fell in love with it!
        </p>
      </TimelineItem>

      <TimelineItem
        key="008"
        dateText="Mid 2019"
        dateInnerStyle={dateStyleColored}
        bodyContainerStyle={boxContainerBasic}
      >
        <h4>Meet your Personal Yoga Trainer!</h4>
        <p style={boxParaStyle}>
          When I became confident enough on my Yoga skills, I became a personal
          yoga trainer. When I started teaching Yoga myself, I realised that I
          have never felt so happy doing something. The quote was definitely
          true- "Your job doesn't feel like a job if you love doing it."
        </p>
      </TimelineItem>

      <TimelineItem
        key="009"
        dateText="Dec 2020 - Present"
        dateInnerStyle={dateStyleColored}
        bodyContainerStyle={boxContainerBasic}
      >
        <h4>Job as a Fitness Coach</h4>
        <p style={boxParaStyle}>
          In December 2019, I joined OneFitPlus as a fitness coach. I am still
          working here. I help people here to get fit here (mostly lose fat).
          Most of my work involves broadcasting my tradmill, spin bike or yoga
          live sessions to multiple clients at once.
        </p>
      </TimelineItem>
    </Timeline>
  );
}

export default TimelineComponent;
