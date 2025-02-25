import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/Profile.css';

const Profile = () => {
  const { darkMode } = useTheme();
  const [userData, setUserData] = useState({
    name: 'Abdullah',
    email: 'abdullah@example.com',
    licenseNumber: 'DL123456',
    phoneNumber: '+90 555 123 4567',
    experience: '5 yıl',
    preferredVehicle: 'Kamyon'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Profil güncelleme işlemleri
  };

  return (
    <motion.div 
      className={`profile-container ${darkMode ? 'dark' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="profile-header">
        <motion.div 
          className="profile-avatar"
          whileHover={{ scale: 1.05 }}
        >
          <img src={`https://ui-avatars.com/api/?name=${userData.name}&background=random`} alt="Profile" />
        </motion.div>
        <h1>{userData.name}</h1>
      </div>

      <motion.div 
        className="profile-card"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-grid">
            <div className="form-group">
              <label>Ad Soyad</label>
              <input
                type="text"
                value={userData.name}
                onChange={(e) => setUserData({...userData, name: e.target.value})}
                disabled={!isEditing}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={userData.email}
                onChange={(e) => setUserData({...userData, email: e.target.value})}
                disabled={!isEditing}
              />
            </div>

            <div className="form-group">
              <label>Ehliyet Numarası</label>
              <input
                type="text"
                value={userData.licenseNumber}
                onChange={(e) => setUserData({...userData, licenseNumber: e.target.value})}
                disabled={!isEditing}
              />
            </div>

            <div className="form-group">
              <label>Telefon</label>
              <input
                type="tel"
                value={userData.phoneNumber}
                onChange={(e) => setUserData({...userData, phoneNumber: e.target.value})}
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className="profile-actions">
            {isEditing ? (
              <>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="save-button"
                >
                  Kaydet
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="cancel-button"
                  onClick={() => setIsEditing(false)}
                >
                  İptal
                </motion.button>
              </>
            ) : (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="edit-button"
                onClick={() => setIsEditing(true)}
              >
                Düzenle
              </motion.button>
            )}
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Profile;