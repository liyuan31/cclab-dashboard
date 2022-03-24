// import React from "react";
// import d3 from "d3";

// const TimeBrusher = () => {
//     const margin = { top: 10, right: 0, bottom: 20, left: 0 };
//     const width = 100;
//     const height = 120;
//     const svg = d3.create("svg").attr("viewBox", [0, 0, width, height]);
//     const interval = d3.timeHour.every(12);
//     const xAxis = (g) =>
//         g
//             .attr("transform", `translate(0,${height - margin.bottom})`)
//             .call((g) =>
//                 g
//                     .append("g")
//                     .call(
//                         d3
//                             .axisBottom(x)
//                             .ticks(interval)
//                             .tickSize(-height + margin.top + margin.bottom)
//                             .tickFormat(() => null)
//                     )
//                     .call((g) =>
//                         g
//                             .select(".domain")
//                             .attr("fill", "#ddd")
//                             .attr("stroke", null)
//                     )
//                     .call((g) =>
//                         g
//                             .selectAll(".tick line")
//                             .attr("stroke", "#fff")
//                             .attr("stroke-opacity", (d) =>
//                                 d <= d3.timeDay(d) ? 1 : 0.5
//                             )
//                     )
//             )
//             .call((g) =>
//                 g
//                     .append("g")
//                     .call(d3.axisBottom(x).ticks(d3.timeDay).tickPadding(0))
//                     .attr("text-anchor", null)
//                     .call((g) => g.select(".domain").remove())
//                     .call((g) => g.selectAll("text").attr("x", 6))
//             );
//     const x = d3
//         .scaleTime()
//         .domain([new Date(2013, 7, 1), new Date(2013, 7, width / 60) - 1])
//         .rangeRound([margin.left, width - margin.right]);
//     const chart = () => {
//         const brush = d3
//             .brushX()
//             .extent([
//                 [margin.left, margin.top],
//                 [width - margin.right, height - margin.bottom],
//             ])
//             .on("brush", brushed);

//         svg.append("g").call(xAxis);

//         svg.append("g").call(brush);

//         function brushed(event) {
//             if (!event.sourceEvent) return;
//             const d0 = event.selection.map(x.invert);
//             const d1 = d0.map(interval.round);

//             // If empty when rounded, use floor instead.
//             if (d1[0] >= d1[1]) {
//                 d1[0] = interval.floor(d0[0]);
//                 d1[1] = interval.offset(d1[0]);
//             }

//             d3.select(this).call(brush.move, d1.map(x));
//         }

//         return svg.node();
//     };
//     return chart;
// };

// export default TimeBrusher;
