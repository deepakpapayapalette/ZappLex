import React from 'react';
import './chart-style.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';


// Function to transform task data for Recharts BarChart
const transformTasksForRecharts = (tasks, days) => {
  const transformedData = [];
  const startDayOffset = 10; // Corresponds to Oct 10

  tasks.forEach((task, index) => {
    // Each task will have a series of segments if it spans multiple days
    // Or a single segment if it fits within one day or is represented as such
    const daySegments = [];
    let currentStart = task.start;
    const taskEnd = task.start + task.duration;

    // Create segments for each day the task spans
    for (let i = 0; i < days.length; i++) {
      const dayIndex = startDayOffset + i;
      const dayStart = dayIndex;
      const dayEnd = dayIndex + 1;

      const segmentStart = Math.max(currentStart, dayStart);
      const segmentEnd = Math.min(taskEnd, dayEnd);

      if (segmentEnd > segmentStart) {
        // We need to represent the "empty" space before the bar starts on a given day
        // And the actual bar segment
        const segmentDuration = segmentEnd - segmentStart;
        const segmentOffset = segmentStart - dayStart; // How far into the day the segment starts

        daySegments.push({
          name: task.name,
          day: days[i],
          // This represents the "empty" space before the bar starts in this day's cell
          // Recharts will stack these.
          offset: segmentOffset,
          // This is the actual duration of the bar segment within this day's cell
          duration: segmentDuration,
          color: task.color,
          yAxisLabel: task.name, // To map to Y-axis
        });
      } else {
        // If no segment for this day, still push an empty one to keep data consistent for stacking
        daySegments.push({
          name: task.name,
          day: days[i],
          offset: 1, // Full empty
          duration: 0,
          color: 'transparent',
          yAxisLabel: task.name,
        });
      }
    }
    transformedData.push(...daySegments);
  });

  return transformedData;
};


const GanttChartRecharts = () => {
  const tasks = [
    { id: 'Task1', name: 'Cheque', start: 10, duration: 5, color: '#4CAF50' },
    { id: 'Task2', name: 'Return Memo', start: 10, duration: 5, color: '#4CAF50' },
    { id: 'Task3', name: 'Demand Notice', start: 11, duration: 4, color: '#4CAF50' },
    { id: 'Task4', name: 'Invoices', start: 12, duration: 3, color: '#4CAF50' },
    { id: 'Task5', name: 'Bank Statement', start: 13, duration: 2, color: '#4CAF50' },
    { id: 'Task7', name: 'Complainant Aff', start: 14, duration: 1.5, color: '#4CAF50' },
    { id: 'Task8', name: 'Witness Aff.', start: 14.5, duration: 0.5, color: '#4CAF50' },
    { id: 'Task9', name: 'Bank Official', start: 15, duration: 0.5, color: '#4CAF50' },
  ];

  const days = ['Oct 10', 'Oct 11', 'Oct 12', 'Oct 13', 'Oct 14', 'Oct 15'];
  const startDayIndex = 10; // Corresponds to Oct 10

  // We need a unique list of task names for the YAxis
  const taskNames = tasks.map(task => task.name);

  // Recharts needs data structured per Y-axis category, with segments
  // This transformation is more complex for a true Gantt view.
  // A common approach is to treat each task as a Y-axis item, and use two Bars per task:
  // one for the "start offset" and one for the "duration".
  const rechartsData = tasks.map(task => {
    return {
      name: task.name,
      // The 'start' is the "empty" duration before the task actually begins on the chart
      startOffset: task.start - startDayIndex,
      // The 'duration' is the actual length of the task
      duration: task.duration,
      color: task.color
    };
  });

  // Custom Tick for YAxis to align labels
  const CustomYAxisTick = (props) => {
    const { x, y, payload } = props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={-4} textAnchor="end" fill="#666" fontSize="0.9em">
          {payload.value}
        </text>
      </g>
    );
  };

  // Custom Tooltip for better display
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const task = payload[0].payload;
      return (
        <div className="custom-tooltip-recharts">
          <p className="label">{`${task.name}`}</p>
          <p className="intro" style={{ color: task.color }}>
            Duration: {task.duration} days
          </p>
          <p className="desc">Starts day: {task.start}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="gantt-chart-container-recharts">
      <div className="gantt-chart-header-recharts">
        <h2>Gantt Chart for Evidence Plan in Cheque Bounce Case</h2>
        <button className="close-button-recharts">×</button>
      </div>
      <ResponsiveContainer width="100%" height={tasks.length * 40 + 100}>
        <BarChart
          layout="horizontal"
          data={rechartsData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barCategoryGap="20%" // Adjust gap between bars
          barGap={0}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis
            type="number"
            dataKey="duration"
            domain={[0, startDayIndex + days.length - startDayIndex]} // Range from 0 to total days covered
            tickFormatter={(value) => {
              const dayOffset = startDayIndex + value;
              const date = new Date(2023, 9, dayOffset); // Assuming Oct 2023 for dates
              return `Oct ${date.getDate()}`;
            }}
            interval={0} // Show all day ticks
            ticks={Array.from({ length: days.length + 1 }, (_, i) => i)} // 0 to 6 for 6 days
            padding={{ left: 10, right: 10 }}
          />
          <YAxis
            type="category"
            dataKey="name"
            tick={<CustomYAxisTick />}
            width={120}
          />
          <Tooltip content={<CustomTooltip />} />
          {/* Loop through each task and create two bars: one for offset, one for duration */}
          {tasks.map((task, index) => (
            <Bar
              key={`bar-offset-${task.id}`}
              dataKey="startOffset"
              stackId={task.id} // Stack on the same ID
              fill="transparent" // Make the offset bar transparent
              isAnimationActive={false} // Disable animation for a static Gantt view
            />
          ))}
          {tasks.map((task, index) => (
            <Bar
              key={`bar-duration-${task.id}`}
              dataKey="duration"
              stackId={task.id} // Stack on the same ID
              fill={task.color}
              // This is a bit of a hack: Recharts' Bar component doesn't directly support borderRadius on the bar itself,
              // but you can often achieve it via custom shapes if needed. For simplicity, we omit it here.
              isAnimationActive={false}
            />
          ))}

          {/* Add vertical lines for each day to mimic the grid from the original image */}
          {Array.from({ length: days.length + 1 }, (_, i) => {
            const dayValue = i; // Represents the day index from startDayIndex
            return (
              <ReferenceLine
                key={`day-line-${i}`}
                x={dayValue}
                stroke="#e0e0e0"
                strokeDasharray="3 3"
              />
            );
          })}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GanttChartRecharts;
