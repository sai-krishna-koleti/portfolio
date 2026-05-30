import profile from "./assets/profile.jpeg";
import Chatbot from "./components/Chatbot";

export default function Portfolio() {

  const skills = [
    "Python",
    "LangChain",
    "RAG",
    "FAISS",
    "ChromaDB",
    "Streamlit",
    "LLM's",
    "Git & GitHub",
    "Postgresql",
  ];

  const projects = [
    {
      title: "Conversational PDF Q&A Chatbot using RAG and LangChain",
      description:
        "Developed a conversational AI chatbot that allows users to chat with PDF documents using RAG, LangChain, and Vector Databases with chat history support for contextual responses.",
      tech: ["LangChain","RAG", "ChromaDB", "Groq","Hugging Face Embeddings"],
    },
    {
      title: "RAG-based Document Question Answering using Llama3 and Groq API",
      description:
        "Built a Retrieval-Augmented Generation (RAG) application using Llama3 and Groq API to answer questions from uploaded documents with semantic search capabilities.",
      tech: ["LangChain", "RAG", "FAISS","Groq", "Ollama Embeddings"],
    },
    {
      title: "AI SQL Assistant using LangChain Agents and SQL Toolkit",
      description:
        "Created an AI-powered SQL assistant using LangChain agents and SQL toolkit to interact with databases using natural language queries.",
      tech: ["LangChain", "Groq", "Streamlit","Agents"],
    },
    {
      title: "Search Engine using LangChain Tools and Agents",
      description:
        "Implemented a search engine application using LangChain tools and agents for intelligent information retrieval and automated query handling.",
      tech: ["LangChain", "Groq", "Streamlit","Agents","Tools"],
    },
    {
      title: "Text Summarization with LangChain",
      description:
        "Built a text summarization application using LangChain and LLMs to generate concise summaries from long-form text while preserving key information and context.",
      tech: ["LangChain", "Groq", "Streamlit"],
    },

  ];

  const certifications = [
  {
    title: "Pyhton(Basic)",
    link: "https://www.hackerrank.com/certificates/a31787b77cfe",
  },
  {
    title: "SQL(Basic)",
    link: "https://www.hackerrank.com/certificates/44b0e6e42351",
  },
  {
    title: "Java(Basic)",
    link: "https://www.hackerrank.com/certificates/5acf10419252",
  },
  {
    title: "Python Language",
    link: "https://jyothishmathi.codetantra.com/cert/certificate.jsp?certId=CT635-tnD1ZKe-ccc",
  },
  {
    title: "Complete SQL and Databases Bootcamp:ZTM",
    link: "https://www.udemy.com/certificate/UC-fa2e3943-94e9-4d70-bbc4-8d94b9361491/",
  },
];

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-gradient-to-br from-blue-50 via-white to-cyan-100 relative overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl"></div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative z-10">

        {/* Profile Image */}
        <div className="w-44 h-44 rounded-full border-4 border-blue-300 overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.35)] mb-8">
          <img
            src={profile}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-5xl md:text-7xl font-bold mb-4 text-blue-700">
          Sai Krishna Koleti
        </h2>

        

        <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
        Aspiring AI Engineer with hands-on experience in Python, LangChain, RAG, Vector Databases, and LLM applications through practical projects.        </p>

       <div className="mt-10 flex flex-wrap gap-5 justify-center">

        <a
          href="https://github.com/sai-krishna-koleti"
          target="_blank"
          rel="noopener noreferrer"
          className="
          px-6 py-3 rounded-2xl
          bg-white/70
          backdrop-blur-xl
          border border-blue-100
          shadow-lg
          hover:scale-105
          hover:bg-white
          transition-all duration-300
          font-semibold
          "
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/sai-krishna-113265258/"
          target="_blank"
          rel="noopener noreferrer"
          className="
          px-6 py-3 rounded-2xl
          bg-white/70
          backdrop-blur-xl
          border border-blue-100
          shadow-lg
          hover:scale-105
          hover:bg-white
          transition-all duration-300
          font-semibold
          "
        >
          LinkedIn
        </a>

        <a
          href="https://www.hackerrank.com/profile/kittukittu_02468"
          target="_blank"
          rel="noopener noreferrer"
          className="
          px-6 py-3 rounded-2xl
          bg-white/70
          backdrop-blur-xl
          border border-blue-100
          shadow-lg
          hover:scale-105
          hover:bg-white
          transition-all duration-300
          font-semibold
          "
        >
          HackerRank
        </a>

      </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 max-w-6xl mx-auto relative z-10">

        <h2 className="text-4xl font-bold mb-10 text-blue-700">
          About Me
        </h2>

        <div className="bg-white/70 backdrop-blur-xl border border-blue-100 rounded-3xl p-8 shadow-xl">

          <p className="text-lg leading-relaxed text-slate-600">
            I am passionate about learning Generative AI and building AI-powered applications using Python, LangChain, RAG, and Vector Databases. I enjoy exploring modern AI technologies through hands-on projects and continuously improving my technical skills.
          </p>

        </div>
      </section>

      {/* Skills */}
      <section className="py-24 px-6 relative z-10">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold mb-12 text-blue-700">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {skills.map((skill, index) => (
              <div
                key={index}
                className="
                bg-white/70
                backdrop-blur-xl
                border border-blue-100
                rounded-3xl
                p-6
                text-center
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-2
                hover:scale-105
                hover:bg-white
                hover:shadow-2xl
                hover:border-blue-300
                cursor-pointer
                "
              >
                <p className="font-semibold text-slate-700">
                  {skill}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">

        <h2 className="text-4xl font-bold mb-12 text-blue-700">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
              bg-white/70
              backdrop-blur-xl
              border border-blue-100
              rounded-3xl
              overflow-hidden
              shadow-xl
              transition-all
              duration-500
              hover:-translate-y-3
              hover:bg-white
              hover:shadow-2xl
              hover:border-blue-300
              "
            >

              <div className="p-8">

                <h3 className="text-2xl font-bold mb-4 text-slate-800">
                  {project.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">

                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}

                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Experience */}
      <section className="py-24 px-6 max-w-6xl mx-auto relative z-10">

        <h2 className="text-4xl font-bold mb-12 text-blue-700">
          Experience
        </h2>
        
        <div className="bg-white/70 backdrop-blur-xl border border-blue-100 rounded-3xl p-8 shadow-xl">

          <h3 className="text-2xl font-bold mb-2">
            Coding Club India | Web developer Intern
          </h3>

          <p className="text-blue-600 mb-4">
            June 2023- Nov 2023
          </p>

          <ul className="list-disc list-inside text-slate-600 space-y-2">
            <li>Utilized HTML, CSS, and JavaScript to ensure a smooth user experience.</li>
            <li>Developed innovative front-end components</li>
          </ul>

        </div>
        <br/>
        <div className="bg-white/70 backdrop-blur-xl border border-blue-100 rounded-3xl p-8 shadow-xl">

          <h3 className="text-2xl font-bold mb-2">
            Tata Consultancy Services
          </h3>

          <p className="text-blue-600 mb-4">
            Feb 6 2025 - Present
          </p>

          <ul className="list-disc list-inside text-slate-600 space-y-2">
            <li>Built RAG pipelines using LangChain</li>
            <li>Implemented vector search using FAISS</li>
            <li>Worked with OpenAI APIs and Python</li>
          </ul>

        </div>
      </section>

      {/* Education */}
      <section className="py-24 px-6 max-w-6xl mx-auto relative z-10">

        <h2 className="text-4xl font-bold mb-12 text-blue-700">
          Education
        </h2>

        <div className="bg-white/70 backdrop-blur-xl border border-blue-100 rounded-3xl p-8 shadow-xl">

          <h3 className="text-2xl font-bold mb-2">
            Jyothishmathi Institute of Technological Sciences
          </h3>

          <p className="text-blue-600 mb-2">
            2020 - 2024
          </p>
          
           <p className="text-slate-600">
           Bachelor of Technology (B.Tech)
          </p>

          <p className="text-slate-600">
            Computer Science Engineering
          </p>

           <p className="text-slate-600">
          Percentage : 70%
          </p>
          
        </div>
        <br/>
        <div className="bg-white/70 backdrop-blur-xl border border-blue-100 rounded-3xl p-8 shadow-xl">

          <h3 className="text-2xl font-bold mb-2">
          Telangana State Model School & Jr College
          </h3>

          <p className="text-blue-600 mb-2">
            2018 - 2020
          </p>
          
           <p className="text-slate-600">
          Intermediate
          </p>

          <p className="text-slate-600">
            MPC
          </p>

           <p className="text-slate-600">
          Percentage : 87%
          </p>

        </div>
        <br/>
        <div className="bg-white/70 backdrop-blur-xl border border-blue-100 rounded-3xl p-8 shadow-xl">

          <h3 className="text-2xl font-bold mb-2">
          Montessori High School
          </h3>

          <p className="text-blue-600 mb-2">
            2017 - 2028
          </p>
          
           <p className="text-slate-600">
          SSC
          </p>

           <p className="text-slate-600">
          Percentage : 85%
          </p>


        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-6 max-w-6xl mx-auto relative z-10">

  <h2 className="text-4xl font-bold mb-12 text-blue-700">
    Certifications
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

    {certifications.map((cert, index) => (
      <a
        key={index}
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        className="
        bg-white/70
        backdrop-blur-xl
        border border-blue-100
        rounded-3xl
        p-6
        shadow-lg
        transition-all
        duration-500
        hover:-translate-y-2
        hover:bg-white
        hover:shadow-2xl
        hover:border-blue-300
        cursor-pointer
        block
        "
      >
        <h3 className="font-semibold text-slate-700">
          {cert.title}
        </h3>

        <p className="mt-3 text-sm text-blue-600">
          View Certificate →
        </p>
      </a>
    ))}

  </div>
</section>

      {/* Contact */}
      <section className="py-24 px-6 text-center relative z-10">

        <h2 className="text-4xl font-bold mb-6 text-blue-700">
          Contact
        </h2>

        <p className="text-lg text-slate-600">
          saikrishna.koleti12@gmail.com<br/>
          +91 8374757544
        </p>

      </section>

      <Chatbot />
      
    </div>
  );
}