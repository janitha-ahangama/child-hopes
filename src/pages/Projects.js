import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, storage } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline'
import Header from '../components/header';
import Footer from '../components/footer'
import Footer_bottom from '../components/footer_bottom'
import Loader from '../components/loader'

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [donationFiles, setDonationFiles] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDonationFiles = async () => {
      try {
        const donationFilesRef = ref(storage, 'donation-files');
        const listResult = await listAll(donationFilesRef);
        const filesPromises = listResult.items.map(async (fileRef) => {
          const url = await getDownloadURL(fileRef);
          return { name: fileRef.name, url };
        });
        const files = await Promise.all(filesPromises);
        setDonationFiles(files);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching donation files:', error);
        setLoading(false);
      }
    };

    fetchDonationFiles();
  }, []);

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

  const downloadFile = (file) => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = file.url;
    link.download = file.name;
    // Trigger the click event
    link.click();
    // Remove the temporary anchor element
    link.remove();
};

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
              Our Projects
            </h1>
            <p className="text-lg leading-8 text-black text-center mb-12">
              Discover the impactful projects we have undertaken to improve the
              lives of children and their communities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                  onClick={() => navigate(`/project/${project.id}`)}
                >
                  <img
                    src={project.projectImagesUrls[0]}
                    alt={project.projectName}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-black mb-4">
                      {project.projectName}
                    </h3>
                    <h3 className="text-xl text-black mb-4">
                      {project.location}
                    </h3>
                    {/* <p className="text-lg leading-8 text-black mb-4">{project.description}</p> */}
                  </div>
                </div>
              ))}
            </div>
            <h1 className="text-2xl font-bold text-center text-black mb-8 mt-12">
              Donation Files
            </h1>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">
                      File Name
                    </th>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">
                      Download
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {donationFiles.map((file, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4 border-b border-gray-200">
                        {file.name}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200">
                        <button
                          type="button"
                          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                          onClick={() => downloadFile(file)}
                        >
                          <DocumentArrowDownIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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