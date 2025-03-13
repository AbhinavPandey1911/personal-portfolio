import React, { useState } from 'react'

export const About = () => {

  const frontendSkills = ["React", "Angular", "TailwindCSS", "Bootstrap"]
  const backendSkills = ["Node.js", "Express.js", "Spring Boot", "Flask", "AWS"]

  const [isOpenNotebook, setisOpenNotebook] = useState(false);

  const [isOpenWorkExperience, setisOpenWorkExperience] = useState(false);
  
  
  const handleMouseEnterNotebook = () => {
    setisOpenNotebook(!isOpenNotebook);
  };

  const handleMouseLeaveNotebook = () => {
    setisOpenNotebook(!isOpenNotebook);
  };


  const handleMouseEnterWorkExperience = () => {
    setisOpenWorkExperience(!isOpenWorkExperience);
  };

  const handleMouseLeaveWorkExperience = () => {
    setisOpenWorkExperience(!isOpenWorkExperience);
  };

  return (
    <section id="#about" className='min-h-screen flex items-center justify-center py-20'>

      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            I'm a Full Stack Developer based in India. I specialize in
            building websites and web applications that are fast, responsive, and accessible.
            I love to learn new things and share my knowledge with others. My expertise includes
            working with various tech stacks: I have experience in developing robust and scalable
            web applications using Java for the backend and Angular for the frontend, including
            working with Spring Boot, Hibernate, and RESTful APIs to create dynamic and interactive
            user interfaces. I am proficient in the MERN stack, which includes MongoDB, Express.js,
            React, and Node.js, and have built full-stack applications that leverage the power of
            JavaScript across both the client and server sides, ensuring seamless integration and
            performance. Additionally, I have worked with Flask, a lightweight Python web framework,
            to develop web applications, using Flask for the backend along with Jinja2 for templating,
            and integrating with various databases and front-end technologies to deliver comprehensive solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
          <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'
            onMouseEnter={handleMouseEnterNotebook}
            onMouseLeave={handleMouseLeaveNotebook}>
            <h3 className='text-xl font-bold mb-4 '> Education <span className={`${isOpenNotebook ? 'hidden' : ''}`}>📕</span> <span className={`${isOpenNotebook ? '' : 'hidden'}`}>📖</span> </h3>
            <ul className='list-disc list-inside text-gray-300 space-y-2'>
              <li>
                <strong className='text-amber-400'>B.Tech in Computer Science </strong> - UVCE, Bangalore(2020-2024)
              </li>
              <li>
                <span className='text-amber-400'>Relevant Coursework:</span> Data Structures Algorithms, Web Development, Database Management Systems, Operating Systems, Computer Networks, Artificial Intelligence
              </li>
            </ul>
            <div className='mt-4 py-4 my-4 flex justify-center h-60'>
              <img src="https://i.giphy.com/fhAwk4DnqNgw8.webp" alt="Studying GIF" className='rounded-xl' />
            </div>
          </div>

          <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'
          onMouseEnter={handleMouseEnterWorkExperience}
          onMouseLeave={handleMouseLeaveWorkExperience}>
            <h3 className='text-xl font-bold mb-4'> <span className='animated-bow'>👷🏻</span><span className={ isOpenWorkExperience ? 'animated-hammer' : ''}>⚒️</span> Work Experience </h3>
            <div className='space-y-4 text-gray-300'>

              <div>
                <h4 className='font-semibold text-cyan-600'>Associate Software Engineer (Aug 2024 - Current)</h4>
                <p> We handle the provisioning,site governance, and site attestation for sites within the enterprise, ensuring compliance and performance standards.
                  I write and maintain jobs to automate these processes
                  and support the development of web parts to enhance site functionality and user experience.
                </p>
              </div>

              <div>
                <h4 className='font-semibold text-cyan-600'>Software Engineer Intern (Jan 2024 - Jun 2024)</h4>
                <p> Built Bulk Import and Export Utility using Spring Boot REST services with MVC microservices architecture,
                  reducing fetching time from 19 minutes to under 2 minutes for metadata of 220K documents. Implemented chunking
                  for large file uploads and auto-refreshing tokens to handle larger requests.
                </p>
              </div>

              <div>
                <h4 className='font-semibold text-cyan-600'>Software Engineer Summer Intern (April 2023 - Jun 2023)</h4>
                <p> Worked on OAuth 2.0 capability, where I demonstrated the Workflow of Delegated Access, using React and Flask </p>
              </div>



            </div>
          </div>

        </div>
      </div>
    </section >
  )
}
