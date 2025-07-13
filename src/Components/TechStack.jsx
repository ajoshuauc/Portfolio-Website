
import html5 from '../assets/HTML5.png'
import css from '../assets/CSS3.png'
import javascript from '../assets/Javascript.png'
import python from '../assets/Python.png'
import java from '../assets/Java.png'
import git from '../assets/GitHub.png'
import react from '../assets/React.png'
import nodejs from '../assets/Nodejs.png'
import mongodb from '../assets/MongoDB.png'
import tensorflow from '../assets/tensorflow-original.png'
import numpy from '../assets/numpy.png'
import pandas from '../assets/pandas.png'
import scikitLearn from '../assets/scikit-learn.png'


const techStack = [

  {name: 'HTML', source: html5},
  {name: 'CSS', source: css},
  {name: 'JavaScript', source: javascript},
  {name: 'Python', source: python},
  {name: 'Java', source: java},
  {name: 'Git', source: git},
  {name: 'React', source: react},
  {name: 'NodeJS', source: nodejs},
  {name: 'MongoDB', source: mongodb},
  {name: 'TensorFlow', source: tensorflow},
  {name: 'Numpy', source: numpy},
  {name: 'Pandas', source: pandas},
  {name: 'Scikit-learn', source: scikitLearn},

];

function TechStack() {
  return (
    <section id="TechStack" className="py-16 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-textcolor mb-10">
        Tech Stack
      </h2>

      <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-y-4 gap-x-4 place-items-center">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="bg-cards rounded-sm w-20 h-24 sm:w-24 sm:h-28 md:w-28 md:h-32 flex flex-col items-center justify-center border border-[#2c3e50] hover:border-secondary hover:rounded-2xl hover:shadow-[0_0_12px_#A1F6FF] transition-all duration-200"
          >
            <img
              src={tech.source}
              alt={tech.name}
              className="w-10 h-10 sm:w-12 sm:h-12 mb-1 object-contain"
            />
            <p className="text-xs sm:text-sm text-center text-textcolor font-bold mt-2">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
