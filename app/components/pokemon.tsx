'use client'
import { useState, useEffect } from "react";
import { getRandomProfileData, ErrorCode } from "../api/api"
import { Error } from './error'
import { ProfileCard } from './profileCard'
import { Pokemon } from '../types/pokemon';

export default function Pokemon() {
  const [profileData, setProfileData] = useState<Pokemon | null>(null)
  const [fetchError, setFetchError] = useState<ErrorCode | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const result = await getRandomProfileData()
    setLoading(false);
    if ('errorCode' in result && result.errorCode) {
      setFetchError({ errorCode: result.errorCode });
    } else {
      setProfileData(result as Pokemon)
    }
  }

  if (fetchError) {
    return <Error errorCode={fetchError.errorCode} />
  }

  if (loading) {
    return (<div className="mx-auto">
      <p>Loading...</p>
      <div className="spinner"></div>
    </div>)
  }

  return (
    <>
      <ProfileCard name={profileData!.name} img={profileData!.imageUrl} phonenr={profileData!.weight} />
      <button onClick={fetchData} className="nextBtn">Ny profil</button>
    </>
  );
}
