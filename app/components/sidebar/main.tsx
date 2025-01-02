"use client";
import { useState } from 'react';

const Sidebar = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const handleClick = (title: string) => {
    setSelected(title);  // Set selected item
  };
  const sections = [
    {
      heading: "Welcome",
      subHeadings: [
        { title: "Table of Content", link: "/heading1/sub1" },
        { title: "Core Concepts", link: "/heading1/sub2" },
        { title: "Release Notes", link: "/heading1/sub3" }
      ]
    },
    {
      heading: "Getting Started with Andromeda Security",
      subHeadings: [
        // { title: "Sub-heading 2.1", link: "/heading2/sub1" },
        // { title: "Sub-heading 2.2", link: "/heading2/sub2" },
        // { title: "Sub-heading 2.3", link: "/heading2/sub3" }
      ]
    },
    {
      heading: "Navigating the UI",
      subHeadings: [
        // { title: "Sub-heading 2.1", link: "/heading2/sub1" },
        // { title: "Sub-heading 2.2", link: "/heading2/sub2" },
        // { title: "Sub-heading 2.3", link: "/heading2/sub3" }
      ]
    },
    {
      heading: "Security Admin Resources",
      subHeadings: [
        { title: "Inventory Discovery", link: "/heading2/sub1" },
        { title: "Understanding Risks and Operational Insights", link: "/heading2/sub2" },
      ]
    },
    // {
    //   heading: "Heading 5",
    //   subHeadings: [
    //     { title: "Sub-heading 2.1", link: "/heading2/sub1" },
    //     { title: "Sub-heading 2.2", link: "/heading2/sub2" },
    //     { title: "Sub-heading 2.3", link: "/heading2/sub3" }
    //   ]
    // },
    // {
    //   heading: "Heading 6",
    //   subHeadings: [
    //     { title: "Sub-heading 2.1", link: "/heading2/sub1" },
    //     { title: "Sub-heading 2.2", link: "/heading2/sub2" },
    //     { title: "Sub-heading 2.3", link: "/heading2/sub3" }
    //   ]
    // },
    // Add more sections as needed #E7F1FF #A4D3F5
  ];

  // return (
  //   // <div style={{ width: '15%', backgroundColor: '#A4D3F5', padding: '20px', height: '100%', overflowY: 'auto' }}>
  //     <div className="md:w-[17rem] md:min-w-[17rem] md:sticky md:left-1 md:pt-8 bg-custom-blue">
  //     {sections.map((section) => (
  //       <details key={section.heading} style={{ marginBottom: '10px' }} open>
  //         <summary style={{ cursor: 'pointer', fontSize: '1.2em' }}>{section.heading}</summary>
  //         <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
  //           {section.subHeadings.map((subHeading) => (
  //             <li key={subHeading.title}>
  //               <a href={subHeading.link} style={{ textDecoration: 'none', color: '#000' }}>
  //                 {subHeading.title}
  //               </a>
  //             </li>
  //           ))}
  //         </ul>
  //       </details>
  //     ))}
  //   </div>
  // );
  
  return (
    <div className="w-[20%] h-[100%] sticky left-0 pt-8 shadow-lg overflow-y-auto bg-blue-50 border-r border-blue-200">
      {sections.map((section, index) => (
        <details key={index} className="mb-4 border border-blue-200 rounded-lg" open={index === 0}>
          <summary className="cursor-pointer text-xl font-bold px-6 py-4 bg-blue-100 rounded-t-lg hover:bg-blue-200 transition duration-200">
            {section.heading}
          </summary>
          <ul className="px-10 py-3 space-y-3">
            {section.subHeadings.map((subHeading, subIndex) => (
              <li 
                key={`${index}-${subIndex}`}  // Ensure unique and stable keys
                onClick={() => handleClick(subHeading.title)}
                className={`text-md hover:text-blue-700 transition duration-150 rounded-lg font-bold ${
                  selected === subHeading.title ? 'bg-blue-100 underline' : ''
                }`}
              >
                <a
                  href={subHeading.link}
                  className={`block px-4 py-2 rounded-md ${
                    selected === subHeading.title ? 'bg-blue-100 underline' : 'hover:bg-blue-100 hover:underline text-gray-800'
                  }`}
                >
                  {subHeading.title}
                </a>
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
};

export default Sidebar; 