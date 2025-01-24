"use client";
import { useEffect, useState } from "react";
import { getSession, signOut } from "next-auth/react";

export default function HomePage() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state


  useEffect(() => {
    const fetchSession = async () => {
      const currentSession = await getSession();
      setSession(currentSession); // Set session state
      setLoading(false); // Set loading to false once session is fetched
    };
    fetchSession();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Display a loading message or spinner while fetching session
  }

  // If there's no session, display a message asking the user to log in
  if (!session) {
    return <p>You must be logged in to view this page</p>;
  }

  // Function to handle logout
  const handleLogout = async () => {
    await signOut({ redirect: false }); // Prevent automatic redirect
    window.location.href = "/login"; // Manually redirect to the login page
  };

  return (
    <div>
      <h1>Welcome, {session.user.name}!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
