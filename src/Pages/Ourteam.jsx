import React, { useEffect, useRef } from "react";

const team = [
  {
    name: "Chaniru",
    role: "Founder & Lead Planner",
    photo: "/team/chaniru.jpg",
  },
  {
    name: "Senuthi",
    role: "AI & Tech Specialist",
    photo: "/team/senuthi.jpg",
  },
  {
    name: "Kavithaka",
    role: "Cultural Consultant",
    photo: "/team/kavithaka.jpg",
  },
  {
    name: "Minuri",
    role: "Vendor Relations",
    photo: "/team/minuri.jpg",
  },
  {
    name: "Dasuni",
    role: "Vendor Relations",
    photo: "/team/dasuni.jpg",
  },
];

export default function Ourteam() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = Array.from(container.querySelectorAll(".team-anim"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            
          }
        });
      },
      { threshold: 0.5 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-yellow-50 py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-serif font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate professionals dedicated to making your wedding magical.
          </p>
        </div>
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
          {team.map((member, idx) => (
            <div
              key={member.name}
              className={`flex flex-col items-center team-anim ${idx < 3 ? "swipe-left" : "swipe-down"}`}
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <div className="p-2">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-lg border-4 border-amber-200"
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}