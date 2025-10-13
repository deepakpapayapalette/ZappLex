import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import FormButton from '../../common/FormButton';

export default function CaseLifecycleOverview() {
  const [activeStage, setActiveStage] = useState('Pre-Trial');

  const stages = [
    { name: 'Pre-Trial', count: 50, active: true },
    { name: 'Arguments', count: 20, active: false },
    { name: 'Evidence', count: 60, active: false },
    { name: 'Judgment', count: 20, active: false }
  ];

  const pieData = [
    { name: '>6 months pending', value: 33, color: '#DC2626' },
    { name: '3-6 months pending', value: 33, color: '#CDDC39' },
    { name: '<3 months pending', value: 17, color: '#16A34A' }
  ];

  const caseInfo = {
    title: 'summons issued for June 10, 2025',
    caseNo: 'Case No. CR/138/2025/DEL/056'
  };

  const legendItems = [
    {
      // color: '#ffffff',
      label: 'Pre-Trial: 50 cases (33%)',
      // description: 'Pre-Trial: 50 cases (33%)',
      link: 'view all Pre-Trial cases'
    },
    {
      color: '#DC2626',
      label: 'More Than 6 Months Pending Case',
      // description: 'Pre-Trial: 50 cases (33%)',
      link: 'view all'
    },
    {
      color: '#d4cd00',
      label: 'Between 3-6 Months Pending Case',
      link: 'view all'
    },
    {
      color: '#16A34A',
      label: 'Less Than 3 Months Pending Case',
      link: 'view all'
    }
  ];

  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, name }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.1;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        className="font-semibold text-sm"
      >
        {name}
      </text>
    );
  };

  return (
    <div className="w-full mx-auto   space-top">
      <h1 className="text-3xl font-semibold mb-6">Case Lifecycle Overview</h1>

      {/* Stage Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        {stages.map((stage) => (
          <FormButton
            key={stage.name}
            variant={activeStage === stage.name ? 'contained' : 'outlined'}
            onClick={() => setActiveStage(stage.name)}
            className={`px-6 py-3 rounded-lg font-semibold text-lg transition-colors ${activeStage === stage.name
              ? 'bg-webprimary text-white hove:text-white'
              : ' hover:text-white  hover:bg-active'
              }`}

          >
            {stage.name}({stage.count})
          </FormButton>
        ))}
      </div>

      <div className="grid lg:grid-cols-5  gap-6">
        {/* Pie Chart */}
        <div className="lg:col-span-2">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomLabel}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"

                animationDuration={3000}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Right Side Info */}
        <div className="lg:col-span-3 space-y-4">
          {/* Case Info Card */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-semibold text-lg mb-3">{caseInfo.title}</h3>
            <p className="text-gray-600 mb-3">{caseInfo.caseNo}</p>
            <a href="#" className="text-blue-600 hover:underline font-medium">
              view Case File
            </a>
          </div>

          {/* Legend Items */}
          <div className='grid grid-cols-2 gap-4 '>
            {legendItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-3 mb-2">
                  {item?.color ? (<div
                    className="w-6 h-6 rounded-full flex-shrink-0 mt-1"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  ) : null
                  }
                  <div className="flex-1">
                    <h4 className="font-semibold text-base mb-1">{item.label}</h4>
                    {item.description && (
                      <p className="text-gray-700 mb-2">{item.description}</p>
                    )}
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      {item.link}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* View All Link */}
          {/* <a href="#" className="text-blue-600 hover:underline font-medium inline-block">
            view all
          </a> */}
        </div>
      </div>
    </div>
  );
}
