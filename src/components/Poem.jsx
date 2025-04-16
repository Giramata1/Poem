import React, { useState } from "react";

export default function Poem() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [favoriteColor, setFavoriteColor] = useState("");
  const [hobby, setHobby] = useState("");
  const [petName, setPetName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !address || !favoriteColor || !hobby || !petName) {
      alert("Please fill out all fields");
      setIsSubmitted(false);
    } else {
      setIsSubmitted(true);
      alert("Form submitted");
    }
  };

  const renderPoem = () => {
    if (!isSubmitted) {
      return <em>Fill in the form to reveal your Poem...</em>;
    }
    return (
      <div className="p-4 text-lg">
        <p>
          <strong>
            In the land of <span style={{ color: "royalblue" }}>{address}</span>,<br />
            where the sky is <span style={{ color: "royalblue" }}>{favoriteColor}</span>,<br />
            lived <span style={{ color: "royalblue" }}>{firstName} {lastName}</span>,
          </strong>
        </p>
        <p>
          <strong>
            who loved <span style={{ color: "royalblue" }}>{hobby}</span> so much.<br />
            With their pet <span style={{ color: "royalblue" }}>{petName}</span> always nearby,<br />
            they laughed and played as the sun went down.
          </strong>
        </p>
      </div>
    );
  };

  return (
    <>
      <div className="text-center mt-6 px-4">
        <h1 className="font-bold text-2xl mb-4">Your Poem:</h1>
        {renderPoem()}
      </div>

      <div className="flex justify-center mt-10 px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white-100 p-6 rounded-xl shadow-lg space-y-4"
        >
          <input
            type="text"
            value={firstName}
            placeholder="First Name"
            className="w-full p-3 border rounded-lg"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            value={lastName}
            placeholder="Last Name"
            className="w-full p-3 border rounded-lg"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            value={address}
            placeholder="Address"
            className="w-full p-3 border rounded-lg"
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            value={favoriteColor}
            placeholder="Favorite Color"
            className="w-full p-3 border rounded-lg"
            onChange={(e) => setFavoriteColor(e.target.value)}
          />
          <input
            type="text"
            value={hobby}
            placeholder="Hobby"
            className="w-full p-3 border rounded-lg"
            onChange={(e) => setHobby(e.target.value)}
          />
          <input
            type="text"
            value={petName}
            placeholder="Pet Name"
            className="w-full p-3 border rounded-lg"
            onChange={(e) => setPetName(e.target.value)}
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
