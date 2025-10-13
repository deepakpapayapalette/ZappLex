import React, { useState } from "react";
import { X } from 'lucide-react';

import FormInput from '../../../common/FormInput'
import FormButton from '../../../common/FormButton';

const PleadingsForm = ({ closePopup }) => {
  const [formData, setFormData] = useState({
    party: "",
    facts: "",
    reliefSought: "",
    legalBasis: "",
  });

  const [evidences, setEvidences] = useState([
    { type: "", description: "", file: null },
  ]);

  const parties = ["Plaintiff", "Defendant"];
  const evidenceTypes = ["Document", "Image", "Video", "Audio"];

  // handle text/select change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle evidence change
  const handleEvidenceChange = (index, field, value) => {
    const newEvidences = [...evidences];
    newEvidences[index][field] = value;
    setEvidences(newEvidences);
  };

  // file upload handler
  const handleFileUpload = (index, e) => {
    const file = e.target.files[0];
    if (file && file.size <= 20 * 1024 * 1024) {
      handleEvidenceChange(index, "file", file);
    } else {
      alert("File size should not exceed 20MB");
    }
  };

  // add more evidence
  const handleAddMoreEvidence = () => {
    setEvidences([...evidences, { type: "", description: "", file: null }]);
  };

  // remove evidence section
  const handleRemoveEvidence = (index) => {
    setEvidences(evidences.filter((_, i) => i !== index));
  };

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData, evidences);
    alert("Form Submitted! Check console for data.");
  };

  const handlePreview = () => {
    console.log("Preview Data:", { formData, evidences });
    alert("Preview in console!");
  };

  return (
    <div className="bg-white  p-4 lg:p-8 rounded-2xl shadow">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold mb-4">Pleadings</h2>
        <button className="text-gray-500 hover:text-gray-700"
          onClick={() => closePopup(false)}
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Party Selection */}
        <FormInput
          label="Select Plaintiff/ Defendants"
          name="party"
          value={formData.party}
          onChange={handleChange}
          type="select"
          options={parties}
        />

        {/* Facts */}
        <FormInput
          label="Facts"
          name="facts"
          placeholder="Type Here..."
          value={formData.facts}
          onChange={handleChange}
          type="textarea"
        />

        {/* Relief & Legal Basis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            label="Relief Sought"
            name="reliefSought"
            placeholder="Type Here..."
            value={formData.reliefSought}
            onChange={handleChange}
            type="text"
          />
          <FormInput
            label="Legal Basis"
            name="legalBasis"
            placeholder="Type Here..."
            value={formData.legalBasis}
            onChange={handleChange}
            type="text"
          />
        </div>

        {/* Evidence Section */}
        <h3 className="text-lg font-semibold mt-6">Evidence</h3>

        {evidences.map((ev, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg mb-4 relative bg-gray-50"
          >
            {index > 0 && (
              <button
                type="button"
                className="absolute top-2 right-2 text-red-500 text-sm"
                onClick={() => handleRemoveEvidence(index)}
              >
                ✕
              </button>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <FormInput
                label="Select Evidence Type"
                name="type"
                value={ev.type}
                onChange={(e) =>
                  handleEvidenceChange(index, "type", e.target.value)
                }
                type="select"
                options={evidenceTypes}
              />
              <FormInput
                label="Evidence Description"
                name="description"
                placeholder="Type Here..."
                value={ev.description}
                onChange={(e) =>
                  handleEvidenceChange(index, "description", e.target.value)
                }
                type="text"
              />
            </div>

            {/* Upload Evidence */}
            <div className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-gray-100">
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png,.mp4,.mp3"
                className="hidden"
                id={`file-upload-${index}`}
                onChange={(e) => handleFileUpload(index, e)}
              />
              <label htmlFor={`file-upload-${index}`} className="cursor-pointer">
                <p className="text-sm text-gray-600">
                  <strong>Drag & Drop</strong> or{" "}
                  <span className="text-blue-600 underline">Browse File</span>
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Upload PDF, JPG, PNG, MP4, MP3 (Max 20MB)
                </p>
                {ev.file && (
                  <p className="mt-2 text-green-600 text-sm">
                    Uploaded: {ev.file.name}
                  </p>
                )}
              </label>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={handleAddMoreEvidence}
          className="text-blue-600 text-sm font-medium"
        >
          + Add More
        </button>

        {/* Buttons */}
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <FormButton
            size="large"
            type="button"
            onClick={handleAddMoreEvidence}
            variant="outlined"
          >
            + Add More
          </FormButton>
          <FormButton
            // size="large"
            onClick={handlePreview}
          // className="hover:bg-active"
          >
            Preview
          </FormButton>
          {/* <FormButton size="large" type="submit" variant="filled">
            Submit
          </FormButton> */}
        </div>
      </form>
    </div>
  );
};

export default PleadingsForm;
