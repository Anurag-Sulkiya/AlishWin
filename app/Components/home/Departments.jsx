'use client';
import Image from 'next/image';

const DepartmentCard = ({ imageSrc, title, description, iconSize = 40 }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className={`bg-emerald-400 p-6 rounded-full mb-4`}>
        <Image 
          src={imageSrc}
          alt={title}
          width={iconSize}
          height={iconSize}
          className={`w-[${iconSize}px] h-[${iconSize}px]`}
        />
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Departments = () => {
  const departments = [
    {
      imageSrc: '/Images/supplement_pic.png',
      title: 'SUPPLIMENTS',
      description: 'fact that a reader will be distracted by the readable page when looking at its layout.',
      iconSize: 100 // You can customize size for each department
    },
    {
      imageSrc: '/Images/Vitamin.svg',
      title: 'VITAMINS',
      description: 'fact that a reader will be distracted by the readable page when looking at its layout.',
      iconSize: 92 // Different size example
    },
    {
      imageSrc: '/Images/dietNutrition_rmbg.png',
      title: 'DIET & NUTRITION',
      description: 'fact that a reader will be distracted by the readable page when looking at its layout.',
      iconSize: 100 // Another size example
    },
    {
      imageSrc: '/Images/tea&coffee_rmbg.png',
      title: 'Tea & Coffee',
      description: 'fact that a reader will be distracted by the readable page when looking at its layout.',
      iconSize: 100
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">OUR DEPARTMENTS</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Asperiores sunt consectetur impedit nulla molestiae delectus repellat laborum dolores doloremque accusantium
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {departments.map((dept, index) => (
            <DepartmentCard
              key={index}
              imageSrc={dept.imageSrc}
              title={dept.title}
              description={dept.description}
              iconSize={dept.iconSize}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;