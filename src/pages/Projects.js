import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Header from '../components/header';
import Footer from '../components/footer'
import Footer_bottom from '../components/footer_bottom'
import Loader from '../components/loader'

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'projects'));
        const projectsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProjects(projectsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <Header />
      {loading ? (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="py-8 sm:py-12 lg:py-12 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-4xl font-bold text-center text-black mb-8">Our Projects</h1>
            <p className="text-lg leading-8 text-black text-center mb-12">
              Discover the impactful projects we have undertaken to improve the lives of children and their communities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map(project => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                  onClick={() => navigate(`/project/${project.id}`)}
                >
                  <img src={project.projectImagesUrls[0]} alt={project.projectName} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-black mb-4">{project.projectName}</h3>
                    <h3 className="text-xl text-black mb-4">{project.location}</h3>
                    {/* <p className="text-lg leading-8 text-black mb-4">{project.description}</p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <Footer />
      <Footer_bottom />
    </div>
  );
};

export default Projects;