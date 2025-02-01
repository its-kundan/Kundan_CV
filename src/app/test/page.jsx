"use client"
const EmbedWebsite = () => {
  return (
    <div className="w-1/2 h-800 mx-auto flex justify-center items-center overflow-hidden border border-gray-300 rounded-lg shadow-md">
      <iframe
        src="https://codeforces.com/profile/its_kundan"
        title="Minimized Embedded Website"
        className="w-[1000px] h-[600px] scale-[0.3] origin-top-left border-none"
      ></iframe>
    </div>
  );
};

export default EmbedWebsite;
