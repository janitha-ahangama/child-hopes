import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db, storage } from '../config/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { ref, deleteObject, getDownloadURL, uploadBytes } from 'firebase/storage';
import Loader from '../components/loader'

const EditProject = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    projectName: '',
    location: '',
    description: '',
    donationFile: null,
    projectImages: [],
    projectImagesUrls: [],
  });

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const docRef = doc(db, 'projects', projectId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setFormData({ ...docSnap.data(), donationFile: null });
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'donationFile') {
      setFormData({
        ...formData,
        donationFile: files[0],
      });
    } else if (name === 'projectImages') {
      setFormData({
        ...formData,
        projectImages: Array.from(files),
      });
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const projectRef = doc(db, 'projects', projectId);
      let donationFileUrl = formData.donationFileUrl;

      if (formData.donationFile) {
        const donationFileName = formData.donationFile.name;
        const donationFileRef = ref(storage, `donation-files/${donationFileName}`);
        await uploadBytes(donationFileRef, formData.donationFile);
        donationFileUrl = await getDownloadURL(donationFileRef);
      }

      const projectImagesUrls = [...(formData.projectImagesUrls || [])];
      if (formData.projectImages && formData.projectImages.length > 0) {
        for (let i = 0; i < formData.projectImages.length; i++) {
          const image = formData.projectImages[i];
          const imageExtension = image.name.split('.').pop();
          const imageRef = ref(storage, `project-images/${projectId}-${i + 1}.${imageExtension}`);
          await uploadBytes(imageRef, image);
          const downloadUrl = await getDownloadURL(imageRef);
          projectImagesUrls.push(downloadUrl);
        }
      }

      await updateDoc(projectRef, {
        projectName: formData.projectName,
        location: formData.location,
        description: formData.description,
        donationFileUrl,
        projectImagesUrls,
      });
      setLoading(false);
      navigate('/admin');
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };

  const handleDeleteFile = async (fileUrl) => {
    try {
      // Delete the file from Firebase Storage
      const fileRef = ref(storage, fileUrl);
      await deleteObject(fileRef);

      // Update the state and Firestore document to remove the file URL
      setFormData(prevState => ({
        ...prevState,
        donationFileUrl: '',
      }));

      // Remove the file URL from the state
      const updatedProjectImagesUrls = formData.projectImagesUrls.filter(url => url !== fileUrl);
      setFormData({
        ...formData,
        projectImagesUrls: updatedProjectImagesUrls,
      });

      // Update the Firestore document to remove the file URL
      const projectRef = doc(db, 'projects', projectId);
      await updateDoc(projectRef, {
        projectImagesUrls: updatedProjectImagesUrls,
        donationFileUrl: '',
      });

    } catch (error) {
      console.error('Error deleting file:', error);
    }
  };

  return (
    <div>
      {loading ? (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="py-8 sm:py-12 lg:py-12 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <button
                onClick={() => navigate(-1)}
                className="mt-6 inline-block px-8 py-3 text-lg font-semibold text-white bg-sky-700 rounded-md hover:bg-gray-800"
            >
                Back
            </button>
            <h1 className="text-4xl font-bold text-center text-black mb-8">
              Edit Project
            </h1>
            <form onSubmit={handleUpdate} className="space-y-6">
              <div>
                <label
                  htmlFor="projectName"
                  className="block text-lg font-medium text-black"
                >
                  Project Name
                </label>
                <input
                  type="text"
                  id="projectName"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="block text-lg font-medium text-black"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-lg font-medium text-black"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="donationFile"
                  className="block text-lg font-medium text-black"
                >
                  Donation File (Excel)
                </label>
                <input
                  type="file"
                  id="donationFile"
                  name="donationFile"
                  accept=".xlsx, .xls"
                  onChange={handleFileChange}
                  className="mt-2 block w-full text-lg text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                />
                {formData.donationFileUrl && (
                  <div className="mt-2">
                    <p className="text-lg font-medium text-black">Uploaded Donation File:</p>
                    <div className="flex items-center mt-1">
                      <span className="text-blue-500 underline cursor-pointer" onClick={() => window.open(formData.donationFileUrl, "_blank")}>
                        Donation file
                      </span>
                      <button className="ml-4 inline-block px-1 py-1 text-lg font-semibold text-white bg-red-700 rounded-md hover:bg-gray-800" onClick={() => handleDeleteFile(formData.donationFileUrl)}>
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <label
                  htmlFor="projectImages"
                  className="block text-lg font-medium text-black"
                >
                  Project Images
                </label>
                <input
                  type="file"
                  id="projectImages"
                  name="projectImages"
                  accept=".png, .jpg"
                  multiple
                  onChange={handleFileChange}
                  className="mt-2 block w-full text-lg text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-black">
                  Uploaded Images
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                  {formData.projectImagesUrls.map((url, index) => (
                    <div key={index} className="relative">
                      <img
                        src={url}
                        alt={`Project Image ${index + 1}`}
                        className="w-full h-32 object-cover rounded-md"
                      />
                      <button
                        onClick={() => handleDeleteFile(url)}
                        className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <button
                type="submit"
                className="inline-block px-8 py-3 text-lg font-semibold text-white bg-sky-900 rounded-md hover:bg-gray-800"
              >
                Update Project
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProject;