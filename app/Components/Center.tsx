'use client';
import { useState, useEffect } from 'react';
import styles from './Center.module.css';
import { FiShuffle, FiUser, FiMapPin, FiPhone, FiMail, FiHome, FiGlobe } from 'react-icons/fi';
import { randomuserloader, RetProps } from '../routes/randomuser';

export default function Center() {
  const [user, setUser] = useState<RetProps | null>(null);
  const [loading, setLoading] = useState(false);
  const [gender,setGender]=useState('male');
  const genders=['male','female'];
  const loadUser = async () => {
    try {
      setLoading(true);
      const data = await randomuserloader({ gender: `${gender}` });
      setUser(data);
    } catch (error) {
      console.error('Error loading user:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>

        {/* Card */}
        {user && (
          <div className={styles.card}>
            {/* Identity */}
            <h3 className={styles.sectionTitle}>Identity</h3>
            <div className={styles.row}><FiUser /> <span>{user.name.first} {user.name.last}</span></div>
            <div className={styles.row}><FiUser /> <span>{user.gender}</span></div>

            {/* Location */}
            <h3 className={styles.sectionTitle}>Location</h3>
            <div className={styles.row}><FiHome /> <span>{user.location.street_name}</span></div>
            <div className={styles.row}><FiMapPin /> <span>{user.location.city}, {user.location.state}</span></div>
            <div className={styles.row}><FiGlobe /> <span>{user.location.country} - {user.location.postcode}</span></div>

            {/* Contact */}
            <h3 className={styles.sectionTitle}>Contact</h3>
            <div className={styles.row}><FiMail /> <span>{user.email}</span></div>
            <div className={styles.row}><FiPhone /> <span>{user.phone}</span></div>
          </div>
        )}
        {/*label of gender */}
        <select className={styles.choose}  value={gender} onChange={(e)=>setGender(e.target.value)}>
            {genders.map((val)=>( <option key={val} className={styles.chooinp}>{val}</option> ))}
        </select>
        {/* Shuffle Button */}
        <button
          className={styles.shuffleBtn}
          onClick={loadUser}
          disabled={loading}
        >
          <FiShuffle size={18} />
          {loading ? 'Loading...' : 'Shuffle User'}
        </button>
      </div>
    </div>
  );
}
