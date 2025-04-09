import React, { useState, useEffect, useRef } from 'react';
import p1 from '../assets/prj-02.jpg';
import p2 from '../assets/prj-03.jpg';
import p3 from '../assets/prj-04.jpg';
import p4 from '../assets/prj-05.jpg';
import '../styles/components.scss';

function DocTabs({ documentContent }) {
  const [activeSection, setActiveSection] = useState(documentContent[0]?.id || null);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -80% 0px', // Adjust to fine-tune active section detection
        threshold: 0,
      }
    );

    documentContent.forEach((section) => {
      if (sectionRefs.current[section.id]) {
        observer.observe(sectionRefs.current[section.id]);
      }
    });

    return () => observer.disconnect();
  }, [documentContent]);

  const scrollToSection = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Fixed Sticky Left Sidebar */}
      <aside className="w-64 border-r border-gray-1 00 p-3 sticky top-0 h-screen overflow-y-auto">
        <nav>
          <ul className="">
            {documentContent.map((section) => (
              <li
                key={section.id}
                /*className={`${
                  activeSection === section.id ? 'border-l-4 border-blue-500' : 'text-gray-700'
                }`}*/
              >
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`relative w-full text-left py-4 px-3 border-l-4 hover:bg-gray-100 focus:outline-none ${
                    activeSection === section.id ? 'bg-white text-blue-600 font-medium border-blue-500' : 'text-gray-700'
                  }`}
                >
                  <h3>{section.title}</h3>
                  <p className="text-xs text-gray-600 pt-2">{section.place}</p>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Document Content */}
      <main className="flex-1 overflow-y-auto p-6">
        {documentContent.map((section) => (
          <section
            key={section.id}
            id={section.id}
            ref={(el) => (sectionRefs.current[section.id] = el)}
            className="py-8"
          >
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
            {/* Render your actual section content here based on the 'section' data */}
            <img src={p1} alt={´Proyecto ${}´} />
            <p>Content for {section.title}...</p>
            <p>More content...</p>
            <div style={{ height: '300px' }}></div> {/* Example spacing */}
          </section>
        ))}
      </main>
    </div>
  );
}

// Example Usage:
function Projects() {
  const contentStructure = [
    { id: 'introduction', title: 'Proyecto X', place: 'Miguel Hidalgo, CDMX',
      customer: 'Torre Pemex 1',
      content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
     },
    { id: 'section1', title: 'Proyecto Y', place: 'Miguel Hidalgo, CDMX',
      customer: 'Torre Pemex 2',
      content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
     },
    { id: 'section2', title: 'Proyecto Z', place: 'Miguel Hidalgo, CDMX',
      customer: 'Torre Pemex 3',
      content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
     },
    { id: 'conclusion', title: 'Proyecto Z2', place: 'Miguel Hidalgo, CDMX',
      customer: 'Torre Pemex 3',
      content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
     },
  ];

  return (
    <div className="container mx-auto">
      <DocTabs documentContent={contentStructure} />
    </div>
  );
}

export default Projects;