function SkillCard({ icon, title, description, skills }) {
    return (
      <div className="bg-teal-50 rounded-2xl p-7 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-xl bg-pink-100 flex items-center justify-center">
            {icon}
          </div>
  
          <h3 className="text-2xl font-bold text-taupe-800">
            {title}
          </h3>
        </div>
  
        <p className="text-gray-600 leading-7 mb-6">
          {description}
        </p>
  
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-pink-100 text-pink-700 px-4 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  }
  
  export default SkillCard;