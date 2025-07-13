// import seaLogo from '../assets/sea.png';
import dlsudLogo from '../assets/DLSU-D.png';
import seapps from '../assets/Seapps.png';

function EducAndExpi() {
  return (
    <section id="EducAndExpi" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-textcolor mb-12 text-center">
        Education & Experience
      </h2>

      <div className="grid gap-8 md:grid-cols-2 items-start">
        {/* Experience */}
        <div className="bg-cards border border-[#2c3e50] rounded-xl shadow-lg p-6 flex gap-5 items-start self-start">
          <div className="w-20 h-20 bg-[#1A2E3A] rounded-lg flex items-center justify-center shrink-0">
            <img src={seapps} alt="Company Logo" className="w-12 h-12 object-contain" />
          </div>
          <div className="text-textcolor space-y-1">
            <p className="text-xs uppercase tracking-widest text-slate-300">Experience</p>
            <h3 className="text-lg font-bold text-white">IT Intern</h3>
            <p className="text-sm text-slate-400">June 2024 – August 2024</p>
            <p className="text-md font-medium text-white">Service Economy Applications Inc.</p>
            <p className="text-sm text-slate-300 pt-2 leading-relaxed">
              Developed an employee management system for 50+ employees using Express, Node.js, and MongoDB, following the MVC pattern and implementing CRUD operations. Built and tested APIs with Postman and applied basic security measures like Bcrypt hashing and CORS under a senior engineer’s guidance.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="bg-cards border border-[#2c3e50] rounded-xl shadow-lg p-6 flex gap-5 items-start self-start">
          <div className="w-20 h-20 bg-[#1A2E3A] rounded-lg flex items-center justify-center shrink-0">
            <img src={dlsudLogo} alt="School Logo" className="w-12 h-12 object-contain" />
          </div>
          <div className="text-textcolor space-y-1">
            <p className="text-xs uppercase tracking-widest text-slate-300">Education</p>
            <h3 className="text-lg font-bold text-white">B.S. in Computer Science with Specialization in Intelligent Systems</h3>
            <p className="text-sm text-slate-400">2021 – 2025</p>
            <p className="text-md font-medium text-white">De La Salle University – Dasmariñas</p>
            <p className="text-sm font-medium text-slate-400">GPA: 3.67/4.00</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducAndExpi;
