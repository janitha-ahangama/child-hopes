import React, { useState } from 'react';
import imageCompression from 'browser-image-compression';
import { useNavigate } from 'react-router-dom';
import { db, storage } from '../config/firebase';
import { collection, addDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    location: '',
    description: '',
    donationFile: null,
    projectImages: [],
  });

  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log the formData to debug
    console.log('Submitting project with formData:', formData)

    try {
      const newProjectRef = doc(collection(db, 'projects'));

      // Check if donationFile is not null before accessing its properties
      let donationFileUrl = '';
      if (formData.donationFile) {
        const donationFileName = formData.donationFile.name;
        const donationFileExtension = donationFileName ? donationFileName.split('.').pop() : '';
        if (donationFileExtension) {
          const donationFileRef = ref(storage, `donation-files/${donationFileName}`);
          await uploadBytes(donationFileRef, formData.donationFile);
          donationFileUrl = await getDownloadURL(donationFileRef);
        } else {
          console.error('Donation file extension is missing.');
        }
      }
      
      // Ensure projectImages are not empty before accessing their properties
      const projectImagesUrls = [];
      for (let i = 0; i < formData.projectImages.length; i++) {
        const image = formData.projectImages[i];
        const imageName = image.name;
        const imageExtension = imageName ? imageName.split('.').pop() : '';
        const imageRef = ref(storage, `project-images/${newProjectRef.id}-${i + 1}.${imageExtension}`);

        // Compress the image
        const options = {
          maxSizeMB: 1, // Maximum size in MB, change as needed
          maxWidthOrHeight: 800, // Maximum width or height, change as needed
          useWebWorker: true, // Use web worker for faster compression
        };

        const compressedImage = await imageCompression(image, options);



        await uploadBytes(imageRef, compressedImage);
        const downloadUrl = await getDownloadURL(imageRef);
        projectImagesUrls.push(downloadUrl);
      }

      // Add project data to Firestore
      const projectData = {
        projectName: formData.projectName,
        location: formData.location,
        description: formData.description,
        donationFileUrl,
        projectImagesUrls,
      };

      await addDoc(collection(db, 'projects'), projectData);

      setFormData({
        projectName: '',
        location: '',
        description: '',
        donationFile: null,
        projectImages: [],
      });

      navigate('/admin');
    } catch (error) {
      console.error('Error adding project:', error);
      alert('An error occurred while adding the project. Please try again.');
    }
  };

  return (
    <div className="py-16 sm:py-24 lg:py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-center text-black mb-8">
          Add a New Project
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
        <div>
            <label htmlFor="projectName" className="block text-lg font-medium text-black">
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
            <label htmlFor="location" className="block text-lg font-medium text-black">
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
            <label htmlFor="description" className="block text-lg font-medium text-black">
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
              required
            />
          </div>
          {/* Project images input */}
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
              required
            />
          </div>
          {/* Submit button */}
          <button
            type="submit"
            className="inline-block px-8 py-3 text-lg font-semibold text-white bg-black rounded-md hover:bg-gray-800"
          >
            Add Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;