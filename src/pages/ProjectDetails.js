import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import Header from '../components/header';
import ProjectCarousel from '../components/image_carousel';
import Loader from '../components/loader'

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const docRef = doc(db, 'projects', projectId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProject(docSnap.data());
          setLoading(false);
        } else {
          console.error('No such document!');
        }
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };

    fetchProject();
  }, [projectId]);

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
            <h1 className="text-4xl font-bold text-center text-black mb-8">
              {project.projectName}
            </h1>
            <div className="text-lg leading-8 text-black mb-12">
              <p className="mb-8">{project.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-4">
                {project.projectImagesUrls.map((url, index) => (
                  <div key={index}>
                    <img
                      src={url}
                      alt={`Project Image ${index + 1}`}
                      className="w-50 h-full object-cover rounded-md"
                    />
                  </div>
                ))}
              </div>
              {/* <ProjectCarousel projectImagesUrls={project.projectImagesUrls} /> */}
              <button
                onClick={() => navigate(-1)}
                className="mt-6 inline-block px-8 py-3 text-lg font-semibold text-white bg-black rounded-md hover:bg-gray-800"
              >
                Back to Projects
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;