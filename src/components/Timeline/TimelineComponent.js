import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import TimelineDate from "./TimelineDate";

function TimelineComponent() {
  const dateStyleBlack = { background: "#111111", color: "white" };
  // const dateStyleColored = { background: "purple", color: "white" };

  const boxContainerBasic = {
    // background: "#45046a",
    padding: "20px",
    borderRadius: "8px",
    // boxShadow: "0.5rem 0.5rem 2rem 0 #931a25",
    color: "white",
  };

  const boxParaStyle = {
    paddingTop: "5px",
    color: "#90a4ae",
  };

  const onefitplus_link = (
    <a
      href="https://www.onefitplus.com/instructors/6010c780baecf16e621d4b5a/Gloria"
      style={{ color: "red" }}
      target="_blank"
      rel="noreferrer"
    >
      <u>OneFitPlus</u>
    </a>
  );

  return (
    <Timeline lineColor={"purple"} animate={false}>
      <TimelineItem
        key="001"
        // dateComponent={<TimelineDate date="17th May, 1995"/>}
        dateText="17th May, 1995"
        dateInnerStyle={dateStyleBlack}
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
          future. I did my 10th std schooling from Shiva Public School, Bhilai
          3.
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
          Finished my 12th std schooling from Lions Higher Secondary school.
          After the examinations, I decided to persue B.Com.
        </p>
      </TimelineItem>

      <TimelineItem
        key="004"
        dateText="June 2012 - April 2015"
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
          life in. I was working pretty fine there shockingly, but I still
          didn't much enjoy my work there. It always felt like I was supposed to
          do something else.
        </p>
      </TimelineItem>

      <TimelineItem
        key="006"
        dateText="Late 2017"
        dateInnerStyle={dateStyleBlack}
        bodyContainerStyle={boxContainerBasic}
      >
        <h4>Life Changing Incident</h4>
        <p style={boxParaStyle}>
          By the end of 2017, my life completely changed. Something happened in
          my life which made me realize how precious life is. This was the time
          when I understood that{" "}
          <i style={{ color: "#f6acc8" }}>
            everyone has a purpose in their life, and I have one too
          </i>
          . So I made it my quest to find that purpose.
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
          In the persuit of finding it, I thought why not try keeping myself
          healthy and fit? So I joined the gym to learn Yoga. It was pretty
          tough in the beginning, but I after giving it some time, I totlly fell
          in love with it!
        </p>
      </TimelineItem>

      <TimelineItem
        key="008"
        dateText="Mid 2019"
        dateInnerStyle={dateStyleBlack}
        bodyContainerStyle={boxContainerBasic}
      >
        <h4>Meet your Personal Yoga Trainer!</h4>
        <p style={boxParaStyle}>
          Once I was confident enough about my Yoga skills, I became a personal
          Yoga trainer. When I started teaching Yoga myself, I realised that I
          have never felt so happy doing something. The quote was definitely
          true- "Your job doesn't feel like a job if you love doing it."
        </p>
      </TimelineItem>

      <TimelineItem
        key="009"
        dateText="Dec 2020 - Present"
        dateInnerStyle={dateStyleBlack}
        bodyContainerStyle={boxContainerBasic}
      >
        <h4>Job as a Fitness Coach</h4>
        <p style={boxParaStyle}>
          In December 2019, I joined {onefitplus_link} as a fitness coach. Here,
          I help people to get fit (mostly lose fat) by broadcasting my live
          treadmill, spin bike and yoga sessions. I also help them resolve their
          fitness related queries.
        </p>
      </TimelineItem>
    </Timeline>
  );
}

export default TimelineComponent;
