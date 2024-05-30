import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../config/firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';
import { storage } from '../config/firebase';
import Header from '../components/admin_header';

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'projects'));
        const projectsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const handleEdit = (projectId) => {
    navigate(`/editproject/${projectId}`);
  };

  const handleDelete = async (projectId) => {
    try {
      await deleteDoc(doc(db, 'projects', projectId));
      const project = projects.find(proj => proj.id === projectId);
      if (project) {
        // Delete donation file
        if (project.donationFileUrl) {
          const donationFileRef = ref(storage, project.donationFileUrl);
          await deleteObject(donationFileRef);
        }

        // Delete project images
        if (project.projectImagesUrls) {
          for (const imageUrl of project.projectImagesUrls) {
            const imageRef = ref(storage, imageUrl);
            await deleteObject(imageRef);
          }
        }

        // Update state
        setProjects(projects.filter(proj => proj.id !== projectId));
      }
    } catch (error) {
      console.error('Error deleting project:', error);
      alert('An error occurred while deleting the project. Please try again.');
    }
  };

  return (
    <div>
      <Header/>
      <div className="py-16 sm:py-24 lg:py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-center text-black mb-8">
            Admin Dashboard
          </h1>
          <a
            href="/projectform"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-8"
          >
            Add Project
          </a>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative border p-4 rounded-md shadow-md"
              >
                <h2 className="text-xl font-bold mb-2">
                  {project.projectName}
                </h2>
                <p className="text-lg mb-2">
                  <strong>Location:</strong> {project.location}
                </p>
                <p className="text-lg mb-2">
                  <strong>Description:</strong> {project.description}
                </p>
                {project.projectImagesUrls &&
                  project.projectImagesUrls.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                      {project.projectImagesUrls.map((url, index) => (
                        <img
                          key={index}
                          src={url}
                          alt={`Project Image ${index + 1}`}
                          className="w-full h-32 object-cover rounded-md"
                        />
                      ))}
                    </div>
                  )}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={() => handleEdit(project.id)}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;