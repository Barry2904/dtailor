// const Sidebar = () => {
//     return (
//       <div style={{ display: 'flex', height: '100vh' }}>
//         {/* Sidebar */}
//         {/* <div style={{ flex: 2, backgroundColor: '#A4D3F5', padding: '20px' }}> */}
//         <div style={{ width: '20%', backgroundColor: '#A4D3F5', padding: '20px' }}>
//           <p>Sidebar (20%)</p>
//         </div>
  
//         {/* Main Content */}
//         {/* <div style={{ flex: 8, backgroundColor: '#ffffff', padding: '20px' }}>
//           <p>Main Content (80%)</p>
//         </div> */}
//       </div>
//     );
//   };
  
//   export default Sidebar;

const Sidebar: React.FC = () => {
  const sections = [
    {
      heading: "Heading 1",
      subHeadings: [
        { title: "Sub-heading 1.1", link: "/heading1/sub1" },
        { title: "Sub-heading 1.2", link: "/heading1/sub2" },
        { title: "Sub-heading 1.3", link: "/heading1/sub3" }
      ]
    },
    {
      heading: "Heading 2",
      subHeadings: [
        { title: "Sub-heading 2.1", link: "/heading2/sub1" },
        { title: "Sub-heading 2.2", link: "/heading2/sub2" },
        { title: "Sub-heading 2.3", link: "/heading2/sub3" }
      ]
    },
    {
      heading: "Heading 3",
      subHeadings: [
        { title: "Sub-heading 2.1", link: "/heading2/sub1" },
        { title: "Sub-heading 2.2", link: "/heading2/sub2" },
        { title: "Sub-heading 2.3", link: "/heading2/sub3" }
      ]
    },
    {
      heading: "Heading 4",
      subHeadings: [
        { title: "Sub-heading 2.1", link: "/heading2/sub1" },
        { title: "Sub-heading 2.2", link: "/heading2/sub2" },
        { title: "Sub-heading 2.3", link: "/heading2/sub3" }
      ]
    },
    {
      heading: "Heading 5",
      subHeadings: [
        { title: "Sub-heading 2.1", link: "/heading2/sub1" },
        { title: "Sub-heading 2.2", link: "/heading2/sub2" },
        { title: "Sub-heading 2.3", link: "/heading2/sub3" }
      ]
    },
    {
      heading: "Heading 6",
      subHeadings: [
        { title: "Sub-heading 2.1", link: "/heading2/sub1" },
        { title: "Sub-heading 2.2", link: "/heading2/sub2" },
        { title: "Sub-heading 2.3", link: "/heading2/sub3" }
      ]
    },
    // Add more sections as needed #E7F1FF #A4D3F5
  ];

  return (
    <div style={{ width: '15%', backgroundColor: '#A4D3F5', padding: '20px', height: '100%', overflowY: 'auto' }}>
      {sections.map((section) => (
        <details key={section.heading} style={{ marginBottom: '10px' }} open>
          <summary style={{ cursor: 'pointer', fontSize: '1.2em' }}>{section.heading}</summary>
          <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
            {section.subHeadings.map((subHeading) => (
              <li key={subHeading.title}>
                <a href={subHeading.link} style={{ textDecoration: 'none', color: '#000' }}>
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





  